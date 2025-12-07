/**
 * 🌿 Mithril Engine – Ambient System
 * Configuration centrale de l’ambiance : saison, phase du jour, météo, couleurs, sons.
 */
// -----------------------------------------------------
// Config principale
// -----------------------------------------------------
export const AmbientConfig = {
    ambientLight: {
        morning: "#ffd666",
        day: "#ffffcc",
        evening: "#ff9966",
        night: "#121017",
    },
    sources: [
        {
            id: "fire",
            file: "/sounds/ambient/fire_loop.mp3",
            x: 3,
            y: 0,
            z: 2,
            maxDistance: 10,
            volume: 0.5,
        },
        {
            id: "wind",
            file: "/sounds/ambient/wind_loop.mp3",
            x: -2,
            y: 0,
            z: 3,
            maxDistance: 20,
            volume: 0.2,
        },
        {
            id: "candles",
            file: "/sounds/ambient/candles.mp3",
            x: 1,
            y: 0,
            z: 1,
            maxDistance: 6,
            volume: 0.2,
        },
        {
            id: "rain",
            file: "/sounds/ambient/rain_loop.mp3",
            x: 0,
            y: 0,
            z: 0,
            maxDistance: 25,
            volume: 0.4,
        },
        {
            id: "snow",
            file: "/sounds/ambient/snow_wind.mp3",
            x: 0,
            y: 0,
            z: 3,
            maxDistance: 20,
            volume: 0.3,
        },
        {
            id: "fog",
            file: "/sounds/ambient/fog_rumble.mp3",
            x: 0,
            y: 0,
            z: 0,
            maxDistance: 15,
            volume: 0.2,
        },
    ],
};
// -----------------------------------------------------
// Saison actuelle
// -----------------------------------------------------
export function getSeason() {
    const month = new Date().getMonth() + 1;
    if (month >= 3 && month <= 5)
        return "spring";
    if (month >= 6 && month <= 8)
        return "summer";
    if (month >= 9 && month <= 11)
        return "autumn";
    return "winter";
}
// -----------------------------------------------------
// Phase du jour
// -----------------------------------------------------
export function getDayPhase() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 10)
        return "morning";
    if (hour >= 10 && hour < 18)
        return "day";
    if (hour >= 18 && hour < 22)
        return "evening";
    return "night";
}
// -----------------------------------------------------
// Météo pseudo-aléatoire
// -----------------------------------------------------
export function getWeather() {
    const seed = Math.random();
    if (seed < 0.6)
        return "clear";
    if (seed < 0.75)
        return "windy";
    if (seed < 0.9)
        return "rain";
    if (seed < 0.97)
        return "snow";
    return "fog";
}
// -----------------------------------------------------
// Couleur finale d’ambiance
// -----------------------------------------------------
export function getAmbientColor() {
    const season = getSeason();
    const phase = getDayPhase();
    const colors = {
        spring: {
            morning: "#aad8ff",
            day: "#89c2ff",
            evening: "#3b4f80",
            night: "#1a1f33",
        },
        summer: {
            morning: "#ffef7b",
            day: "#fff530",
            evening: "#ff9962",
            night: "#2f1d25",
        },
        autumn: {
            morning: "#ffd27b",
            day: "#ffe27a",
            evening: "#ff7943",
            night: "#3b110b",
        },
        winter: {
            morning: "#d6d6ff",
            day: "#fffbd2",
            evening: "#c87941",
            night: "#2b1c12",
        },
    };
    return colors[season][phase];
}
