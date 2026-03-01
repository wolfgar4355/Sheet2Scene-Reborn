import { SoundManifest } from "./sound.manifest";
/**
 * Audio helper simple (AAA minimal)
 * - pas de state
 * - pas de preload ici
 */
export declare function playSound(url: string, volume?: number): void;
/**
 * Utilitaire : joue un son depuis le manifest
 */
export declare function playFromManifest(category: keyof typeof SoundManifest, key: string, volume?: number): void;
