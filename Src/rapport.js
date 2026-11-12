/**
 * Génère le rapport textuel des projets.
 *
 * @param {Array<{ titre: string, categorie: string, annee: number }>} projets
 *   Projets à inclure dans le rapport.
 * @returns {string} Rapport contenant les compteurs par catégorie, les années
 *   extrêmes et les titres ; pour une liste vide, indique qu'il n'y a aucun projet.
 */
export function rapport(projets) {
  const compteurs = projets.reduce((compteurs, projet) => {
    if (projet.categorie === 'web') compteurs.web += 1;
    else if (projet.categorie === 'data') compteurs.data += 1;
    else compteurs.autre += 1;
    return compteurs;
  }, { web: 0, data: 0, autre: 0 });

  let rapport = [
    'RAPPORT DES PROJETS',
    '===================',
    `Web : ${compteurs.web}`,
    `Data : ${compteurs.data}`,
    `Autre : ${compteurs.autre}`,
  ].join('\n') + '\n';

  if (projets.length === 0) {
    rapport += 'Aucun projet\n';
  } else {
    const annees = projets.map(({ annee }) => annee);
    rapport += `Premier projet : ${Math.min(...annees)}\n`;
    rapport += `Dernier projet : ${Math.max(...annees)}\n`;
  }

  let titres = '';
  projets.forEach((projet, index) => {
    titres += `${index === 0 ? '' : ', '}${projet.titre}`;
  });
  return `${rapport}Titres : ${titres}\n`;
}
