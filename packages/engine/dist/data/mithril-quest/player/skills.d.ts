export type AbilityKey = "strength" | "dexterity" | "constitution" | "intelligence" | "wisdom" | "charisma";
export interface MQSkill {
    key: string;
    label: string;
    ability: AbilityKey;
    description: string;
}
export declare const MQ_SKILLS: MQSkill[];
