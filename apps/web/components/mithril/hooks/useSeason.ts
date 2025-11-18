"use client";

import { useEffect, useState } from "react";

interface SeasonData {
  name: "winter" | "spring" | "summer" | "autumn";
  volume: number;         // Intensité du son ambiant
  rate: number;           // Vitesse de lecture du loop audio
  brightness: number;     // Niveau de lumière globale
  colorTemp: string;      // Couleur dominante pour l'éclairage
}

function detectSeason(month: number): SeasonData["name"] {
  if (month === 12 || month <= 2) return "winter";
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  return "autumn";
}

function detectDayPhase(hour: number): "night" | "morning" | "day" | "evening" {
  if (hour >= 22 || hour < 6) return "night";
  if (hour >= 6 && hour < 10) return "morning";
  if (hour >= 10 && hour < 18) return "day";
  return "evening";
}

export function useSeason(): SeasonData {
  const [data, setData] = useState<SeasonData>({
    name: "spring",
    volume: 0.5,
    rate: 1,
    brightness: 1,
    colorTemp: "#fffbe6",
  });

  useEffect(() => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const hour = now.getHours();

    const season = detectSeason(month);
    const phase = detectDayPhase(hour);

    const config: Record<SeasonData["name"], Omit<SeasonData, "name">> = {
      winter:  { volume: 0.35, rate: 0.9, brightness: 0.7, colorTemp: "#cfe9ff" },
      spring:  { volume: 0.6,  rate: 1.05, brightness: 1.1, colorTemp: "#f6ffe5" },
      summer:  { volume: 0.8,  rate: 1.1,  brightness: 1.3, colorTemp: "#fff8c7" },
      autumn:  { volume: 0.5,  rate: 0.95, brightness: 0.9, colorTemp: "#ffd6a0" },
    };

    const seasonData = config[season];
    let modifier = 1;

    // Ajustements selon la période du jour
    if (phase === "night") modifier = 0.5;
    if (phase === "evening") modifier = 0.8;
    if (phase === "morning") modifier = 1.1;

    setData({
      name: season,
      volume: seasonData.volume * modifier,
      rate: seasonData.rate,
      brightness: seasonData.brightness * modifier,
      colorTemp: seasonData.colorTemp,
    });
  }, []);

return data;
}

// --- EXPORTS NÉCESSAIRES POUR MITHRIL ENGINE ---
export function getSeason(month: number) {
  return detectSeason(month);
}

export function getDayPhase(hour: number) {
  return detectDayPhase(hour);
}

export function getWeather(): string {
  const r = Math.random();
  if (r < 0.2) return "rain";
  if (r < 0.35) return "snow";
  if (r < 0.45) return "fog";
  return "clear";
}

export default useSeason;
