/**
 * COMBAT AVANCÉ — Sheet2Scene v1.5
 * Système compatible VTT & génération automatique
 */
export interface GridPosition {
    x: number;
    y: number;
}
export type CombatStatus = "stunned" | "prone" | "burning" | "frozen" | "bleeding" | "poisoned" | "charmed" | "frightened" | "restrained" | "blinded" | "invisible" | "concentrating";
export interface AdvancedCombatant {
    id: string;
    name: string;
    hp: number;
    ac: number;
    speed: number;
    initiative: number;
    statuses: CombatStatus[];
    position: GridPosition;
    isPlayer: boolean;
    conditions?: string[];
    reach?: number;
}
export type CoverType = "none" | "half" | "three-quarters" | "full";
export declare const COVER_BONUS: Record<CoverType, number>;
export declare function getCoverBonus(cover: CoverType): number;
export interface LineOfSightCheck {
    source: GridPosition;
    target: GridPosition;
    obstacles: GridPosition[];
}
export declare function hasLineOfSight(check: LineOfSightCheck): boolean;
export declare function canMove(combatant: AdvancedCombatant, target: GridPosition): boolean;
export declare function rollInitiative(dexterityMod: number): number;
export interface AdvancedAttackRoll {
    bonus: number;
    targetAC: number;
    cover: CoverType;
    damageFormula: string;
}
export interface AdvancedAttackResult {
    hit: boolean;
    critical: boolean;
    damage: number;
    effectiveAC: number;
}
export declare function rollAdvancedAttack({ bonus, targetAC, cover, damageFormula, }: AdvancedAttackRoll): AdvancedAttackResult;
