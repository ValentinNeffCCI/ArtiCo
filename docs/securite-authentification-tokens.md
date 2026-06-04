# Authentification — Access Token & Refresh Token

Documentation des flux d'authentification de l'API ArtiCo, basée sur un système
de **double jeton (JWT)** transmis via des **cookies `httpOnly`**.

| Jeton | Cookie | Durée de vie | Clé de signature | Rôle |
|-------|--------|--------------|------------------|------|
| Access token | `artico_token` | **15 min** | `SECRET_KEY` | Authentifie chaque requête protégée |
| Refresh token | `refresh_token` | **7 jours** | `REFRESH_KEY` | Régénère un access token sans re-login |

**Options des cookies** (`httpOnly`, `sameSite: Strict`, `secure` en production) :
- `httpOnly` → inaccessible au JavaScript : protège contre le **vol de jeton par XSS**.
- `sameSite: Strict` → protège contre les attaques **CSRF**.
- `secure` → cookie transmis uniquement en **HTTPS** (en production).

---

## 1. Connexion (login)

L'utilisateur s'authentifie : le serveur émet les deux jetons et les persiste.

```mermaid
sequenceDiagram
    autonumber
    actor U as Utilisateur
    participant C as Client (navigateur)
    participant API as API Express
    participant DB as Base de données

    U->>C: Saisit email + mot de passe
    C->>API: POST /api/auth/login
    API->>DB: findByEmail(email)
    DB-->>API: Utilisateur (+ hash bcrypt)
    API->>API: bcrypt.compare(password, hash)

    alt Identifiants invalides ou compte inactif
        API-->>C: 403 Identifiants incorrects
    else Identifiants valides
        API->>API: Génère access token (SECRET_KEY, 15m)
        API->>API: Génère refresh token (REFRESH_KEY, 7d)
        API->>DB: update(user, { refresh_token })
        API-->>C: 200 + Set-Cookie artico_token (httpOnly)
        API-->>C: 200 + Set-Cookie refresh_token (httpOnly)
        Note over C: Les cookies sont stockés par le navigateur<br/>et renvoyés automatiquement
    end
```

---

## 2. Requête protégée avec access token valide

Cas nominal : l'access token n'est pas expiré.

```mermaid
sequenceDiagram
    autonumber
    participant C as Client (navigateur)
    participant MW as Middleware authenticated()
    participant API as Contrôleur protégé
    participant DB as Base de données

    C->>MW: GET /api/... (cookie artico_token)
    MW->>MW: jwt.verify(token, SECRET_KEY)

    alt Token absent ou invalide / expiré
        MW-->>C: 401 Session expirée / invalide
    else Token valide
        MW->>DB: findById(decoded.id)
        DB-->>MW: Utilisateur
        MW->>MW: Vérifie le rôle si superAuth (ADMIN)
        MW->>API: next() avec req.user
        API-->>C: 200 + données demandées
    end
```

---

## 3. Renouvellement (refresh) après expiration de l'access token

Quand l'access token est expiré (401), le client appelle `/refresh`.
Le refresh token est vérifié **et comparé à celui stocké en base** — ce qui
permet de **révoquer** une session.

```mermaid
sequenceDiagram
    autonumber
    participant C as Client (navigateur)
    participant API as API Express
    participant MW as refreshMiddleware
    participant DB as Base de données

    Note over C,API: L'access token a expiré → une requête a renvoyé 401

    C->>API: GET /api/auth/refresh (cookie refresh_token)
    API->>MW: refreshMiddleware
    MW->>MW: jwt.verify(refresh_token, REFRESH_KEY)

    alt Refresh token absent ou invalide
        MW-->>C: 401 Unauthorized
    else Refresh token valide
        MW->>API: next() avec req.user + req.token
        API->>DB: findById(user.id)
        DB-->>API: Utilisateur (+ refresh_token stocké)

        alt Refresh stocké ≠ refresh reçu
            API-->>C: 401 Session expirée
        else Refresh cohérent
            API->>API: Génère un nouvel access token (15m)
            API-->>C: 200 + Set-Cookie artico_token (httpOnly)
            Note over C: Le client peut rejouer la requête initiale
        end
    end
```

---

## 4. Cycle de vie complet (vue d'ensemble)

```mermaid
sequenceDiagram
    autonumber
    actor U as Utilisateur
    participant C as Client
    participant API as API Express
    participant DB as Base de données

    U->>C: Connexion
    C->>API: POST /api/auth/login
    API->>DB: Vérifie identifiants + stocke refresh
    API-->>C: artico_token (15m) + refresh_token (7d)

    loop Pendant 15 min
        C->>API: Requêtes avec artico_token
        API-->>C: 200 OK
    end

    Note over C,API: Access token expiré

    C->>API: Requête protégée
    API-->>C: 401 Session expirée
    C->>API: GET /api/auth/refresh (refresh_token)
    API->>DB: Compare refresh stocké == refresh reçu
    API-->>C: Nouveau artico_token (15m)

    Note over C,API: Le cycle reprend pendant 7 jours

    U->>C: Déconnexion
    C->>API: POST /api/auth/logout
    API-->>C: clearCookie artico_token + refresh_token
```

---

## Points de sécurité à retenir

- **Séparation des responsabilités** : l'access token (courte durée) limite la
  fenêtre d'exploitation en cas de vol ; le refresh token (longue durée) évite
  de redemander le mot de passe.
- **Révocation possible** : le refresh étant stocké en base, régénérer ou
  supprimer cette valeur (ex. au changement de mot de passe) invalide toutes les
  sessions existantes.
- **Aucun jeton accessible au JavaScript** grâce à `httpOnly`.
- **Signatures distinctes** (`SECRET_KEY` ≠ `REFRESH_KEY`) : compromettre une
  clé ne compromet pas l'autre type de jeton.
