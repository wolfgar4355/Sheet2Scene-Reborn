// src/mithril/iso/isoGrid.ts
import type { Vec2 } from "./isoMath";

export type TileType = string;

export type TileInfo = {
  x: number;
  y: number;
  type: TileType;

  walkable: boolean;
  cost: number;

  occupiedBy?: string; // actorId
};

export type IsoGrid = {
  w: number;
  h: number;
  tiles: TileInfo[]; // length = w*h
};

export type GridActor = {
  id: string;
  pos: Vec2; // tiles
  kind?: string;
  hp?: number;
};

export function idx(x: number, y: number, w: number) {
  return y * w + x;
}

export function inBounds(x: number, y: number, w: number, h: number) {
  return x >= 0 && y >= 0 && x < w && y < h;
}

// Règle MVP: water = bloqué, le reste = walkable
export function defaultWalkable(type: TileType): boolean {
  return type !== "water";
}

export function defaultCost(type: TileType): number {
  if (type === "water") return 9999; // non walkable, mais on garde une valeur
  if (type === "stone") return 1;
  if (type === "dirt") return 1;
  return 1;
}

export function buildIsoGrid(args: {
  w: number;
  h: number;
  tiles: TileType[]; // map.tiles
  actors?: GridActor[]; // pour occupancy
  keepDeadOccupied?: boolean; // pour plus tard (loot), default false ici
}): IsoGrid {
  const { w, h, tiles, actors = [], keepDeadOccupied = false } = args;

  const occ = new Map<string, string>(); // "x,y" -> actorId
  for (const a of actors) {
    const dead = (a.hp ?? 1) <= 0;
    if (dead && !keepDeadOccupied) continue;

    const ax = Math.round(a.pos.x);
    const ay = Math.round(a.pos.y);
    if (!inBounds(ax, ay, w, h)) continue;
    occ.set(`${ax},${ay}`, a.id);
  }

  const out: TileInfo[] = new Array(w * h);

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = idx(x, y, w);
      const type = tiles[i] ?? "grass";
      const walkable = defaultWalkable(type);
      const cost = defaultCost(type);
      const occupiedBy = occ.get(`${x},${y}`);

      out[i] = { x, y, type, walkable, cost, occupiedBy };
    }
  }

  return { w, h, tiles: out };
}

export function getTile(grid: IsoGrid, x: number, y: number): TileInfo | null {
  if (!inBounds(x, y, grid.w, grid.h)) return null;
  return grid.tiles[idx(x, y, grid.w)] ?? null;
}
