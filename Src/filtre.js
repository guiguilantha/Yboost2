/**
 * Filtre les projets selon leur catégorie.
 *
 * @param {Array<{ titre: string, categorie: string, annee: number }>} projets
 *   Projets à filtrer.
 * @param {string} categorie Catégorie recherchée, `toutes` ou une chaîne vide
 *   pour conserver tous les projets.
 * @returns {Array<{ titre: string, categorie: string, annee: number }>}
 *   Les projets correspondant à la catégorie, sans modifier le tableau source.
 */
export function filtrerProjets(projets, categorie) {
  if (!categorie || categorie.toLowerCase() === 'toutes') return projets;
  const categorieNormalisee = categorie.toLowerCase();
  return projets.filter((p) => p.categorie.toLowerCase() === categorieNormalisee);
}

/**
 * Trie les projets du plus récent au plus ancien.
 *
 * @param {Array<{ titre: string, categorie: string, annee: number }>} projets
 *   Projets à trier.
 * @returns {Array<{ titre: string, categorie: string, annee: number }>}
 *   Une nouvelle liste triée, le tableau source restant inchangé.
 */
export function trierParAnnee(projets) {
  return [...projets].sort((a, b) => b.annee - a.annee);
}
