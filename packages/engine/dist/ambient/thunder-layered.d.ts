import type { ThunderDistance } from "./thunder";
/**
 * Une "couche" audio d'un tonnerre :
 * on peut empiler impact + rumble + echo + réverbération.
 */
export interface ThunderLayer {
    sources: string[];
    delayMs: number;
    volume: number;
    detune?: number;
    stereoPan?: number;
}
/**
 * Un événement complet AAA++ composé de couches multiples.
 */
export interface ThunderLayeredEvent {
    distance: ThunderDistance;
    flashNow: boolean;
    layers: ThunderLayer[];
}
/**
 * Génère l'événement complet ThunderLayered AAA++
 */
export declare function generateThunderLayered(dist01: number): ThunderLayeredEvent;
