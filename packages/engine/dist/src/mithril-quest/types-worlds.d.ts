export type WorldId = string;
export type EraId = string;
export interface EraDefinition {
    id: EraId;
    worldId: WorldId;
    name: string;
    shortDescription: string;
    recommendedLevels: [number, number];
}
export interface WorldDefinition {
    id: WorldId;
    name: string;
    tagline: string;
    eras: EraDefinition[];
}
