export interface QuestSeed {
    key: string;
    description: string;
    complications?: string[];
    rewards?: string[];
}
export declare const QUEST_SEEDS: QuestSeed[];
export interface NPCArchetype {
    key: string;
    label: string;
    role: string;
    attitude: string[];
}
export declare const NPC_ARCHETYPES: NPCArchetype[];
