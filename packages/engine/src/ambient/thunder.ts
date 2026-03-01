// packages/engine/src/ambient/thunder.ts

import type { SoundDef } from "./types";

export type ThunderDistance = "close" | "mid" | "far";

export interface ThunderEvent {
  delayMs: number;        // délai entre éclair et tonnerre
  distance: ThunderDistance;
  variantId: string;      // ex: "thunder.close.01"
}

/**
 * Variantes disponibles (id logique, pas les URLs brutes)
 * On va les mapper via le manifest audio.
 */
export const THUNDER_VARIANTS: Record<ThunderDistance, string[]> = {
  close: [
    "thunder.close.01",
    "thunder.close.02",
    "thunder.close.03",
  ],
  mid: [
    "thunder.mid.01",
    "thunder.mid.02",
    "thunder.mid.03",
  ],
  far: [
    "thunder.far.01",
    "thunder.far.02",
    "thunder.far.03",
  ],
};

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Convertit une distance (0 → 1) en catégorie AAA.
 * 0 = très proche → impact immédiat
 * 1 = très loin → gros délai
 */
export function pickThunderDistance(dist01: number): ThunderDistance {
  if (dist01 < 0.33) return "close";
  if (dist01 < 0.66) return "mid";
  return "far";
}

/**
 * Génère un événement de tonnerre simple.
 */
export function generateThunderEvent(dist01: number): ThunderEvent {
  const distance = pickThunderDistance(dist01);

  const delayMs =
    distance === "close"
      ? 0
      : distance === "mid"
      ? 400 + Math.random() * 400   // 0.4–0.8 s
      : 1200 + Math.random() * 1000; // 1.2–2.2 s

  const variantId = pick(THUNDER_VARIANTS[distance]);

  return {
    delayMs,
    distance,
    variantId,
  };
}

/**
 * Version "layered" (AAA++) :
 *  - 1 impact principal
 *  - 0–2 roulements de tonnerre secondaires
 */
export interface LayeredThunderEvent {
  main: ThunderEvent;
  rumbles: ThunderEvent[];
}

export function generateLayeredThunder(dist01: number): LayeredThunderEvent {
  const main = generateThunderEvent(dist01);

  const rumbleCount = Math.random() < 0.5 ? 1 : 2;
  const rumbles: ThunderEvent[] = [];

  for (let i = 0; i < rumbleCount; i++) {
    const baseDelay = main.delayMs + 600 + Math.random() * 800;
    rumbles.push({
      delayMs: baseDelay,
      distance: "far",
      variantId: pick(THUNDER_VARIANTS.far),
    });
  }

  return { main, rumbles };
}
