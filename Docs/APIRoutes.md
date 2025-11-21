
# Spécifications API REST
-- URL de base : http://valentin.neff.servd16161.odns.fr/api
-- Format : JSON
-- Authentification : JWT (JSON Web Token)
## Headers requis

### Pour toutes les requêtes :

```
Content-Type: application/json
```

### Pour les routes protégées :
```
Authorization: Bearer {token}
```
### Pour les requêtes avec upload de fichier :
```
Content-Type: multipart/form-data
Authorization: Bearer {token}
```
## CORS

Le serveur doit autoriser les requêtes depuis le frontend React qui tourne sur  `https://www.valentinneff.dev`.

- Configuration CORS requise : 
-- Origin :  `https://www.valentinneff.dev`  
-- Methods :  `GET, POST, PUT, DELETE, OPTIONS, `  
-- Headers :  `Origin, X-Req`

## Authentification

L'API utilise des tokens JWT pour sécuriser les endpoints.

### Format du token JWT
Le token contient les informations suivantes :
```
{
  "userId": "1",
  "expiration": 123456
}
```
**Durée de validité :** 2 heures

### Utilisation du token

Le token doit être inclus dans l'en-tête  `Authorization`  avec le préfixe  `Bearer`  :

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Renouvellement du token

Le token n'est pas renouvelable automatiquement ou Refresh token

## Codes HTTP
| Code | Statut | Quand l'utiliser |
|--|--|--|
| **200** | OK | Requête réussie |
| **201** | Created | Entité créée |
| **204** | No-Content| Requête réussie mais ne contient pas de données |
| **400** | Bad Request| Erreur dans la requête effectuée au serveur |
| **401** | Unauthorized| L'utilisateur doit être connecté pour effectuer la requête |
| **403** | Forbidden| L'utilisateur n'a pas accès à cette ressource |
| **404** | Not Found| La route ou la ressource demandée est introuvable |
| **409** | Conflict| Le serveur ne peut pas créer la ressource car l'un des champs primaire est déjà utilisé |

Code
Statut
Quand l'utiliser

**200**

OK

Requête réussie

## Endpoints API

### Authentification

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|---------------|------------------|---------------|-----------|
|  **POST**  |  `/api/auth/register`  |  `{ "username": "string", "email": "string", "password": "string" }`  |  `{ "id": number, "token": string }`  | 201, 400, 409 | Inscription d’un utilisateur |
|  **POST**  |  `/api/auth/login`  |  `{ "email": "string", "password": "string" }`  |  `{ "token": string, "id": number }`  | 200, 401, 404 | Connexion d'un utilisateur |
  
---

  

### Gestion de l'entreprise

  

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|---------------|------------------|---------------|-----------|
|  **GET**  |  `/api/entreprises`  |  |  `[ { "id": number, "name": string, "description": text, "owner_id": number } ]`  | 200 | Lister tous les entreprises |
|  **GET**  |  `/api/entreprises/:id`  |  |  `{ "id": id, "name": string, "description": text}{ "id": number, "name": string, "description": text, tasks:[Task]}`  | 200, 404 | Récupérer un entreprise spécifique |
|  **POST**  |  `/api/entreprises`  |  `{ "name": "string", "description": "string" }`  |  `{ "id": number, "name": string, "description": text, "owner_id": number }`  | 201, 400 | Créer un nouveau entreprise |
|  **PUT**  |  `/api/entreprises/:id`  |  `{ "name": string, "description": string }`  |  `{ "id": id, "name": string, "description": text }`  | 200, 400, 403, 404 | Modifier une entreprise |
|  **DELETE**  |  `/api/entreprises/:id`  |  |  | 200, 403, 404 | Supprimer une entreprise |
  
---

  

