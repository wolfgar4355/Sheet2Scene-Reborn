// packages/engine/src/ambient/index.ts

// Manifest + AudioBus
export * from "./sound.manifest";
export * from "./audioBus";

// ---------------------------
// Weather System
// ---------------------------
export { default as WeatherSystem } from "./WeatherSystem";
export type {
  WeatherSystemProps,
  WeatherState,
  WeatherKind,
  WeatherMode,
} from "./WeatherSystem";

// ---------------------------
// Spell SFX Manager
// ---------------------------
export { playSpellSfx, getSpellUrl } from "./SpellSFXManager";
export type {
  SpellSchool,
  SpellId,
  SpellSfxOptions,
} from "./SpellSFXManager";

// ---------------------------
// World Ambience Controller
// ---------------------------
export { default as WorldAmbienceController } from "./WorldAmbienceController";
export type {
  WorldAmbienceProps,
  WorldBiome,
  TimeOfDay,
} from "./WorldAmbienceController";
