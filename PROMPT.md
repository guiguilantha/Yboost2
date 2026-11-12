# Historique des prompts — Yboost2

Ce fichier regroupe les demandes formulées pendant les différentes étapes du
projet et les résultats obtenus.

## 1. Identifier les tests qui échouent

### Prompt

> Donne-moi les tests qui échouent.

### Résultat

Les quatre fichiers de tests échouaient avec `ERR_MODULE_NOT_FOUND` :

- `tests/compteur.test.js`
- `tests/filtre.test.js`
- `tests/rapport.test.js`
- `tests/validation.test.js`

La cause était une différence de casse entre les imports `src/` et le dossier
réel `Src/`.

## 2. Préparer un prompt de correction

### Prompt

> Donne-moi une liste pour un prompt.

### Résultat

Un prompt de correction a été préparé pour :

- corriger les chemins d’import ;
- vérifier les fonctions de filtrage, de tri et de validation ;
- relancer les tests avec `node --test tests/*.test.js`.

## 3. Donner uniquement les noms des tests

### Prompt

> Donne juste les noms.

### Résultat

Les fichiers suivants ont été listés :

- `tests/compteur.test.js`
- `tests/filtre.test.js`
- `tests/rapport.test.js`
- `tests/validation.test.js`

## 4. Corriger les tests échoués

### Prompt

> Plusieurs tests échouent. Explique la cause, puis applique seulement ensuite
> un correctif.

### Corrections réalisées

- Remplacement des imports `../src/` par `../Src/`.
- Filtrage insensible à la casse.
- Gestion de la catégorie `toutes` ou vide.
- Tri décroissant par année.
- Préservation du tableau original lors du tri.
- Validation des emails avec un point dans le domaine.
- Refus des messages composés uniquement d’espaces.

### Validation

```text
15 tests réussis
0 test échoué
```

## 5. Vérifier l’exigence de non-modification du tri

### Prompt

> Relisez les commentaires `// Spec :` de `src/filtre.js`. Une exigence n'est
> vérifiée par aucun test. Trouvez-la et ajoutez le test manquant.

### Exigence trouvée

```js
// Ne modifie pas le tableau d'entrée.
```

### Test ajouté

Le test vérifie que `trierParAnnee` ne modifie pas le tableau reçu.

### Correction

Le tri utilise une copie :

```js
return [...projets].sort((a, b) => b.annee - a.annee);
```

### Validation

```text
16 tests réussis
0 test échoué
```

## 6. Vérifier le test du rapport

### Prompt

> Lancez `npm test -- test/rapport.test.js` : il doit être vert.

### Résultat

La commande n'a pas pu être exécutée car le projet ne possède pas de
`package.json`.

La commande fonctionnelle est :

```bash
node --test tests/rapport.test.js
```

## 7. Refactoriser le rapport

### Prompt

> Refactoriser et nettoyer `src/rapport.js` sans changer la sortie exacte, les
> cas limites comme la liste vide, ni ajouter de dépendance.

### Corrections réalisées

- Remplacement des boucles répétitives par `reduce`, `map` et `forEach`.
- Utilisation de constantes et de gabarits de chaîne.
- Conservation exacte du format du rapport.
- Conservation du comportement avec une liste vide.
- Aucune dépendance ajoutée.

### Validation

```text
tests/rapport.test.js : 2 réussis, 0 échoué
Suite complète : 16 réussis, 0 échoué
```

## 8. Comparer le code avant et après

### Prompt

> Comparez avant/après : nombre de lignes, lisibilité. Notez une chose que
> l'IA a bien faite et une chose que vous avez dû lui imposer.

### Résultat

- Avant : 34 lignes.
- Après : 30 lignes.
- Réduction : 4 lignes.

L'IA a bien conservé le comportement et le format de sortie. Il a fallu lui
imposer la conservation stricte de la sortie et des cas limites.

## 9. Ajouter les JSDoc et le README

### Prompt

> Générez des docstrings JSDoc pour les fonctions de `src/`, relisez-les, puis
> générez un `README.md` avec l'usage, des exemples et la manière de lancer les
> tests. Vérifiez chaque commande.

### Corrections réalisées

- Ajout de JSDoc dans les quatre modules de `Src/`.
- Documentation du comportement réel de `incrementer`.
- Création de `README.md`.
- Ajout d'exemples d'utilisation.
- Documentation des commandes de test.

### Validation

```text
Exemple d'utilisation : OK
node --test tests/*.test.js : 16 réussis, 0 échoué
node --test tests/rapport.test.js : 2 réussis, 0 échoué
```

## 10. Créer une entrée visuelle

### Prompt

> Peux-tu faire l'entrée visuelle et la ranger dans un fichier à part ?

### Résultat

Création de [`index.html`](./index.html), qui contient :

- l'affichage des projets ;
- le filtre par catégorie ;
- le tri par année ;
- le rapport ;
- le compteur de visites ;
- le formulaire de contact ;
- la validation du formulaire.

### Lancement

```bash
python3 -m http.server 8000
```

Puis ouvrir :

```text
http://localhost:8000/index.html
```

### Validation

- La page HTML est accessible.
- Les modules JavaScript sont accessibles.
- Les 16 tests passent.

## État final

Le projet contient maintenant :

- les modules JavaScript dans `Src/` ;
- les tests dans `tests/` ;
- la page visuelle `index.html` ;
- la documentation `README.md` ;
- cet historique dans `PROMPT.md`.
