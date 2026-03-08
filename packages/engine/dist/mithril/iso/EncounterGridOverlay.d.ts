import type { IsoConfig } from "./isoMath";
import type { IsoGrid } from "./isoGrid";
export default function EncounterGridOverlay({ grid, cfg, showBlocked, showOccupied, opacity, }: {
    grid: IsoGrid;
    cfg: IsoConfig;
    showBlocked?: boolean;
    showOccupied?: boolean;
    opacity?: number;
}): JSX.Element;
