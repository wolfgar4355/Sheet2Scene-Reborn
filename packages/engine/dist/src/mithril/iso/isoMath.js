export function worldToIso(p, cfg) {
    const sx = (p.x - p.y) * (cfg.tileW / 2);
    const sy = (p.x + p.y) * (cfg.tileH / 2);
    return { x: cfg.origin.x + sx, y: cfg.origin.y + sy };
}
export function isoToWorld(s, cfg) {
    const dx = s.x - cfg.origin.x;
    const dy = s.y - cfg.origin.y;
    const x = dx / (cfg.tileW / 2) / 2 + dy / (cfg.tileH / 2) / 2;
    const y = dy / (cfg.tileH / 2) / 2 - dx / (cfg.tileW / 2) / 2;
    return { x, y };
}
export function clamp(n, a, b) {
    return Math.max(a, Math.min(b, n));
}
// -----------------------------------------------------------------------------
// IA / Tactique
// -----------------------------------------------------------------------------
// Distance en tiles (Manhattan)
export function tileDistance(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}
// À portée (attaque, interaction, aura, etc.)
export function inRange(a, b, range = 1) {
    return tileDistance(a, b) <= range;
}
