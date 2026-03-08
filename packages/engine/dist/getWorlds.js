// -----------------------------------------------------------------------------
// getWorlds.ts — API interne pour récupérer Worlds + Eras Mithril-Quest
// -----------------------------------------------------------------------------
import { MQ_WORLDS } from "./data/mithril-quest/worlds";
import { MQ_ERAS } from "./data/mithril-quest/eras";
// Retourne tous les mondes MQ
export function getWorlds() {
    return MQ_WORLDS;
}
// Retourne toutes les époques pour un monde
export function getErasForWorld(worldId) {
    return MQ_ERAS.filter((e) => e.worldId === worldId);
}
export default MQ_WORLDS;
