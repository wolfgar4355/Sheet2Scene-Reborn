import { type SeasonName, type DayPhase } from "../time";
import type { WeatherKind } from "../../ambient";
export interface UseSeasonOptions {
    updateIntervalMs?: number;
    mobileMode?: boolean;
    biome?: "generic" | "forest" | "desert" | "mountain" | "city" | "coast" | "void";
    worldId?: string;
}
export interface SeasonData {
    name: SeasonName;
    phase: DayPhase;
    weather: WeatherKind;
    intensity: number;
    ambientColor: string;
    biome?: UseSeasonOptions["biome"];
    worldId?: string;
}
export default function useSeason(opts?: UseSeasonOptions): SeasonData;
export type { SeasonName, DayPhase };
