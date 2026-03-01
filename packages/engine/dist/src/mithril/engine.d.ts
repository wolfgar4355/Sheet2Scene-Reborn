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
export { default as MithrilProvider, useMithril, } from "./GrimoireFrame";
export { default as SceneController, useScene, } from "./SceneController";
export { default as TransitionLayer, } from "./TransitionLayer";
export { AmbientProvider, useAmbient, } from "./ambient";
