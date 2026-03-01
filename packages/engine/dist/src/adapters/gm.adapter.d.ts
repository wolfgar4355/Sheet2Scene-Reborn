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
export declare const getAllGMData: () => any;
/**
 * Type automatiquement inféré à partir du loader
 * -> évite les erreurs lors de l’usage dans le moteur
 */
export type GMData = ReturnType<typeof getAllGMData>;
