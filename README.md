# Yboost2

Modules JavaScript indépendants pour filtrer et trier des projets, générer un
rapport, valider un formulaire et compter des visites.

## Prérequis

- Node.js 18 ou une version plus récente.

Le projet n'utilise aucune dépendance externe ni fichier `package.json`.

## Utilisation

Les modules sont des modules ES. Depuis la racine du projet :

```bash
node --input-type=module -e "import { filtrerProjets } from './Src/filtre.js'; console.log(filtrerProjets([{ titre: 'Site', categorie: 'web', annee: 2025 }], 'WEB'));"
```

Le tri renvoie une nouvelle liste et laisse la liste d'origine inchangée :

```js
import { trierParAnnee } from './Src/filtre.js';

const projets = [
  { titre: 'A', categorie: 'web', annee: 2024 },
  { titre: 'B', categorie: 'data', annee: 2026 },
];

const tries = trierParAnnee(projets);
```

## Lancer les tests

Lancer toute la suite :

```bash
node --test tests/*.test.js
```

Lancer uniquement les tests du rapport :

```bash
node --test tests/rapport.test.js
```

Les chemins utilisent `Src/` avec un `S` majuscule, conformément à
l'arborescence du projet.
