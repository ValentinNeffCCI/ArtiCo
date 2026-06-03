# Architecture — ArtiCo

Schémas Mermaid de l'architecture du projet (vue d'ensemble, conteneurs, couches API, modèle de données, flux d'authentification).

---

## 0. Vue d'ensemble — routage Nginx

Nginx est le **point d'entrée unique**. Il reçoit toutes les requêtes et les dispatche :
- `/api/*` et `/uploads/*` → **reverse proxy** vers le backend Express ;
- tout le reste → **fichiers statiques du front** React (avec fallback SPA `index.html`).

Le tout tourne dans des conteneurs Docker reliés par des réseaux dédiés.

```mermaid
flowchart TB
    user(["👤 Navigateur"])

    subgraph docker["🐳 Docker (serveur)"]
        direction TB

        subgraph c_client["📦 artico-client"]
            nginx{"Nginx<br/>:80 / :443<br/>dispatch selon l'URL"}
            front["Build React (SPA)<br/>fichiers statiques"]
        end

        subgraph c_back["📦 artico-backend"]
            api["API Express<br/>:3000"]
            up[("/uploads<br/>fichiers")]
        end

        subgraph c_db["📦 artico-db"]
            db[("PostgreSQL 16")]
        end
    end

    user -->|HTTPS| nginx

    nginx -->|"/api/*"| api
    nginx -->|"/uploads/*"| api
    nginx -->|"tout le reste /*"| front

    api --> up
    api -->|Prisma / SQL| db

    nginx -. "réseau client_server" .- api
    api -. "réseau connectDB" .- db
```

---

## 1. Architecture de déploiement (production)

```mermaid
flowchart TB
    user(["👤 Navigateur"])

    subgraph host["🖥️ Serveur Docker"]
        subgraph net_cs["réseau client_server"]
            subgraph client["📦 artico-client"]
                nginx["Nginx<br/>:80 / :443 (TLS)<br/>sert le build React<br/>+ reverse proxy"]
            end
            subgraph backend["📦 artico-backend"]
                api["API Express<br/>:3000<br/>Node.js"]
            end
        end
        subgraph net_db["réseau connectDB"]
            db[("📦 artico-db<br/>PostgreSQL 16")]
            vol[("volume<br/>postgres_datas")]
        end
        uploads[("volume<br/>./uploads")]
        logs[("volume<br/>./logs")]
    end

    user -->|HTTPS| nginx
    nginx -->|"/api/* (proxy)"| api
    nginx -->|"/uploads/* (proxy)"| api
    nginx -->|"/* → index.html (SPA)"| nginx
    api -->|Prisma / SQL| db
    db --- vol
    api --- uploads
    api --- logs
    backend -.réseau connectDB.- db
```

> En **dev**, le conteneur `client` lance le serveur Vite (`:5173`) avec un proxy vers `backend:3000`, et la DB expose son port `5432` sur l'hôte. Le hot-reload est assuré par les volumes `./API` et `./Frontend` montés dans les conteneurs.

---

## 2. Architecture en couches de l'API (backend)

```mermaid
flowchart LR
    req["Requête HTTP"] --> mw

    subgraph express["Express — index.js"]
        mw["Middlewares globaux<br/>helmet · cors · cookieParser<br/>rateLimit · logger · express.json"]
        router["Routers<br/>auth · user · entreprise · formulaire<br/>categorie · galerie · input · option<br/>submission · admin"]
        guards["Middlewares de route<br/>authenticated · authorization<br/>fieldVerification · autoHashingPassword<br/>imageUploader · *-access"]
        ctrl["Controllers<br/>orchestration + réponse HTTP"]
        svc["Services<br/>logique métier + JWT/bcrypt"]
        repo["Repositories<br/>accès données"]
        err["errorMiddleware<br/>(gestion centralisée)"]
    end

    prisma["Prisma Client"]
    db[("PostgreSQL")]

    mw --> router --> guards --> ctrl --> svc --> repo --> prisma --> db
    ctrl -. next(err) .-> err
    guards -. next(err) .-> err
```

