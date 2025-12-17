// src/mithril/time.ts
// ---------------------------------------------------------------------------
//  Mithril Engine — Time & Ambient System Utilities
//  Gestion : Saison • Phase du jour • Météo • Couleur d’ambiance
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
//  Saison actuelle
// ---------------------------------------------------------------------------
/**
 * Retourne la saison basée sur un mois (1-12).
 * Si aucun paramètre → utilise l’heure système (SSR-safe).
 */
export function getSeason(month = typeof window !== "undefined"
    ? new Date().getMonth() + 1
    : 1 // fallback SSR
) {
    if (month === 12 || month <= 2)
        return "winter";
    if (month <= 5)
        return "spring";
    if (month <= 8)
        return "summer";
    return "autumn";
}
// ---------------------------------------------------------------------------
//  Phase du jour
// ---------------------------------------------------------------------------
/**
 * Retourne la phase du jour (matin / jour / soir / nuit).
 * Si aucun paramètre → utilise l’heure locale.
 */
export function getDayPhase(hour = typeof window !== "undefined"
    ? new Date().getHours()
    : 12 // SSR fallback
) {
    if (hour < 6 || hour >= 22)
        return "night";
    if (hour < 10)
        return "morning";
    if (hour < 18)
        return "day";
    return "evening";
}
// ---------------------------------------------------------------------------
//  Météo (placeholder)
// ---------------------------------------------------------------------------
/**
 * Placeholder IA / API.
 * Pour l’instant : météo claire.
 */
export async function getWeather() {
    return "clear";
}
// ---------------------------------------------------------------------------
//  Couleur d’ambiance
// ---------------------------------------------------------------------------
/**
 * Génère une couleur d’ambiance basée sur :
 *  - la saison (teinte)
 *  - la phase du jour (luminosité)
 */
export function getAmbientColor(season = getSeason(), phase = getDayPhase()) {
    // Palette simple mais propre
    const baseBySeason = {
        winter: "#cfe9ff",
        spring: "#e8ffe0",
        summer: "#fff6cc",
        autumn: "#ffd9b3",
    };
    const darken = (hex, factor) => {
        const h = hex.replace("#", "");
        const r = parseInt(h.slice(0, 2), 16);
        const g = parseInt(h.slice(2, 4), 16);
        const b = parseInt(h.slice(4, 6), 16);
        const apply = (v) => Math.max(0, Math.min(255, Math.round(v * factor)));
        return `#${apply(r).toString(16).padStart(2, "0")}${apply(g)
            .toString(16)
            .padStart(2, "0")}${apply(b).toString(16).padStart(2, "0")}`;
    };
    const base = baseBySeason[season];
    /** Ajustement selon l’heure */
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
