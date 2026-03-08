/**
 * SYSTÈME DE COMBAT — S2S Fantasy
 */
export interface CombatState {
    round: number;
    participants: Combatant[];
}
export interface Combatant {
    id: string;
    name: string;
    initiative: number;
    hp: number;
    ac: number;
    speed: number;
    status?: string[];
    isPlayer: boolean;
}
export interface AttackResult {
    hit: boolean;
    critical: boolean;
    damage: number;
}
export interface AttackRoll {
    bonus: number;
    targetAC: number;
    damageFormula: string;
}
export declare function rollAttack({ bonus, targetAC, damageFormula }: AttackRoll): AttackResult;
export declare function parseDiceFormula(formula: string): number;
export declare const COMBAT_ACTIONS: readonly ["Attaquer", "Lancer un sort", "Se déplacer", "Se défendre", "Aider", "Désengager", "Esquiver", "Utiliser un objet"];
export type CombatAction = typeof COMBAT_ACTIONS[number];
