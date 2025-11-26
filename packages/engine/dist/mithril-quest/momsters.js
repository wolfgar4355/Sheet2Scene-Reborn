// packages/engine/src/mithril-quest/monsters.ts
// Toutes tes créatures Fantasy
import { ALL_MONSTERS } from "../../../src/content/fantasy/bestiary/ALL_MONSTERS";
// 1) Tableau de monstres pour Mithril Quest
//    On force le cast pour NE PAS toucher à tes 2000+ lignes de contenu.
export const MQ_MONSTERS = ALL_MONSTERS;
// 2) Petits helpers pour le moteur & la UI
/** Tous les monstres jouables dans Mithril Quest */
export function getAllMonsters() {
    return MQ_MONSTERS;
}
/** Filtrer par tag (ex: "undead", "boss", etc.) */
export function getMonstersByTag(tag) {
    return MQ_MONSTERS.filter((m) => Array.isArray(m.tags) && m.tags.includes(tag));
}
/** Filtrer par CR minimum/maximum */
export function getMonstersByCR(minCR, maxCR) {
    return MQ_MONSTERS.filter((m) => m.cr >= minCR && m.cr <= maxCR);
}
