# Plan de test — API ArtiCo

> Document de référence pour la stratégie et la couverture de test de l'API (back-end Express / Prisma / PostgreSQL).

## 1. Objectifs

- Garantir le bon fonctionnement de chaque endpoint REST (statuts HTTP, payloads, erreurs).
- Vérifier la logique métier des services indépendamment de la base de données.
- Sécuriser les règles d'accès (authentification, rôles, propriété des ressources).
- Valider les schémas de validation des entrées (express-validator).
- Prévenir les régressions via une suite automatisée exécutée en CI.

## 2. Périmètre

### Inclus
- Couches **controllers**, **services**, **repositories**, **middlewares**, **schemas**, **resources**.
- Modules métier : Auth, User, Entreprise, Categorie, Formulaire, Input, Option, Galerie, Submission.

### Exclus
- Tests de la base PostgreSQL réelle (les repositories sont mockés en unitaire).
- Envoi réel d'e-mails (`nodemailer`) et stockage MongoDB des logs (`mongoose`) — mockés.
- Tests front-end (couverts dans `Frontend/`).
- Tests de charge / performance.

## 3. Stratégie & pyramide de tests

| Niveau | Cible | Isolation | Outil | État |
|--------|-------|-----------|-------|------|
| **Unitaire — service** | logique métier, transformation, erreurs `HttpError` | repository mocké | Jest | ✅ existant |
| **Unitaire — controller** | mapping req/res, codes HTTP, délégation au service | service mocké | Jest | ✅ existant |
| **Unitaire — resource** | sérialisation des entités | — | Jest | ✅ partiel (user) |
| **Unitaire — middleware** | auth, validation, accès, parsing, erreurs | req/res/next mockés | Jest | ⚠️ à compléter |
| **Intégration — route** | router + middlewares + controller bout-en-bout | repository/Prisma mocké, `supertest` | Jest + supertest | ❌ à créer |

> La suite actuelle couvre **services** et **controllers** des 9 modules. Les axes prioritaires d'extension sont les **middlewares** et les **tests d'intégration de routes**.

## 4. Environnement & outils

- **Framework** : Jest 30 (`npm test` → `jest --coverage`).
- **Mocks** : `jest.mock()` sur les repositories / utils (`mailer`, `logStore`, `client` Prisma).
- **Intégration (à ajouter)** : `supertest` sur l'app Express exportée depuis `index.js`.
- **Convention** : fichiers `__tests__/unit/<module>/<cible>.spec.js`.
- **Fixtures** : factories locales type `makeCategorie(overrides)` (cf. `categorie-service.spec.js`).

## 5. Conventions d'écriture

- Un `describe` par cible, un `describe` imbriqué par méthode.
- Cas nominal **et** cas d'erreur pour chaque méthode publique.
- Vérifier l'appel au mock (`toHaveBeenCalledWith`) **et** la valeur de retour.
- Erreurs métier via `rejects.toMatchObject({ status })`.

---

## 6. Cas de test transversaux (middlewares)

| Middleware | Cas à couvrir | Résultat attendu |
|------------|---------------|------------------|
| `authenticated()` | token absent / invalide / expiré | `401` |
| `authenticated(true)` | utilisateur authentifié mais non-admin | `403` |
| `authenticated(true)` | utilisateur admin | `next()` |
| `validate(schema)` | champ requis manquant / format invalide | `422` + messages |
| `validate(schema)` | payload valide | `next()` |
| `idParser` | `:id` non numérique | `400` |
| `idParser` | `:id` numérique | `req.params.id` casté en `Int` |
| `entreprise-access` / `formulaire-acces` / `input-access` / `option-access` / `galerie-verification` | ressource non possédée par l'utilisateur (non-admin) | `403` |
| accès | propriétaire ou admin | `next()` |
| `authorization/createFormulaire` & `createInput` & `createOption` | droit de création sur l'entité parente | `403` sinon `next()` |
| `auto-hashing-password` | password présent | password hashé (bcrypt) avant controller |
| `error-middleware` | `HttpError` propagée | statut + message JSON cohérents |
| `image-uploader` (multer) | type/poids de fichier | rejet des fichiers invalides |
| `refreshMiddleware` | refresh token absent / invalide | `401` |

