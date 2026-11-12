import test from 'node:test';
import assert from 'node:assert/strict';
import { validerEmail, validerMessage, validerFormulaire } from '../Src/validation.js';

test('email valide', () => assert.equal(validerEmail('a@b.fr'), true));
test('email sans point dans le domaine', () => assert.equal(validerEmail('a@b'), false));
test('email avec espace', () => assert.equal(validerEmail('a b@c.fr'), false));
test('message de 10 caractères', () => assert.equal(validerMessage('0123456789'), true));
test('message fait d\'espaces', () => assert.equal(validerMessage('            '), false));
test('formulaire valide => {}', () => {
  assert.deepEqual(
    validerFormulaire({ nom: 'Ada', email: 'ada@x.io', message: 'Bonjour, je vous écris.' }),
    {},
  );
});
test('formulaire vide => 3 erreurs', () => {
  assert.deepEqual(Object.keys(validerFormulaire({ nom: '', email: '', message: '' })).sort(),
    ['email', 'message', 'nom']);
});
