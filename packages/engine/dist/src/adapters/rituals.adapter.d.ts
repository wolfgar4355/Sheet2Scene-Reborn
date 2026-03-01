import * as RitualSources from "../data/mithril-quest/rituals/sources";
/**
 * Retourne toutes les sources individuelles
 * (arcane, divine, nature, nécromancie, esprit, etc.)
 */
export declare function getRitualSources(): typeof RitualSources;
/**
 * Retourne la liste complète de tous les rituels fusionnés
 * contenus dans ALL_RITUALS.
 */
export declare function getAllRituals(): import("../data/mithril-quest/rituals/schema").Ritual[];
/**
 * Retourne un rituel spécifique à partir d'un nom
 * (insensible à la casse).
 * Renvoie null si aucun rituel ne correspond.
 */
export declare function getRitualByName(name: string): import("../data/mithril-quest/rituals/schema").Ritual | null;
