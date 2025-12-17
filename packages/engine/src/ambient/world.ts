// packages/engine/src/ambient/world.ts

import type { AmbientContext } from "./types";

export function pickWorldAmbient(ctx: AmbientContext): string | undefined {
  if (ctx.inside) {
    if (ctx.biome === "city") return "ambient.city.tavern";
    if (ctx.biome === "temple" || ctx.biome === "arcane") {
      return "ambient.city.tavern"; // à raffiner plus tard
    }
  }

  if (ctx.biome === "forest") {
    return ctx.dayPhase === "night"
      ? "ambient.forest.night"
      : "ambient.forest.day";
  }

  // fallback : rien
  return undefined;
}
