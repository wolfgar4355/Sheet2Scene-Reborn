// lib/grimoire/index.ts
// ===================================================
// Point d'entrée officiel du sous-système "Grimoire"
// ===================================================

// Frame + gestion visuelle du grimoire
export { default as GrimoireFrame } from "@components/GrimoireFrame";

// Superposition animations (flash, blur, transitions)
export { default as TransitionLayer } from "@components/TransitionLayer";

// Scène (lectern, props, background logic)
export { default as SceneController } from "@components/SceneController";

// Navigation interne (TOC → intro → pages → create)
// ✅ CORRECT
export { default as useBookNav } from "@hooks/useBookNav";

// Sons de flips / ouvertures (synced)
export { default as bookSounds } from "@utils/bookSounds";

// Effets ambiance météo / foyer
export { useWeather } from "@hooks/useWeather";

// Config ambiance globale
export * from "@components/ambient.config";

// Contenu statique et moteur (bridge)
export * from "@lib/engine";
