# Documentation API REST - Artico

- **URL de base (prod)** : `https://valentinneff.dev/api`
- **URL de base (dev)** : `http://localhost:3000/api` (ou via le proxy Vite `/api`)
- **Format** : JSON (`application/json`)
- **Authentification** : JWT (JSON Web Token) transmis par cookies

---

## Headers requis

### Pour toutes les requêtes JSON

```
Content-Type: application/json
```

### Pour les requêtes avec upload de fichier (entreprise, galerie)

```
Content-Type: multipart/form-data
```

> L'authentification ne se fait **pas** via un header `Authorization`, mais via des **cookies** (voir ci-dessous). Les requêtes côté client doivent donc être envoyées avec `credentials: "include"`.

---

## Authentification

L'API sécurise les endpoints à l'aide de tokens JWT stockés dans des cookies `httpOnly`.

### Cookies

| Cookie | Rôle | Durée de vie |
|--|--|--|
| **artico_token** | *access token* — authentifie l'utilisateur sur les requêtes protégées | 15 min (`ACCESS_EXPIRACY`) |
| **refresh_token** | *refresh token* — permet de régénérer l'access token expiré | 7 jours (`REFRESH_EXPIRACY`) |

Les durées de vie sont configurables dans le `.env` via `ACCESS_EXPIRACY` et `REFRESH_EXPIRACY`.

### Contenu du token JWT (access)

```json
{
  "id": 1,
  "iat": 1700000000,
  "exp": 1700000900
}
```

### Renouvellement du token

L'access token est renouvelé via `GET /api/auth/refresh`, qui s'appuie sur le `refresh_token` présent en cookie et repose un nouveau `artico_token`.

### Rôles

Deux rôles existent (`EnumRole`) : `USER` (par défaut) et `ADMIN`. Certaines routes exigent le rôle `ADMIN`.

---

## CORS & sécurité

- **Origin autorisée** : valeur de `FRONTEND_URL` (`.env`). Ex. prod : `https://valentinneff.dev`, dev : `http://localhost:5000`.
- **Credentials** : `true` (cookies transmis).
- **Méthodes** : `GET, POST, PUT, DELETE`.
- **Helmet** activé (CSP, `Cross-Origin-Resource-Policy: cross-origin` pour servir les images).
- **Rate limiting** : 200 requêtes / 15 min par IP (les requêtes réussies ne sont pas comptabilisées).

---

## Format des réponses

### Succès

Objet JSON de la ressource, ex. :

```json
{
  "id": 1,
  "name": "Mon entreprise"
}
```

### Erreur

```json
{
  "status": 404,
  "error": "Message d'erreur"
}
```

> Les erreurs d'authentification renvoyées par le middleware peuvent prendre la forme `{ "error": "..." }` (sans champ `status` dans le corps, le statut étant porté par le code HTTP).

---

## Codes HTTP

| Code | Statut | Quand l'utiliser |
|--|--|--|
| **200** | OK | Requête réussie |
| **201** | Created | Entité créée |
| **204** | No Content | Requête réussie sans corps de réponse |
| **400** | Bad Request | Requête invalide (champ manquant, format incorrect…) |
| **401** | Unauthorized | L'utilisateur doit être connecté |
| **403** | Forbidden | L'utilisateur n'a pas accès à cette ressource |
| **404** | Not Found | Route ou ressource introuvable |
| **409** | Conflict | Un champ unique (nom, email…) est déjà utilisé |
| **429** | Too Many Requests | Limite de débit dépassée |
| **500** | Internal Server Error | Erreur serveur inattendue |

---

## Endpoints API

### Racine

| Verbe | Endpoint | Réponse | Codes | Fonction |
|--|--|--|--|--|
| **GET** | `/` | `{ "message": "Welcome to the ArtiCo API" }` | 200 | Point d'entrée / health check |
| **GET** | `/uploads/:fichier` | Fichier image (jpg, jpeg, png, gif, webp) | 200, 404 | Servir les images uploadées |

---

### Authentification — `/api/auth`

