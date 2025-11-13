# API REST

## Endpoints API

### Authentification

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|---------------|------------------|---------------|-----------|
| **POST** | `/api/auth/register` | `{ "username": "string", "email": "string", "password": "string" }` | `{ "id": number, "token": string }` | 201, 400, 409 | Inscription d’un utilisateur |
| **POST** | `/api/auth/login` | `{ "email": "string", "password": "string" }` | `{ "token": string, "id": number }` | 200, 401, 404 | Connexion d'un utilisateur |

---

### Gestion de l'entreprise

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|---------------|------------------|---------------|-----------|
| **GET** | `/api/entreprises` |  | `[ { "id": number, "name": string, "description": text, "owner_id": number } ]` | 200 | Lister tous les entreprises |
| **GET** | `/api/entreprises/:id` |  | `{ "id": id, "name": string, "description": text}{ "id": number, "name": string, "description": text, tasks:[Task]}` | 200, 404 | Récupérer un entreprise spécifique |
| **POST** | `/api/entreprises` | `{ "name": "string", "description": "string" }` | `{ "id": number, "name": string, "description": text, "owner_id": number }` | 201, 400 | Créer un nouveau entreprise |
| **PUT** | `/api/entreprises/:id` | `{ "name": string, "description": string }` | `{ "id": id, "name": string, "description": text }` | 200, 400, 403, 404 | Modifier une entreprise |
| **DELETE** | `/api/entreprises/:id` |  |  | 200, 403, 404 | Supprimer une entreprise  |

---

### Gestion des questionnaires

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
| **GET** | `/api/questionnaires/entreprise/:entrepriseId` |  | `[ { "id": entrepriseId, "title": string, "status": enum("todo|in-progress|done"), "priority: "enum("low|medium|high"),"assigned_user_id": number }, "description":text ]` | 200, 404 | Lister toutes les questionnairess d’une entreprise |
| **GET** | `/api/questionnaires/:id` |  | `{ "id": id, "title": string, "description": text, "status": enum("todo|in-progress|done"), "priority": enum("low|medium|high"), "assigned_user_id": number }` | 200, 404 | Récupérer un questionnaire spécifique |
| **POST** | `/api/questionnaires/entreprises/:entrepriseId` | `{ "title": string, "description": string, "status": enum("todo|in-progress|done"), "priority": enum("low|medium|high"), "assigned_user_id": number|null }` | `{"id": number, "title": string, "description": string, "status": enum("todo|in-progress|done"), "priority": enum("low|medium|high"), "assigned_user_id": number|null }` | 201, 400 | Créer un questionnaire pour une entreprise |
| **PUT** | `/api/questionnaires/:id` | `{ "title": string, "description": string, "status": enum("todo|in-progress|done"), "priority": enum("low|medium|high"), "assigned_user_id": number|null }` | `{"id": id, "title": string, "description": string, "status": enum("todo|in-progress|done"), "priority": enum("low|medium|high"), "assigned_user_id": number|null }` | 200, 400, 403, 404 | Modifier un questionnaire |
| **DELETE** | `/api/questionnaires/:id` |  |  | 200, 403, 404 | Supprimer un questionnaire |

---

### Liste des routes publiques
**POST** : /api/auth/register
**POST** : /api/auth/login
**GET** : /api/entreprises
**GET** : /api/entreprises/:id
**GET** : /api/questionnaires/entreprises/:projectId
**GET** : /api/questionnaires/:id

### Liste des routes privées
**POST** : /api/entreprises
**PUT** : /api/entreprises/:id
**DELETE** : /api/entreprises/:id

**POST** : /api/questionnaires/entreprises/:projectId
**PUT** : /api/questionnaires/:id
**DELETE** : /api/questionnaires/:id

### Liste des routes avec vérification de propriété

#### Nécessite d'être le créateur
**PUT** : /api/entreprises/:id
**DELETE** : /api/entreprises/:id

**PUT** : /api/questionnaires/:id
**DELETE** : /api/questionnaires/:id

**PATCH** : /api/users/me
**DELETE** : /api/users/me

---
### Profil

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
| **GET** | `/api/users/me` |  | `{ "username": string, "email": string}` | 200, 403, 404 | Obtenir les informations de l'utilisateur connecté |
| **PATCH** | `/api/users/me` | `{ "username": string, "email": string}` |  | 204, 403, 404 | Mettre à jour les données de l'utilisateur connecté |
| **DELETE** | `/api/users/me` |  |  | 204, 403, 404 | Supprimer le compte de l'utilisateur connecté |
| **GET** | `/api/tasks?status=:statut` |  | `[ { "id": projectId, "title": string, "status": statut, "priority: enum("low|medium|high"),"assigned_user_id": number }, "description":text ]` | 204, 404 | Supprimer le compte de l'utilisateur connecté |
| **GET** | `/api/projects?owner=:ownerid` |  | `[ { "id": projectId, "title": string, "status": statut, "priority: enum("low|medium|high"),"assigned_user_id": number }, "description":text, "owner_id": ownerid ]` | 200, 404 | Supprimer le compte de l'utilisateur connecté |