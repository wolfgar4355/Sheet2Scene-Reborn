// packages/engine/src/ambient/manifest.ts

import type { SoundDef } from "./types";

// Helper pour générer MP3 + OGG automatiquement
const f = (base: string): { mp3: string; ogg: string } => ({
  mp3: `${base}.mp3`,
  ogg: `${base}.ogg`,
});

// ─────────────────────────────────────────────
// MANIFESTE AUDIO AAA — Tous les sons disponibles
// ─────────────────────────────────────────────

export const SOUND_MANIFEST: SoundDef[] = [
  // UI / Livre
  {
    id: "ui.book.open",
    label: "Grimoire open",
    category: "book",
    loop: false,
    files: [
      { format: "mp3", url: "/sounds/sound-book-open.mp3" },
      { format: "ogg", url: "/sounds/sound-book-open.ogg" },
    ],
    volume: 0.9,
  },
  {
    id: "ui.book.close",
    label: "Grimoire close",
    category: "book",
    loop: false,
    files: [
      { format: "mp3", url: "/sounds/sound-book-close.mp3" },
      { format: "ogg", url: "/sounds/sound-book-close.ogg" },
    ],
    volume: 0.9,
  },
  {
    id: "ui.book.page",
    label: "Page flip",
    category: "book",
    loop: false,
    files: [
      { format: "mp3", url: "/sounds/sound-page-flip.mp3" },
      { format: "ogg", url: "/sounds/sound-page-flip.ogg" },
    ],
    volume: 0.8,
  },

  // WEATHER — boucles météo
  {
    id: "weather.rain.light.loop",
    category: "weather",
    loop: true,
    volume: 0.6,
    files: [
      f("/sounds/weather/rain_light_loop_01"),
    ],
  },
  {
    id: "weather.rain.heavy.loop",
    category: "weather",
    loop: true,
    volume: 0.75,
    files: [
      f("/sounds/weather/rain_heavy_loop_01"),
    ],
  },
  {
    id: "weather.snow.blizzard.loop",
    category: "weather",
    loop: true,
    volume: 0.7,
    files: [
      f("/sounds/weather/blizzard_loop_01"),
    ],
  },
  {
    id: "weather.sandstorm.loop",
    category: "weather",
    loop: true,
    volume: 0.7,
    files: [
      f("/sounds/weather/sandstorm_loop_01"),
    ],
  },

  // THUNDER — distances (close / mid / far)

  // CLOSE
  {
    id: "thunder.close.01",
    category: "thunder",
    loop: false,
    prioritize: true,
    volume: 1,
    files: [f("/sounds/thunder/thunder_close_01")],
  },
  {
    id: "thunder.close.02",
    category: "thunder",
    loop: false,
    prioritize: true,
    volume: 1,
    files: [f("/sounds/thunder/thunder_close_02")],
  },
  {
    id: "thunder.close.03",
    category: "thunder",
    loop: false,
    prioritize: true,
    volume: 1,
    files: [f("/sounds/thunder/thunder_close_03")],
  },

  // MID
  {
    id: "thunder.mid.01",
    category: "thunder",
    loop: false,
    volume: 0.9,
    files: [f("/sounds/thunder/thunder_mid_01")],
  },
  {
    id: "thunder.mid.02",
    category: "thunder",
    loop: false,
    volume: 0.9,
    files: [f("/sounds/thunder/thunder_mid_02")],
  },
  {
    id: "thunder.mid.03",
    category: "thunder",
    loop: false,
    volume: 0.9,
    files: [f("/sounds/thunder/thunder_mid_03")],
  },

  // FAR
  {
    id: "thunder.far.01",
    category: "thunder",
    loop: false,
    volume: 0.7,
    files: [f("/sounds/thunder/thunder_far_01")],
  },
  {
    id: "thunder.far.02",
    category: "thunder",
    loop: false,
    volume: 0.7,
    files: [f("/sounds/thunder/thunder_far_02")],
  },
  {
    id: "thunder.far.03",
    category: "thunder",
    loop: false,
    volume: 0.7,
    files: [f("/sounds/thunder/thunder_far_03")],
  },

  // AMBIENT — Biomes dynamiques
  {
    id: "ambient.forest.day",
    category: "ambient",
    loop: true,
    volume: 0.55,
    files: [f("/sounds/ambient/forest_day_loop_01")],
  },
  {
    id: "ambient.forest.night",
    category: "ambient",
    loop: true,
    volume: 0.5,
    files: [f("/sounds/ambient/forest_night_loop_01")],
  },
  {
    id: "ambient.city.tavern",
    category: "ambient",
    loop: true,
    volume: 0.6,
    reverb: "hall",
    files: [f("/sounds/ambient/tavern_loop_01")],
  },

  // SPELLS — Haute qualité
  {
    id: "spell.fireball.cast",
    category: "spell",
    loop: false,
    prioritize: true,
    volume: 1,
    files: [f("/sounds/spells/fireball_cast_01")],
  },
  {
    id: "spell.fireball.impact",
    category: "spell",
    loop: false,
    prioritize: true,
    volume: 1,
    files: [f("/sounds/spells/fireball_impact_01")],
  },
  {
    id: "spell.lightning.cast",
    category: "spell",
    loop: false,
    volume: 0.9,
    files: [f("/sounds/spells/lightning_cast_01")],
  },
  {
    id: "spell.lightning.strike",
    category: "spell",
    loop: false,
    prioritize: true,
    volume: 1,
    files: [f("/sounds/spells/lightning_strike_01")],
  },
];

// ─────────────────────────────────────────────
// Helper simple
// ─────────────────────────────────────────────

export function getSoundById(id: string): SoundDef | undefined {
  return SOUND_MANIFEST.find((s) => s.id === id);
}
