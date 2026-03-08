import { type ReactNode } from "react";
import { useCamera } from "./hooks/useCamera";
import type { WeatherState } from "../ambient";
interface SceneContextType {
    camera: ReturnType<typeof useCamera>;
    lightLevel: number;
    season: string;
    phase: string;
    weather: WeatherState;
    ambientColor: string;
    biome?: string;
    worldId?: string;
}
export declare function useScene(): SceneContextType;
export default function SceneController({ biome, worldId, children, }: {
    biome?: string;
    worldId?: string;
    children: ReactNode;
}): JSX.Element;
export {};
