// ---------------------------------------------------------
// src/adapters/gm.adapter.ts
// Loader générique pour récupérer les données Game-Master
// d’un monde (Mithril-Quest dans ton cas)
// ---------------------------------------------------------
/**
 * Répertoire racine des données GM
 * (Pour Mithril-Quest, tout est sous src/data/mithril-quest/gm/)
 */
const GM_DIR = "data/mithril-quest/gm";
/**
 * Charge toutes les données GM du monde Mithril-Quest.
 * Fallback vide pour éviter les erreurs de chemin sur Next.js
 */
export const getAllGMData = () => {
    return {};
};