---

## 3. Modèle de données (Prisma / PostgreSQL)

```mermaid
erDiagram
    User ||--o{ Entreprise : "possède (owner)"
    Categorie ||--o{ Entreprise : "classe"
    Entreprise ||--o{ Galerie : "photos"
    Entreprise ||--o{ Formulaire : "a"
    Formulaire ||--o{ Input : "champs"
    Input ||--o{ Option : "choix"
    Formulaire ||--o{ Soumission : "réponses"

    User {
        int id PK
        string name UK
        string email UK
        string password
        enum role "ADMIN | USER"
        bool active
        string refresh_token
        string reset_token
    }
    Entreprise {
        int id PK
        string name
        string email
        string city
        string cp
        string address1
        string address2
        string phone
        string description
        string image
        int ownerId FK
        int categorieId FK
    }
    Categorie {
        int id PK
        string name UK
    }
    Formulaire {
        int id PK
        string name
        int entrepriseId FK
    }
    Galerie {
        int id PK
        string path
        int entrepriseId FK
    }
    Input {
        int id PK
        string name
        string type
        bool required
        int formulaireId FK
    }
    Option {
        int id PK
        string value
        int inputId FK
    }
    Soumission {
        int id PK
        json content
        string email
        int formulaireId FK
    }
```

---

## 4. Flux d'authentification (JWT par cookies)

```mermaid
sequenceDiagram
    actor U as Navigateur (React)
    participant N as Nginx
    participant A as API Express
    participant DB as PostgreSQL

    Note over U,DB: Connexion / Inscription / Reset
    U->>N: POST /api/auth/login (email, password)
    N->>A: proxy → /auth/login
    A->>DB: vérifie l'utilisateur
    DB-->>A: user
    A-->>U: 200 {id, role}<br/>Set-Cookie: artico_token + refresh_token (httpOnly)

    Note over U,DB: Requête protégée
    U->>A: GET /api/user/me (cookies inclus)
    A->>A: middleware authenticated() vérifie artico_token

    alt token valide
        A-->>U: 200 données
    else token expiré (401)
        U->>A: GET /api/auth/refresh (refresh_token)
        A->>DB: vérifie refresh_token
        alt refresh OK
            A-->>U: nouveau artico_token
            U->>A: rejoue la requête initiale
        else refresh KO
            A-->>U: 401 → logout() côté front
        end
    end
```

---

## 5. Frontend (SPA React + Vite)

```mermaid
flowchart TB
    main["main.jsx<br/>UserProvider (contexte d'auth)"] --> router["router.jsx<br/>createBrowserRouter"]

    router --> mainLayout["MainLayout<br/>(Header + routes visiteur/user)"]
    router --> adminLayout["AdminLayout<br/>+ ProtectedRoute role=ADMIN"]
    router --> login["/connexion → Login"]

    mainLayout --> pub["Pages publiques<br/>Accueil · Rechercher · DetailEntreprise<br/>ForgotPassword · PasswordRecovery · AnswerForm"]
    mainLayout --> protUser["ProtectedRoute role=USER|ADMIN<br/>Profile · ..."]
    adminLayout --> admin["Espace admin"]

    subgraph hooks["Hooks / accès API"]
        useAuth["useAuth (UserContext)<br/>user · loading · login · logout"]
        useAPI["useAPI<br/>fetch + refresh auto sur 401"]
        useForm["useForm"]
    end

    pub -.-> useAPI
    protUser -.-> useAuth
    useForm --> useAPI
    useAPI --> apiURL["VITE_API_URL → /api"]
```

---

> Le fichier se rend directement dans GitHub, GitLab, VS Code (aperçu Markdown) et tout viewer compatible Mermaid.
