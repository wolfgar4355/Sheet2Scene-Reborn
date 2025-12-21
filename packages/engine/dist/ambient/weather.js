// packages/engine/src/ambient/weather.ts
/**
 * Catalogue audio météo
 * (clé = WeatherKind, PAS WeatherState)
 */
const WEATHER_SOUNDS = {
    clear: {
        mp3: "/sounds/weather/clear.mp3",
        ogg: "/sounds/weather/clear.ogg",
    },
    rain: {
        mp3: "/sounds/weather/rain.mp3",
        ogg: "/sounds/weather/rain.ogg",
    },
    storm: {
        mp3: "/sounds/weather/storm.mp3",
        ogg: "/sounds/weather/storm.ogg",
    },
    snow: {
        mp3: "/sounds/weather/snow.mp3",
        ogg: "/sounds/weather/snow.ogg",
    },
    fog: {
        mp3: "/sounds/weather/fog.mp3",
        ogg: "/sounds/weather/fog.ogg",
    },
};
// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------
/**
 * Retourne les chemins audio pour un état météo donné
 */
export function pickWeatherSound(weather) {
    return WEATHER_SOUNDS[weather.kind];
}
/**
 * Helper utilitaire pour créer un WeatherState
 * (pratique pour SceneController, generators, etc.)
 */
export function createWeatherState(kind, intensity = 0) {
    if (kind === "clear") {
        return { kind: "clear", intensity: 0 };
    }
    return {
        kind,
        intensity: Math.max(0, Math.min(1, intensity)),
    };
}
