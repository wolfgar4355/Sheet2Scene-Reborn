export type WorldId = "fantasy";
export type FantasyEraId = "age-of-heroes" | "ancient-age" | "dark-ages" | "high-kingdoms" | "arcane-renaissance" | "mystic-age";
export type EraId = FantasyEraId;
export interface EraDefinition {
    id: EraId;
    worldId: WorldId;
    name: string;
    shortDescription: string;
    recommendedLevels?: [number, number];
}
export interface WorldDefinition {
    id: WorldId;
    name: string;
    tagline?: string;
    eras: EraDefinition[];
}
