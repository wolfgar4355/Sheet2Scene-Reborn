import type { MQEra } from "../data/mithril-quest/eras";
/**
 * Retourne toutes les époques disponibles (Mithril-Quest).
 */
export declare function getAllEras(): MQEra[];
/**
 * Retourne une ère précise ou null.
 */
export declare function getEraById(id: string): MQEra | null;
/**
 * Retourne toutes les époques d’un monde donné.
 */
export declare function getErasForWorld(worldId: string): MQEra[];
