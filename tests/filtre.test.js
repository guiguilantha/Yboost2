import test from 'node:test';
import assert from 'node:assert/strict';
import { filtrerProjets, trierParAnnee } from '../Src/filtre.js';

const P = [
  { titre: 'Portfolio', categorie: 'web', annee: 2025 },
  { titre: 'Meteo', categorie: 'web', annee: 2026 },
  { titre: 'Notes', categorie: 'data', annee: 2024 },
];

test('filtre par catégorie', () => {
  assert.deepEqual(filtrerProjets(P, 'data').map((p) => p.titre), ['Notes']);
});

test('filtre insensible à la casse', () => {
  assert.equal(filtrerProjets(P, 'WEB').length, 2);
});

test('toutes => tout', () => {
  assert.equal(filtrerProjets(P, 'toutes').length, 3);
});

test('tri décroissant par année', () => {
  assert.deepEqual(trierParAnnee(P).map((p) => p.annee), [2026, 2025, 2024]);
});

test('tri sans modifier le tableau original', () => {
  const original = [...P];

  trierParAnnee(P);

  assert.deepEqual(P, original);
});
