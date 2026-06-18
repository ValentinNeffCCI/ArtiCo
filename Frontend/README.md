# Frontend — ArtiCo

SPA React (Vite) de l'application ArtiCo : référencement d'entreprises d'artisans et création de questionnaires destinés à leurs prospects.

> Documentation transverse : [README racine](../README.md) · [Architecture](../docs/ARCHITECTURE.md) · [API REST](../docs/Documentation-API.md) · [Backend](../docs/BACKEND.md) · [Base de données](../docs/DATABASE.md) · [Contribution](../docs/CONTRIBUTING.md)

---

## Stack technique

| Élément | Choix |
|--|--|
| Framework | **React 19** |
| Build / dev server | **Vite** (HMR) |
| Routing | **react-router-dom 7** (`createBrowserRouter`) |
| Styles | **CSS Modules** + un global **SCSS** (`index.scss`) |
| Icônes | **lucide-react** |
| Notifications | **react-toastify** |
| Markdown | **react-markdown** |

Aucune librairie d'état global (Redux, Zustand…) : l'état d'authentification est porté par un **Context** React, le reste est local aux composants.

---

## Démarrage

Le frontend est prévu pour tourner **dans Docker** avec le reste de la stack (voir [README racine](../README.md)). Le proxy Vite redirige `/api` et `/uploads` vers le backend, ce qui évite tout problème de CORS en local.

```bash
# depuis la racine du dépôt
docker compose up --build
```

Pour un lancement isolé (backend déjà disponible) :

```bash
npm install
npm run dev       # serveur de dev Vite (HMR)
npm run build     # build de production dans dist/
npm run preview   # sert le build de production localement
npm run lint      # ESLint
```

### Variable d'environnement

| Variable | Rôle |
|--|--|
| `VITE_API_URL` | URL de base de l'API. En prod : `/api` (servie par Nginx). En dev : proxifiée par Vite vers le backend. |

Accessible dans le code via `import.meta.env.VITE_API_URL`.

---

## Structure des dossiers (`src/`)

```
src/
├── main.jsx              Point d'entrée : monte <UserProvider> + <RouterProvider>
├── index.scss            Styles globaux + variables CSS (couleurs, classes utilitaires, .modale)
├── App.css               Styles globaux complémentaires
│
├── route/
│   ├── router.jsx        createBrowserRouter : MainLayout, AdminLayout, /connexion, 404
│   └── routes/
│       ├── VisitorRoutes.jsx   Routes publiques + routes USER imbriquées
│       ├── UserRoutes.jsx      Routes protégées (USER / ADMIN)
│       └── AdminRoutes.jsx     Routes back-office (ADMIN)
│
├── contexts/
│   └── UserContext.jsx   Auth globale : user, loading, login(), logout()
│
├── hooks/
│   ├── useAPI.jsx        Wrapper fetch (cookies + refresh auto sur 401)
│   ├── useForm.jsx       État de formulaire générique + soumission
│   └── usePosition.jsx   Géolocalisation (déclenchée à la demande)
│
├── components/           Composants réutilisables (voir ci-dessous)
├── pages/                Une page = une route (souvent un sous-dossier + .module.css)
├── utils/                Petites fonctions utilitaires
├── datas/                Données statiques (JSON)
└── assets/               Images, logos, SVG
```

### Conventions de nommage

- **Une page = un dossier** sous `pages/`, contenant le `.jsx` et son `.module.css`.
- **Composants** regroupés par domaine sous `components/` (`buttons/`, `forms/`, `modales/`, `cards/`, `listes/`…).
- Les modules CSS sont importés sous le nom **`classes`** : `import classes from "./X.module.css"`, puis `className={classes["nom"]}`. Le prop JSX `style={{…}}` reste réservé au style inline.

---

## Routing et protection des routes

Le routeur (`route/router.jsx`) est organisé autour de trois layouts :

| Layout | Contenu | Accès |
|--|--|--|
| `MainLayout` | Header + Footer + pages visiteur et utilisateur | public / connecté |
| `AdminLayout` | Back-office | **ADMIN** uniquement |
| `/connexion` | Page de login (hors layout) | public |

La protection se fait avec **`components/security/ProtectedRoutes.jsx`** : un composant de route (`<Route element={<ProtectedRoute allowedRoles={[…]} />}>`) qui lit `user` / `loading` depuis `useAuth()`.

- tant que `loading` est vrai → ne rend rien (évite un flash de redirection le temps de résoudre la session) ;
- pas d'utilisateur → redirection vers `/` ;
- rôle non autorisé → redirection vers `/`.

> Exemple : la **création d'entreprise** (`/entreprise/nouveau`) est réservée au rôle `USER` ; les admins n'y ont pas accès (cf. `UserRoutes.jsx`).

---

## Authentification (`contexts/UserContext.jsx`)

