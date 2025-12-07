// ---------------------------------------------------------
// src/adapters/gm.adapter.ts
// Loader générique pour récupérer les données Game-Master
// d’un monde (Mithril-Quest dans ton cas)
// ---------------------------------------------------------
import { loadJSONFiles } from "../utils/loaders";
/**
 * Répertoire racine des données GM
 * (Pour Mithril-Quest, tout est sous src/data/mithril-quest/gm/)
 */
const GM_DIR = "data/mithril-quest/gm";
/**
 * Charge toutes les données GM du monde Mithril-Quest.
 * Le loader récupère automatiquement tous les .json trouvés.
 *
 * Retour :
 *   {
 *     encounters: {...},
 *     tables: {...},
 *     generators: {...},
 *     etc.
 *   }
 */
export const getAllGMData = () => {
    return loadJSONFiles(GM_DIR);
};
