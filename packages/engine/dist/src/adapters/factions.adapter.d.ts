import { FACTIONS } from "../data/mithril-quest/factions";
export type FactionId = keyof typeof FACTIONS;
export interface Faction {
    id: FactionId;
    label: (typeof FACTIONS)[FactionId];
}
/**
 * Retourne toutes les factions sous forme de tableau.
 */
export declare function getAllFactions(): Faction[];
/**
 * Retourne une faction précise. Si l’id est inconnu, renvoie null.
 */
export declare function getFaction(id: FactionId): Faction | null;
