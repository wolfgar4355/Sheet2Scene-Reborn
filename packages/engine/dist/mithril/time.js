// --- Saisons ---
export function getSeason(month = new Date().getMonth() + 1) {
    if (month === 12 || month <= 2)
        return "winter";
    if (month <= 5)
        return "spring";
    if (month <= 8)
        return "summer";
    return "autumn";
}
// --- Jour / nuit ---
export function getDayPhase(hour = new Date().getHours()) {
    return hour < 6 || hour > 20 ? "night" : "day";
}
// --- Météo (placeholder AI plus tard) ---
export async function getWeather() {
    return "clear";
}
// --- Couleur ambiance ---
export function getAmbientColor() {
    return "#ffffff";
}
