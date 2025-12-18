// packages/engine/src/ambient/weather.ts

// -----------------------------------------------------------------------------
// Weather — Canon météo Mithril Engine
// -----------------------------------------------------------------------------

export type WeatherKind =
  | "clear"
  | "rain"
  | "storm"
  | "snow"
  | "fog";

/**
 * État météo global utilisé par le moteur
 * → toujours un objet (TS strict-safe)
 */
export type WeatherState =
  | { kind: "clear"; intensity: 0 }
  | { kind: "rain"; intensity: number }
  | { kind: "snow"; intensity: number }
  | { kind: "fog"; intensity: number }
  | { kind: "storm"; intensity: number };

// -----------------------------------------------------------------------------
// Audio
// -----------------------------------------------------------------------------

export interface WeatherSound {
  mp3: string;
  ogg: string;
}

/**
 * Catalogue audio météo
 * (clé = WeatherKind, PAS WeatherState)
 */
const WEATHER_SOUNDS: Record<WeatherKind, WeatherSound> = {
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
export function pickWeatherSound(
  weather: WeatherState
): WeatherSound {
  return WEATHER_SOUNDS[weather.kind];
}

/**
 * Helper utilitaire pour créer un WeatherState
 * (pratique pour SceneController, generators, etc.)
 */
export function createWeatherState(
  kind: WeatherKind,
  intensity = 0
): WeatherState {
  if (kind === "clear") {
    return { kind: "clear", intensity: 0 };
  }

  return {
    kind,
    intensity: Math.max(0, Math.min(1, intensity)),
  } as WeatherState;
}
