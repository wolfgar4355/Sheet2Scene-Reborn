// src/mithril/CameraShake.ts
/**
 * Déclenche un tremblement de caméra AAA utilisé par Mithril Engine.
 * - distance: 0 → impact direct (très fort)
 * - distance: 50–800 → tremblement proportionnel
 * - intensité progressive avec amortissement
 */
export function triggerCameraShake(distance) {
    const root = document.documentElement;
    // Intensité basée sur la distance
    const maxShake = 14; // px
    const minShake = 2; // px
    const dist = Math.max(0, distance);
    const normalized = Math.max(0, Math.min(1, 1 - dist / 900)); // 0–1
    const strength = minShake + normalized * (maxShake - minShake);
    // Applique la force du shake dans une variable CSS
    root.style.setProperty("--shake-strength", `${strength.toFixed(1)}px`);
    // Déclenche l'animation
    root.classList.add("mithril-shake");
    // Retrait après l'animation
    setTimeout(() => {
        root.classList.remove("mithril-shake");
    }, 350);
}