| Verbe | Endpoint | Request Body | Réponse | Codes | Fonction |
|--|--|--|--|--|--|
| **POST** | `/api/auth/register` | `{ "name": string, "email": string, "password": string }` | `{ "id": number, "role": string }` + cookies | 200, 400, 409 | Inscription d'un utilisateur |
| **POST** | `/api/auth/login` | `{ "email": string, "password": string }` | `{ "id": number, "role": string }` + cookies | 200, 400, 403, 404 | Connexion |
| **POST** | `/api/auth/forgot-password` | `{ "email": string }` | *(vide)* | 204, 400, 404, 500 | Envoi d'un email de réinitialisation |
| **POST** | `/api/auth/change-password` | `{ "password": string, "token": string }` | `{ "id": number, "role": string }` + cookies | 200, 400, 403, 404 | Réinitialisation du mot de passe via token |
| **GET** | `/api/auth/refresh` | *(refresh_token en cookie)* | `{ "token": string }` + cookie | 200, 400, 401 | Renouveler l'access token |
| **POST** | `/api/auth/logout` | | `{ "success": true, "message": string }` | 200, 401 | Déconnexion (efface les cookies) |

---

### Entreprises — `/api/entreprise`

> Création / modification en `multipart/form-data` (champ fichier optionnel `image`). Champs attendus : `name`, `email`, `city`, `cp`, `address1`, `categorieId` (+ optionnels `address2`, `phone`, `description`, `image`).

| Verbe | Endpoint | Request Body | Réponse | Codes | Fonction |
|--|--|--|--|--|--|
| **GET** | `/api/entreprise` | *(query optionnel `?categorieId=number`)* | `[{ "id", "name", "email", "city", "cp", "address1", "image", "categorie", "owner" }]` | 200 | Lister les entreprises (filtre par catégorie) |
| **GET** | `/api/entreprise/:id` | | `{ "id", "name", "email", "city", "cp", "address1", "address2", "phone", "description", "image", "owner", "categorie", "photos", "formulaires" }` | 200, 404 | Détail d'une entreprise |
| **GET** | `/api/entreprise/user/:id` | *(auth)* | `[{ … entreprises de l'utilisateur }]` | 200, 401, 404 | Lister les entreprises d'un utilisateur |
| **POST** | `/api/entreprise` | `multipart` : `{ name, email, city, cp, address1, address2?, phone?, description?, categorieId, image? }` | `{ … entreprise créée }` | 201, 400, 401 | Créer une entreprise |
| **PUT** | `/api/entreprise/:id` | `multipart` : mêmes champs | `{ … entreprise mise à jour }` | 200, 400, 401, 403, 404 | Modifier une entreprise *(propriétaire)* |
| **DELETE** | `/api/entreprise/:id` | *(auth)* | *(vide)* | 200, 401, 403, 404 | Supprimer une entreprise *(propriétaire)* |

---

### Catégories — `/api/categorie`

| Verbe | Endpoint | Request Body | Réponse | Codes | Fonction |
|--|--|--|--|--|--|
| **GET** | `/api/categorie` | | `[{ "id": number, "name": string }]` | 200 | Lister les catégories |
| **GET** | `/api/categorie/:id` | | `{ "id": number, "name": string, "entreprises": [{ … }] }` | 200, 404 | Détail d'une catégorie (avec ses entreprises) |
| **POST** | `/api/categorie` | `{ "name": string }` | `{ "id": number, "name": string }` | 201, 400, 401, 403 | Créer une catégorie *(admin)* |
| **PUT** | `/api/categorie/:id` | `{ "name": string }` | `{ "id": number, "name": string }` | 200, 400, 401, 403, 404 | Modifier une catégorie *(admin)* |
| **DELETE** | `/api/categorie/:id` | *(auth)* | *(vide)* | 200, 401, 403, 404 | Supprimer une catégorie *(admin)* |

---

### Questionnaires — `/api/formulaire`

