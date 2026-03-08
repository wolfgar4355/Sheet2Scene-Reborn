/**
 * Charge toutes les données GM du monde Mithril-Quest.
 * Fallback vide pour éviter les erreurs de chemin sur Next.js
 */
export declare const getAllGMData: () => {};
/**
 * Type automatiquement inféré à partir du loader
 */
export type GMData = ReturnType<typeof getAllGMData>;
