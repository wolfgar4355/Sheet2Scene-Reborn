import type { Monster } from "../types";
export declare const MQ_MONSTERS: Monster[];
/** Tous les monstres MQ */
export declare function getAllMonsters(): Monster[];
/** Filtrer par tag (ex: undead, boss, demon, ethereal…) */
export declare function getMonstersByTag(tag: string): Monster[];
/** Filtrer par CR (challenge rating) */
export declare function getMonstersByCR(minCR: number, maxCR: number): Monster[];
