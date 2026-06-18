# Guide développeur — Backend (API)

API REST Node.js / Express de l'application ArtiCo. Ce document décrit l'organisation du code et **comment ajouter une fonctionnalité**.

> Voir aussi : [Architecture](./ARCHITECTURE.md) · [Documentation API REST](./Documentation-API.md) · [Base de données](./DATABASE.md) · [README racine](../README.md)

---

## Stack

| Élément | Choix |
|--|--|
| Runtime | **Node.js 22** |
| Framework | **Express** |
| ORM | **Prisma** (adapter `@prisma/adapter-pg`) → PostgreSQL |
| Logs | **Mongoose** → MongoDB (avec repli fichier) |
| Auth | **jsonwebtoken** (JWT par cookies) + **bcrypt** |
| Validation | **express-validator** |
| Upload | **multer** |
| Sécurité | **helmet**, **cors**, **express-rate-limit**, **cookie-parser** |
| Tests | **Jest** |

---

## Point d'entrée (`index.js`)

`index.js` assemble l'application dans cet ordre :

1. **Middlewares globaux** : `express.json()`, `cookieParser()`, `cors({ origin: FRONTEND_URL, credentials: true })`, `rateLimit` (50 req / 15 min, succès ignorés), `helmet` (CSP + CORP cross-origin pour servir les images).
2. **Connexion Mongo** des logs (`connectMongo()`), non bloquante.
3. **Logger** (`middlewares/logger.js`) sur toutes les requêtes.
4. **Routeur `/api`** qui monte chaque sous-routeur (`/auth`, `/entreprise`, `/formulaire`, `/galerie`, `/input`, `/option`, `/submission`, `/user`, `/admin`, `/categorie`).
5. **Statique `/uploads`** : sert les images uploadées (avec en-têtes de cache et `Content-Type` selon l'extension).
6. **`errorMiddleware`** en dernier, puis un 404 fallback.

> `app.set("trust proxy", 1)` : l'API tourne derrière Nginx ; cela permet de récupérer la vraie IP (`X-Forwarded-For`).

---

## Architecture en couches

Chaque ressource suit le même flux. Exemple pour `entreprise` :

```
routers/        entreprise-router.js        définit les routes + chaîne de middlewares
   │
middlewares/    authenticated, validate,    auth, validation, upload, contrôle d'accès…
   │            image-uploader, *-access
   │
controllers/    entreprise-controller.js    lit req, appelle le service, renvoie la réponse HTTP
   │
services/       entreprise-service.js       logique métier, orchestre repo + resource
   │
repositories/   entreprise-repository.js    accès Prisma (seul endroit qui parle à la DB)
   │
resources/      entreprise-resource.js      met en forme la réponse (champs exposés)
```

**Règle d'or : chaque couche ne connaît que la couche immédiatement en dessous.** Un controller n'appelle jamais Prisma directement ; un repository ne met jamais en forme la réponse HTTP.

### Router

Déclare les routes et **compose la chaîne de middlewares**. C'est ici que se lit la politique de sécurité d'une route.

```js
// routers/entreprise-router.js
router.post('/',
    authenticated(),                  // exige un utilisateur connecté
    imageUploader.single('image'),    // multer : champ fichier "image"
    validate(entrepriseCreateSchema), // validation express-validator
    entrepriseController.createEntreprise);

router.put('/:id',
    idParser,                         // caste req.params.id en entier
    authenticated(),
    imageUploader.single('image'),
    validate(entrepriseUpdateSchema),
    verifyAccessEntreprise,           // l'utilisateur est-il propriétaire ?
    entrepriseController.updateEntreprise);
```

### Controller

Fin : extrait les données de `req`, appelle le service, renvoie le bon code HTTP. **Toujours `try/catch` + `next(error)`** pour déléguer la gestion d'erreur au middleware central.

```js
// controllers/entreprise-controller.js
createEntreprise: async (req, res, next) => {
    try {
        if (req.file) req.body.image = req.file.path.replace('\\', '/');
        req.body.ownerId = req.user.id;       // req.user posé par authenticated()
        const entreprise = await entrepriseService.create(req.body);
        return res.status(201).json(entreprise);
    } catch (error) {
        return next(error);
    }
}
```

### Service

Porte la **logique métier** : règles, orchestration de plusieurs repositories, suppression des fichiers liés, transformation via les *resources*. Lève des `HttpError` métier.

```js
// services/entreprise-service.js
delete: async (id) => {
    const entreprise = await entrepriseRepository.findById(id);
    if (!entreprise) throw new HttpError("Pas d'entreprise trouvée");
    // supprime l'image et les photos de galerie du disque…
    await entrepriseRepository.delete(id);
    return true;
}
```

### Repository

**Seul** point de contact avec la base, via le client Prisma partagé (`utils/client.js`). Contient les `findMany`/`findUnique`/`create`/`update`/`delete` et les `include`/`select`.

### Resource

Transforme une entité Prisma en **objet de réponse** : choisit les champs exposés, masque les données sensibles (ex. `password`), gère un mode « détaillé ». Il existe une version unitaire (`*-resource.js`) et une version liste (`collections/*-collection-resource.js`).

```js
// resources/entreprise-resource.js — n'expose jamais l'objet brut
const entrepriseResource = (entreprise, details = false) => {
    if (!entreprise) throw new HttpError("Aucune entreprise trouvée", 404);
    return {
        id: entreprise.id,
        name: entreprise.name,
        // …
        description: details ? entreprise.description : false,
        categorie: entreprise.categorie,
    };
};
```

---

## Authentification & autorisation

- **`middlewares/authenticated.js`** — fabrique de middleware : `authenticated()` exige un utilisateur connecté (vérifie le cookie `artico_token`, charge l'utilisateur, le pose sur `req.user`). `authenticated(true)` exige en plus le rôle **ADMIN**.
- **`middlewares/refreshMiddleware.js`** — utilisé par `GET /auth/refresh` pour régénérer l'access token à partir du `refresh_token`.
- **Contrôles d'accès par ressource** (`entreprise-access.js`, `formulaire-acces.js`, `input-access.js`, `option-access.js`, `user-access.js`) — vérifient que l'utilisateur courant est bien **propriétaire** de la ressource ciblée.
- **`middlewares/auto-hashing-password.js`** — hache le mot de passe (bcrypt) avant enregistrement.

> Détails des cookies, durées de vie et endpoints d'auth : [Documentation-API.md](./Documentation-API.md).

---

## Validation (`express-validator`)

Les schémas vivent dans `schemas/<Domaine>/...Schema.js` (format `checkSchema`). Le middleware `validate(schema)` applique le schéma puis renvoie une **400** structurée en cas d'échec :

```json
{
  "error": "Le code postal est invalide",
  "errors": [{ "field": "cp", "message": "Le code postal est invalide" }]
}
```

Le front sait lire les deux formes (`error` simple ou tableau `errors`).

---

## Gestion d'erreurs

- **`customclasses/HttpError.js`** : `new HttpError(message, status)` → porte `status` et `error`.
- **`middlewares/error-middleware.js`** (monté en dernier) : **journalise** l'erreur (Mongo/fichier) puis, si l'erreur porte un `status`, renvoie `res.status(status).json(err)` ; sinon passe au 404 fallback.

Côté code, **ne jamais répondre directement à une erreur dans un service** : lever un `HttpError` et le laisser remonter via `next(error)` au controller.

---

## Logs (`utils/logStore.js`)

`writeLog(doc)` écrit un document structuré (`type`, `method`, `url`, `status`, `responseTimeMs`, `message`, `stack`, `ip`, `userId`) dans MongoDB s'il est disponible, **sinon bascule sur un repli fichier** (`logs/access.log`, `logs/error.log`) + console. Il ne lève jamais : le logging ne doit pas faire échouer une requête. Voir le [README racine](../README.md#consulter-les-logs) pour la consultation.

---

## Conventions

- **CommonJS** (`require` / `module.exports`).
- Un fichier par couche et par ressource, nommé `<ressource>-<couche>.js`.
- Le client Prisma est **un singleton partagé** (`utils/client.js`) — ne pas instancier `PrismaClient` ailleurs.
- Les controllers renvoient les codes HTTP attendus : `200` (ok), `201` (création), `204` (suppression), `400` (validation), `401`/`403` (auth), `404` (introuvable).

---

## Ajouter un endpoint (recette)

Pour exposer une nouvelle action sur une ressource existante :

1. **Repository** — ajouter la requête Prisma nécessaire.
2. **Resource** — adapter/ajouter la mise en forme si la réponse change.
3. **Service** — ajouter la méthode métier (validation métier, orchestration, `HttpError`).
4. **Controller** — ajouter le handler `(req, res, next)` avec `try/catch` + `next(error)`.
5. **Schéma** (si entrée à valider) — créer `schemas/<Domaine>/...Schema.js`.
6. **Router** — déclarer la route et sa chaîne de middlewares (`authenticated`, `idParser`, `validate`, `*-access`…).
7. **Test** — ajouter un spec sous `__tests__/` (voir [CONTRIBUTING.md](./CONTRIBUTING.md#tests)).

Pour une **nouvelle ressource**, créer les 5 fichiers (`-router`, `-controller`, `-service`, `-repository`, `-resource` + collection), puis monter le routeur dans `index.js` (`apiRouter.use("/maressource", MaRessourceRouter)`).

---

## Lancer le backend en local

Voir le [README racine](../README.md) — le backend démarre dans Docker avec migrations + seed automatiques. En isolé :

```bash
cd API
npm install
npm run dev      # node --watch index.js
npm test         # Jest + couverture
```
