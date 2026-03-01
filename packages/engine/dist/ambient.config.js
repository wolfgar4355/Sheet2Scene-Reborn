/**
 * 🌩️ Mithril Engine – Ambient System AAA
 * Config centrale : saisons, météo, lumière, ambiances, tempêtes, tonnerre.
 */
// -----------------------------------------------------
// Config principale
// -----------------------------------------------------
export const AmbientConfig = {
    enableSpatialAudio: true,
    ambientLight: {
        morning: "#ffd666",
        day: "#ffffcc",
        evening: "#ff9966",
        night: "#121017",
    },
    /**
     * 🔊 Sources spatialisées
     * NOTE : Tous les `file:` sont SANS extension.
     * Le moteur charge auto : .ogg → .mp3
     */
    sources: [
        // -------------------------
        // 🔥 Intérieur / feu
        // -------------------------
        {
            id: "fire",
            file: "/sounds/ambient/fire_loop",
            x: 3,
            y: 0,
            z: 2,
            volume: 0.5,
            refDistance: 2,
        },
        {
            id: "candles",
            file: "/sounds/ambient/candles",
            x: 1,
            y: 0,
            z: 1,
            volume: 0.25,
        },
        // -------------------------
        // 🌬️ Vent général
        // -------------------------
        {
            id: "wind",
            file: "/sounds/ambient/wind_loop",
            x: -2,
            y: 0,
            z: 3,
            volume: 0.3,
            refDistance: 4,
            rolloffFactor: 1.2,
        },
        // -------------------------
        // 🌧️ Pluie
        // -------------------------
        {
            id: "rain",
            file: "/sounds/weather/rain_loop",
            x: 0,
            y: 0,
            z: 0,
            volume: 0.4,
            refDistance: 8,
        },
        // -------------------------
        // ❄️ Neige (vent glacé)
        // -------------------------
        {
            id: "snow",
            file: "/sounds/weather/snow_wind",
            x: 0,
            y: 0,
            z: 3,
            volume: 0.3,
        },
        // -------------------------
        // 🌫️ Brouillard
        // -------------------------
        {
            id: "fog",
            file: "/sounds/weather/fog_rumble",
            x: 0,
            y: 0,
            z: -2,
            volume: 0.2,
        },
        // -------------------------
        // ⚡ Tonnerre lointain
        // -------------------------
        {
            id: "storm-far",
            file: "/sounds/storms/distant_storm_thunder",
            x: -10,
            y: 0,
            z: -20,
            volume: 0.55,
            refDistance: 6,
            rolloffFactor: 1.2,
        },
        // -------------------------
        // ⚡ Tonnerre moyen
        // -------------------------
        {
            id: "storm-mid",
            file: "/sounds/storms/mid_storm_thunder",
            x: 5,
            y: 1,
            z: -10,
            volume: 0.7,
            refDistance: 4,
        },
        // -------------------------
        // ⚡ Tonnerre très proche (impact synchro éclair)
        // -------------------------
        {
            id: "thunder-strike",
            file: "/sounds/storms/lightning_strike",
            x: 2,
            y: 0,
            z: -2,
            volume: 1.0,
            refDistance: 2,
        },
    ],
};