| Verbe | Endpoint | Request Body | Réponse | Codes | Fonction |
|--|--|--|--|--|--|
| **GET** | `/api/formulaire` | | `[{ "id": number, "name": string, "entrepriseId": number }]` | 200 | Lister tous les questionnaires |
| **GET** | `/api/formulaire/:id` | | `{ "id", "name", "entrepriseId", "inputs": [{ "id", "name", "type", "required", "options": [{ "id", "value" }] }] }` | 200, 404 | Détail d'un questionnaire (avec champs et options) |
| **GET** | `/api/formulaire/entreprise/:id` | | `[{ "id": number, "name": string, "entrepriseId": number }]` | 200, 404 | Lister les questionnaires d'une entreprise |
| **POST** | `/api/formulaire` | `{ "name": string, "entrepriseId": number }` | `{ "id", "name", "entrepriseId" }` | 201, 400, 401, 403 | Créer un questionnaire *(propriétaire de l'entreprise)* |
| **PUT** | `/api/formulaire/:id` | `{ "name": string }` | `{ "id", "name", "entrepriseId" }` | 200, 400, 401, 403, 404 | Modifier un questionnaire *(propriétaire)* |
| **DELETE** | `/api/formulaire/:id` | *(auth)* | *(vide)* | 200, 401, 403, 404 | Supprimer un questionnaire *(propriétaire)* |

---

### Champs — `/api/input`

> ⚠️ La modification (`PUT`) n'est pas exposée actuellement. Les valeurs par défaut sont `name = "Nouveau champ"`, `type = "text"`, `required = true`.

| Verbe | Endpoint | Request Body | Réponse | Codes | Fonction |
|--|--|--|--|--|--|
| **GET** | `/api/input` | | `[{ "id", "name", "type", "required" }]` | 200 | Lister tous les champs |
| **GET** | `/api/input/:id` | | `{ "id", "name", "type", "required", "options": [{ "id", "value" }] }` | 200, 404 | Détail d'un champ |
| **GET** | `/api/input/formulaire/:id` | | `[{ "id", "name", "type", "required", "options": [...] }]` | 200, 404 | Lister les champs d'un questionnaire |
| **POST** | `/api/input` | `{ "formulaireId": number, "name"?: string, "type"?: string, "required"?: boolean }` | `{ "id", "name", "type", "required" }` | 201, 400, 401, 403 | Créer un champ *(propriétaire)* |
| **DELETE** | `/api/input/:id` | *(auth)* | *(vide)* | 200, 401, 403, 404 | Supprimer un champ *(propriétaire)* |

---

### Options — `/api/option`

> ⚠️ La modification (`PUT`) n'est pas exposée actuellement. Valeur par défaut `value = "Nouveau choix"`.

| Verbe | Endpoint | Request Body | Réponse | Codes | Fonction |
|--|--|--|--|--|--|
| **GET** | `/api/option/:id` | | `{ "id": number, "value": string }` | 200, 404 | Détail d'une option |
| **GET** | `/api/option/input/:id` | | `[{ "id": number, "value": string }]` | 200, 404 | Lister les options d'un champ |
| **POST** | `/api/option` | `{ "inputId": number, "value"?: string }` | `{ "id": number, "value": string }` | 201, 400, 401, 403 | Créer une option *(propriétaire)* |
| **DELETE** | `/api/option/:id` | *(auth)* | *(vide)* | 200, 401, 403, 404 | Supprimer une option *(propriétaire)* |

---

### Soumissions — `/api/submission`

> Le contenu (`content`) est un objet JSON libre (réponses au questionnaire).

| Verbe | Endpoint | Request Body | Réponse | Codes | Fonction |
|--|--|--|--|--|--|
| **GET** | `/api/submission` | *(auth)* | `[{ "id", "content", "submittedAt" }]` | 200, 401 | Lister toutes les soumissions |
| **GET** | `/api/submission/:id` | *(auth)* | `{ "id", "content", "submittedAt", "formulaire" }` | 200, 401, 404 | Détail d'une soumission |
| **GET** | `/api/submission/formulaire/:id` | *(auth)* | `[{ "id", "content", "submittedAt" }]` | 200, 401, 404 | Lister les soumissions d'un questionnaire |
| **POST** | `/api/submission` | `{ "formulaireId": number, "content": object, "email": string }` | `{ "id", "content", "submittedAt" }` | 201, 400, 404 | Soumettre un questionnaire *(public)* |
| **DELETE** | `/api/submission/:id` | *(auth)* | *(vide)* | 200, 401, 404 | Supprimer une soumission |

---

### Profil utilisateur — `/api/user`

> Resource utilisateur : `{ "id", "email", "name", "role", "active", "entreprises" }`.

| Verbe | Endpoint | Request Body | Réponse | Codes | Fonction |
|--|--|--|--|--|--|
| **GET** | `/api/user/me` | *(auth)* | `{ "id", "email", "name", "role", "active", "entreprises" }` | 200, 401, 404 | Infos de l'utilisateur connecté |
| **PUT** | `/api/user/:id` | `{ "name"?: string, "email"?: string, "password"?: string }` | *(vide)* | 204, 400, 401, 403, 404 | Mettre à jour son profil *(soi-même)* |
| **DELETE** | `/api/user/:id` | *(auth)* | *(vide)* | 204, 401, 403, 404 | Supprimer son compte *(soi-même)* |

---

### Administration — `/api/user` (admin) & `/api/admin`

> Toutes ces routes nécessitent le rôle **ADMIN**.

| Verbe | Endpoint | Request Body | Réponse | Codes | Fonction |
|--|--|--|--|--|--|
| **GET** | `/api/user` | | `[{ "id", "name", "email", "role", "active" }]` | 200, 401, 403 | Lister tous les utilisateurs |
| **GET** | `/api/user/:id` | | `{ "id", "name", "email", "role", "active" }` | 200, 401, 403, 404 | Détail d'un utilisateur |
| **PUT** | `/api/user/admin/:id` | `{ "active": boolean }` | *(vide)* | 200, 401, 403, 404 | Activer / désactiver un utilisateur |
| **GET** | `/api/user/admin` | | `[{ … utilisateurs avec accès }]` | 200, 401, 403 | Lister les utilisateurs (vue admin) |
| **GET** | `/api/admin/users` | | `[{ … utilisateurs }]` | 200, 401, 403 | Lister les utilisateurs (panel admin) |
| **GET** | `/api/admin/entreprises` | | `[{ … entreprises }]` | 200, 401, 403 | Lister toutes les entreprises (panel admin) |
| **PUT** | `/api/admin/user/:id` | `{ "active": boolean }` | *(vide)* | 200, 401, 403, 404 | Modifier l'accès d'un utilisateur |

---

### Galerie — `/api/galerie`

> Upload en `multipart/form-data` (champ fichier `photo`).

| Verbe | Endpoint | Request Body | Réponse | Codes | Fonction |
|--|--|--|--|--|--|
| **GET** | `/api/galerie/:id` | | `{ "id": number, "path": string }` | 200, 404 | Détail d'une photo |
| **GET** | `/api/galerie/entreprise/:id` | | `[{ "id": number, "path": string }]` | 200, 404 | Photos d'une entreprise |
| **POST** | `/api/galerie` | `multipart` : `{ "entrepriseId": number, "photo": file }` | `{ "id": number, "path": string }` | 201, 400, 401, 403 | Ajouter une photo *(propriétaire)* |
| **DELETE** | `/api/galerie/:id` | *(auth)* | *(vide)* | 200, 401, 403, 404 | Supprimer une photo *(propriétaire)* |

---

## Récapitulatif des accès

### Routes publiques (sans authentification)

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/forgot-password`
- `POST /api/auth/change-password`
- `GET  /api/auth/refresh`
- `GET  /api/entreprise` et `GET /api/entreprise/:id`
- `GET  /api/categorie` et `GET /api/categorie/:id`
- `GET  /api/formulaire`, `GET /api/formulaire/:id`, `GET /api/formulaire/entreprise/:id`
- `GET  /api/input`, `GET /api/input/:id`, `GET /api/input/formulaire/:id`
- `GET  /api/option/:id`, `GET /api/option/input/:id`
- `GET  /api/galerie/:id`, `GET /api/galerie/entreprise/:id`
- `POST /api/submission`
- `GET  /` et `GET /uploads/:fichier`

### Routes authentifiées (token requis)

- `POST /api/auth/logout`
- `GET  /api/user/me`
- `GET  /api/entreprise/user/:id`
- `POST /api/entreprise`, `PUT /api/entreprise/:id`, `DELETE /api/entreprise/:id`
- `POST /api/formulaire`, `PUT /api/formulaire/:id`, `DELETE /api/formulaire/:id`
- `POST /api/input`, `DELETE /api/input/:id`
- `POST /api/option`, `DELETE /api/option/:id`
- `POST /api/galerie`, `DELETE /api/galerie/:id`
- `GET/DELETE /api/submission*` (sauf `POST`)
- `PUT /api/user/:id`, `DELETE /api/user/:id`

### Vérification de propriété (doit être le créateur)

- `PUT` / `DELETE` `/api/entreprise/:id`
- `PUT` / `DELETE` `/api/formulaire/:id`
- `POST /api/formulaire`, `POST /api/input`, `POST /api/option` (propriétaire de l'entreprise rattachée)
- `POST` / `DELETE` `/api/galerie`
- `PUT` / `DELETE` `/api/user/:id` (soi-même)

### Réservé aux administrateurs (rôle ADMIN)

- `POST` / `PUT` / `DELETE` `/api/categorie`
- `GET /api/user`, `GET /api/user/:id`, `GET /api/user/admin`
- `PUT /api/user/admin/:id`
- `GET /api/admin/users`, `GET /api/admin/entreprises`, `PUT /api/admin/user/:id`

---

## Informations complémentaires

**Version : 1.1.0**

**Dernière mise à jour : 01.06.2026**
