export interface FantasySkill {
    key: string;
    label: string;
    ability: AbilityKey;
    description: string;
}
export type AbilityKey = "strength" | "dexterity" | "constitution" | "intelligence" | "wisdom" | "charisma";
export interface MQTool {
    key: string;
    label: string;
    description: string;
}
export interface MQLanguage {
    key: string;
    label: string;
    script?: string;
    description: string;
}
export interface FantasyBackgroundDef {
    key: string;
    label: string;
    description: string;
    suggestedSkills: string[];
    suggestedTools?: string[];
    suggestedLanguages?: string[];
    startingWealth?: string;
    startingGear?: string[];
}
export interface LevelProgression {
    level: number;
    proficiencyBonus: number;
    abilityScoreIncrease?: boolean;
    feat?: boolean;
    notes?: string;
}
export interface MQPersonalityTrait {
    key: string;
    label: string;
    description: string;
}
export interface MQMotivation {
    key: string;
    label: string;
    description: string;
}
export interface MQMythicOrigin {
    key: string;
    label: string;
    description: string;
}
export interface MQElementalAffinity {
    key: string;
    label: string;
    description: string;
}
export interface MQTotem {
    key: string;
    label: string;
    description: string;
}
export interface MQMark {
    key: string;
    label: string;
    description: string;
}
export interface MQAura {
    key: string;
    label: string;
    description: string;
    visualHint: string;
}
export interface MQPlayerFaction {
    key: string;
    label: string;
    reputationStart: number;
}
export interface MQAlignment {
    key: string;
    label: string;
    description: string;
}
export interface MQAlignmentIcon {
    key: string;
    icon: string;
}
export interface MQAlignmentPose {
    key: string;
    stablePrompt: string;
    cinematicPrompt: string;
    heroicPrompt: string;
}
export interface MQMoralAxis {
    lawChaos: -2 | -1 | 0 | 1 | 2;
    goodEvil: -2 | -1 | 0 | 1 | 2;
}
export interface MQMechanicalTrait {
    key: string;
    label: string;
    description: string;
    effect: string;
}
export interface MQPlayerProfile {
    name: string;
    race: string;
    class: string;
    era: string;
    faction?: string;
    background: string;
    traits?: string[];
    motivations?: string[];
    origin?: string;
    totem?: string;
    elemental?: string;
    mark?: string;
    alignment?: string;
    moralAxis?: MQMoralAxis;
    aura?: string;
    skills?: string[];
    tools?: string[];
    languages?: string[];
    mechanicalTraits?: string[];
    level: number;
    experience?: number;
    aiPose?: string;
    aiPromptOverride?: string;
}
export interface MQPlayerDictionary {
    skills: FantasySkill[];
    tools: MQTool[];
    languages: MQLanguage[];
    backgrounds: FantasyBackgroundDef[];
    levels: LevelProgression[];
    traits: MQPersonalityTrait[];
    motivations: MQMotivation[];
    origins: MQMythicOrigin[];
    elementals: MQElementalAffinity[];
    totems: MQTotem[];
    marks: MQMark[];
    auras: MQAura[];
    factions: MQPlayerFaction[];
    alignments: MQAlignment[];
    alignmentIcons: MQAlignmentIcon[];
    alignmentPoses: MQAlignmentPose[];
    mechanics: MQMechanicalTrait[];
}
