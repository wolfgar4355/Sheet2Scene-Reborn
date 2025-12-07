// -----------------------------------------------------------------------------
// eras.adapter.ts — Loader des époques MQ pour le moteur
// -----------------------------------------------------------------------------
import { ALL_MQ_ERAS as MQ_ERAS } from "../data/mithril-quest/eras";
/**
 * Retourne toutes les époques disponibles (Mithril-Quest).
 */
export function getAllEras() {
    return MQ_ERAS;
}
/**
 * Retourne une ère précise ou null.
 */
export function getEraById(id) {
    return MQ_ERAS.find((e) => e.id === id) ?? null;
}
/**
 * Retourne toutes les époques d’un monde donné.
 */
export function getErasForWorld(worldId) {
    return MQ_ERAS.filter((e) => e.worldId === worldId);
}
