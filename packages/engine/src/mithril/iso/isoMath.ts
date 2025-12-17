// src/mithril/iso/isoMath.ts
export type Vec2 = { x: number; y: number };

export type IsoConfig = {
  tileW: number; // ex: 96
  tileH: number; // ex: 48
  origin: Vec2;  // centre écran
};

export function worldToIso(p: Vec2, cfg: IsoConfig): Vec2 {
  const sx = (p.x - p.y) * (cfg.tileW / 2);
  const sy = (p.x + p.y) * (cfg.tileH / 2);
  return { x: cfg.origin.x + sx, y: cfg.origin.y + sy };
}

export function isoToWorld(s: Vec2, cfg: IsoConfig): Vec2 {
  const dx = s.x - cfg.origin.x;
  const dy = s.y - cfg.origin.y;
  const x = dx / (cfg.tileW / 2) / 2 + dy / (cfg.tileH / 2) / 2;
  const y = dy / (cfg.tileH / 2) / 2 - dx / (cfg.tileW / 2) / 2;
  return { x, y };
}

export function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

// -----------------------------------------------------------------------------
// IA / Tactique
// -----------------------------------------------------------------------------

// Distance en tiles (Manhattan)
export function tileDistance(a: Vec2, b: Vec2): number {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}
// À portée (attaque, interaction, aura, etc.)
export function inRange(a: Vec2, b: Vec2, range = 1): boolean {
  return tileDistance(a, b) <= range;
}
