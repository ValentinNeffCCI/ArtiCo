# ArtiCo

## Sommaire

- [Présentation](#présentation)
- [Frontend](#frontend)
- [API](#backend-api)
- [Informations complémentaires](#informations-complémentaires)
- - [Librairies tierces utilisées](#librairies-tierces-utilisées)

## Requis
- NodeJS / npm
- docker 

## Présentation

ArtiCo est une application web single page permettant à une entreprise de s'enregistrer, de mettre ses réalisations en avant et de proposer des questionnaires à ses clients. Cette application est développée en React pour le frontend et le backend en NodeJS arrivera sous peu.

## Frontend
### Avant de lancer le projet en local

- créer un fichier **.env** dans le dossier ``Frontend/`` avec comme contenu :

```
VITE_API_URL="http://127.0.0.1:3000"
VITE_ENV_MODE="demo"
```

- puis lancer les commandes suivantes :

```
cd Frontend 
```

```
npm install 
```

### Lancer le projet (Frontend)
```
npm run dev
```

## Backend (API)
### Avant de lancer le projet

Créez un fichier **.env** dans le dossier ``API/``

Avec les différentes variables suivantes:
```
DB_PASSWORD="PASSWORD" // Mot de passe utilisé pour la DB
DB_USER="USER" // Nom d'utilisateur utilisé pour accéder à la DB
DB_NAME="DATABASE" // Nom de la base de données à créer
DB_PORT=5432 // Port sur lequel la base données va être exposée
DB_HOST="db" // nom de l'hôte via docker

DATABASE_URL="postgresql://USER:PASSWORD@db:5432/DATABASE"

PORT=3000 // PORT de l'API

OWNER_EMAIL="myemail@mail.com" // adresse email de l'application
OWNER_NAME="Propriétaire" // Nom du Propriétaire
OWNER_PASSWORD="PASSWORD" // Mot de passe pour le seed

APP_EMAIL="artico@mail.com"

SECRET_KEY="SECRET_KEY" // clé pour générer les access_token
REFRESH_KEY="REFRESH_KEY" // clé pour générer les refresh_token
RESET_KEY="RESET_KEY" // clé pour générer les reset_token

ACCESS_EXPIRACY="15m" // durée de vie de l'access token
REFRESH_EXPIRACY="7d" // durée de vie du refresh token

FRONTEND_URL="http://localhost:5173" // adresse ou tourne le frontend (cors)
GOOGLE_APP_PASSWORD="MAIL_APP_KEY_GOOGLE" // clé d'application pour l'envoi de mails via le smtp de gmail

NODE_ENV="dev" // environnement de dev

```

### Lancer l'API + la base de données
```
docker compose up
```

### Initialiser la Base de données
```
docker exec -it artico-db npx prisma migrate dev
docker exec -it artico-db npx prisma db seed
```

## Informations complémentaires
### Librairies tierces utilisées

#### Frontend

- **Toastify** : Librairie qui va nous permettre de générer des alertes sous forme de toasts
- **react-router-dom** : Librairie qui va nous permettre de gérer le routing de l'application
- **Lucide** : Librairie qui va nous permettre d'avoir des icônes
- **sass** : Librairie qui va nous permettre de faciliter la génération du style de l'application

#### Backend
- **express-rate-limit** : librairie qui permet de contrôler le nombre de requêtes entrantes
- **cookie-parser** : permet d'utiliser les cookies envoyés dans la requête