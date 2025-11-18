/**
 * 🌦 Mithril Engine v1.5.4 — Ambient System
 * Configuration centrale de l'ambiance visuelle, sonore et saisonnière.
 * Compatibilité : Next.js App Router + AudioContext Web + SceneController.
 */

export type AmbientSource = {
  id: 'fire' | 'wind' | 'candles' | 'rain' | 'snow' | 'fog';
  file: string;
  x: number;
  y: number;
  z: number;
  maxDistance: number;
  volume: number;

  /** Facultatif – distance à laquelle le son commence à diminuer */
  refDistance?: number;

  /** Facultatif – facteur d’atténuation */
  rolloffFactor?: number;
};


export type AmbientWeather = 'clear' | 'windy' | 'rain' | 'snow' | 'fog';

export const AmbientConfig = {
  enableSpatialAudio: true,
  enableSeasonSync: true,
  enableDayPhaseTint: true,
  enableOverlay: true,

  ambientLight: {
    morning: '#ffd666',
    day: '#ffffff',
    evening: '#ff9966',
    night: '#121017',
  },

  sources: <AmbientSource[]>[
    {
      id: 'fire',
      file: '/sounds/ambient/fire_loop.mp3',
      x: 3,
      y: 0,
      z: 2,
      maxDistance: 10,
      volume: 0.5,
    },
    {
      id: 'wind',
      file: '/sounds/ambient/wind_loop.mp3',
      x: -2,
      y: 0,
      z: 3,
      maxDistance: 20,
      volume: 0.2,
    },
    {
      id: 'candles',
      file: '/sounds/ambient/candles.mp3',
      x: 1,
      y: 0,
      z: 1,
      maxDistance: 6,
      volume: 0.2,
    },
    {
      id: 'rain',
      file: '/sounds/ambient/rain_loop.mp3',
      x: 0,
      y: 0,
      z: 0,
      maxDistance: 25,
      volume: 0.4,
    },
    {
      id: 'snow',
      file: '/sounds/ambient/snow_wind.mp3',
      x: 0,
      y: 0,
      z: 3,
      maxDistance: 20,
      volume: 0.3,
    },
    {
      id: 'fog',
      file: '/sounds/ambient/fog_rumble.mp3',
      x: 0,
      y: 0,
      z: 0,
      maxDistance: 15,
      volume: 0.2,
    },
  ],
};

/** 🕰 Détermine la saison actuelle */
export function getSeason(): 'spring' | 'summer' | 'autumn' | 'winter' {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'autumn';
  return 'winter';
}

/** 🌅 Détermine la phase du jour (teinte visuelle) */
export function getDayPhase(): 'morning' | 'day' | 'evening' | 'night' {
  const h = new Date().getHours();
  if (h >= 6 && h < 10) return 'morning';
  if (h >= 10 && h < 18) return 'day';
  if (h >= 18 && h < 22) return 'evening';
  return 'night';
}

/** 🌤 Météo pseudo-aléatoire (jusqu’à l’intégration API météo réelle) */
export function getWeather(): AmbientWeather {
  const seed = Math.random();
  if (seed < 0.6) return 'clear';
  if (seed < 0.75) return 'windy';
  if (seed < 0.9) return 'rain';
  if (seed < 0.97) return 'snow';
  return 'fog';
}

/** 🎨 Couleur d’ambiance combinée selon la saison et la phase du jour */
export function getAmbientColor(): string {
  const season = getSeason();
  const phase = getDayPhase();

  const base =
    (AmbientConfig.ambientLight[
      phase as keyof typeof AmbientConfig.ambientLight
    ] as string) || '#ffffff';

  const tint = {
    spring: '#a8ffc1',
    summer: '#ffe680',
    autumn: '#ff9966',
    winter: '#a8c8ff',
  }[season];

  return mixColors(base, tint, 0.25);
}

/** 🧪 Mélange deux couleurs hex selon une teinte intermédiaire */
function mixColors(c1: string, c2: string, ratio: number): string {
  const hex = (c: string) => parseInt(c.replace('#', ''), 16);
  const hex1 = hex(c1);
  const hex2 = hex(c2);

  const r1 = (hex1 >> 16) & 0xff;
  const g1 = (hex1 >> 8) & 0xff;
  const b1 = hex1 & 0xff;

  const r2 = (hex2 >> 16) & 0xff;
  const g2 = (hex2 >> 8) & 0xff;
  const b2 = hex2 & 0xff;

  const r = Math.round(r1 * (1 - ratio) + r2 * ratio);
  const g = Math.round(g1 * (1 - ratio) + g2 * ratio);
  const b = Math.round(b1 * (1 - ratio) + b2 * ratio);

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
