// packages/engine/src/ambient/world.ts

export interface WorldAmbientInput {
  biome?: string;
  dayPhase?: "day" | "night" | "morning" | "evening";
  inside?: boolean;
}

export function pickWorldAmbient(
  ctx: WorldAmbientInput
): string | undefined {
  if (ctx.inside) {
    if (ctx.biome === "city") return "ambient.city.tavern";
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
