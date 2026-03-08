import type { Vec2 } from "./isoMath";
export type TileType = string;
export type TileInfo = {
    x: number;
    y: number;
    type: TileType;
    walkable: boolean;
    cost: number;
    occupiedBy?: string;
};
export type IsoGrid = {
    w: number;
    h: number;
    tiles: TileInfo[];
};
export type GridActor = {
    id: string;
    pos: Vec2;
    kind?: string;
    hp?: number;
};
export declare function idx(x: number, y: number, w: number): number;
export declare function inBounds(x: number, y: number, w: number, h: number): boolean;
export declare function defaultWalkable(type: TileType): boolean;
export declare function defaultCost(type: TileType): number;
export declare function buildIsoGrid(args: {
    w: number;
    h: number;
    tiles: TileType[];
    actors?: GridActor[];
    keepDeadOccupied?: boolean;
}): IsoGrid;
export declare function getTile(grid: IsoGrid, x: number, y: number): TileInfo | null;
