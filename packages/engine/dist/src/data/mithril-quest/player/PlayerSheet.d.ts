export interface MQPlayerSheet {
    name: string;
    race: string;
    class: string;
    era: string;
    background: string;
    alignement: string;
    abilityScores: PlayerAbilityScores;
    languages: string[];
    tools: string[];
    skills: string[];
    level: number;
    progression: any;
    appearance?: PlayerAppearance;
    notes?: string;
}
