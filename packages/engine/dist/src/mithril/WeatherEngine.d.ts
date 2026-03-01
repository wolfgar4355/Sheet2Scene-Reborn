import { type ReactNode } from "react";
import { type SeasonData, type UseSeasonOptions } from "./hooks/useSeason";
import type { WeatherState, WeatherKind } from "../ambient";
export type WeatherPhase = "calm" | "rising" | "peak" | "fading";
export type WeatherEvent = {
    type: "LIGHTNING_STRIKE";
    distance01: number;
    atMs: number;
} | {
    type: "WEATHER_CHANGED";
    weather: WeatherState;
    atMs: number;
} | {
    type: "INTENSITY_CHANGED";
    intensity: number;
    atMs: number;
};
export type WeatherEngineState = {
    season: SeasonData;
    weather: WeatherState;
    phase: WeatherPhase;
    lastUpdateMs: number;
    nextEventAtMs: number | null;
    biome: UseSeasonOptions["biome"];
    worldId?: string;
};
export type WeatherEngineAPI = {
    state: WeatherEngineState;
    forceWeather: (kind: WeatherKind, intensity?: number) => void;
    transitionTo: (kind: WeatherKind, opts?: {
        durationMs?: number;
        targetIntensity?: number;
    }) => void;
    subscribe: (fn: (evt: WeatherEvent) => void) => () => void;
};
export declare function useWeather(): WeatherEngineAPI;
export interface WeatherEngineProviderProps {
    children: ReactNode;
    biome?: UseSeasonOptions["biome"];
    worldId?: string;
    tickMs?: number;
    followSeasonBaseline?: boolean;
}
export default function WeatherEngineProvider({ children, biome, worldId, tickMs, followSeasonBaseline, }: WeatherEngineProviderProps): JSX.Element;
