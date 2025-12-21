export function getReachableTiles(origin, movement, mapW, mapH) {
    const tiles = [];
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
