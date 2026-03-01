"use client";

import { useCallback, useState } from "react";

/* ======================================================
   🌦 TYPES (WEB ONLY)
   ====================================================== */

export type WeatherKind =
  | "clear"
  | "rain"
  | "storm"
  | "snow"
  | "fog";

export interface WeatherState {
  kind: WeatherKind;
  intensity: number; // 0 → 1
}

/* ======================================================
   🌦 HOOK WEATHER (UI-ONLY, SAFE)
   ====================================================== */

export function useWeather() {
  const [weather, setWeather] = useState<WeatherState>({
    kind: "clear",
    intensity: 0,
  });

  const update = useCallback(
    (kind: WeatherKind, intensity = 0.6) => {
      setWeather({
        kind,
        intensity: Math.max(0, Math.min(1, intensity)),
      });
    },
    []
  );

  const clear = useCallback(() => {
    setWeather({ kind: "clear", intensity: 0 });
  }, []);

  return {
    weather,
    update,
    clear,
  };
}
