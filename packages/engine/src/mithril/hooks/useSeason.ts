// src/mithril/hooks/useSeason.ts
"use client";

import { useEffect, useState } from "react";
import {
  getSeason,
  getDayPhase,
  getWeather,
  getAmbientColor,
  type SeasonName,
  type DayPhase,
  type WeatherKind,
} from "../time";

// --- Données de saison utilisées côté UI -----------------------------------

export interface SeasonData {
  /** "winter" | "spring" | "summer" | "autumn" */
  name: SeasonName;
  /** "night" | "morning" | "day" | "evening" */
  phase: DayPhase;
  /** météo actuelle ou simulée */
  weather: WeatherKind;
  /** couleur d’ambiance pour fond / lumière */
  ambientColor: string;
}

/**
 * Hook principal pour le moteur Mithril:
 * - lit l'heure/Date actuelle
 * - dérive saison + phase + couleur
 * - charge la météo (placeholder async)
 */
export default function useSeason(): SeasonData {
  // état initial dérivé de l'instant présent
  const [data, setData] = useState<SeasonData>(() => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const hour = now.getHours();

    const name = getSeason(month);
    const phase = getDayPhase(hour);
    const ambientColor = getAmbientColor(name, phase);

    return {
      name,
      phase,
      weather: "clear",
      ambientColor,
    };
  });

  useEffect(() => {
    let cancelled = false;

    // 1) Météo async
    (async () => {
      try {
        const w = await getWeather();
        if (!cancelled) {
          setData((prev) => ({ ...prev, weather: w }));
        }
      } catch {
        // On garde "clear" en cas d'erreur
      }
    })();

    // 2) Mise à jour régulière saison/phase/couleur (toutes les 5 minutes)
    const timer = setInterval(() => {
      const now = new Date();
      const month = now.getMonth() + 1;
      const hour = now.getHours();

      const name = getSeason(month);
      const phase = getDayPhase(hour);
      const ambientColor = getAmbientColor(name, phase);

      setData((prev) => ({
        ...prev,
        name,
        phase,
        ambientColor,
      }));
    }, 5 * 60 * 1000);

    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, []);

  return data;
}

// --- Ré-export des helpers pour compatibilité ------------------------------
// Ça permet de garder des imports comme:
//   import { getSeason, getDayPhase } from "./hooks/useSeason";

export { getSeason, getDayPhase, getWeather, getAmbientColor };
export type { SeasonName, DayPhase, WeatherKind };
