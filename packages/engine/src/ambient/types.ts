// packages/engine/src/ambient/types.ts

export type AudioFormat = "mp3" | "ogg";

export type Biome =
  | "forest"
  | "tundra"
  | "desert"
  | "mountain"
  | "swamp"
  | "coast"
  | "underdark"
  | "city"
  | "temple"
  | "arcane";

export type WeatherKind =
  | "clear"
  | "cloudy"
  | "light-rain"
  | "heavy-rain"
  | "storm"
  | "snow"
  | "blizzard"
  | "sandstorm"
  | "magic-storm";

export type DayPhase = "dawn" | "day" | "dusk" | "night";

export interface AmbientContext {
  worldId: string;
  eraId?: string;
  biome: Biome;
  weather: WeatherKind;
  dayPhase: DayPhase;
  inside: boolean;
}

export interface SoundFile {
  format: AudioFormat;
  url: string;        // ex: "/sounds/weather/rain_light_loop_01.mp3"
}

export type SoundCategory =
  | "ui"
  | "book"
  | "weather"
  | "thunder"
  | "storm"
  | "ambient"
  | "spell"
  | "magic"
  | "footsteps";

export interface SoundDef {
  id: string;                // ex: "weather.rain.light.loop"
  label?: string;
  category: SoundCategory;
  files: SoundFile[];
  loop?: boolean;
  volume?: number;           // 0–1
  reverb?: "none" | "light" | "hall" | "cave";
  prioritize?: boolean;      // sons critiques (tonnerre, sort ultime, etc.)
}
