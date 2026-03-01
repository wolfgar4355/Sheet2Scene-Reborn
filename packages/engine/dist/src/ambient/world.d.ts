export interface WorldAmbientInput {
    biome?: string;
    dayPhase?: "day" | "night" | "morning" | "evening";
    inside?: boolean;
}
export declare function pickWorldAmbient(ctx: WorldAmbientInput): string | undefined;
