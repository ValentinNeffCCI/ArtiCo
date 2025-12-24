
  

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

  

Le serveur doit autoriser les requêtes depuis le frontend React qui tourne sur `http://valentin.neff.servd16161.odns.fr/`.

  

- Configuration CORS requise :

-- Origin : `http://valentin.neff.servd16161.odns.fr/`

-- Methods : `GET, POST, PUT, DELETE, OPTIONS, `

-- Headers : `Origin, X-Req`

  

## Authentification

  

L'API utilise des tokens JWT pour sécuriser les endpoints.

  

### Format du token JWT

Le token contient les informations suivantes :

```
{
"userId": "1",
"expiration": 123456,
"role": "user"
}
```

### Format des réponses

```
{
    "status": "success",
    "code": 200,
    "data": {
        "id": 1,
        "name": "user"
    }
}
```

### Format des erreurs

```
{
    "status": "error",
    "message": "error message"
}
```

**Durée de validité :** 2 heures

  

### Utilisation du token

  

Le token doit être inclus dans l'en-tête `Authorization` avec le préfixe `Bearer` :

  

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

  

### Renouvellement du token

  

Le token n'est pas renouvelable automatiquement ou Refresh token

  

## Codes HTTP

| Code | Statut | Quand l'utiliser |
|--|--|--|
|  **200**  | OK | Requête réussie |
|  **201**  | Created | Entité créée |
|  **204**  | No-Content| Requête réussie mais ne contient pas de données |
|  **400**  | Bad Request| Erreur dans la requête effectuée au serveur |
|  **401**  | Unauthorized| L'utilisateur doit être connecté pour effectuer la requête |
|  **403**  | Forbidden| L'utilisateur n'a pas accès à cette ressource |
|  **404**  | Not Found| La route ou la ressource demandée est introuvable |
|  **409**  | Conflict| Le serveur ne peut pas créer la ressource car l'un des champs primaire est déjà utilisé |

## Endpoints API

### Authentification

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|--------|------------------|---------------|-----------|
|  **POST**  |  `/api/auth/register`  |  `{ "name": "string", "email": "string", "password": "string" }`  |  `{ "id": number, "token": string, "role": string, "name": string }`  | 201, 400, 409 | Inscription d’un utilisateur |
|  **POST**  |  `/api/auth/login`  |  `{ "email": "string", "password": "string" }`  |  `{ "id": number, "token": string, "role": string, "name": string }`  | 200, 401, 404 | Connexion d'un utilisateur |
|  **POST**  |  `/api/auth/reset-password`  |  `{ "password": "string", "token": "string" }`  |  | 200, 401, 404 | Réinitialisation du mot de passe |

---

### Gestion de l'entreprise

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|---------------|------------------|---------------|-----------|
|  **GET**  |  `/api/entreprises`  |  |  `[{ "id": number, "name": string, "adress1": string, "adress2": string, "cp": string, "city": string}]`  | 200 | Lister toutes les entreprises |
|  **GET**  |  `/api/entreprises/:id`  |  |  ` { "id": number, "name": string, "adress1": string, "adress2": string, "cp": string, "city": string, "description": text}`  | 200, 404 | Récupérer une entreprise spécifique |
|  **POST**  |  `/api/entreprises`  |  `{ "user_id": number, "name": string, "adress1": string, "adress2": string, "cp": string, "city": string, "description": text, "categorie_id": number }`  |  `{ "id": number, "name": string, "adress1": string, "adress2": string, "cp": string, "city": string, "description": text}`  | 201, 400 | Créer une entreprise |
|  **PUT**  |  `/api/entreprises/:id`  |  `{ "id": id, "name": string, "adress1": string, "adress2": string, "cp": string, "city": string, description: text, "categorie_id": number}`  |  `{"id": id, "name": string, "adress1": string, "adress2": string, "cp": string, "city": string, description: text}`  | 200, 400, 403, 404 | Modifier une entreprise |
|  **DELETE**  |  `/api/entreprises/:id`  |  |  | 200, 403, 404 | Supprimer une entreprise |
---