---

## 7. Cas de test par module

> Statut HTTP standard : `200` lecture/maj, `201` création, `204`/`200` suppression, `400` id invalide, `401` non authentifié, `403` accès refusé, `404` introuvable, `422` validation.

### 7.1 Auth (`/auth`)

| Endpoint | Cas | Attendu |
|----------|-----|---------|
| `POST /login` | identifiants valides | `200` + tokens (cookie + access) |
| `POST /login` | mauvais mot de passe / email inconnu | `401` |
| `POST /login` | email mal formé / password vide | `422` |
| `POST /register` | données valides | `201`, password hashé, non renvoyé |
| `POST /register` | name < 5, email invalide, password < 12 | `422` |
| `POST /register` | email/name déjà existant | `409`/`400` (contrainte unique) |
| `POST /forgot-password` | email existant | `200`, reset_token généré, mail envoyé (mocké) |
| `POST /forgot-password` | email inconnu | comportement neutre (pas de fuite d'info) |
| `POST /change-password` | token reset valide + password | `200`, password mis à jour |
| `GET /refresh` | refresh token valide | `200` + nouvel access token |
| `GET /refresh` | refresh token absent/invalide | `401` |
| `POST /logout` | authentifié | `200`, refresh_token effacé |

### 7.2 User (`/user`)

| Endpoint | Cas | Attendu |
|----------|-----|---------|
| `GET /` | admin | `200` liste users |
| `GET /` | non-admin | `403` |
| `GET /me` | authentifié | `200` user courant (sans password) |
| `GET /:id` | admin | `200` |
| `GET /:id` | id inexistant | `404` |
| `PUT /:id` | propriétaire, payload valide | `200`, password re-hashé si fourni |
| `PUT /:id` | non-propriétaire non-admin | `403` |
| `PUT /:id` | payload invalide (schema) | `422` |
| `DELETE /:id` | propriétaire / admin | `200` |
| `DELETE /:id` | non-propriétaire | `403` |
| `PUT /admin/:id` | admin modifie rôle/accès | `200` |
| `PUT /admin/:id` | non-admin | `403` |

### 7.3 Categorie (`/categorie`)

| Endpoint | Cas | Attendu |
|----------|-----|---------|
| `GET /` | public | `200`, entreprises masquées par défaut |
| `GET /:id` | existante | `200` avec entreprises |
| `GET /:id` | inexistante | `404` |
| `POST /` | admin + nom valide | `201` |
| `POST /` | non-admin | `403` |
| `POST /` | nom dupliqué (unique) | `400`/`409` |
| `PUT /:id` | admin | `200` |
| `DELETE /:id` | admin | `200`, `categorieId` des entreprises → `null` (SetNull) |

### 7.4 Entreprise (`/entreprise`)

| Endpoint | Cas | Attendu |
|----------|-----|---------|
| `GET /` | public | `200` liste |
| `GET /:id` | existante / inexistante | `200` / `404` |
| `GET /user/:id` | authentifié | `200` entreprises du user |
| `POST /` | auth + image + payload valide | `201` |
| `POST /` | cp non FR, email invalide, name vide, téléphone invalide | `422` |
| `POST /` | catégorie manquante / non entière | `422` |
| `PUT /:id` | propriétaire | `200` |
| `PUT /:id` | non-propriétaire non-admin | `403` |
| `DELETE /:id` | propriétaire | `200`, cascade (galeries, formulaires) |

### 7.5 Formulaire (`/formulaire`)

| Endpoint | Cas | Attendu |
|----------|-----|---------|
| `GET /` | public | `200` |
| `GET /:id` | existant / inexistant | `200` / `404` |
| `GET /entreprise/:id` | — | `200` formulaires de l'entreprise |
| `POST /` | auth + droit création (entreprise possédée) | `201` |
| `POST /` | name vide / entrepriseId non entier | `422` |
| `POST /` | entreprise non possédée | `403` |
| `PUT /:id` | propriétaire, inclut inputs/options imbriqués | `200` |
| `PUT /:id` | non-propriétaire | `403` |
| `DELETE /:id` | propriétaire | `200`, cascade inputs/options/soumissions |

### 7.6 Input (`/input`)

| Endpoint | Cas | Attendu |
|----------|-----|---------|
| `GET /` | — | `200` |
| `GET /:id` | existant / inexistant | `200` / `404` |
| `GET /formulaire/:id` | — | `200` |
| `DELETE /:id` | propriétaire du formulaire parent | `200`, cascade options |
| `DELETE /:id` | non-propriétaire | `403` |
| Type invalide | (création via formulaire) | type hors `InputType` rejeté |

### 7.7 Option (`/option`)

| Endpoint | Cas | Attendu |
|----------|-----|---------|
| `GET /:id` | existante / inexistante | `200` / `404` |
| `GET /input/:id` | — | `200` |
| `DELETE /:id` | propriétaire (via input→formulaire) | `200` |
| `DELETE /:id` | non-propriétaire | `403` |

### 7.8 Galerie (`/galerie`)

| Endpoint | Cas | Attendu |
|----------|-----|---------|
| `GET /:id` | existante / inexistante | `200` / `404` |
| `GET /entreprise/:id` | — | `200` |
| `POST /` | propriétaire + photo valide | `201`, fichier stocké |
| `POST /` | non-propriétaire | `403` |
| `POST /` | fichier manquant / mauvais type | `400`/`422` |
| `DELETE /:id` | propriétaire | `200`, fichier supprimé |

### 7.9 Submission (`/submission`)

| Endpoint | Cas | Attendu |
|----------|-----|---------|
| `GET /` | authentifié | `200` |
| `GET /` | non authentifié | `401` |
| `GET /:id` | authentifié | `200` / `404` |
| `GET /formulaire/:id` | authentifié | `200` |
| `POST /` | **public**, email + content + formulaireId valides | `201`, e-mail de récap envoyé (mocké) |
| `POST /` | email invalide, content null, formulaireId non entier | `422` |
| `POST /` | formulaireId inexistant | `404`/`400` |
| `DELETE /:id` | authentifié | `200` |

### 7.10 Admin (`/admin`)

| Endpoint | Cas | Attendu |
|----------|-----|---------|
| `GET /users` | admin | `200` users + accès |
| `GET /entreprises` | admin | `200` |
| `PUT /user/:id` | admin modifie accès | `200` |
| Tous | non-admin | `403` |

---

## 8. Critères de couverture & d'acceptation

- **Objectif de couverture** : ≥ 80 % lignes/branches sur `services/` et `controllers/`.
- Chaque méthode publique de service : **≥ 1 cas nominal + 1 cas d'erreur**.
- Chaque route protégée : **≥ 1 cas refus (`401`/`403`) + 1 cas autorisé**.
- Chaque schéma de validation : **≥ 1 cas invalide par règle critique** (format, requis, type).
- La suite doit passer en CI (`npm test`) avant tout merge sur `main`.

## 9. Reste à faire (backlog)

1. Tests unitaires des **middlewares** (auth, validate, accès, idParser, error).
2. Tests d'**intégration** des routers avec `supertest` (app Express + repositories mockés).
3. Compléter les **resources** (entreprise, formulaire…) sur le modèle de `user-resource.spec.js`.
4. Vérifier les **cascades** Prisma (delete entreprise/formulaire) en intégration.
5. Cas limites **upload** (multer) : taille max, extensions autorisées.
