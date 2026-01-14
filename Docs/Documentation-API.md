# Documentation API REST - Artico

-- URL de base : https://valentinneff.dev/api

-- Format : JSON

-- Authentification : JWT (JSON Web Token)

## Headers requis

### Pour toutes les requêtes :

```
Content-Type: application/json
```

### Authentification lors des requêtes:

#### Cookies : 
- **artico_token** : *access token* -> permet de s'authentifier lors des requêtes (durée de vie: 15 minutes)
- **refresh_token** : *refresh token* -> permet de rafraichir l'access token si celui-ci est expiré (durée de vie: 7 jours)

Les durées de vie des *access token* et *refresh token* sont définies dans le **.env** avec respectivement les variables **ACCESS_EXPIRACY** et **REFRESH_EXPIRACY**

### Pour les requêtes avec upload de fichier :

```
Content-Type: multipart/form-data
Authorization: Bearer {token}
```

## CORS

Le serveur doit autoriser les requêtes depuis le frontend React qui tourne sur `https://valentinneff.dev/`. (Défini dans le .env via la variable **FRONTEND_URL**)

- Configuration CORS requise :

-- Origin : `https://valentinneff.dev/`

-- Methods : `GET, POST, PUT, DELETE`

-- Headers : `Origin, X-Req`

  

## Authentification

  

L'API utilise des tokens JWT pour sécuriser les endpoints.

  

### Format du token JWT

Le token contient les informations suivantes :

```
{
"id": "1",
"expiration": 123456,
"role": "USER"
}
```

### Format des réponses

```
{
    id: 1,
    name: etc...
}
```

### Format des erreurs

```
{
    "status": 500,
    "error": "Message d'erreur"
}
```

**Durée de validité :** 15 minutes

  

### Utilisation du token

Le token est envoyé via les *cookies* avec la requête

  

### Renouvellement du token

Le token est renouvelé via l'appel de la route **/refresh**

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
|  **409**  | Conflict| Le serveur ne peut pas créer la ressource car l'un des champs primaires est déjà utilisé |

## Endpoints API

### Authentification

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|--------|------------------|---------------|-----------|
|  **POST**  |  `/api/auth/register`  |  `{ "name": "string", "email": "string", "password": "string" }`  |  `{ "id": number,  "role": string }`  | 201, 400, 409 | Inscription d’un utilisateur |
|  **POST**  |  `/api/auth/login`  |  `{ "email": "string", "password": "string" }`  |  `{ "id": number, "role": string }`  | 200, 401, 404 | Connexion d'un utilisateur |
|  **POST**  |  `/api/auth/reset-password`  |  `{ "password": "string", "token": "string" }`  |  | 200, 401, 404 | Réinitialisation du mot de passe |

---

### Gestion de l'entreprise

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|---------------|------------------|---------------|-----------|
|  **GET**  |  `/api/entreprise`  |  |  `[{ "id": number, "name": string, "adress1": string, "adress2": string, "cp": string, "city": string}]`  | 200 | Lister toutes les entreprise |
|  **GET**  |  `/api/entreprise/:id`  |  |  ` { "id": number, "name": string, "adress1": string, "adress2": string, "cp": string, "city": string, "description": text}`  | 200, 404 | Récupérer une entreprise spécifique |
|  **POST**  |  `/api/entreprise`  |  `{ "user_id": number, "name": string, "adress1": string, "adress2": string, "cp": string, "city": string, "description": text, "categorie_id": number }`  |  `{ "id": number, "name": string, "adress1": string, "adress2": string, "cp": string, "city": string, "description": text}`  | 201, 400, 401 | Créer une entreprise |
|  **PUT**  |  `/api/entreprise/:id`  |  `{ "id": id, "name": string, "adress1": string, "adress2": string, "cp": string, "city": string, description: text, "categorie_id": number}`  |  `{"id": id, "name": string, "adress1": string, "adress2": string, "cp": string, "city": string, description: text}`  | 200, 400, 401, 403, 404 | Modifier une entreprise |
|  **DELETE**  |  `/api/entreprise/:id`  |  |  | 200, 403, 404 | Supprimer une entreprise |
---