### Gestion des catégories

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|---------------|------------------|---------------|-----------|
|  **GET**  |  `/api/categories`  |  |  `[ { "id": number, "name": string, "entreprises": [{ "id": number, "name": string}]}]`  | 200 | Lister toutes les catégories|
|  **GET**  |  `/api/categories/:id`  |  |  `{ "id": id, "name": string, entreprises:[{"id": number, "name": string}]}`  | 200, 404 | Récupérer un catégorie spécifique |
|  **POST**  |  `/api/categories`  |  `{ "name": "string" }`  |  `{ "id": number, "name": string }`  | 201, 400 | Créer un nouveau catégorie |
|  **PUT**  |  `/api/categories/:id`  |  `{ "name": string }`  |  `{ "id": id, "name": string }`  | 200, 400, 403, 404 | Modifier une catégorie |
|  **DELETE**  |  `/api/categories/:id`  |  |  | 200, 403, 404 | Supprimer une catégorie |
---

### Gestion des questionnaires

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/questionnaires/entreprise/:entrepriseId`  |  | `[{"id": number,"name": string,}]` | 200, 404 | Lister toutes les questionnaires d’une entreprise |
|  **GET**  |  `/api/questionnaires/:id`  |  | `{ "id": id, "name": string, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}` | 200, 404 | Récupérer un questionnaire spécifique |
|  **POST**  |  `/api/questionnaires`  | `{ "name": string, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}`|`{ "id": id, "name": string, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}`| 201, 400 | Créer un questionnaire |
|  **PUT**  |  `/api/questionnaires/:id`  | `{ "id": id, "name": string, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}` | `{ "id": id, "name": string, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}` | 200, 400, 403, 404 | Modifier un questionnaire |
|  **DELETE**  |  `/api/questionnaires/:id`  |  |  | 200, 403, 404 | Supprimer un questionnaire |
---

### Gestion des champs

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/inputs/questionnaire/:questionnaireId`  |  | `[{"id": number,"name": string,"type": string,"required": boolean, "options": [{ "id": number, "name": string, "value": string }]},]` | 200, 404 | Lister les champs d’un questionnaire |
|  **GET**  |  `/api/inputs/:id`  |  | `{ "id": id, "name": string, "type": string, "required": boolean, "options": [{ "id": number, "name": string, "value": string }]}` | 200, 404 | Récupérer un champ spécifique |
|  **POST**  |  `/api/inputs`  | `{ "questionnaire_id": number}`|`{ "id": id, "name": string, "type": string, "required": boolean}`| 201, 400 | Créer un champ |
|  **PUT**  |  `/api/inputs/:id`  | `{ "id": id, "name": string, "type": string, "required": boolean}` | `{ "id": id, "name": string, "type": string, "required": boolean}` | 200, 400, 403, 404 | Modifier un champ |
|  **DELETE**  |  `/api/inputs/:id`  |  |  | 200, 403, 404 | Supprimer un champ |
---

### Gestion des options

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/options/input/:inputId`  |  | `[{"id": number,"name": string,"value": string},]` | 200, 404 | Lister les options d’un champ |
|  **GET**  |  `/api/options/:id`  |  | `{ "id": id, "name": string, "value": string}` | 200, 404 | Récupérer une option spécifique |
|  **POST**  |  `/api/options`  | `{ "input_id": number}`|`{ "id": id, "name": string, "value": string}`| 201, 400 | Créer une option |
|  **PUT**  |  `/api/options/:id`  | `{ "id": id, "name": string, "value": string}` | `{ "id": id, "name": string, "value": string}` | 200, 400, 403, 404 | Modifier une option |
|  **DELETE**  |  `/api/options/:id`  |  |  | 200, 403, 404 | Supprimer une option |
---

### Soumettre un formulaire 

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/soumissions/formulaire/:formulaireId`  |  | `["id": id, "questionnaire_id": number, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}]`| 200, 404 | Lister les soumissions d'un formulaire d’une entreprise |
|  **GET**  |  `/api/soumissions/:soumissionId`  |  | `{ "id": id, "questionnaire_id": number, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}`| 200, 404 | Récupérer une soumission spécifique |
|  **POST**  |  `/api/soumissions`  | `{"questionnaire_id": number, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}`|`{ "id": id, "questionnaire_id": number, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}`| 201, 400 | Soumettre un formulaire |

