// packages/engine/src/ambient/index.ts

// ------------------------------------------------------------
// Weather — CANON UNIQUE (NO export *)
// ------------------------------------------------------------

export type {
  WeatherKind,
  WeatherState,
  WeatherSound,
} from "./weather";

export {
  pickWeatherSound,
  createWeatherState,
} from "./weather";
