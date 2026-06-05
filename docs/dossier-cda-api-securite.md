# Dossier CDA — Synthèse technique de l'API ArtiCo

Document de préparation à la soutenance.
Pour chaque thème : **le choix technique**, **pourquoi ce choix**, et **les questions
que le jury peut poser** (avec des éléments de réponse).

> Conseil transversal : à l'oral, ne décris pas seulement *ce que* tu as fait,
> explique systématiquement *pourquoi*. Et assume tes axes d'amélioration : un
> candidat lucide vaut mieux qu'un candidat qui prétend que tout est parfait.

---

## Sommaire

1. [Architecture en couches](#1-architecture-en-couches)
2. [Authentification (JWT + cookies)](#2-authentification-jwt--cookies)
3. [Hachage des mots de passe (bcrypt)](#3-hachage-des-mots-de-passe-bcrypt)
4. [Hachage des tokens en base (SHA-256) & entropie](#4-hachage-des-tokens-en-base-sha-256--entropie)
5. [Défense en profondeur](#5-défense-en-profondeur)
6. [Validation des entrées](#6-validation-des-entrées)
7. [Autorisation et contrôle d'accès](#7-autorisation-et-contrôle-daccès)
8. [Accès aux données (Prisma, Repository, migrations)](#8-accès-aux-données-prisma-repository-migrations)
9. [Gestion centralisée des erreurs & Resources](#9-gestion-centralisée-des-erreurs--resources)
10. [Tests](#10-tests)
11. [Conteneurisation & déploiement (Docker)](#11-conteneurisation--déploiement-docker)
12. [RGPD](#12-rgpd)
13. [Axes d'amélioration assumés](#13-axes-damélioration-assumés)

---

## 1. Architecture en couches

**Le choix :** une architecture multicouche stricte, homogène sur 9 domaines métier.

```
Router → Middlewares → Controller → Service → Repository → Prisma → PostgreSQL
```

| Couche | Rôle | Ne fait PAS |
|--------|------|-------------|
| Router | Déclare les routes + chaîne de middlewares | de logique |
| Controller | Gère le HTTP (req/res, codes de statut) | de logique métier |
| Service | Logique métier (règles, orchestration) | d'accès direct à la DB |
| Repository | Seul point d'accès aux données | de logique métier |

**Pourquoi :**
- **Responsabilité unique** (Single Responsibility) : chaque fichier a un seul rôle.
- **Couplage faible** : je peux changer de base de données sans toucher aux
  contrôleurs, ou modifier une règle métier sans toucher à l'accès aux données.
- **Testabilité** : chaque couche se teste isolément en mockant celle du dessous.
- **Maintenabilité / évolutivité** : un nouveau développeur trouve immédiatement
  où intervenir.

**Questions possibles du jury :**

- *« Pourquoi séparer Controller et Service ? »*
  → Le contrôleur ne connaît que le protocole HTTP ; le service contient la
  logique réutilisable indépendamment d'HTTP (utile pour un script, un cron, un
  autre point d'entrée). Ça évite des contrôleurs « gros » impossibles à tester.

- *« À quoi sert la couche Repository puisque Prisma est déjà une abstraction ? »*
  → Elle centralise les requêtes, évite de disperser des appels Prisma partout,
  et permettrait de changer d'ORM ou d'ajouter du cache sans impacter les services.

- *« Qu'est-ce que le couplage faible / la cohésion forte ? »*
  → Couplage faible = les modules dépendent peu les uns des autres. Cohésion
  forte = chaque module regroupe des responsabilités cohérentes. Objectif :
  modifier une partie sans casser les autres.

---

## 2. Authentification (JWT + cookies)

**Le choix :** authentification stateless par **double jeton JWT** stocké dans des
**cookies `httpOnly`**.

| Jeton | Cookie | Durée | Rôle |
|-------|--------|-------|------|
| Access token | `artico_token` | 15 min | Authentifie chaque requête |
| Refresh token | `refresh_token` | 7 jours | Régénère l'access sans re-login |

Options des cookies : `httpOnly`, `sameSite: Strict`, `secure` (en production).

**Pourquoi :**
- **Double jeton** : l'access token court limite la fenêtre d'exploitation en cas
  de vol ; le refresh long évite de redemander le mot de passe en permanence
  (compromis sécurité / expérience utilisateur).
- **Cookie `httpOnly`** plutôt que `localStorage` : le jeton est **inaccessible au
  JavaScript** → protège contre le **vol de jeton par XSS**.
- **`sameSite: Strict`** : le cookie n'est pas envoyé sur les requêtes cross-site
  → protège contre le **CSRF**.
- **`secure: isProduction`** : cookie transmis uniquement en HTTPS en production,
  tout en restant utilisable en HTTP en développement.
- **Refresh stocké (haché) en base** : permet de **révoquer** une session (au
  changement de mot de passe, on régénère le refresh → les anciennes sessions
  sont invalidées).

**Questions possibles du jury :**

- *« Différence entre authentification et autorisation ? »*
  → Authentification = vérifier *qui* tu es (login). Autorisation = vérifier ce
  que tu as le *droit* de faire (rôle, propriété de la ressource).

- *« Qu'est-ce qu'un JWT ? Que contient-il ? »*
  → Un JSON Web Token : 3 parties (header.payload.signature) encodées en base64url.
  Le payload contient des *claims* (ici l'id user, l'expiration). La signature
  (avec une clé secrète) garantit que le token n'a pas été falsifié. ⚠️ Le payload
  est **lisible** (pas chiffré) : on n'y met jamais de donnée sensible.

- *« Stateless, ça veut dire quoi ? Avantage/inconvénient ? »*
  → Le serveur ne stocke pas la session : il vérifie la signature du token à
  chaque requête. Avantage : scalable (pas de session partagée entre serveurs).
  Inconvénient : difficile de révoquer un token avant son expiration → je
  compense avec le refresh stocké en base.

- *« Pourquoi pas localStorage pour le token ? »*
  → localStorage est accessible en JS → vulnérable au XSS. Le cookie `httpOnly`
  ne l'est pas.

- *« C'est quoi une attaque XSS ? CSRF ? »*
  → XSS : injection de JavaScript malveillant dans la page (vol de données côté
  client). CSRF : faire exécuter au navigateur de la victime une requête
  authentifiée à son insu. Je m'en protège avec `httpOnly` (XSS) et
  `sameSite: Strict` (CSRF).

- *« Que se passe-t-il quand l'access token expire ? »*
  → Le client reçoit un 401, appelle `/refresh` avec le refresh token ; le serveur
  vérifie le refresh (signature + correspondance avec le hash en base) et renvoie
  un nouvel access token.

---

## 3. Hachage des mots de passe (bcrypt)

**Le choix :** hachage **bcrypt** (cost factor 10) via un middleware, jamais de
stockage en clair.

**Pourquoi bcrypt et pas SHA-256 :**
- bcrypt est **lent par conception** (et le coût est **ajustable**) → ralentit
  massivement les attaques par force brute. SHA-256 est rapide (des milliards de
  hash/s sur GPU) : c'est une qualité pour vérifier l'intégrité, un défaut pour
  des mots de passe.
- bcrypt **intègre un sel aléatoire unique** par mot de passe → deux mots de passe
  identiques donnent deux hashs différents → **rainbow tables inutiles**.
- Résistant à l'évolution matérielle : il suffit d'augmenter le cost factor.

**Pourquoi un middleware (`auto-hashing-password.js`) :**
- **Réutilisabilité** (DRY) : le même middleware sert sur `/register` et
  `/change-password`.
- **Sécurité par construction** : placé *avant* le contrôleur, il garantit qu'un
  mot de passe en clair n'atteint jamais la couche métier ni la base.
- **Maintenance centralisée** : changer d'algo = modifier un seul fichier.

**Questions possibles du jury :**

- *« Pourquoi ne pas chiffrer le mot de passe plutôt que le hacher ? »*
  → Le chiffrement est réversible (il existe une clé pour déchiffrer) ; on n'a
  jamais besoin de retrouver le mot de passe en clair, seulement de **vérifier**.
  Le hachage est irréversible → en cas de fuite, les mots de passe ne sont pas
  récupérables.

- *« C'est quoi le sel (salt) ? À quoi ça sert ? »*
  → Une valeur aléatoire ajoutée au mot de passe avant hachage. Elle rend chaque
  hash unique et neutralise les rainbow tables (tables précalculées).

- *« Que vaut le cost factor 10 ? »*
  → 2¹⁰ = 1024 itérations internes. On peut l'augmenter (11, 12…) quand le
  matériel progresse, sans changer d'algorithme.

- *« Connais-tu des alternatives modernes ? »*
  → Argon2 (recommandé OWASP aujourd'hui, gagnant du Password Hashing Competition
  2015) et scrypt. J'ai choisi bcrypt pour sa maturité et son intégration native
  dans l'écosystème Node ; Argon2 serait le choix « état de l'art » pour un projet
  neuf.

---

## 4. Hachage des tokens en base (SHA-256) & entropie

**Le choix :** les `refresh_token` et `reset_token` sont stockés **hachés en
SHA-256** en base (pas en clair).

**Pourquoi SHA-256 ici, alors que bcrypt pour les mots de passe ?**
La réponse tient dans l'**entropie** = la mesure de l'imprévisibilité d'un secret,
c'est-à-dire le nombre de possibilités à tester pour le deviner (en bits : n bits = 2ⁿ).

- **Mot de passe = faible entropie** (choisi par un humain, prévisible) → il faut
  un hachage **lent et salé** (bcrypt) pour compenser.
- **Token JWT = forte entropie** (généré aléatoirement, très long) → la force
  brute est de toute façon **infaisable**, donc un hachage **rapide** (SHA-256)
  suffit. En prime, SHA-256 évite la **troncature à 72 octets** de bcrypt sur les
  JWT longs.

**Pourquoi hacher les tokens du tout :**
→ Si la base fuite, un `reset_token` en clair permettrait de réinitialiser
n'importe quel mot de passe, et un `refresh_token` permettrait d'usurper une
session. Hachés, ils ne sont **pas rejouables** (RGPD art. 32 — sécurité du
traitement). Le hachage étant déterministe, on compare le token reçu à sa version
stockée sans jamais conserver la valeur en clair.

**Questions possibles du jury :**

- *« Pourquoi deux algorithmes de hachage différents dans le même projet ? »*
  → Parce que les secrets n'ont pas la même nature : faible entropie (mots de
  passe) → bcrypt lent ; forte entropie (tokens) → SHA-256 rapide. J'adapte
  l'outil au besoin plutôt que d'appliquer une recette unique.

- *« C'est quoi l'entropie en sécurité ? »*
  → L'imprévisibilité d'une donnée, mesurée en bits ; chaque bit double le nombre
  de combinaisons. Analogie : un cadenas à 3 chiffres (faible) vs à 40 chiffres
  (forte).

---

## 5. Défense en profondeur

**Le choix :** empiler plusieurs protections au niveau du serveur Express.

| Mesure | Menace couverte |
|--------|-----------------|
| `helmet` (en-têtes HTTP + CSP) | XSS, clickjacking, sniffing de type MIME |
| `express-rate-limit` (50 req / 15 min) | force brute, déni de service |
| `cors` restreint à `FRONTEND_URL` | requêtes cross-origin non autorisées |
| Validation d'extension sur `/uploads` | upload de fichiers malveillants |
| Secrets en variables d'environnement | pas de secret en dur dans le code |

**Pourquoi :** aucune mesure n'est suffisante seule. La **défense en profondeur**
multiplie les barrières : si l'une est contournée, les autres tiennent.

**Questions possibles du jury :**

- *« À quoi sert Helmet ? »*
  → Il positionne des en-têtes HTTP de sécurité (CSP, X-Frame-Options,
  X-Content-Type-Options…) pour durcir le navigateur contre XSS, clickjacking, etc.

- *« C'est quoi CORS ? Pourquoi le configurer ? »*
  → Cross-Origin Resource Sharing : mécanisme qui autorise (ou non) un site d'une
  autre origine à appeler l'API. Je le restreins à l'URL de mon front pour
  empêcher n'importe quel site d'utiliser l'API avec les cookies de l'utilisateur.

- *« Pourquoi un rate limiter ? »*
  → Limiter le nombre de requêtes par IP freine les attaques par force brute (sur
  le login) et les dénis de service.

- *« Pourquoi des variables d'environnement pour les secrets ? »*
  → Pour ne jamais committer de secret dans le code (séparation code/config), et
  pouvoir avoir des valeurs différentes par environnement (dev/prod).

---

## 6. Validation des entrées

**Le choix :** validation centralisée via `express-validator` + des **schémas**
réutilisables, appliqués en middleware (`validate(schema)`).

**Pourquoi :**
- **Ne jamais faire confiance aux données du client** : on valide format, type,
  longueur avant traitement → protège contre les injections et les données
  malformées.
- **Centralisation** : les règles vivent dans `schemas/`, réutilisables et testables.
- **Cohérence** : une règle métier (ex. mot de passe ≥ 12 caractères) a une valeur
  unique sur toutes les couches.

**Questions possibles du jury :**

- *« Pourquoi valider côté serveur si le front valide déjà ? »*
  → La validation front est pour le confort utilisateur ; elle est contournable
  (requête directe via Postman/curl). La seule validation **fiable** est côté
  serveur.

- *« Comment te protèges-tu de l'injection SQL ? »*
  → Deux niveaux : la validation des entrées, et surtout l'ORM Prisma qui génère
  des **requêtes paramétrées** (les valeurs ne sont jamais concaténées dans le SQL).

---

## 7. Autorisation et contrôle d'accès

**Le choix :** un middleware `authenticated(superAuth)` (vérifie le JWT + le rôle
ADMIN) complété par des middlewares d'accès dédiés par ressource (`user-access`,
`entreprise-access`…).

**Pourquoi :**
- Distinguer **authentification** (es-tu connecté ?) et **autorisation** (as-tu le
  droit sur *cette* ressource ?).
- Contrôle de **propriété** : un utilisateur ne peut modifier/supprimer que ses
  propres ressources (pas celles des autres).
- Contrôle de **rôle** : certaines routes sont réservées aux ADMIN.

**Questions possibles du jury :**

- *« Comment empêches-tu un utilisateur de modifier le compte d'un autre ? »*
  → Le middleware `user-access` compare l'id de la ressource ciblée à l'id de
  l'utilisateur authentifié (issu du token vérifié).

- *« Que se passe-t-il si quelqu'un modifie l'id dans l'URL ? »*
  → Le contrôle d'accès rejette la requête (403) car l'id ne correspond pas au
  propriétaire. C'est une protection contre l'IDOR (Insecure Direct Object
  Reference).

---

## 8. Accès aux données (Prisma, Repository, migrations)

**Le choix :** ORM **Prisma** + pattern **Repository** + **migrations versionnées**.

**Pourquoi :**
- **ORM** : requêtes typées, paramétrées (anti-injection), productivité.
- **Repository** : centralise l'accès aux données, découple les services de l'ORM.
- **Migrations** : le `schema.prisma` est la **source de vérité** ; chaque
  changement produit une migration SQL versionnée, rejouable sur tous les
  environnements (`migrate deploy`).

**Distinction clé `migrate dev` vs `migrate deploy` :**
- `migrate dev` : en **local**, interactif, **crée** une migration depuis le schéma
  modifié (besoin d'un TTY et d'une *shadow database*).
- `migrate deploy` : en **conteneur/production**, non-interactif, **applique** les
  migrations existantes.

**Questions possibles du jury :**

- *« C'est quoi un ORM ? Avantages/inconvénients ? »*
  → Object-Relational Mapping : fait le pont entre objets du code et tables SQL.
  Avantages : productivité, sécurité (requêtes paramétrées), portabilité.
  Inconvénients : abstraction parfois coûteuse en performance, requêtes complexes
  moins fines qu'en SQL natif.

- *« À quoi servent les migrations ? »*
  → Versionner l'évolution du schéma de base, de façon reproductible et
  collaborative (chaque dev/serveur applique la même séquence).

- *« Comment as-tu modélisé tes relations ? »*
  → Clés étrangères, contraintes d'unicité, et `onDelete: Cascade` pour garantir
  l'intégrité référentielle (ex. supprimer une entreprise supprime ses formulaires
  et leurs soumissions).

---

## 9. Gestion centralisée des erreurs & Resources

**Le choix :**
- Une classe `HttpError` custom (message + status).
- Un `error-middleware` unique qui formate et journalise toutes les erreurs.
- Un pattern **Resource** (`resources/`) qui transforme les entités avant réponse.

**Pourquoi :**
- **Cohérence** : toutes les erreurs sortent au même format ; tous les contrôleurs
  délèguent via `next(error)`.
- **Resources/DTO** : on ne renvoie jamais l'entité brute → on **filtre les données
  sensibles** (`password`, tokens) et on découple le modèle interne de l'API
  publique.
- **Traçabilité** : journalisation dans `error.log`.

**Questions possibles du jury :**

- *« Pourquoi un middleware d'erreur centralisé ? »*
  → Pour éviter de répéter la gestion d'erreur dans chaque contrôleur et garantir
  des réponses homogènes (un seul endroit à maintenir).

- *« Comment évites-tu d'exposer le hash du mot de passe dans une réponse ? »*
  → La couche Resource ne renvoie que les champs voulus ; même si le repository
  remonte tout, le mot de passe et les tokens ne sont jamais sérialisés.

---

## 10. Tests

**Le choix :** **150 tests unitaires** (Jest), organisés par domaine, couvrant
contrôleurs et services, avec mocks des dépendances (DB, JWT, bcrypt, mailer).

**Pourquoi :**
- **Non-régression** : un changement qui casse un comportement est détecté
  immédiatement.
- **Isolation** : en mockant l'infrastructure, on teste la logique métier seule →
  tests rapides et déterministes.
- **Documentation vivante** : les tests décrivent le comportement attendu.

**Questions possibles du jury :**

- *« Différence test unitaire / test d'intégration ? »*
  → Unitaire : teste une unité isolée (un service, une fonction) en mockant le
  reste. Intégration : teste plusieurs composants ensemble (ex. route → DB réelle).
  J'ai de l'unitaire ; l'intégration (Supertest + DB de test) est un axe
  d'amélioration.

- *« C'est quoi un mock ? Pourquoi mocker ? »*
  → Un faux objet qui simule une dépendance (ex. la base). On mocke pour isoler ce
  qu'on teste, éviter les effets de bord, et accélérer les tests.

- *« Connais-tu la couverture de code ? »*
  → Le pourcentage de code exécuté par les tests (`jest --coverage`). C'est un
  indicateur, pas une garantie de qualité.

---

## 11. Conteneurisation & déploiement (Docker)

**Le choix :** **Docker Compose** multi-services : `db` (PostgreSQL) + `backend` +
`client`, réseaux isolés, healthcheck, migrations automatisées au démarrage,
configs séparées dev/prod.

**Pourquoi :**
- **Reproductibilité** : « ça marche chez moi » devient « ça marche partout » —
  même environnement en dev, test, prod.
- **Isolation** : chaque service dans son conteneur, réseaux séparés.
- **Orchestration** : `depends_on: condition: service_healthy` → le backend
  attend que la base soit réellement prête (pas juste démarrée).
- **Séparation dev/prod** : `Dockerfile` vs `Dockerfile.prod`, `migrate dev` (local)
  vs `migrate deploy` (conteneur).

**Questions possibles du jury :**

- *« Différence image / conteneur ? »*
  → L'image est le modèle figé (le « moule ») ; le conteneur est une instance en
  exécution de cette image.

- *« À quoi sert le healthcheck ? »*
  → Vérifier qu'un service est réellement opérationnel (ici `pg_isready`) avant que
  les services dépendants démarrent → évite les erreurs de connexion au boot.

- *« Pourquoi des réseaux Docker séparés ? »*
  → Cloisonnement : la base n'est accessible que du backend, pas exposée
  inutilement. Principe de moindre exposition.

- *« Pourquoi `migrate deploy` et pas `migrate dev` dans le conteneur ? »*
  → `migrate dev` est interactif et a besoin d'un TTY + d'une shadow database : il
  se fige dans un conteneur. `migrate deploy` est non-interactif et applique
  simplement les migrations existantes.

---

## 12. RGPD

**Ce qui est en place :**
- Mots de passe hachés (irréversibles), tokens hachés en base.
- Minimisation en sortie (Resources filtrent les données sensibles).
- Droit à l'effacement : suppression de compte avec cascade (`onDelete: Cascade`)
  qui efface aussi entreprises, formulaires et **soumissions** liées.
- Contrôle d'accès strict (un utilisateur n'accède qu'à ses données).
- Désactivation de compte (flag `active`).

**Ce qui manque (à assumer) :**
- Données de tiers (soumissions de formulaires) : pas de consentement enregistré,
  pas de durée de conservation.
- Logs avec IP (donnée personnelle) sans politique de rétention/purge.
- Pas de droit à la portabilité (export des données).
- Tokens de session/reset : durées de conservation des comptes inactifs non gérées.

**Questions possibles du jury :**

- *« Une adresse IP est-elle une donnée personnelle ? »*
  → Oui (position CNIL/CJUE) : elle peut permettre d'identifier indirectement une
  personne. D'où la nécessité d'une durée de conservation limitée des logs.

- *« Comment gères-tu le droit à l'oubli (art. 17) ? »*
  → Suppression du compte qui, par cascade, efface les données liées. Limite
  identifiée : les données de tiers collectées via formulaires ne sont pas encore
  couvertes.

- *« Qu'est-ce que la minimisation des données ? »*
  → Ne collecter et n'exposer que les données strictement nécessaires (art. 5-c).
  Mes Resources illustrent la minimisation en sortie.

---

## 13. Axes d'amélioration assumés

Présenter ces points **toi-même** démontre du recul (très valorisé) :

1. **`error-middleware`** : une erreur sans `status` retombe en 404 au lieu de 500
   → masque les vraies erreurs serveur. À corriger.
2. **Pas de tests d'intégration** (uniquement unitaires mockés) → ajouter Supertest
   + une DB de test.
3. **Pas de documentation d'API** → ajouter Swagger/OpenAPI.
4. **Pas de pagination** sur les routes de liste → problème de scalabilité.
5. **RGPD** : durées de conservation, consentement des formulaires, purge des logs,
   export des données.
6. **Rate limiting global** plutôt que ciblé par compte sur le login.

---

## Mémo express (à relire juste avant l'oral)

- **Couches** : Router → Middleware → Controller → Service → Repository → DB.
- **Auth** : 2 JWT (access 15 min / refresh 7 j), cookies `httpOnly` + `Strict`.
- **XSS** → `httpOnly` ; **CSRF** → `sameSite: Strict` ; **injection SQL** → ORM
  paramétré ; **force brute** → rate limit + bcrypt lent.
- **Mots de passe** → bcrypt (faible entropie, lent, salé).
- **Tokens** → SHA-256 (forte entropie, rapide suffit).
- **Migrations** : `migrate dev` (local, crée) vs `migrate deploy` (conteneur,
  applique).
- **Toujours** : ne jamais faire confiance au client, valider côté serveur,
  défense en profondeur.
