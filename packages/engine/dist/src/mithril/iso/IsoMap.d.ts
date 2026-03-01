import type { IsoConfig } from "./isoMath";
export type TileKind = "grass" | "dirt" | "stone" | "water";
export type IsoMapData = {
    w: number;
    h: number;
    tiles: TileKind[];
};
export declare const IsoMap: import("react").NamedExoticComponent<{
    map: IsoMapData;
    cfg: IsoConfig;
}>;
