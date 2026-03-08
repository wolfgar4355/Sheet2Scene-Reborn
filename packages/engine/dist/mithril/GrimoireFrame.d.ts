import { type ReactNode } from "react";
import { useCamera } from "./hooks/useCamera";
import { type SeasonData, type UseSeasonOptions } from "./hooks/useSeason";
export interface MithrilContextValue {
    worldId: string;
    eraId?: string;
    page: number;
    season: SeasonData;
    camera: ReturnType<typeof useCamera>;
}
export declare function useMithril(): MithrilContextValue;
export interface GrimoireFrameProps {
    worldId?: string;
    eraId?: string;
    biome?: UseSeasonOptions["biome"];
    page?: number;
    devMode?: boolean;
    children?: ReactNode;
}
export default function GrimoireFrame({ worldId, eraId, biome, page, devMode, children, }: GrimoireFrameProps): JSX.Element;
