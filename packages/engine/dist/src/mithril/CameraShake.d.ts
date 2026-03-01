/**
 * Déclenche un tremblement de caméra AAA utilisé par Mithril Engine.
 * - distance: 0 → impact direct (très fort)
 * - distance: 50–800 → tremblement proportionnel
 * - intensité progressive avec amortissement
 */
export declare function triggerCameraShake(distance: number): void;
