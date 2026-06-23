# Jeu d'essai — Création d'un formulaire (`POST /formulaire`)

> Jeu d'essai détaillé de la fonctionnalité **création de formulaire** de l'API ArtiCo.
> Reportez le résultat constaté et le verdict (✅ OK / ❌ KO) lors de l'exécution.

## 1. Contexte de la fonctionnalité

La création d'un formulaire est exposée par la route :

```
POST /formulaire
```

Chaîne de traitement (cf. `routers/formulaire-router.js`) :

| Ordre | Middleware / handler | Rôle | Échec → |
|-------|----------------------|------|---------|
| 1 | `authenticated()` | vérifie le token d'accès, charge `req.user` (avec ses entreprises) | `401` |
| 2 | `validate(formulaireCreateSchema)` | valide `name` et `entrepriseId` | `400` |
| 3 | `canCreateForm` | l'utilisateur doit posséder l'entreprise ciblée | `403` |
| 4 | `FormulaireController.createFormulaire` | délègue au service puis répond `201` | — |

Règles de validation (`schemas/Formulaire/formulaireCreateSchema.js`) :

- `name` : requis, non vide (après `trim`), chaîne de caractères.
- `entrepriseId` : requis, entier (`isInt`, casté via `toInt`).

Persistance (`repositories/formulaire-repository.js`) : le formulaire est créé et **rattaché** à l'entreprise. Les `inputs` éventuels (et leurs `options`) sont créés de façon imbriquée ; les `id`/`formulaireId`/`inputId` entrants sont ignorés au profit de ceux générés.

## 2. Données de référence (pré-requis)

À mettre en place avant exécution (seed / fixtures) :

| Réf | Entité | Valeur | Remarque |
|-----|--------|--------|----------|
| U1 | User | `id=1`, propriétaire de l'entreprise E1 | token JWT valide |
| U2 | User | `id=2`, ne possède **pas** E1 | token JWT valide |
| E1 | Entreprise | `id=10`, `ownerId=1` | cible des créations légitimes |
| — | Entreprise | `id=999` inexistante | pour le cas d'erreur |

`TOKEN_U1` / `TOKEN_U2` = jetons d'accès valides des users U1 / U2.

## 3. Cas de test

> En-tête commun (sauf cas non authentifié) : `Authorization: Bearer <token>` et `Content-Type: application/json`.

### CT-01 — Création nominale minimale ✔

- **Objectif** : créer un formulaire valide sans champ.
- **Auth** : `TOKEN_U1`
- **Corps** :
  ```json
  { "name": "Formulaire de contact", "entrepriseId": 10 }
  ```
- **Attendu** : `201 Created` ; corps avec `id` généré, `name` = `"Formulaire de contact"`, `entrepriseId` = `10`, `inputs: []`.
- **Constaté** : _à remplir_
- **Verdict** : _OK / KO_

### CT-02 — Création avec champs et options imbriqués ✔

- **Objectif** : créer un formulaire complet (inputs + options de type `select`).
- **Auth** : `TOKEN_U1`
- **Corps** :
  ```json
  {
    "name": "Demande de devis",
    "entrepriseId": 10,
    "inputs": [
      { "name": "Nom complet", "type": "text", "required": true },
      { "name": "Email", "type": "email", "required": true },
      {
        "name": "Prestation",
        "type": "select",
        "required": false,
        "options": [
          { "value": "Plomberie" },
          { "value": "Électricité" }
        ]
      }
    ]
  }
  ```
- **Attendu** : `201` ; 3 inputs créés avec des `id` neufs et `formulaireId` cohérent ; l'input `select` porte 2 `options` avec des `id` neufs ; les `id`/`inputId` éventuellement envoyés sont ignorés.
- **Constaté** : _à remplir_
- **Verdict** : _OK / KO_

### CT-03 — Nom avec espaces périphériques (trim) ✔

- **Objectif** : vérifier le `trim` du nom.
- **Auth** : `TOKEN_U1`
- **Corps** : `{ "name": "  Inscription  ", "entrepriseId": 10 }`
- **Attendu** : `201` ; `name` enregistré = `"Inscription"`.
- **Constaté** : _à remplir_
- **Verdict** : _OK / KO_

### CT-04 — `entrepriseId` en chaîne numérique (cast) ✔

- **Objectif** : vérifier le `toInt` sur `entrepriseId`.
- **Auth** : `TOKEN_U1`
- **Corps** : `{ "name": "Newsletter", "entrepriseId": "10" }`
- **Attendu** : `201` ; rattachement à l'entreprise `10` (entier).
- **Constaté** : _à remplir_
- **Verdict** : _OK / KO_

### CT-05 — Nom manquant ✘

