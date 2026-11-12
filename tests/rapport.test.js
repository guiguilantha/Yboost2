// Test de caractérisation : il fige le comportement actuel de rapport().
// Il doit rester VERT avant ET après le nettoyage.
import test from 'node:test';
import assert from 'node:assert/strict';
import { rapport } from '../Src/rapport.js';

test('rapport avec projets', () => {
  const p = [
    { titre: 'A', categorie: 'web', annee: 2025 },
    { titre: 'B', categorie: 'data', annee: 2023 },
    { titre: 'C', categorie: 'jeu', annee: 2026 },
    { titre: 'D', categorie: 'web', annee: 2024 },
  ];
  assert.equal(rapport(p),
    'RAPPORT DES PROJETS\n===================\nWeb : 2\nData : 1\nAutre : 1\n' +
    'Premier projet : 2023\nDernier projet : 2026\nTitres : A, B, C, D\n');
});

test('rapport vide', () => {
  assert.equal(rapport([]),
    'RAPPORT DES PROJETS\n===================\nWeb : 0\nData : 0\nAutre : 0\n' +
    'Aucun projet\nTitres : \n');
});
