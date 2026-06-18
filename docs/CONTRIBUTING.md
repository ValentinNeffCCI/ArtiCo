# Guide de contribution — ArtiCo

> Voir aussi : [README racine](../README.md) · [Backend](./BACKEND.md) · [Frontend](../Frontend/README.md) · [Base de données](./DATABASE.md)

---

## Prérequis

- **Docker** + **Docker Compose** (mode de développement recommandé) ;
- ou **Node.js 22** + **npm** pour lancer API et Frontend séparément.

Mise en route :

```bash
cp .env.example .env      # puis renseigner les valeurs
docker compose up --build
```

Détails des services et ports : [README racine](../README.md#environnement-de-développement).

---

## Workflow Git

Le projet suit un flux à deux branches longues :

| Branche | Rôle |
|--|--|
| **`main`** | Production. Chaque push y **déclenche le déploiement** automatique. Protégée. |
| **`develop`** | Intégration des fonctionnalités avant passage en production. |
| **`feature/*`**, **`fix/*`** | Branches de travail, créées depuis `develop`. |

### Cycle type

```bash
git switch develop
git pull
git switch -c feature/ma-fonctionnalite     # ou fix/mon-correctif
# … commits …
git push -u origin feature/ma-fonctionnalite
# puis ouvrir une Pull Request vers develop
```

- Préfixer la branche par **`feature/`** (nouveauté) ou **`fix/`** (correctif), en *kebab-case*.
- Une PR par sujet, la plus petite possible.
- Les PR vers `develop` et `main` déclenchent la [CI](#intégration-continue-ci) ; elle doit être **verte** pour merger.

### Convention de commits

Les messages suivent la forme **Conventional Commits**, avec un *scope* optionnel :

```
<type>(<scope>): <description courte à l'impératif>
```

Types utilisés dans l'historique : `feat`, `fix`, `chore`, `docs`, `refactor`, `test`.

```
feat(client): rework style forms et fonctionnement geolocalisation
fix(docker): chemin des certs basé sur la valeur du .env
docs: mise à jour du readme
test: corrige un import inutilisé dans le service
```

> `client` = frontend, `api`/`server` = backend, `rgpd`, `docker`, `ci`… selon le périmètre.

---

## Tests

### Backend (obligatoire en CI)

Tests **Jest** dans `API/__tests__/` (unitaires par ressource sous `unit/`, plus `feature/`).

```bash
cd API
npm test            # jest --coverage
```

- Ajouter un test pour toute nouvelle logique de **service** ou **controller**.
- Nommer les fichiers `*.spec.js`, à côté de la ressource testée (`__tests__/unit/<ressource>/`).
- Les mocks sont nettoyés entre chaque test (`clearMocks: true` dans `jest.config.js`).

### Frontend

```bash
cd Frontend
npm run build       # doit réussir (vérifié en CI)
npm run lint        # ESLint
```

Il n'y a pas (encore) de tests unitaires front : le **build Vite** sert de garde-fou en CI.

---

## Intégration continue (CI)

Workflow `.github/workflows/ci.yml`, déclenché sur chaque **Pull Request** vers `develop` et `main`. Trois jobs, tous **requis** pour merger :

| Job | Action |
|--|--|
| **Tests API (Jest)** | `npm test` dans `API/` |
| **Build Frontend (Vite)** | `npm run build` dans `Frontend/` (avec `VITE_API_URL=/api`) |
| **Build images de prod** | `docker compose -f docker-compose.prod.yaml build` |

Le déploiement (`deploy.yml`) ne se déclenche que sur **push vers `main`** : voir [README racine](../README.md#déploiement-cd).

---

## Checklist avant d'ouvrir une PR

- [ ] La branche part de `develop` et cible `develop`.
- [ ] `cd API && npm test` passe.
- [ ] `cd Frontend && npm run build` passe.
- [ ] Schéma Prisma modifié → migration générée et committée (voir [DATABASE.md](./DATABASE.md#migrations)).
- [ ] Pas de secret ni de `.env` committé.
- [ ] Messages de commit au format `type(scope): description`.
- [ ] Documentation mise à jour si le comportement public change.

---

## Conventions de code

- **Backend** : CommonJS, architecture en couches stricte (router → controller → service → repository → resource). Détails et recette « ajouter un endpoint » : [BACKEND.md](./BACKEND.md).
- **Frontend** : React 19, CSS Modules importés sous `classes`, accès API via `useAPI`, auth via `useAuth`. Détails : [Frontend/README.md](../Frontend/README.md).
- **Secrets** : jamais en dur. Toutes les variables passent par `.env` (modèle dans `.env.example`).
