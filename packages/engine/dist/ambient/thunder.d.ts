export type ThunderDistance = "close" | "mid" | "far";
export interface ThunderEvent {
    delayMs: number;
    distance: ThunderDistance;
    variantId: string;
}
/**
 * Variantes disponibles (id logique, pas les URLs brutes)
 * On va les mapper via le manifest audio.
 */
export declare const THUNDER_VARIANTS: Record<ThunderDistance, string[]>;
/**
 * Convertit une distance (0 → 1) en catégorie AAA.
 * 0 = très proche → impact immédiat
 * 1 = très loin → gros délai
 */
export declare function pickThunderDistance(dist01: number): ThunderDistance;
/**
 * Génère un événement de tonnerre simple.
 */
export declare function generateThunderEvent(dist01: number): ThunderEvent;
/**
 * Version "layered" (AAA++) :
 *  - 1 impact principal
 *  - 0–2 roulements de tonnerre secondaires
 */
export interface LayeredThunderEvent {
    main: ThunderEvent;
    rumbles: ThunderEvent[];
}
export declare function generateLayeredThunder(dist01: number): LayeredThunderEvent;
