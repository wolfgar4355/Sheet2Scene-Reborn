/**
 * ✨ Mithril Engine v2 – Entrée unique UI
 * Point d’entrée officiel pour tout le front-end du moteur.
 *
 * Exporte :
 *  - GrimoireFrame (layout principal + flip + audio boot)
 *  - SceneController (gestion de lumière, zoom, météo, cycle jour/nuit)
 *  - TransitionLayer (post-process FX)
 *  - AmbientProvider + useAmbient (gestion musique/SFX/ambiances)
 *  - useMithril (contexte global du grimoire)
 */
//
// 📘 Grimoire layout / contexte global
//
export { default as MithrilProvider, useMithril, } from "./GrimoireFrame";
//
// 🎥 Scène (lumière, zoom, météo, cycle jour/nuit…)
//
export { default as SceneController, useScene, } from "./SceneController";
//
// ✨ Effets visuels (post-process) appliqués sur la scène
//
export { default as TransitionLayer, } from "./TransitionLayer";
//
// 🎧 Audio AAA : musique, ambiance, SFX, volume global
//
export { AmbientProvider, useAmbient, } from "./ambient";
//
// (optionnel) Ajouter ici d’autres modules du moteur
// ex: export { default as PageTurner } from "./PageTurner";
// ex: export { default as AmbientManager } from "./AmbientManager";
// ex: export { default as SeasonParticles } from "./SeasonParticles";
//
