/**
 * ✨ Mithril Engine AAA V2
 * Entrée publique du moteur UI.
 * Tout ce qui est destiné à être utilisé par l'application est exporté ici.
 */

// ---------------------------------------------------------------------------
//  Grimoire & Navigation
// ---------------------------------------------------------------------------
export { default as GrimoireFrame } from "./GrimoireFrame";
export { default as SceneController } from "./SceneController";
export { default as TransitionLayer } from "./TransitionLayer";
export { default as PageTurner } from "./PageTurner";

// ---------------------------------------------------------------------------
//  Ambiance / Audio / Effets
// ---------------------------------------------------------------------------

// AudioBoot est une classe utilitaire → normalement export Nommé
export * from "./AudioBoot";

export { default as DevControls } from "./DevControls";

// SeasonParticles : assure-toi que le fichier exporte `default`
export { default as SeasonParticles } from "./SeasonParticles";

// AmbientProvider, useAmbient, etc.
export * from "./ambient";

// Effets météo, particules, brouillard, éclairs…
export * from "./effects"; // si tu as un dossier fx/effects

// ---------------------------------------------------------------------------
//  Hooks principaux
// ---------------------------------------------------------------------------

// Camera AAA
export * from "./hooks/useCamera";

// Saison / phase du jour / météo
export { default as useSeason } from "./hooks/useSeason";
export type { SeasonData } from "./hooks/useSeason";

// ---------------------------------------------------------------------------
//  Utilitaires purs
// ---------------------------------------------------------------------------
export * from "./time";
export * from "./math";       // si tu as utilitaires RNG / LCG / clamp
export * from "./constants";  // si tu as registres globaux