L'authentification repose sur des **cookies httpOnly** posés par l'API ; le front ne manipule jamais le token directement.

`UserProvider` (monté dans `main.jsx`) :

- au montage, appelle `GET /user/me` pour restaurer la session → `user = { id, role }` ou `false` ;
- expose via `useAuth()` :

| Valeur | Description |
|--|--|
| `user` | `{ id, role }` si connecté, sinon `false` |
| `loading` | `true` tant que la session initiale n'est pas résolue |
| `login(data)` | met à jour `user` après connexion/inscription |
| `logout()` | appelle `POST /auth/logout` puis remet `user` à `false` |

```jsx
import { useAuth } from "../contexts/UserContext";

const { user, loading, login, logout } = useAuth();
```

---

## Accès API (`hooks/useAPI.jsx`)

`useAPI()` retourne `{ query, url }`.

- **`query(suffix, method = "GET", body = false)`** : effectue un `fetch` vers `VITE_API_URL + suffix` avec `credentials: "include"` (les cookies partent automatiquement).
- **Sérialisation du corps** :
  - si le `body` est déjà un `FormData`, il est envoyé tel quel ;
  - s'il contient un `File`/`Blob`, il est converti en `FormData` (les valeurs `null`/`undefined` sont **ignorées** pour ne pas envoyer les chaînes `"null"`) ;
  - sinon, il est envoyé en JSON.
- **Refresh automatique** : sur une réponse `401`, le hook tente `GET /auth/refresh` puis **rejoue la requête**. Si le refresh échoue, il appelle `logout()`.

```jsx
const { query } = useAPI();
const data = await query("/entreprise", "GET");
// query renvoie le JSON, ou `false` en cas d'erreur réseau / session perdue.
```

> `utils/getHeaders.js` (header `Authorization`) est un reliquat : l'authentification courante passe par cookies, pas par header.

---

## Formulaires (`hooks/useForm.jsx`)

`useForm(url, method, defaultValue)` centralise l'état d'un formulaire :

| Valeur | Description |
|--|--|
| `content` | objet courant des champs |
| `changeListener` | handler `onChange` générique (gère `text`, `file`, `checkbox`…) |
| `submitForm(e)` | envoie `content` via `useAPI().query` |
| `setContent` | setter direct (pré-remplissage, reset…) |

### Formulaires dynamiques (`components/forms/CustomForm/`)

Le projet inclut un **constructeur de formulaires** : un artisan définit les champs d'un questionnaire, et le rendu est généré dynamiquement.

- **`Displayer/CustomForm.jsx`** : reçoit un tableau `form` décrivant les champs (`{ name, type, required, value, options… }`) et rend l'input adapté selon `type` (`text`, `textarea`, `select`, `radio`, `checkbox`, `color`, `number`…).
- **`Builder/`** : l'éditeur côté artisan (ajout/édition de champs et d'options).

C'est pourquoi les inputs métier (ex. `CreateEntreprise.jsx`) construisent un tableau `inputs` plutôt que d'écrire le JSX champ par champ.

---

## Géolocalisation (`hooks/usePosition.jsx`)

`PositionProvider` enveloppe les routes visiteur (dans `MainLayout`). La géolocalisation **n'est pas automatique** : elle est déclenchée par l'utilisateur (bouton « Utiliser ma position » sur la page Rechercher).

`usePosition()` expose :

| Valeur | Description |
|--|--|
| `position` | `{ ville, codesPostal }` une fois localisé, sinon `null` |
| `requestPosition()` | lance la demande de géolocalisation navigateur |
| `isLocating` | `true` pendant la résolution |

La position est résolue via l'API publique `geo.api.gouv.fr` (latitude/longitude → commune). Quand elle arrive, la liste d'entreprises pré-remplit ville + code postal et relance la recherche.

---

## Styles

- **Global** : `index.scss` définit les **variables CSS** (`--primary`, `--secondary`, `--light`, `--dark`, `--accent`…), des **classes utilitaires** (`.itim`, `.text-center`, `.flex`…) et la classe overlay **`.modale`** réutilisée par les pop-ups.
- **Local** : chaque composant/page a son **CSS Module** (`*.module.css`), importé sous `classes`, ce qui scope les noms de classes automatiquement.

```jsx
import classes from "./MaPage.module.css";

<main className={classes["page"]}>…</main>
```

---

## Ajouter une page

1. Créer `pages/MaPage/MaPage.jsx` (+ `MaPage.module.css`).
2. L'enregistrer dans le bon fichier de routes :
   - publique → `route/routes/VisitorRoutes.jsx` ;
   - connectée → `route/routes/UserRoutes.jsx` (sous un `ProtectedRoute`) ;
   - back-office → `route/routes/AdminRoutes.jsx`.
3. Consommer les données avec `useAPI`, l'auth avec `useAuth`, les formulaires avec `useForm`.
