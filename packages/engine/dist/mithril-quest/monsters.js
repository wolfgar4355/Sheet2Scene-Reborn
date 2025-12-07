// packages/engine/src/mithril-quest/monsters.ts
// --- Dataset officiel MQ ---------------------------------------------------
import { ALL_MONSTERS } from "../data/mithril-quest/bestiary/ALL_MONSTERS";
// 1) Casting explicite pour utiliser ton énorme bestiaire "as-is"
//    (évite de modifier les 2000+ fichiers de créatures)
export const MQ_MONSTERS = ALL_MONSTERS;
// 2) Helpers utilisables partout dans le moteur / UI / encounters
/** Tous les monstres MQ */
export function getAllMonsters() {
    return MQ_MONSTERS;
}
/** Filtrer par tag (ex: undead, boss, demon, ethereal…) */
export function getMonstersByTag(tag) {
    return MQ_MONSTERS.filter((m) => Array.isArray(m.tags) && m.tags.includes(tag));
}
/** Filtrer par CR (challenge rating) */
export function getMonstersByCR(minCR, maxCR) {
    return MQ_MONSTERS.filter((m) => typeof m.cr === "number" &&
        m.cr >= minCR &&
        m.cr <= maxCR);
}
