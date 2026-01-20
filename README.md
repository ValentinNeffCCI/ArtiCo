# Guide de déploiement de l'application Artico

## Sommaire

- [Introduction](#introduction)
- - [Prérequis Nécessaires](#prerequis-nécessaire)
- [Préparation du serveur](#préparation-du-serveur)
- - [Installer Make](#installer-make)
- - [Installer Node et npm](#installer-node-et-npm)
- - [Installer Docker](#installer-docker)
- [Lancer l'API et et la base de données](#lancer-lapi-et-et-la-base-de-données)
- [Mise en place de l'application React](#mise-en-place-de-lapplication-react)
- [Configuration Nginx](#configuration-nginx)
- - [Mise en place du serveur HTTP](#mise-en-place-du-serveur-http)
- - [Mettre en place le pare-feu](#mettre-en-place-le-pare-feu)
- - [Passer sur HTTPS](#passer-sur-https)
- [Test de l'application](#test-de-lapplication)
- [Potentielles erreurs fréquentes](#potentielles-erreurs-fréquentes)
- - [Chemin d'accès au build](#chemin-daccès-au-build)
- - [Erreur lors de la réception du certificat SSL](#erreur-lors-de-la-reception-du-certificat-ssl)
- - [Erreur lors du montage des containers](#erreur-lors-du-montage-des-containers-docker)
- - [Transmission des cookies](#transmission-des-cookies-a-lapi)
- [Maintenance](#maintenance)
- - [Mettre à jour l'application](#mettre-a-jour-lapplication)
- - [Renouvellement du certificat SSL](#rafraichir-le-certificat-ssl)


## Introduction

Artico est une application développé avec **React** pour la partie client et **NodeJS** pour la partie serveur (API). La base de données privilégiée pour ce projet est **PostgreSQL**.

L'objectif de cette application est de permettre à des artisans de renseigner leur(s) entreprise(s) et de proposer des questionnaires à des potentiels prospects / futurs clients. 

Au cours de ce guide vous trouverez toutes les étapes qui permettront de déployer votre application en ligne.

### Prérequis nécessaire

- **NodeJS** et **npm**
- **Docker**
- **Nginx**
- **Let's Encrypt**

## Préparation du serveur

Avant toute chose, veuillez mettre à jour les dépôts Linux :

```
sudo apt update
```

### Installer Make

```
sudo apt install make
```

### Installer Node et npm

```
sudo apt install nodejs
sudo apt install npm
```

Assurez-vous que les installations ce soient correctement déroulées.
Vous devriez avoir quelque chose ressemblant à cela :

```
user@ubuntu ~ node -v 
v25.3.0

user@ubuntu ~ npm -v
11.7.0
```
---
### Installer Docker

Si Docker n'est pas encore installer sur votre machine: [Installer Docker](https://docs.docker.com/engine/install/ubuntu/)

Vous pouvez vérifier que docker est bien installé
```
docker -v
```

Il ne reste plus qu'à permettre à docker de se lancer automatiquement au lancement du serveur
```
sudo systemctl enable docker
```

---

## Lancer l'API et et la base de données

Il faut se déplacer dans le dossier ``/API``.

```
cd API/
```

### Variables d'environnement

Afin de pouvoir monter nos containers et accéder à la base de données et à notre backend, il va falloir créer un fichier ``/API/.env`` avec les informations suivantes :
- **DB_PASSWORD** : Mot de passe de la base de données
- **DB_USER** : Nom d'utilisateur utilisé pour accéder à la DB
- **DB_NAME** : Nom de la base de données à créer
- **DB_PORT** : Port sur lequel la base données va être exposée
- **DB_HOST** : Nom de l'hôte via docker
- **DATABASE_URL** : URL de la base de données
- **PORT** : Port de l'API (par défaut 3000)
- **OWNER_EMAIL** : Adresse email de l'application
- **OWNER_NAME** : Nom du Propriétaire
- **OWNER_PASSWORD** : Mot de passe pour le seed
- **APP_EMAIL** : Email de l'application
- **SECRET_KEY** : Clé secrète pour la génération des access_token
- **REFRESH_KEY** : Clé secrète pour la génération des refresh_token
- **RESET_KEY** : Clé secrète pour la génération des reset_token
- **ACCESS_EXPIRACY** : Durée de vie de l'access_token
- **REFRESH_EXPIRACY** : Durée de vie du refresh_token
- **FRONTEND_URL** : URL du client
- **GOOGLE_APP_PASSWORD** : Clé d'application pour l'envoi de mails via le smtp de gmail
- **NODE_ENV** : Environnement ('production' pour le déploiement)

### Lancer les containers
Il faut alors lancer la commande suivante afin de démarrer les containers docker :

```
docker compose up -d --build
```

Pour vérifier le bon fonctionnement des containers entrez la commande 
```
docker ps
```

Vos 2 containers doivent être présents.

Afin de vérifier que l'API tourne bien, vous pouvez effectué la commande suivante

```
curl -L http://localhost:3000/api/categorie
```
vous devriez recevoir cette réponse : ``[]``

Il suffit de lancer la commande :

```
make start-app
```

Cette commande va :
- recréer les containers
- attendre 5 secondes pour s'assurer que les containers soient bien montés
- créer la base de données 
- créer le premier utilisateur

il ne reste plus qu'à retourner à la racine du projet

```
cd ..
```

## Mise en place de l'application React

Il faut se déplacer dans le dossier ``Frontend/``

```
cd Frontend/
```

### Variables d'environnement

Dans le fichier ``.env`` il faut ajouter la variable suivante :
- **VITE_API_URL** : URL de l'API


### Création du build

Lancez la commande :

```
make create-app
```

Cette commande :
- Crée le build de l'application dans le dossier ``dist``
- Copie le contenu du dossier ``dist`` dans le dossier ``/var/www/mondomaine`` (/var/www/artico dans notre cas)

---
### Configuration Nginx

```
sudo apt install nginx
```
#### Mise en place du serveur HTTP

Il va falloir : 
- Ecouter sur le **port 80** (HTTP)
- Définir le dossier ou se trouve notre Frontend
- Rediriger les requêtes commençant par "**/API**" et "**/uploads**" vers notre backend
- Retourner toutes les autres urls vers notre Frontend

Pour cela vous pouvez utiliser cette configuration dans le fichier ``/etc/nginx/sites-available/mondomaine``

```
server {
    listen 80;
    server_name mondomaine.fr www.mondomaine.fr;

    root /var/www/mondomaine;
    index index.html;

    location /uploads {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }


    location /uploads {
        proxy_pass http://localhost:3000;
    }
}
```

Sans oublier de créer le lien symbolique vers le dossier **sites-enabled** de nginx
```
ln -s /etc/nginx/sites-available/mondomaine /etc/nginx/sites-enabled/mondomaine
```

Puis il faut redémarrer le process **nginx**
```
sudo systemctl restart nginx
```

#### Mettre en place le pare-feu

Tout d'abord nous devons vérifier le statut du pare-feu pour voir si ce dernier est activé.

```
sudo ufw status
```
Ce dernier doit nous renvoyer quelque chose comme : 
```
Status: active

To                          Action         From
--                            ------          ----
443                       ALLOW       Anywhere
80                         ALLOW       Anywhere
22                         ALLOW       Anywhere
443 (v6)                ALLOW       Anywhere (v6)
80 (v6)                  ALLOW       Anywhere (v6)
22 (v6)                  ALLOW       Anywhere (v6)
```

Si ce n'est pas le cas, les étapes suivantes sont nécessaires:
- Définir les règles du pare-feu
```
sudo ufw allow 80 // Accès HTTP
sudo ufw allow 443 // Accès HTTPS
sudo ufw allow 22 // Accès SSH
```
- Activer le pare-feu avec les nouvelles règles
```
sudo ufw enable
```

#### Passer sur HTTPS

Tout d'abord il va nous falloir le premier certificat SSL qui pourra être raffraichit à l'avenir. Nous allons donc installer **certbot** avec la commande

```
sudo apt install certbot python3-certbot-nginx
```

Puis demander la génération du certificat via
```
sudo certbot --nginx -d mondomaine.fr -d www.mondomaine.fr
```

Désormais il va falloir également :
- Ecouter sur le **port 443** (HTTPS)
- Rediriger les requêtes de **HTTP** vers **HTTPS**

Pour cela vous trouverez le fichier ``/API/conf/nginx.conf`` avec la configuration nécessaire qui remplacera votre fichier situé à l'emplacement ``/etc/nginx/sites-available/mondomaine``

Il faut alors redémarrer **nginx**
```
sudo systemctl restart nginx
```

## Test de l'application

Il ne vous reste plus qu'à vous rendre sur votre application via votre nom de domaine (par exemple : mondomaine.fr).

## Potentielles erreurs fréquentes

### Chemin d'accès au build

Le nom ``mondomaine`` est un exemple, n'hésitez pas à le remplacer par le nom de votre application.

Cela vaut aussi bien pour le nom du dossier dans le fichier de configuration nginx (``/etc/nginx/sites-available/mondomaine``) que pour le nom du dossier dans le fichier ``/Frontend/Makefile``.

---

### Erreur lors de la réception du certificat SSL

- Si vous obtenez une erreur lors de la réception du certificat SSL, il est possible que le nom de domaine ne soit pas correctement configuré. Vérifiez avec la commande ``sudo ufw status`` que le pare-feu est bien configuré et que les ports 80 et 443 sont ouverts.

- Si vous n'arrivez pas a recevoir de certificat assurez vous que vous avez un certificat valide et si ce n'est pas le cas remplacez le fichier de configuration nginx par celui cité plus haut pour effectuer la demande du premier certificat SSL. 

---

### Erreur lors du montage des containers Docker

- Si vous obtenez une erreur lors du démarrage de l'application, vérifiez que les containers docker sont bien lancés avec la commande ``docker ps``.

- Si vos containers ne démarrent pas, il est possible qu'un container avec le même nom tourne en arrière plan

```
docker stop <nom du container>
```

et relancer le container

```
docker compose up -d --build --remove-orphans
```

---

### Transmission des cookies à l'API

Si l'application utiise HTTP et non HTTPS, il est probable que vos cookies ne soient pas transmis à l'API. Pour corriger cela, il suffit de modiifer le fichier ``/API/.env`` et de modifier cette variable :
```
NODE_ENV=productionhttp # autre chose que production
```

Cela va permettre d'envoyer les cookies via HTTP et non HTTPS.


## Maintenance

### Mettre à jour l'application

A chaque modification de l'API il va falloir relancer le container:

```
docker compose down
docker compose up -d --build
```

Cette étape est nécessaire car elle va installer les nouveaux packages et passer le nouveau contenu du dossier ``API/`` au container.

### Rafraichir le certificat SSL

Le certificat SSL possède une durée de vie de 3 mois, il faut donc le renouveler tous les 2-3 mois.

```
certbot renew
sudo systemctl reload nginx
```

Vous pouvez tout à fait automatiser ce processus avec un cron job:
```
sudo crontab -e
```

Ajoutez la ligne suivante:
```
0 12 * * 1 /usr/bin/certbot renew --quiet
```

Cela va permettre de renouveler le certificat SSL (si nécessaire) tous les lundis à midi.

**Attention** : dans les dernières versions de certbot un cron automatique est instancié par défaut.

Vous devrez cependant redémarrer le service nginx pour que le nouveau certificat SSL soit pris en compte.

Vous pouvez donc modifier le fichier ``/etc/letsencrypt/renewal/mondomaine.conf`` pour ajouter la ligne suivante:
```
# Après le renouvellement du certificat
renew_hook = systemctl reload nginx
```

## Conclusion

Vous avez maintenant une application déployée sur un serveur Linux.

Etapes réalisées :
- [x] Installer NodeJS / npm
- [x] Installer Docker
- [x] Installer Nginx
- [x] Installer Certbot
- [x] Configurer Nginx
- [x] Configurer Certbot
- [x] Configurer Docker
- [x] Créer et déplacer le build du frontend dans le dossier défini dans la configuration de Nginx
- [x] Lancer l'API et la base de données avec Docker
- [x] Installer et configurer le rafraichissement automatique du certificat SSL