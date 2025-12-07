// src/mithril/time.ts
// --- Saisons ----------------------------------------------------------------
/**
 * Retourne la saison à partir d'un mois (1–12).
 * Si aucun argument: utilise la date système.
 */
export function getSeason(month = new Date().getMonth() + 1) {
    if (month === 12 || month <= 2)
        return "winter";
    if (month <= 5)
        return "spring";
    if (month <= 8)
        return "summer";
    return "autumn";
}
// --- Jour / nuit ------------------------------------------------------------
/**
 * Retourne la phase de la journée à partir d'une heure (0–23).
 * Si aucun argument: utilise l'heure système.
 */
export function getDayPhase(hour = new Date().getHours()) {
    if (hour < 6 || hour >= 22)
        return "night";
    if (hour < 10)
        return "morning";
    if (hour < 18)
        return "day";
    return "evening";
}
// --- Météo (placeholder IA plus tard) --------------------------------------
/**
 * Placeholder qui te permettra plus tard de brancher une IA, une API météo,
 * ou un générateur procédural. Pour l’instant: toujours "clear".
 */
export async function getWeather() {
    return "clear";
}
// --- Couleur d'ambiance -----------------------------------------------------
/**
 * Couleur d'ambiance simple en fonction de la saison et de la phase du jour.
 * Tu pourras raffiner ça plus tard (gradient, LUT, etc.).
 */
export function getAmbientColor(season = getSeason(), phase = getDayPhase()) {
    // Palette ultra simple pour démarrer
    const baseBySeason = {
        winter: "#cfe9ff",
        spring: "#e8ffe0",
        summer: "#fff6cc",
        autumn: "#ffd9b3",
    };
    const darken = (hex, factor) => {
        const n = hex.replace("#", "");
        const r = parseInt(n.slice(0, 2), 16);
        const g = parseInt(n.slice(2, 4), 16);
        const b = parseInt(n.slice(4, 6), 16);
        const d = (v) => Math.max(0, Math.min(255, Math.round(v * factor)));
        return `#${d(r).toString(16).padStart(2, "0")}${d(g)
            .toString(16)
            .padStart(2, "0")}${d(b).toString(16).padStart(2, "0")}`;
    };
    const base = baseBySeason[season];
    switch (phase) {
        case "night":
            return darken(base, 0.35);
        case "evening":
            return darken(base, 0.7);
        case "morning":
            return darken(base, 0.9);
        case "day":
        default:
            return base;
    }
}
