"use client";

import { useEffect, useState } from "react";
import { ambientManager } from "@engine/ambient";

export function useWeather() {
  const [weather, setWeather] = useState(ambientManager.getWeather());

  const update = (kind: string, intensity: number) => {
    ambientManager.setWeather(kind as any, intensity);
    setWeather(ambientManager.getWeather());
  };

  return { weather, update };
}
