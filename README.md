# ArtiCo

## Sommaire

- [Présentation](#présentation)
- [Frontend](#frontend)
- - [Avant de lancer le projet en local](#avant-de-lancer-le-projet-en-local)
- - [Lancer le projet](#lancer-le-projet)
- [Informations complémentaires](#informations-complémentaires)
- - [Librairies tierces utilisées](#librairies-tierces-utilisées)

## Présentation

ArtiCo est une application web single page permettant à une entreprise de s'enregistrer, de mettre ses réalisations en avant et de proposer des questionnaires à ses clients. Cette application est développée en React pour le frontend et le backend en NodeJS arrivera sous peu.

## Frontend
### Avant de lancer le projet en local

- créer un fichier .env dans le dossier ``Frontend`` avec comme contenu :

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

### Lancer le projet
- Il va falloir lancer **2 commandes en simultanées** afin d'avoir la simulation des données et l'accès à toutes les pages du frontend
```
npm run api
```
```
npm run dev
```

## Informations complémentaires
### Librairies tierces utilisées

- **Toastify** : Librairie qui va nous permettre de générer des alertes sous forme de toasts
- **react-router-dom** : Librairie qui va nous permettre de gérer le routing de l'application
- **Lucide** : Librairie qui va nous permettre d'avoir des icônes
- **json-server** : Librairie qui va nous permettre de simuler un backend
- **sass** : Librairie qui va nous permettre de faciliter la génération du style de l'application
