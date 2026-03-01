export interface LevelProgression {
    level: number;
    proficiencyBonus: number;
    abilityScoreIncrease?: boolean;
    feat?: boolean;
    notes?: string;
}
export declare const FANTASY_LEVELS: LevelProgression[];
