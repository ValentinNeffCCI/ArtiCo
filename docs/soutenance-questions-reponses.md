# Soutenance CDA — Banque de questions / réponses

Préparation à l'entretien oral du titre **Concepteur Développeur d'Applications**.
Questions classées par thème, avec des réponses adaptées au projet **ArtiCo**
(Node.js / Express, Prisma, PostgreSQL, JWT, Docker, React/Vite, Jest).

> **Méthode à l'oral :** réponse courte et claire, puis un exemple tiré de TON
> projet. Si tu ne sais pas : « Je ne l'ai pas mis en place, mais voici comment je
> m'y prendrais… » — c'est mieux que d'inventer.

## Sommaire

1. [Présentation & projet](#1-présentation--projet)
2. [Conception & architecture](#2-conception--architecture)
3. [Base de données](#3-base-de-données)
4. [Sécurité & authentification](#4-sécurité--authentification)
5. [Langage, framework & développement](#5-langage-framework--développement)
6. [Tests](#6-tests)
7. [Déploiement & DevOps (Docker)](#7-déploiement--devops-docker)
8. [RGPD](#8-rgpd)
9. [Veille technologique & sécurité](#9-veille-technologique--sécurité)
10. [Questions de recul & gestion de projet](#10-questions-de-recul--gestion-de-projet)

---

## 1. Présentation & projet

**Q : Présentez votre projet en quelques minutes.**
R : ArtiCo est une application web permettant à des professionnels/artisans de
créer une fiche entreprise, de publier des galeries et des formulaires
personnalisables, et de recevoir des soumissions de visiteurs. Architecture
client/serveur : un front React (Vite), une API REST Node.js/Express en couches,
une base PostgreSQL via l'ORM Prisma, le tout conteneurisé avec Docker.

**Q : Quel problème résout l'application ? Qui sont les utilisateurs ?**
R : Trois profils : le **visiteur** (consulte, soumet un formulaire), l'**utilisateur
pro** (gère ses entreprises, formulaires, galeries, consulte ses soumissions),
l'**administrateur** (gère utilisateurs, accès et catégories).

**Q : Pourquoi avoir choisi cette stack technique ?**
R : Node.js/Express pour un développement JavaScript full-stack cohérent avec le
front React (un seul langage), un écosystème npm riche et une API REST légère.
PostgreSQL pour un relationnel robuste et conforme (transactions, intégrité).
Prisma pour la productivité et la sécurité des requêtes. Docker pour la
reproductibilité des environnements.

**Q : Quelle a été la partie la plus difficile ?**
R : (À personnaliser) Par exemple la mise en place d'une authentification sécurisée
robuste (double jeton, cookies httpOnly, gestion du refresh et de la révocation),
et le durcissement RGPD/sécurité (hachage des tokens, cascades de suppression).

**Q : Avez-vous travaillé seul ? Comment avez-vous organisé le travail ?**
R : (À personnaliser : Git, branches par fonctionnalité — ex. `fix/secure_cookies`,
commits réguliers, gestion des erreurs/issues).

---

## 2. Conception & architecture

**Q : Décrivez l'architecture de votre application.**
R : Architecture multicouche côté API : Router → Middlewares → Controller →
Service → Repository → ORM → Base. Chaque couche a une responsabilité unique.
Côté global : architecture client/serveur 3-tiers (présentation React / logique
Express / données PostgreSQL).

**Q : Pourquoi une architecture en couches ?**
R : Pour le **couplage faible** et la **responsabilité unique** : je peux modifier
une couche sans impacter les autres, tester chaque couche isolément, et un nouveau
développeur sait immédiatement où intervenir.

**Q : Qu'est-ce qu'une API REST ?**
R : Une interface qui expose des **ressources** via des URL, manipulées par les
**verbes HTTP** (GET/POST/PUT/DELETE) avec des **codes de statut** sémantiques.
Sans état (stateless) côté serveur, échanges en JSON.

**Q : Différence entre un contrôleur et un service ?**
R : Le contrôleur gère le protocole HTTP (lire la requête, renvoyer la réponse et
le bon code). Le service contient la logique métier, indépendamment d'HTTP.

**Q : C'est quoi un middleware ?**
R : Une fonction qui s'exécute entre la requête et la réponse, dans une chaîne. Elle
peut transformer la requête, la valider, l'authentifier, ou couper la chaîne. Ex. :
`authenticated()`, `validate(schema)`, `imageUploader`.

**Q : Qu'est-ce qu'un design pattern ? Lesquels avez-vous utilisés ?**
R : Une solution réutilisable à un problème récurrent de conception. Dans mon
projet : **Repository** (accès aux données), **DTO/Resource** (transformation de
sortie), **Middleware** (chaîne de traitement), **Singleton** (client Prisma unique).

---

## 3. Base de données

**Q : Comment avez-vous modélisé votre base ?**
R : Un MCD relationnel normalisé : entités User, Entreprise, Categorie, Formulaire,
Input, Option, Galerie, Soumission, reliées par des clés étrangères avec
cardinalités (ex. un User possède plusieurs Entreprises).

**Q : Qu'est-ce que la normalisation ? Pourquoi ?**
R : Organiser les données pour éviter la redondance et les anomalies de mise à jour
(formes normales 1NF/2NF/3NF). Objectif : intégrité et cohérence.

**Q : C'est quoi une clé primaire / étrangère ?**
R : Clé primaire = identifiant unique d'une ligne. Clé étrangère = référence vers
la clé primaire d'une autre table, qui matérialise une relation et garantit
l'intégrité référentielle.

**Q : Qu'est-ce qu'un ORM ? Avantages/inconvénients ?**
R : Object-Relational Mapping : fait le pont entre objets du code et tables SQL.
Avantages : productivité, requêtes paramétrées (sécurité), portabilité.
Inconvénients : abstraction parfois coûteuse, requêtes complexes moins fines.

**Q : À quoi servent les migrations ?**
R : Versionner l'évolution du schéma de façon reproductible. Chaque changement
produit un fichier SQL rejouable sur tous les environnements (`migrate deploy`).

**Q : Différence `migrate dev` / `migrate deploy` ?**
R : `migrate dev` (local, interactif) **crée** une migration depuis le schéma
modifié. `migrate deploy` (conteneur/prod, non-interactif) **applique** les
migrations existantes.

**Q : C'est quoi le `onDelete: Cascade` ?**
R : Une action référentielle : supprimer une ligne parente supprime
automatiquement les enfants liés (ex. supprimer une entreprise supprime ses
formulaires et soumissions). Garantit l'intégrité et évite les données orphelines.

**Q : SQL vs NoSQL, quand choisir l'un ou l'autre ?**
R : SQL (relationnel) pour des données structurées avec relations fortes et besoin
de transactions/intégrité (mon cas). NoSQL pour des données peu structurées, du
volume massif ou un schéma très évolutif.

---

## 4. Sécurité & authentification

**Q : Comment fonctionne votre authentification ?**
R : Double jeton JWT — un access token (15 min) et un refresh token (7 j) — stockés
dans des cookies `httpOnly`. L'access authentifie chaque requête ; le refresh
régénère l'access sans redemander le mot de passe.

**Q : Qu'est-ce qu'un JWT ? Le payload est-il chiffré ?**
R : Un JSON Web Token : header.payload.signature en base64url. La signature (clé
secrète) garantit l'intégrité. ⚠️ Le payload est **lisible** (encodé, pas chiffré) :
on n'y met jamais de donnée sensible, seulement l'id et l'expiration.

**Q : Authentification vs autorisation ?**
R : Authentification = vérifier *qui* tu es. Autorisation = vérifier ce que tu as
le *droit* de faire (rôle ADMIN, propriété de la ressource).

**Q : Pourquoi cookie httpOnly plutôt que localStorage ?**
R : localStorage est accessible en JavaScript → vulnérable au vol via XSS. Le
cookie `httpOnly` est invisible au JS.

**Q : C'est quoi une attaque XSS ? Comment vous en protégez-vous ?**
R : Cross-Site Scripting : injection de JS malveillant exécuté dans le navigateur
de la victime. Protections : cookies `httpOnly`, en-têtes via Helmet (CSP),
validation/échappement des entrées.

**Q : C'est quoi le CSRF ? Comment vous en protégez-vous ?**
R : Cross-Site Request Forgery : faire exécuter au navigateur de la victime une
requête authentifiée à son insu. Protection : cookie `sameSite: Strict` (le cookie
n'est pas envoyé depuis un autre site).

**Q : Comment stockez-vous les mots de passe ?**
R : Hachés avec **bcrypt** (jamais en clair, jamais chiffré/réversible). bcrypt est
lent et salé → résiste à la force brute et aux rainbow tables.

**Q : Pourquoi bcrypt et pas SHA-256 pour les mots de passe ?**
R : SHA-256 est rapide (des milliards de hash/s sur GPU) → mauvais pour des mots de
passe. bcrypt est lent (coût ajustable) et intègre un sel unique → conçu pour
ralentir les attaques.

**Q : Pourtant vous hachez vos tokens en SHA-256, pourquoi cette différence ?**
R : À cause de l'**entropie**. Un mot de passe humain a une faible entropie → il faut
un hachage lent (bcrypt). Un token JWT a une très forte entropie → la force brute
est infaisable, donc un hachage rapide (SHA-256) suffit, et il évite la troncature
à 72 octets de bcrypt sur des chaînes longues.

**Q : C'est quoi le sel (salt) ?**
R : Une valeur aléatoire unique ajoutée avant hachage. Deux mots de passe
identiques donnent deux hashs différents → neutralise les rainbow tables.

**Q : Comment empêchez-vous l'injection SQL ?**
R : L'ORM Prisma génère des **requêtes paramétrées** (les valeurs ne sont jamais
concaténées dans le SQL), complété par la validation des entrées.

**Q : Comment un utilisateur ne peut-il pas modifier les données d'un autre ?**
R : Un middleware d'accès compare l'id de la ressource ciblée à l'id de
l'utilisateur authentifié (issu du token vérifié). Sinon 403. Protège contre l'IDOR.

**Q : Que faites-vous contre la force brute sur le login ?**
R : Un rate limiter (50 requêtes / 15 min par IP) + bcrypt volontairement lent.
Amélioration possible : un verrouillage ciblé par compte.

**Q : Comment révoquer une session JWT (stateless) ?**
R : Le refresh token est stocké (haché) en base ; le régénérer ou le supprimer (ex.
au changement de mot de passe) invalide les anciennes sessions.

**Q : Connaissez-vous l'OWASP ?**
R : Oui, l'OWASP Top 10 liste les risques de sécurité web majeurs (injection,
authentification défaillante, XSS, mauvaise config…). Je m'y réfère pour ma veille
et mes choix (validation, hachage, en-têtes, contrôle d'accès).

---

## 5. Langage, framework & développement

**Q : Pourquoi Node.js ? Comment fonctionne-t-il ?**
R : Runtime JavaScript côté serveur, mono-thread avec une **boucle d'événements**
(event loop) et des I/O **non bloquantes (asynchrones)** → efficace pour une API qui
fait beaucoup d'entrées/sorties (base, réseau).

**Q : C'est quoi l'asynchrone ? async/await ?**
R : Ne pas bloquer l'exécution en attendant une opération longue (I/O). `async/await`
est une syntaxe pour écrire de l'asynchrone de façon lisible, basée sur les
**Promises**.

**Q : Qu'est-ce qu'une Promise ?**
R : Un objet représentant le résultat futur d'une opération asynchrone, avec trois
états : pending, fulfilled, rejected.

**Q : Express, c'est quoi ?**
R : Un framework web minimaliste pour Node : routage, middlewares, gestion
requête/réponse.

**Q : Comment gérez-vous les erreurs ?**
R : Une classe `HttpError` (message + status) et un middleware d'erreur centralisé
qui formate la réponse et journalise. Les contrôleurs délèguent via `next(error)`.

**Q : Comment garantissez-vous des réponses cohérentes / pas de fuite de données ?**
R : Le pattern Resource transforme les entités avant la réponse → ne renvoie que
les champs voulus (jamais le mot de passe ni les tokens).

**Q : Variables d'environnement, pourquoi ?**
R : Séparer la configuration du code, ne jamais committer de secret, avoir des
valeurs différentes par environnement (dev/prod).

---

## 6. Tests

**Q : Comment avez-vous testé votre application ?**
R : 150 tests unitaires avec Jest, organisés par domaine, couvrant contrôleurs et
services, avec mocks des dépendances (base, JWT, bcrypt, mailer).

**Q : Test unitaire vs test d'intégration ?**
R : Unitaire : une unité isolée (un service), le reste mocké. Intégration :
plusieurs composants ensemble (ex. route → base réelle). J'ai de l'unitaire ;
l'intégration (Supertest + base de test) est un axe d'amélioration.

**Q : C'est quoi un mock ? Pourquoi mocker ?**
R : Un faux objet simulant une dépendance. On mocke pour isoler ce qu'on teste,
éviter les effets de bord, accélérer et fiabiliser les tests.

**Q : Qu'est-ce que la couverture de code ?**
R : Le pourcentage de code exécuté par les tests (`jest --coverage`). Un indicateur
utile, mais pas une garantie absolue de qualité.

**Q : Qu'est-ce qu'un jeu d'essai ?**
R : Un ensemble de données d'entrée + résultats attendus permettant de valider un
comportement (cas nominal et cas d'erreur). Ex. : login avec bons/mauvais
identifiants → 200 / 403.

**Q : Connaissez-vous le TDD ?**
R : Test Driven Development : écrire le test avant le code, puis coder pour le faire
passer, puis refactorer (red-green-refactor).

---

## 7. Déploiement & DevOps (Docker)

**Q : Comment déployez-vous votre application ?**
R : Conteneurisation avec Docker Compose : 3 services (PostgreSQL, backend Express,
front Vite), réseaux isolés, healthcheck, migrations appliquées au démarrage.

**Q : Différence image / conteneur ?**
R : L'image est le modèle figé (le moule) ; le conteneur est une instance en
exécution de cette image.

**Q : Qu'est-ce qu'un Dockerfile ?**
R : Un fichier décrivant comment construire une image (image de base, dépendances,
fichiers copiés, commande de démarrage).

**Q : À quoi sert le healthcheck ?**
R : Vérifier qu'un service est réellement opérationnel (ici `pg_isready`). Couplé à
`depends_on: service_healthy`, le backend ne démarre qu'une fois la base prête.

**Q : Pourquoi des réseaux Docker séparés ?**
R : Cloisonnement : la base n'est accessible que du backend, pas exposée
inutilement. Principe de moindre exposition.

**Q : Qu'est-ce qu'un volume Docker ?**
R : Un stockage persistant indépendant du cycle de vie du conteneur (ici les
données PostgreSQL survivent à un redémarrage).

**Q : C'est quoi le DevOps / l'intégration continue (CI/CD) ?**
R : DevOps : rapprocher développement et exploitation pour livrer plus vite et plus
sûrement. CI : automatiser build + tests à chaque commit. CD : automatiser le
déploiement. (Axe d'amélioration : une pipeline CI exécutant `npm test`.)

**Q : Comment gérez-vous la différence dev/prod ?**
R : `Dockerfile`/`Dockerfile.prod`, `docker-compose.prod.yaml`, `NODE_ENV`, et
`migrate dev` (local) vs `migrate deploy` (conteneur). Les cookies sont `secure`
seulement en production.

---

## 8. RGPD

**Q : Comment votre application respecte-t-elle le RGPD ?**
R : Mots de passe et tokens hachés (sécurité du traitement, art. 32), minimisation
des données en sortie (Resources), droit à l'effacement (suppression de compte avec
cascade), contrôle d'accès strict, désactivation de compte.

**Q : Qu'est-ce qu'une donnée personnelle ? Une IP en est-elle une ?**
R : Toute donnée permettant d'identifier directement ou indirectement une personne.
Oui, une adresse IP est une donnée personnelle (position CNIL/CJUE).

**Q : Qu'est-ce que la minimisation des données ?**
R : Ne collecter et n'exposer que les données strictement nécessaires (art. 5-c).

**Q : Comment gérez-vous le droit à l'oubli (art. 17) ?**
R : La suppression de compte efface en cascade les données liées. Limite assumée :
les données de tiers via formulaires et la durée de conservation ne sont pas encore
totalement couvertes.

**Q : Quels sont les axes RGPD à améliorer ?**
R : Durées de conservation (logs avec IP, soumissions, comptes inactifs),
consentement des formulaires, droit à la portabilité (export), purge automatique.

---

## 9. Veille technologique & sécurité

> ⚠️ **Attendu officiel du titre CDA.** Prépare une section veille dans le dossier
> (orientée **sécurité**) et sache en parler à l'oral. Confirme le format exact
> (article ? synthèse ?) auprès de ton centre.

**Q : Comment réalisez-vous votre veille technologique ?**
R : Veille régulière via des sources fiables, organisée par outils (flux RSS,
newsletters, comptes spécialisés), avec une attention particulière à la sécurité.
J'en tire des décisions concrètes pour le projet.

**Q : Quelles sont vos sources ?**
R (exemples) :
- **Sécurité** : OWASP (Top 10, cheat sheets), ANSSI, CVE/NVD, Snyk, GitHub
  Security Advisories, newsletters (ex. tl;dr sec).
- **RGPD** : site de la CNIL.
- **Techno** : documentation officielle (Node, Express, Prisma), MDN, blogs
  techniques, releases GitHub des dépendances.

**Q : Comment surveillez-vous les vulnérabilités de vos dépendances ?**
R : `npm audit` pour détecter les failles connues dans les paquets, mise à jour
régulière, suivi des advisories. (Outils possibles : Dependabot, Snyk.)

**Q : Citez une vulnérabilité ou un sujet de veille récent lié à votre projet.**
R (exemples possibles à approfondir) :
- Les bonnes pratiques **JWT** (ne pas mettre de secret dans le payload, expiration
  courte, rotation des refresh tokens).
- **bcrypt vs Argon2** (Argon2 recommandé par l'OWASP aujourd'hui).
- Les **attaques sur la chaîne d'approvisionnement npm** (paquets compromis) → d'où
  l'importance de `npm audit` et du verrouillage des versions (`package-lock.json`).
- L'évolution de l'**OWASP Top 10**.

**Q : Qu'avez-vous changé dans le projet grâce à votre veille ?**
R (exemple concret, très valorisé) : suite à ma veille sécurité, j'ai durci le
stockage des jetons (hachage en base pour qu'ils ne soient pas rejouables en cas de
fuite) et fiabilisé les suppressions en cascade pour le droit à l'effacement.

**Faut-il un « article de veille » ?**
→ Le dossier doit contenir une **section veille** (souvent une synthèse + tes
sources + une vulnérabilité étudiée). Certains centres demandent en plus de
**présenter un article** à l'oral. Vérifie l'attendu précis de ton centre, mais
prépare au minimum la section veille du dossier.

---

## 10. Questions de recul & gestion de projet

**Q : Si c'était à refaire, que changeriez-vous ?**
R : Ajouter des tests d'intégration, une documentation d'API (Swagger/OpenAPI), une
pipeline CI, de la pagination sur les listes, et finaliser la conformité RGPD
(durées de conservation, consentement formulaires).

**Q : Quels sont les points faibles de votre application ?**
R (assume-les) : pas de tests d'intégration, gestion d'erreur à corriger (une erreur
sans status retombe en 404 au lieu de 500), pas de doc d'API, RGPD partiel sur les
données de tiers. Présenter ces limites montre du recul.

**Q : Comment avez-vous géré les versions de votre code ?**
R : Git, avec des branches par fonctionnalité/correctif (ex. `fix/secure_cookies`),
des commits réguliers et explicites, et des Pull Requests.

**Q : Comment avez-vous priorisé les fonctionnalités ?**
R : (À personnaliser) D'abord le cœur métier (entreprises, formulaires), puis la
sécurisation, puis le durcissement (RGPD, tests).

**Q : Combien de temps a duré le projet ? Avez-vous respecté le planning ?**
R : (À personnaliser avec ton Gantt réel.)

**Q : Qu'avez-vous appris pendant ce projet ?**
R : (À personnaliser) La rigueur d'une architecture en couches, l'importance de la
sécurité dès la conception (security by design), et la valeur des tests et de la
conteneurisation pour fiabiliser le travail.

**Q : Comment l'application pourrait-elle évoluer ?**
R : Notifications par email/temps réel, statistiques sur les soumissions, recherche
avancée, internationalisation, pipeline CI/CD complète.

---

## Mémo final (à relire 5 min avant)

- **Architecture** : Router → Middleware → Controller → Service → Repository → DB.
- **Auth** : 2 JWT (access 15 min / refresh 7 j), cookies `httpOnly` + `Strict`.
- **Menaces / parades** : XSS→httpOnly+Helmet · CSRF→sameSite · injection→ORM
  paramétré · brute force→rate limit + bcrypt.
- **Hachage** : mots de passe→bcrypt (faible entropie) · tokens→SHA-256 (forte
  entropie).
- **DB** : ORM Prisma, migrations versionnées, cascades pour l'intégrité.
- **Tests** : 150 unitaires Jest, mocks ; intégration = axe d'amélioration.
- **Déploiement** : Docker Compose, réseaux isolés, healthcheck, `migrate deploy`.
- **RGPD** : hachage, minimisation, droit à l'effacement ; conservation = à finir.
- **Veille** : OWASP, ANSSI, CNIL, CVE, `npm audit` → décisions concrètes (hachage
  des tokens).
- **Posture** : toujours justifier le *pourquoi*, assumer les limites avec un plan.
```