- **Objectif** : rejeter l'absence de `name`.
- **Auth** : `TOKEN_U1`
- **Corps** : `{ "entrepriseId": 10 }`
- **Attendu** : `400` ; message `"Le nom du formulaire est requis"`.
- **Constaté** : _à remplir_
- **Verdict** : _OK / KO_

### CT-06 — Nom vide / espaces uniquement ✘

- **Objectif** : `notEmpty` après `trim`.
- **Auth** : `TOKEN_U1`
- **Corps** : `{ "name": "   ", "entrepriseId": 10 }`
- **Attendu** : `400` ; message `"Le nom du formulaire est requis"`.
- **Constaté** : _à remplir_
- **Verdict** : _OK / KO_

### CT-07 — `entrepriseId` manquant ✘

- **Objectif** : rejeter l'absence d'entreprise.
- **Auth** : `TOKEN_U1`
- **Corps** : `{ "name": "Contact" }`
- **Attendu** : `400` ; message `"L'entreprise est requise"`.
- **Constaté** : _à remplir_
- **Verdict** : _OK / KO_

### CT-08 — `entrepriseId` non entier ✘

- **Objectif** : rejeter un id non numérique.
- **Auth** : `TOKEN_U1`
- **Corps** : `{ "name": "Contact", "entrepriseId": "abc" }`
- **Attendu** : `400` ; message `"L'entreprise est invalide"`.
- **Constaté** : _à remplir_
- **Verdict** : _OK / KO_

### CT-09 — Utilisateur non authentifié ✘

- **Objectif** : refuser sans token.
- **Auth** : _aucune_
- **Corps** : `{ "name": "Contact", "entrepriseId": 10 }`
- **Attendu** : `401`.
- **Constaté** : _à remplir_
- **Verdict** : _OK / KO_

### CT-10 — Entreprise non possédée par l'utilisateur ✘

- **Objectif** : refuser la création sur l'entreprise d'autrui.
- **Auth** : `TOKEN_U2` (ne possède pas E1)
- **Corps** : `{ "name": "Contact", "entrepriseId": 10 }`
- **Attendu** : `403` ; message `"Vous n'avez pas les droits requis"`.
- **Constaté** : _à remplir_
- **Verdict** : _OK / KO_

### CT-11 — Entreprise inexistante ✘

- **Objectif** : id valide mais non possédé / inexistant.
- **Auth** : `TOKEN_U1`
- **Corps** : `{ "name": "Contact", "entrepriseId": 999 }`
- **Attendu** : `403` (l'utilisateur ne possède pas l'entreprise `999`, bloqué par `canCreateForm` avant tout accès BDD).
- **Constaté** : _à remplir_
- **Verdict** : _OK / KO_

### CT-12 — Type d'input invalide ✘

- **Objectif** : refuser un `type` hors `InputType` (enum Prisma).
- **Auth** : `TOKEN_U1`
- **Corps** :
  ```json
  {
    "name": "Sondage",
    "entrepriseId": 10,
    "inputs": [{ "name": "Note", "type": "slider", "required": true }]
  }
  ```
- **Attendu** : échec de création côté Prisma → `500`/erreur transmise par `error-middleware` ; aucun formulaire persisté.
- **Constaté** : _à remplir_
- **Verdict** : _OK / KO_

## 4. Tableau de synthèse

| N° | Cas | Données clés | Attendu | Verdict |
|----|-----|--------------|---------|---------|
| CT-01 | Nominal minimal | name + entrepriseId | `201` | |
| CT-02 | Inputs + options imbriqués | select + 2 options | `201` | |
| CT-03 | Trim du nom | `"  Inscription  "` | `201`, `"Inscription"` | |
| CT-04 | Cast entrepriseId | `"10"` | `201` | |
| CT-05 | Nom manquant | sans `name` | `400` | |
| CT-06 | Nom vide | `"   "` | `400` | |
| CT-07 | entrepriseId manquant | sans `entrepriseId` | `400` | |
| CT-08 | entrepriseId non entier | `"abc"` | `400` | |
| CT-09 | Non authentifié | pas de token | `401` | |
| CT-10 | Entreprise d'autrui | `TOKEN_U2` | `403` | |
| CT-11 | Entreprise inexistante | `999` | `403` | |
| CT-12 | Type d'input invalide | `"slider"` | erreur, rien persisté | |

## 5. Couverture

- **Validation** : `name` (requis, vide, trim), `entrepriseId` (requis, type, cast) → CT-03 à CT-08.
- **Sécurité** : authentification (CT-09) et autorisation / propriété (CT-10, CT-11).
- **Métier / persistance** : création simple (CT-01), imbrication inputs/options (CT-02), enum `InputType` (CT-12).
