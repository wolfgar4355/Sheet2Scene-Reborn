// src/getWorlds.ts
import { WORLDS } from "@s2s/fantasy/worlds";
import { ERAS_BY_WORLD } from "@s2s/fantasy/eras";
/**
 * Retourne la liste complète des mondes
 */
export function getWorlds() {
    return WORLDS;
}
/**
 * Retourne toutes les ères associées à un monde donné
 */
export function getErasForWorld(worldId) {
    return ERAS_BY_WORLD[worldId] ?? [];
}
export default WORLDS;
