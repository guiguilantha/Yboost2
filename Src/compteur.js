/**
 * Incrémente le nombre de visites stocké sous la clé `visites`.
 *
 * @param {{ getItem(key: string): string | null, setItem(key: string, value: number): void }} storage
 *   Objet compatible avec l'interface utilisée de `localStorage`.
 * @returns {number} La nouvelle valeur après incrément.
 * @remarks La clé `visites` doit déjà contenir un nombre décimal valide.
 *   Une valeur absente ou non numérique produit `NaN`.
 */
export function incrementer(storage) {
  const n = parseInt(storage.getItem('visites'));
  storage.setItem('visites', n + 1);
  return n + 1;
}
