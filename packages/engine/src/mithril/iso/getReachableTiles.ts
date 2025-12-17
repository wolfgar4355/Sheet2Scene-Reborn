import type { Vec2 } from "./isoMath";

export function getReachableTiles(
  origin: Vec2,
  movement: number,
  mapW: number,
  mapH: number
): Vec2[] {
  const tiles: Vec2[] = [];

  for (let x = 0; x < mapW; x++) {
    for (let y = 0; y < mapH; y++) {
      const dist = Math.abs(x - origin.x) + Math.abs(y - origin.y);
      if (dist <= movement) {
        tiles.push({ x, y });
      }
    }
  }

  return tiles;
}