### Gestion des catégories

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|---------------|------------------|---------------|-----------|
|  **GET**  |  `/api/categorie`  |  |  `[ { "id": number, "name": string, "entreprise": [{ "id": number, "name": string}]}]`  | 200 | Lister toutes les catégories|
|  **GET**  |  `/api/categorie/:id`  |  |  `{ "id": id, "name": string, entreprise:[{"id": number, "name": string}]}`  | 200, 404 | Récupérer le détail d'une catégorie spécifique |
|  **POST**  |  `/api/categorie`  |  `{ "name": "string" }`  |  `{ "id": number, "name": string }`  | 201, 400, 403 | Créer une nouvelle catégorie |
|  **PUT**  |  `/api/categorie/:id`  |  `{ "name": string }`  |  `{ "id": id, "name": string }`  | 200, 400, 403, 404 | Modifier une catégorie |
|  **DELETE**  |  `/api/categorie/:id`  |  |  | 200, 403, 404 | Supprimer une catégorie |
---

### Gestion des questionaires

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/formulaire/entreprise/:entrepriseId`  |  | `[{"id": number,"name": string,}]` | 200, 404 | Lister toutes les formulaire d’une entreprise |
|  **GET**  |  `/api/formulaire/:id`  |  | `{ "id": id, "name": string, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}` | 200, 404 | Récupérer un questionnaire spécifique |
|  **POST**  |  `/api/formulaire`  | `{ "name": string, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}`|`{ "id": id, "name": string, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}`| 201, 401, 403, 400 | Créer un questionnaire |
|  **PUT**  |  `/api/formulaire/:id`  | `{ "id": id, "name": string, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}` | `{ "id": id, "name": string, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}` | 200, 400, 401, 403, 404 | Modifier un questionnaire |
|  **DELETE**  |  `/api/formulaire/:id`  |  |  | 200, 401, 403, 404 | Supprimer un questionnaire |
---

### Gestion des champs

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/input/formulaire/:formulaireId`  |  | `[{"id": number,"name": string,"type": string,"required": boolean, "options": [{ "id": number, "name": string, "value": string }]},]` | 200, 404 | Lister les champs d’un questionnaire |
|  **GET**  |  `/api/input/:id`  |  | `{ "id": id, "name": string, "type": string, "required": boolean, "options": [{ "id": number, "name": string, "value": string }]}` | 200, 404 | Récupérer un champ spécifique |
|  **POST**  |  `/api/input`  | `{ "questionnaire_id": number}`|`{ "id": id, "name": string, "type": string, "required": boolean}`| 201, 400, 401, 403 | Créer un champ |
|  **PUT**  |  `/api/input/:id`  | `{ "id": id, "name": string, "type": string, "required": boolean}` | `{ "id": id, "name": string, "type": string, "required": boolean}` | 200, 400, 401, 403, 404 | Modifier un champ |
|  **DELETE**  |  `/api/input/:id`  |  |  | 200, 401, 403, 404 | Supprimer un champ |
---

### Gestion des options

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/option/input/:inputId`  |  | `[{"id": number,"name": string,"value": string},]` | 200, 404 | Lister les options d’un champ |
|  **GET**  |  `/api/option/:id`  |  | `{ "id": id, "name": string, "value": string}` | 200, 404 | Récupérer une option spécifique |
|  **POST**  |  `/api/option`  | `{ "input_id": number}`|`{ "id": id, "name": string, "value": string}`| 201, 400, 401 | Créer une option |
|  **PUT**  |  `/api/option/:id`  | `{ "id": id, "name": string, "value": string}` | `{ "id": id, "name": string, "value": string}` | 200, 400, 401, 403, 404 | Modifier une option |
|  **DELETE**  |  `/api/option/:id`  |  |  | 200, 401, 403, 404 | Supprimer une option |
---

### Soumettre un formulaire 

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/soumission/formulaire/:formulaireId`  |  | `["id": id, "questionnaire_id": number, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}]`| 200, 404 | Lister les soumissions d'un formulaire |
|  **GET**  |  `/api/soumission/:soumissionId`  |  | `{ "id": id, "questionnaire_id": number, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}`| 200, 404 | Récupérer une soumission spécifique |
|  **POST**  |  `/api/soumission`  | `{"questionnaire_id": number, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}`|`{ "id": id, "questionnaire_id": number, "inputs": [{ "id": number, "name": string, "type": string, "required": boolean, "description": string, "options": [{ "id": number, "name": string, "value": string }]}}`| 201, 400 | Soumettre un formulaire |

