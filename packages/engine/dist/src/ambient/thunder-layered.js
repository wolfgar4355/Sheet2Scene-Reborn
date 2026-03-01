// packages/engine/src/ambient/thunder-layered.ts
import { pickThunderDistance } from "./thunder";
/** Variants principaux */
const VARIANTS = {
    closeImpact: ["impact_close_01", "impact_close_02"],
    midImpact: ["impact_mid_01", "impact_mid_02"],
    farImpact: ["impact_far_01", "impact_far_02"],
    deepRumble: ["rumble_deep_01", "rumble_deep_02", "rumble_deep_03"],
    echoWide: ["echo_wide_01", "echo_wide_02"],
    aftershock: ["aftershock_01", "aftershock_02"],
};
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
/**
 * Ajoute automatiquement les extensions OGG + MP3
 */
function audioPair(path) {
    return [
        `/sounds/thunder/${path}.ogg`,
        `/sounds/thunder/${path}.mp3`,
    ];
}
/**
 * Génère l'événement complet ThunderLayered AAA++
 */
export function generateThunderLayered(dist01) {
    const distance = pickThunderDistance(dist01);
    // Durées réalistes basées sur vitesse du son
    const baseDelay = distance === "close"
        ? 0
        : distance === "mid"
            ? 400 + Math.random() * 400
            : 1200 + Math.random() * 1500;
    // Flash lumineux : instant si "close", retardé sinon
    const flashNow = distance === "close";
    const layers = [];
    //
    // 1) Impact principal
    //
    const impact = distance === "close"
        ? pick(VARIANTS.closeImpact)
        : distance === "mid"
            ? pick(VARIANTS.midImpact)
            : pick(VARIANTS.farImpact);
    layers.push({
        sources: audioPair(impact),
        delayMs: baseDelay,
        volume: distance === "close" ? 1.0 : distance === "mid" ? 0.8 : 0.65,
        detune: (Math.random() - 0.5) * 100,
        stereoPan: (Math.random() - 0.5) * 0.4,
    });
    //
    // 2) Rumble profond (bas fréquence)
    //
    const rumble = pick(VARIANTS.deepRumble);
    layers.push({
        sources: audioPair(rumble),
        delayMs: baseDelay + 200 + Math.random() * 300,
        volume: distance === "close" ? 0.9 : 0.7,
        detune: (Math.random() - 0.5) * 50,
        stereoPan: 0,
    });
    //
    // 3) Echo large (réverbération montagne / nuages)
    //
    const echo = pick(VARIANTS.echoWide);
    layers.push({
        sources: audioPair(echo),
        delayMs: baseDelay + (distance === "far" ? 900 : 600),
        volume: distance === "far" ? 0.8 : 0.6,
        stereoPan: (Math.random() - 0.5) * 0.8,
    });
    //
    // 4) Aftershock (très subtil)
    //
    if (Math.random() < 0.5) {
        const aft = pick(VARIANTS.aftershock);
        layers.push({
            sources: audioPair(aft),
            delayMs: baseDelay + 1200 + Math.random() * 800,
            volume: 0.3,
            detune: (Math.random() - 0.5) * 40,
            stereoPan: (Math.random() - 0.5),
        });
    }
    return {
        distance,
        flashNow,
        layers,
    };
}