### Gestion des questionnaires

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/questionnaires/entreprise/:entrepriseId`  |  | `[ { "id": entrepriseId, "title": string, "status": enum("todo|in-progress|done"), "priority: "enum("low|medium|high"),"assigned_user_id": number }, "description":text ]` | 200, 404 | Lister toutes les questionnairess d’une entreprise |
|  **GET**  |  `/api/questionnaires/:id`  |  | `{ "id": id, "title": string, "description": text, "status": enum("todo|in-progress|done"), "priority": enum("low|medium|high"), "assigned_user_id": number }` | 200, 404 | Récupérer un questionnaire spécifique |
|  **POST**  |  `/api/questionnaires/entreprises/:entrepriseId`  | `{ "title": string, "description": string, "status": enum("todo|in-progress|done"), "priority": enum("low|medium|high"), "assigned_user_id": number|null }` | `{"id": number, "title": string, "description": string, "status": enum("todo|in-progress|done"), "priority": enum("low|medium|high"), "assigned_user_id": number|null }` | 201, 400 | Créer un questionnaire pour une entreprise |
|  **PUT**  |  `/api/questionnaires/:id`  | `{ "title": string, "description": string, "status": enum("todo|in-progress|done"), "priority": enum("low|medium|high"), "assigned_user_id": number|null }` | `{"id": id, "title": string, "description": string, "status": enum("todo|in-progress|done"), "priority": enum("low|medium|high"), "assigned_user_id": number|null }` | 200, 400, 403, 404 | Modifier un questionnaire |
|  **DELETE**  |  `/api/questionnaires/:id`  |  |  | 200, 403, 404 | Supprimer un questionnaire |

---

### Profil

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/users/me`  |  |  `{ "username": string, "email": string}`  | 200, 403, 404 | Obtenir les informations de l'utilisateur connecté |
|  **PATCH**  |  `/api/users/me`  |  `{ "username": string, "email": string}`  |  | 204, 403, 404 | Mettre à jour les données de l'utilisateur connecté |
|  **DELETE**  |  `/api/users/me`  |  |  | 204, 403, 404 | Supprimer le compte de l'utilisateur connecté |
  
---

### Panel Admin

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/users`  |  |  `[{ "id": number "username": string, "email": string, "is_active": boolean}]`  | 200, 403 | Obtenir la liste de tous les utilisateurs |
|  **GET**  |  `/api/users/:id`  |  `{ "id": number, "username": string, "email": string, "is_active": boolean}`  |  | 204, 403, 404 | Obtenir les informations d'un utilisateur en particulier |
|  **DELETE**  |  `/api/users/me`  |  |  | 204, 403, 404 | Supprimer le compte de l'utilisateur connecté |


### Liste des routes publiques

**POST** : /api/auth/register
**POST** : /api/auth/login
**POST** : /api/auth/reset-password
**GET** : /api/entreprises
**GET** : /api/entreprises/:id
**GET** : /api/questionnaires/entreprises/:projectId
**GET** : /api/questionnaires/:id
**GET** : /api/categories

### Liste des routes privées

**GET** : /api/user/entreprises/:userId
**POST** : /api/entreprises
**PUT** : /api/entreprises/:id
**DELETE** : /api/entreprises/:id
**POST** : /api/questionnaires/entreprises/:projectId
**PUT** : /api/questionnaires/:id
**DELETE** : /api/questionnaires/:id

### Liste des routes avec vérification de propriété

-- Nécessite d'être le créateur

**PUT** : /api/entreprises/:id
**DELETE** : /api/entreprises/:id
**POST** : /api/galerie/entreprises
**DELETE** : /api/galerie/entreprises/:imageId

**PUT** : /api/questionnaires/:id
**DELETE** : /api/questionnaires/:id

**PATCH** : /api/users/me
**DELETE** : /api/users/me  

-- Nécessite d'être administrateur

**PATCH** : /api/users/ban/:id
**POST** : /api/categories
**PUT** : /api/categories
**DELETE** : /api/categories/:id

-- Nécessite de passer un reset-token

**PATCH** : /api/auth/user/:id