### Profil

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/user/me`  |  |  `{ "name": string, "email": string}`  | 200, 403, 404 | Obtenir les informations de l'utilisateur connecté |
|  **PUT**  |  `/api/user/:id`  |  `{ "name": string, "email": string}`  |  | 204, 403, 404 | Mettre à jour les données de l'utilisateur connecté |
|  **DELETE**  |  `/api/user/:id`  |  |  | 204, 403, 404 | Supprimer le compte de l'utilisateur connecté |
---

### Panel Admin

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/user`  |  |  `[{ "id": number "name": string, "email": string, "is_active": boolean}]`  | 200, 403 | Obtenir la liste de tous les utilisateurs |
|  **GET**  |  `/api/user/:id`  |  `{ "id": number, "name": string, "email": string, "is_active": boolean}`  |  | 204, 403, 404 | Obtenir les informations d'un utilisateur en particulier |
|  **PUT**  |  `/api/user/:id`  | `{active: boolean}` |  | 204, 403, 404 | Activer ou désactiver un utilisateur |
|  **DELETE**  |  `/api/user/:id`  |  |  | 204, 403, 404 | Supprimer le compte d'un utilisateur |
  
### Galerie

| Verbe | Endpoint | Request Body | Réponse attendue | Codes Status | Fonction |
|--------|-----------|------------------|------------------|---------------|-----------|
|  **GET**  |  `/api/galerie/entreprise/:entrepriseId`  | `[{"id": number, "path": string}]` |  | 200 | Afficher les photos d'une entreprise |
|  **POST**  |  `/api/galerie/entreprise/entrepriseId`  | `{"photo": file}` |  `[{ "id": number "path": string}]`  | 201, 403 | Ajouter une photo à la galerie de l'entreprise |
|  **DELETE**  |  `/api/galerie/:id`  |  |  | 204, 403, 404 | Supprimer une photo |

## Liste des routes publiques

**POST** : /api/auth/register

**POST** : /api/auth/login

**POST** : /api/auth/reset-password

**GET** : /api/entreprise

**GET** : /api/entreprise/:id

**GET** : /api/formulaire/entreprise/:projectId

**GET** : /api/formulaire/:id

**GET** : /api/categorie

  

## Liste des routes privées

  

**GET** : /api/user/entreprise/:userId

**POST** : /api/entreprise

**PUT** : /api/entreprise/:id

**DELETE** : /api/entreprise/:id

**POST** : /api/formulaire/entreprise/:projectId

**PUT** : /api/formulaire/:id

**DELETE** : /api/formulaire/:id

## Liste des routes avec vérification de propriété

### Nécessite d'être le créateur


**PUT** : /api/entreprise/:id

**DELETE** : /api/entreprise/:id

**POST** : /api/galerie/entreprise

**DELETE** : /api/galerie/entreprise/:imageId

  

**PUT** : /api/formulaire/:id

**DELETE** : /api/formulaire/:id

**PUT** : /api/user/:id

**DELETE** : /api/user/:id


### Nécessite d'être administrateur

**PUT** : /api/user/:id

**POST** : /api/categorie

**PUT** : /api/categorie

**DELETE** : /api/categorie/:id

### Nécessite de passer un reset-token

**PUT** : /api/auth/user/:id

## Informations complémentaires

**Version : 1.0.0**

**Date : 15.01.2026**