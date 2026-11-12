/**
 * Vérifie qu'une adresse contient un utilisateur, un `@` et un domaine
 * comportant au moins un point, sans espace.
 *
 * @param {string} email Adresse à vérifier.
 * @returns {boolean} `true` si l'adresse respecte ce format, sinon `false`.
 */
export function validerEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

/**
 * Vérifie qu'un message contient au moins dix caractères après suppression
 * des espaces au début et à la fin.
 *
 * @param {string} message Message à vérifier.
 * @returns {boolean} `true` si le message est assez long, sinon `false`.
 */
export function validerMessage(message) {
  return message.trim().length >= 10;
}

/**
 * Valide les champs du formulaire de contact.
 *
 * @param {{ nom: string, email: string, message: string }} formulaire Champs
 *   du formulaire à vérifier.
 * @returns {{ nom?: string, email?: string, message?: string }} Erreurs
 *   indexées par nom de champ, ou objet vide si tout est valide.
 */
export function validerFormulaire({ nom, email, message }) {
  const erreurs = {};
  if (!nom || nom.trim() === '') erreurs.nom = 'Nom obligatoire';
  if (!validerEmail(email)) erreurs.email = 'Email invalide';
  if (!validerMessage(message)) erreurs.message = 'Message trop court (10 caractères min.)';
  return erreurs;
}