### Profil

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/users/me`  |  |  `{ "name": string, "email": string}`  | 200, 403, 404 | Obtenir les informations de l'utilisateur connecté |
|  **PATCH**  |  `/api/users/me`  |  `{ "name": string, "email": string}`  |  | 204, 403, 404 | Mettre à jour les données de l'utilisateur connecté |
|  **DELETE**  |  `/api/users/me`  |  |  | 204, 403, 404 | Supprimer le compte de l'utilisateur connecté |
---

### Panel Admin

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/users`  |  |  `[{ "id": number "name": string, "email": string, "is_active": boolean}]`  | 200, 403 | Obtenir la liste de tous les utilisateurs |
|  **GET**  |  `/api/users/:id`  |  `{ "id": number, "name": string, "email": string, "is_active": boolean}`  |  | 204, 403, 404 | Obtenir les informations d'un utilisateur en particulier |
|  **PATCH**  |  `/api/users/:id`  | `{active: boolean}` |  | 204, 403, 404 | Activer ou désactiver un utilisateur |
|  **DELETE**  |  `/api/users/:id`  |  |  | 204, 403, 404 | Supprimer le compte d'un utilisateur |
  
### Galerie

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/galeries/entreprise/:entrepriseId`  | `[{"idGalerie": number, "path": string}]` |  | 200 | Afficher les photos d'une entreprise |
|  **POST**  |  `/api/galeries/entreprise/entrepriseId`  | `{"photos": file[]}` |  `[{ "id": number "path": string}]`  | 201, 403 | Ajouter une photo à la galerie de l'entreprise |
|  **DELETE**  |  `/api/galerie/:id`  |  |  | 204, 403, 404 | Supprimer une photo |

## Liste des routes publiques

**POST** : /api/auth/register

**POST** : /api/auth/login

**POST** : /api/auth/reset-password

**GET** : /api/entreprises

**GET** : /api/entreprises/:id

**GET** : /api/questionnaires/entreprises/:projectId

**GET** : /api/questionnaires/:id

**GET** : /api/categories

  

## Liste des routes privées

  

**GET** : /api/user/entreprises/:userId

**POST** : /api/entreprises

**PUT** : /api/entreprises/:id

**DELETE** : /api/entreprises/:id

**POST** : /api/questionnaires/entreprises/:projectId

**PUT** : /api/questionnaires/:id

**DELETE** : /api/questionnaires/:id

## Liste des routes avec vérification de propriété

  
Nécessite d'être le créateur
---

**PUT** : /api/entreprises/:id

**DELETE** : /api/entreprises/:id

**POST** : /api/galerie/entreprises

**DELETE** : /api/galerie/entreprises/:imageId

  

**PUT** : /api/questionnaires/:id

**DELETE** : /api/questionnaires/:id

  

**PATCH** : /api/users/me

**DELETE** : /api/users/me

  

Nécessite d'être administrateur
--- 

**PATCH** : /api/users/ban/:id

**POST** : /api/categories

**PUT** : /api/categories

**DELETE** : /api/categories/:id

Nécessite de passer un reset-token
--- 

**PATCH** : /api/auth/user/:id

### Informations complémentaires

**Version : 1.0.0**

**Date : 30.11.2025**