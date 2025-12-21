export function idx(x, y, w) {
    return y * w + x;
}
export function inBounds(x, y, w, h) {
    return x >= 0 && y >= 0 && x < w && y < h;
}
// Règle MVP: water = bloqué, le reste = walkable
export function defaultWalkable(type) {
    return type !== "water";
}
export function defaultCost(type) {
    if (type === "water")
        return 9999; // non walkable, mais on garde une valeur
    if (type === "stone")
        return 1;
    if (type === "dirt")
        return 1;
    return 1;
}
export function buildIsoGrid(args) {
    const { w, h, tiles, actors = [], keepDeadOccupied = false } = args;
    const occ = new Map(); // "x,y" -> actorId
    for (const a of actors) {
        const dead = (a.hp ?? 1) <= 0;
        if (dead && !keepDeadOccupied)
            continue;
        const ax = Math.round(a.pos.x);
        const ay = Math.round(a.pos.y);
        if (!inBounds(ax, ay, w, h))
            continue;
        occ.set(`${ax},${ay}`, a.id);
    }
    const out = new Array(w * h);
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
export function getTile(grid, x, y) {
    if (!inBounds(x, y, grid.w, grid.h))
        return null;
    return grid.tiles[idx(x, y, grid.w)] ?? null;
}
