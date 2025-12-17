// packages/engine/src/ambient/weather.ts

// État météo global utilisé par le moteur
export type WeatherState =
  | "clear"
  | "rain"
  | "storm"
  | "snow";

// URLs audio (MP3 + OGG) pour une météo donnée
export interface WeatherSound {
  mp3: string;
  ogg: string;
}

// Petit catalogue de base : à toi d’ajouter d’autres variantes si tu veux
const WEATHER_SOUNDS: Record<WeatherState, WeatherSound> = {
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
};

// Helper : retourne les chemins audio pour l’état météo courant
export function pickWeatherSound(state: WeatherState): WeatherSound {
  return WEATHER_SOUNDS[state];
}
