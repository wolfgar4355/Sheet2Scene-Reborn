// packages/engine/src/ambient/index.ts

// -----------------------------------------------------------------------------
// Weather (CANON UNIQUE)
// -----------------------------------------------------------------------------

export type {
  WeatherKind,
  WeatherState,
  WeatherSound,
} from "./weather";

export {
  pickWeatherSound,
  createWeatherState,
} from "./weather";
