// packages/engine/src/ambient/world.ts
export function pickWorldAmbient(ctx) {
    if (ctx.inside) {
        if (ctx.biome === "city")
            return "ambient.city.tavern";
        if (ctx.biome === "temple" || ctx.biome === "arcane") {
            return "ambient.city.tavern";
        }
    }
    if (ctx.biome === "forest") {
        return ctx.dayPhase === "night"
            ? "ambient.forest.night"
            : "ambient.forest.day";
    }
    return undefined;
}
