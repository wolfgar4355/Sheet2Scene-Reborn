export type Vec2 = {
    x: number;
    y: number;
};
export type IsoConfig = {
    tileW: number;
    tileH: number;
    origin: Vec2;
};
export declare function worldToIso(p: Vec2, cfg: IsoConfig): Vec2;
export declare function isoToWorld(s: Vec2, cfg: IsoConfig): Vec2;
export declare function clamp(n: number, a: number, b: number): number;
export declare function tileDistance(a: Vec2, b: Vec2): number;
export declare function inRange(a: Vec2, b: Vec2, range?: number): boolean;
