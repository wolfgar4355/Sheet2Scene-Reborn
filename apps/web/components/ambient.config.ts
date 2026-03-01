/**
 * 🌿 Mithril Engine – Ambient System (adapté pour Sheet2Scene)
 * Tous les chemins pointent vers /public/sounds/…
 */

export type AmbientSource = {
  id: string;
  file: string;      // SANS extension → OGG/MP3 auto
  x: number;
  y: number;
  z: number;
  volume: number;
  refDistance?: number;
  rolloffFactor?: number;
};

export const AmbientConfig = {
  enableSpatialAudio: true,

  ambientLight: {
    morning: "#ffd666",
    day: "#ffffcc",
    evening: "#ff9966",
    night: "#121017",
  },

  sources: <AmbientSource[]>[
    // --- 🔥 Feu dans le grimoire / bureau
    {
      id: "fire",
      file: "/sounds/ambient/fire_loop",
      x: 3,
      y: 0,
      z: 2,
      volume: 0.5,
      refDistance: 6,
    },

    // --- 🌬️ Vent extérieur
    {
      id: "wind",
      file: "/sounds/ambient/wind_loop",
      x: -4,
      y: 1,
      z: -2,
      volume: 0.25,
      refDistance: 10,
    },

    // --- 🕯️ Chandelles du grimoire
    {
      id: "candles",
      file: "/sounds/ambient/candles",
      x: 1,
      y: 0,
      z: 1,
      volume: 0.2,
    },

    // --- 🌧️ Pluie
    {
      id: "rain",
      file: "/sounds/weather/rain_loop",
      x: 0,
      y: 0,
      z: 0,
      volume: 0.5,
      refDistance: 20,
    },

    // --- ❄️ Vent de neige
    {
      id: "snow",
      file: "/sounds/weather/snow_wind",
      x: 0,
      y: 0,
      z: 3,
      volume: 0.35,
    },

    // --- 🌫️ Brouillard / grondement
    {
      id: "fog",
      file: "/sounds/weather/fog_rumble",
      x: 0,
      y: 0,
      z: 0,
      volume: 0.25,
    },

    // --- ⚡ Bruits d’orage lointains
    {
      id: "storm-far",
      file: "/sounds/storm/distant_storm",
      x: -8,
      y: 2,
      z: -12,
      volume: 0.6,
      refDistance: 12,
      rolloffFactor: 1.2,
    },
  ],
};

/** Saison */
export function getSeason(): "spring" | "summer" | "autumn" | "winter" {
  const m = new Date().getMonth() + 1;
  if (m >= 3 && m <= 5) return "spring";
  if (m >= 6 && m <= 8) return "summer";
  if (m >= 9 && m <= 11) return "autumn";
  return "winter";
}

/** Phase du jour */
export function getDayPhase(): "morning" | "day" | "evening" | "night" {
  const h = new Date().getHours();
  if (h >= 6 && h < 10) return "morning";
  if (h >= 10 && h < 18) return "day";
  if (h >= 18 && h < 22) return "evening";
  return "night";
}

/** Météo dynamique */
export type AmbientWeather = "clear" | "windy" | "rain" | "snow" | "fog";

export function getWeather(): AmbientWeather {
  const r = Math.random();
  if (r < 0.6) return "clear";
  if (r < 0.75) return "windy";
  if (r < 0.9) return "rain";
  if (r < 0.97) return "snow";
  return "fog";
}
