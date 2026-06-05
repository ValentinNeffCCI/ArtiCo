# Diagrammes du dossier CDA — Projet ArtiCo

Recueil des diagrammes (format **Mermaid**) couvrant tous les aspects du dossier
professionnel CDA, organisés selon les 3 blocs de compétences.

> **Comment les utiliser :**
> - Aperçu / export PNG-SVG : copier un bloc sur [mermaid.live](https://mermaid.live).
> - Dans VS Code : extension *Markdown Preview Mermaid Support*.
> - GitHub / GitLab rendent les blocs ` ```mermaid ` nativement.

## Sommaire

- **Bloc 2 — Concevoir**
  - [1. Diagramme de cas d'utilisation](#1-diagramme-de-cas-dutilisation)
  - [2. Architecture en couches](#2-architecture-en-couches)
  - [3. Modèle de données (MCD / entité-relation)](#3-modèle-de-données-mcd--entité-relation)
- **Bloc 1 — Développer**
  - [4. Séquence : authentification (login + refresh)](#4-séquence--authentification-login--refresh)
  - [5. Séquence : création d'entreprise (traversée des couches)](#5-séquence--création-dentreprise-traversée-des-couches)
  - [6. Séquence : soumission publique d'un formulaire](#6-séquence--soumission-publique-dun-formulaire)
  - [7. Pipeline de middlewares (cycle de vie d'une requête)](#7-pipeline-de-middlewares-cycle-de-vie-dune-requête)
- **Bloc 3 — Déployer**
  - [8. Architecture de déploiement (Docker)](#8-architecture-de-déploiement-docker)
  - [9. Pipeline de tests & démarrage conteneur](#9-pipeline-de-tests--démarrage-conteneur)
- **Gestion de projet**
  - [10. Planning (diagramme de Gantt)](#10-planning-diagramme-de-gantt)

---

## 1. Diagramme de cas d'utilisation

Acteurs et fonctionnalités principales de l'application.

```mermaid
flowchart LR
    Visiteur(["👤 Visiteur"])
    User(["👤 Utilisateur (Pro)"])
    Admin(["👤 Administrateur"])

    subgraph Application ArtiCo
        UC1["Consulter les entreprises"]
        UC2["Soumettre un formulaire"]
        UC3["S'inscrire / Se connecter"]
        UC4["Gérer ses entreprises (CRUD)"]
        UC5["Gérer ses formulaires & galeries"]
        UC6["Consulter les soumissions reçues"]
        UC7["Gérer les utilisateurs & accès"]
        UC8["Gérer les catégories"]
    end

    Visiteur --> UC1
    Visiteur --> UC2
    Visiteur --> UC3

    User --> UC1
    User --> UC4
    User --> UC5
    User --> UC6

    Admin --> UC7
    Admin --> UC8
    Admin --> UC4

    UC4 -. inclut .-> UC3
    UC5 -. inclut .-> UC3
```

> **À expliquer :** trois profils aux droits croissants. Le visiteur agit sans
> compte (consultation + soumission), l'utilisateur gère ses propres ressources
> (contrôle de propriété), l'administrateur a les droits transverses (rôle ADMIN).

---

## 2. Architecture en couches

Architecture multicouche de l'API : chaque couche a une responsabilité unique et
ne communique qu'avec la couche adjacente.

```mermaid
flowchart TD
    Client["🖥️ Front-end (React / Vite)"]

    subgraph API["API Express — architecture en couches"]
        direction TB
        R["Routers<br/><i>déclarent routes + middlewares</i>"]
        MW["Middlewares<br/><i>auth, validation, hachage, upload, accès</i>"]
        C["Controllers<br/><i>gèrent le HTTP (req/res, status)</i>"]
        S["Services<br/><i>logique métier</i>"]
        Repo["Repositories<br/><i>seul accès aux données</i>"]
        Res["Resources / DTO<br/><i>filtrent la sortie</i>"]
    end

    ORM["Prisma (ORM)<br/><i>requêtes paramétrées</i>"]
    DB[("🗄️ PostgreSQL")]

    Client -->|HTTP / JSON| R
    R --> MW --> C
    C --> S --> Repo --> ORM --> DB
    C -.formate via.-> Res
    Res -.réponse JSON.-> Client

    classDef layer fill:#e8f0fe,stroke:#4285f4,color:#000;
    class R,MW,C,S,Repo,Res layer;
```

> **À expliquer :** couplage faible + responsabilité unique. Le contrôleur ne sait
> rien de la base ; le repository ne sait rien du métier. On peut changer une
> couche sans impacter les autres → maintenabilité et testabilité.

---

## 3. Modèle de données (MCD / entité-relation)

Schéma relationnel issu de `schema.prisma`. Les cardinalités traduisent les
relations et `onDelete: Cascade` garantit l'intégrité référentielle.

```mermaid
erDiagram
    USER ||--o{ ENTREPRISE : "possède"
    CATEGORIE ||--o{ ENTREPRISE : "classe"
    ENTREPRISE ||--o{ GALERIE : "contient"
    ENTREPRISE ||--o{ FORMULAIRE : "propose"
    FORMULAIRE ||--o{ INPUT : "compose"
    FORMULAIRE ||--o{ SOUMISSION : "reçoit"
    INPUT ||--o{ OPTION : "offre"

    USER {
        int id PK
        string name UK
        string email UK
        string password "haché bcrypt"
        enum role "USER | ADMIN"
        boolean active
        string refresh_token "haché SHA-256"
        string reset_token "haché SHA-256"
        datetime createdAt
        datetime updatedAt
    }
    ENTREPRISE {
        int id PK
        string name
        string email
        string city
        string cp
        string address1
        string address2 "nullable"
        string phone "nullable"
        string description "nullable"
        string image "nullable"
        int ownerId FK
        int categorieId FK "nullable"
    }
    CATEGORIE {
        int id PK
        string name UK
    }
    FORMULAIRE {
        int id PK
        string name
        int entrepriseId FK
    }
    GALERIE {
        int id PK
        string path
        int entrepriseId FK
    }
    INPUT {
        int id PK
        string name
        string type
        boolean required
        int formulaireId FK
    }
    OPTION {
        int id PK
        string value
        int inputId FK
    }
    SOUMISSION {
        int id PK
        json content
        string email
        int formulaireId FK
        datetime createdAt
    }
```

> **À expliquer :** modèle normalisé (3NF), contraintes d'unicité (`email`, `name`),
> clés étrangères et suppressions en cascade pour garantir qu'aucune donnée
> orpheline ne subsiste (important pour l'intégrité **et** le droit à l'effacement
> RGPD).

---

## 4. Séquence : authentification (login + refresh)

Cycle complet du double jeton JWT (access 15 min / refresh 7 j) en cookies `httpOnly`.

```mermaid
sequenceDiagram
    autonumber
    actor U as Utilisateur
    participant C as Client
    participant API as API Express
    participant DB as PostgreSQL

    U->>C: email + mot de passe
    C->>API: POST /api/auth/login
    API->>DB: findByEmail
    DB-->>API: user (+ hash bcrypt)
    API->>API: bcrypt.compare
    alt Identifiants invalides
        API-->>C: 403 Identifiants incorrects
    else Valides
        API->>API: génère access (15m) + refresh (7j)
        API->>DB: stocke hash(refresh)
        API-->>C: Set-Cookie httpOnly (artico_token + refresh_token)
    end

    Note over C,API: ... 15 min plus tard, access expiré ...

    C->>API: requête protégée
    API-->>C: 401 Session expirée
    C->>API: GET /api/auth/refresh (cookie refresh_token)
    API->>DB: compare hash(refresh) reçu == stocké
    alt Refresh cohérent
        API-->>C: nouveau access token
    else Incohérent
        API-->>C: 401
    end
```

> **À expliquer :** access court = fenêtre d'exploitation réduite ; refresh stocké
> haché = révocable. `httpOnly` contre XSS, `sameSite: Strict` contre CSRF.

---

## 5. Séquence : création d'entreprise (traversée des couches)

Cas métier complet montrant le passage par **toutes les couches** et le pipeline
de middlewares (chaîne réelle de `entreprise-router.js`).

```mermaid
sequenceDiagram
    autonumber
    actor U as Utilisateur connecté
    participant C as Client
    participant Auth as MW authenticated()
    participant Up as MW imageUploader (multer)
    participant Val as MW validate(schema)
    participant Ctrl as EntrepriseController
    participant Srv as EntrepriseService
    participant Repo as EntrepriseRepository
    participant DB as PostgreSQL

    C->>Auth: POST /api/entreprise (cookie + form-data)
    Auth->>Auth: vérifie JWT + charge req.user
    alt Non authentifié
        Auth-->>C: 401
    else Authentifié
        Auth->>Up: next()
        Up->>Up: traite l'upload image (validation type/taille)
        Up->>Val: next()
        Val->>Val: valide les champs (express-validator)
        alt Données invalides
            Val-->>C: 400 + détail des erreurs
        else Valide
            Val->>Ctrl: next()
            Ctrl->>Srv: createEntreprise(data, req.user.id)
            Srv->>Repo: create(...)
            Repo->>DB: INSERT (requête paramétrée)
            DB-->>Repo: entreprise créée
            Repo-->>Srv: entité
            Srv-->>Ctrl: entité
            Ctrl-->>C: 201 + Resource (JSON filtré)
        end
    end
```

> **À expliquer :** la sécurité est posée *en amont* du contrôleur (auth →
> validation), donc une donnée non authentifiée ou malformée n'atteint jamais la
> logique métier. Chaque couche a un rôle unique.

---

## 6. Séquence : soumission publique d'un formulaire

Cas d'un **visiteur sans compte** (route `POST /api/submission` non authentifiée
mais validée).

```mermaid
sequenceDiagram
    autonumber
    actor V as Visiteur (anonyme)
    participant C as Client
    participant Val as MW validate(submissionSchema)
    participant Ctrl as SubmissionController
    participant Srv as SubmissionService
    participant Repo as SubmissionRepository
    participant DB as PostgreSQL

    V->>C: remplit le formulaire public
    C->>Val: POST /api/submission
    Val->>Val: valide contenu + email
    alt Invalide
        Val-->>C: 400
    else Valide
        Val->>Ctrl: next()
        Ctrl->>Srv: createSubmission(data)
        Srv->>Repo: create(...)
        Repo->>DB: INSERT soumission
        DB-->>Repo: ok
        Repo-->>Srv: soumission
        Srv-->>Ctrl: soumission
        Ctrl-->>C: 201 Créé
    end
```

> **À expliquer (et point RGPD) :** la soumission stocke des données d'un tiers
> (email + contenu). Pas d'authentification requise (formulaire public), mais
> validation stricte. Limite assumée : consentement et durée de conservation à
> ajouter.

---

## 7. Pipeline de middlewares (cycle de vie d'une requête)

Vue transversale : comment une requête traverse les middlewares globaux puis
spécifiques avant d'atteindre la logique, et comment les erreurs sont centralisées.

```mermaid
flowchart TD
    Req["Requête HTTP"] --> G1["express.json()"]
    G1 --> G2["cookieParser"]
    G2 --> G3["cors (origine restreinte)"]
    G3 --> G4["rateLimit (50/15min)"]
    G4 --> G5["helmet (en-têtes sécurité)"]
    G5 --> G6["logger (access.log)"]
    G6 --> RM{"Middlewares de route"}

    RM --> M1["authenticated()"]
    M1 --> M2["validate(schema)"]
    M2 --> M3["accès / upload / hachage"]
    M3 --> Ctrl["Controller → Service → Repository"]

    Ctrl -->|succès| Resp["Réponse JSON (Resource)"]
    M1 -->|échec| Err["error-middleware<br/>(error.log + réponse cohérente)"]
    M2 -->|échec| Err
    Ctrl -->|next(error)| Err
    Err --> Resp

    classDef global fill:#fff4e5,stroke:#f4a142,color:#000;
    classDef route fill:#e8f0fe,stroke:#4285f4,color:#000;
    class G1,G2,G3,G4,G5,G6 global;
    class M1,M2,M3 route;
```

> **À expliquer :** défense en profondeur (plusieurs barrières globales) +
> gestion d'erreur centralisée (un seul point de formatage/journalisation).

---

## 8. Architecture de déploiement (Docker)

Infrastructure conteneurisée : 3 services, 2 réseaux isolés, 1 volume persistant.

```mermaid
flowchart TB
    User["🌐 Navigateur"]

    subgraph Host["Hôte Docker"]
        subgraph net2["réseau client_server"]
            Client["📦 artico-client<br/>(Vite :5173 → host :5000)"]
            Backend["📦 artico-backend<br/>(Express :3000 → host :3000)"]
        end
        subgraph net1["réseau connectDB (isolé)"]
            Backend2["📦 artico-backend"]
            DB["📦 artico-db<br/>(PostgreSQL :5432)<br/>healthcheck pg_isready"]
        end
        Vol[("💾 postgres_datas<br/>volume persistant")]
    end

    User -->|:5000| Client
    Client -->|proxy /api → backend:3000| Backend
    Backend2 -->|requêtes SQL| DB
    DB --- Vol

    Backend -.même conteneur.- Backend2

    classDef container fill:#e8f5e9,stroke:#34a853,color:#000;
    class Client,Backend,Backend2,DB container;
```

> **À expliquer :** le `client` ne parle qu'au `backend` ; seul le `backend` est
> sur le réseau de la base (cloisonnement → moindre exposition). `depends_on:
> service_healthy` garantit que la base est prête avant le démarrage du backend.
> Le volume assure la persistance des données entre redémarrages.

---

## 9. Pipeline de tests & démarrage conteneur

Séquence d'initialisation du backend (entrypoint `dev.sh`) et place des tests.

```mermaid
flowchart LR
    subgraph CI["Qualité (local / CI)"]
        T1["npm test<br/>(150 tests Jest)"] --> T2{"Tous verts ?"}
        T2 -->|non| Stop["❌ Build bloqué"]
        T2 -->|oui| Build
    end

    subgraph Boot["Démarrage conteneur (dev.sh)"]
        Build["docker compose up --build"] --> P1["prisma generate"]
        P1 --> P2["prisma migrate deploy<br/>(applique les migrations)"]
        P2 --> P3["prisma db seed<br/>(non bloquant)"]
        P3 --> Run["node --watch index.js"]
        Run --> Ready["✅ Server running :3000"]
    end

    classDef ok fill:#e8f5e9,stroke:#34a853,color:#000;
    class Ready ok;
```

> **À expliquer :** `migrate deploy` (non-interactif) en conteneur vs `migrate dev`
> (local). Les tests unitaires servent de garde-fou de non-régression avant
> déploiement.

---

## 10. Planning (diagramme de Gantt)

Exemple de planning projet à adapter à tes dates réelles (le Gantt valorise la
compétence « contribuer à la gestion d'un projet »).

```mermaid
gantt
    title Planning projet ArtiCo
    dateFormat YYYY-MM-DD
    axisFormat %d/%m

    section Conception
    Analyse des besoins & maquettes   :done, c1, 2025-11-01, 10d
    Modélisation BDD (MCD/MLD)         :done, c2, after c1, 7d
    Architecture logicielle            :done, c3, after c2, 5d

    section Développement
    API - authentification & sécurité  :done, d1, 2025-11-25, 12d
    API - CRUD entreprises/formulaires :done, d2, after d1, 14d
    Front-end (React)                  :active, d3, after d1, 20d

    section Qualité & Sécurité
    Tests unitaires (Jest)             :active, q1, 2025-12-10, 14d
    Durcissement sécurité & RGPD       :q2, 2026-01-05, 10d

    section Déploiement
    Conteneurisation Docker            :done, dep1, 2025-12-01, 7d
    Mise en production                 :dep2, 2026-01-20, 7d
```

> ⚠️ Ajuste les dates à ton calendrier réel avant de l'intégrer au dossier.

---

## Récapitulatif — quel diagramme pour quel chapitre du dossier

| Chapitre du dossier | Diagramme(s) à inclure |
|---------------------|------------------------|
| Présentation fonctionnelle | 1 (cas d'utilisation) |
| Conception / architecture | 2 (couches), 8 (déploiement) |
| Base de données | 3 (entité-relation) |
| Réalisation / exemples de code | 4, 5, 6 (séquences), 7 (pipeline) |
| Sécurité | 4 (auth), 7 (middlewares) |
| Tests & déploiement | 9 (pipeline tests/boot), 8 (Docker) |
| Gestion de projet | 10 (Gantt) |

Ces diagrammes complètent les documents :
`securite-authentification-tokens.md` et `dossier-cda-api-securite.md`.
