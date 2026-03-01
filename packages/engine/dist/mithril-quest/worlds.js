// packages/engine/src/mithril-quest/worlds.ts
// Données des mondes
import { MQ_WORLDS } from "../data/mithril-quest/worlds/worlds";
// Données des ères
import { MQ_ERAS } from "../data/mithril-quest/eras";
// --- Constantes ------------------------------------------------------------
export const MITHRIL_QUEST_WORLD_ID = "mithril-quest";
// --- Fonctions -------------------------------------------------------------
/** Retourne toutes les ères associées au monde donné */
export function getErasForWorld(worldId = MITHRIL_QUEST_WORLD_ID) {
    return MQ_ERAS.filter((e) => e.worldId === worldId);
}
/** Retourne le monde principal */
export function getMainWorld() {
    return MQ_WORLDS.find(w => w.isMain) ?? MQ_WORLDS[0];
}
/** Liste complète des mondes */
export function getWorlds() {
    return MQ_WORLDS;
}
/** Alias utilitaire */
export function getMQWorldEras(worldId) {
    return MQ_ERAS.filter((e) => e.worldId === worldId);
}
// --- Export par défaut -----------------------------------------------------
export default MQ_WORLDS;
