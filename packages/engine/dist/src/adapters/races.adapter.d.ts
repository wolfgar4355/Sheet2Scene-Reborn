import * as RACES from "../data/mithril-quest/races";
export type Race = (typeof RACES)[keyof typeof RACES][number];
/**
 * Retourne toutes les races sous forme de tableau simple.
 */
export declare function getAllRaces(): Race[];
/**
 * Regroupe les races par type (ex: "humanoid", "fey", "beast", etc.)
 */
export declare function getRacesByType(): Record<string, Race[]>;
