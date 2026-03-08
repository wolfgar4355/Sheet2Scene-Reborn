/**
 * RÈGLES DE BASE — Sheet2Scene Fantasy
 * (version 100% originale & légale)
 */
export interface DifficultyClass {
    label: string;
    dc: number;
    description: string;
}
export declare const CORE_DIFFICULTIES: DifficultyClass[];
export interface AbilityCheck {
    ability: string;
    difficulty: DifficultyClass;
    modifier: number;
}
export declare function resolveCheck(check: AbilityCheck): boolean;
export declare const ACTION_TYPES: readonly ["Action", "Bonus Action", "Réaction", "Mouvement"];
export type ActionType = typeof ACTION_TYPES[number];
