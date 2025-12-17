// packages/engine/src/ambient/WeatherSystem.tsx
"use client";

import { useEffect, useState } from "react";
import { SoundManifest } from "./sound.manifest";
import { audioBus } from "./audioBus";

export type WeatherKind =
  | "clear"
  | "rainLight"
  | "rainMedium"
  | "rainHeavy"
  | "snowSoft"
  | "snowBlizzard"
  | "fog"
  | "windLight"
  | "windStrong"
  | "storm";

export type WeatherMode = "auto" | "manual" | "locked";

export interface WeatherState {
  kind: WeatherKind;
  intensity: 0 | 1 | 2; // 0 = light, 1 = medium, 2 = heavy
  hasStorm: boolean;
}

export interface WeatherSystemProps {
  mode?: WeatherMode;
  initial?: WeatherState;
  /** callback à chaque changement de météo (utile pour UI / debug) */
  onChange?: (w: WeatherState) => void;
}

/**
 * 🎚 WeatherSystem
 * - Contrôle les boucles météo 2D (rain / wind / snow / storm)
 * - Met à jour `document.body.dataset.weather`
 * - Peut être AUTO ou MANUAL
 */
export default function WeatherSystem({
  mode = "auto",
  initial,
  onChange,
}: WeatherSystemProps) {
  const [state, setState] = useState<WeatherState>(
    initial ?? {
      kind: "clear",
      intensity: 0,
      hasStorm: false,
    }
  );

  // Expose aux callbacks & au <body>
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.dataset.weather = state.kind;
    }
    onChange?.(state);
  }, [state, onChange]);

  // Gestion des boucles audio
  useEffect(() => {
    const k = state.kind;
    const i = state.intensity;

    // On nettoie tout ce qui est weather/storm avant de reposer
    audioBus.fadeLoop("weather-bed", 0, 600);
    audioBus.fadeLoop("storm-bed", 0, 600);

    const weather = SoundManifest.weather;
    const storm = SoundManifest.storm;

    // Choix de la source météo principale
    let urlWeather: string | null = null;

    if (k === "rainLight") urlWeather = weather.rainLight;
    else if (k === "rainMedium") urlWeather = weather.rainMedium;
    else if (k === "rainHeavy") urlWeather = weather.rainHeavy;
    else if (k === "windLight") urlWeather = weather.windLight;
    else if (k === "windStrong") urlWeather = weather.windStrong;
    else if (k === "snowSoft") urlWeather = weather.snowSoft;
    else if (k === "snowBlizzard") urlWeather = weather.snowBlizzard;
    else if (k === "fog") urlWeather = weather.fogRumble;

    if (urlWeather) {
      const baseVol = i === 0 ? 0.4 : i === 1 ? 0.7 : 1.0;
      audioBus.playLoop("weather-bed", urlWeather, baseVol);
    }

    // Storm bed si nécessaire
    if (k === "storm" || state.hasStorm) {
      const bed = i === 0 ? storm.stormBed : storm.stormHeavy;
      audioBus.playLoop("storm-bed", bed, 0.8);
    }

    return () => {
      // Optionnel: on laisse les fades gérer, pas besoin de stop net
    };
  }, [state]);

  // Mode AUTO : varie tout seul toutes les X minutes
  useEffect(() => {
    if (mode !== "auto") return;

    const pickRandomState = (): WeatherState => {
      const roll = Math.random();
      if (roll < 0.4) {
        return { kind: "clear", intensity: 0, hasStorm: false };
      }
      if (roll < 0.65) {
        return {
          kind: "rainLight",
          intensity: 0,
          hasStorm: false,
        };
      }
      if (roll < 0.8) {
        return {
          kind: "rainMedium",
          intensity: 1,
          hasStorm: false,
        };
      }
      if (roll < 0.9) {
        return {
          kind: "snowSoft",
          intensity: 0,
          hasStorm: false,
        };
      }
      // gros orage
      return {
        kind: "storm",
        intensity: 2,
        hasStorm: true,
      };
    };

    // Premier update
    setState(pickRandomState());

    const timer = window.setInterval(() => {
      setState(pickRandomState());
    }, 4 * 60 * 1000); // toutes les 4 minutes

    return () => window.clearInterval(timer);
  }, [mode]);

  // Si mode MANUAL/LOCKED, tu peux forcer la météo depuis l'extérieur
  // via initial + changement de key (si besoin).
  return null;
}
