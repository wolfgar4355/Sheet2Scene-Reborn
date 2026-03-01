import type { IsoConfig, Vec2 } from "./isoMath";
export type PlayerState = {
    pos: Vec2;
    target: Vec2 | null;
    speed: number;
};
export default function PlayerController({ cfg, mapW, mapH, forcedTarget, onArrive, onMove, actorId, }: {
    cfg: IsoConfig;
    mapW: number;
    mapH: number;
    forcedTarget?: Vec2 | null;
    onArrive?: () => void;
    onMove?: (p: Vec2) => void;
    actorId?: string;
}): JSX.Element;
