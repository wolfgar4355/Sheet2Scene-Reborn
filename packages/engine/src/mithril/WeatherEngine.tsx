// src/mithril/WeatherEngine.tsx
"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import useSeason, {
  type SeasonData,
  type WeatherKind,
  type UseSeasonOptions,
} from "./hooks/useSeason";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type WeatherPhase = "calm" | "rising" | "peak" | "fading";

export type WeatherState = {
  // Source (déterministe / monde)
  season: SeasonData;

  // Valeurs “moteur” unifiées (avec transitions)
  weather: WeatherKind;
  intensity: number; // 0..1.2 (on clamp côté moteur)
  phase: WeatherPhase;

  // Timing
  lastUpdateMs: number;
  nextEventAtMs: number | null;

  // Contexte
  biome: UseSeasonOptions["biome"];
  worldId?: string;
};

export type WeatherEvent =
  | { type: "LIGHTNING_STRIKE"; distance01: number; atMs: number }
  | { type: "WEATHER_CHANGED"; weather: WeatherKind; atMs: number }
  | { type: "INTENSITY_CHANGED"; intensity: number; atMs: number };

export type WeatherEngineAPI = {
  state: WeatherState;

  // Actions publiques (AAA)
  forceWeather: (weather: WeatherKind, intensity?: number) => void;
  transitionTo: (weather: WeatherKind, opts?: { durationMs?: number; targetIntensity?: number }) => void;

  // Events: listeners (LightningEngine / Audio / FX)
  subscribe: (fn: (evt: WeatherEvent) => void) => () => void;
};

const WeatherEngineContext = createContext<WeatherEngineAPI | undefined>(undefined);

export function useWeather(): WeatherEngineAPI {
  const ctx = useContext(WeatherEngineContext);
  if (!ctx) throw new Error("useWeather must be used inside <WeatherEngineProvider>");
  return ctx;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function computePhase(weather: WeatherKind, intensity: number): WeatherPhase {
  if (weather === "clear" || intensity <= 0.05) return "calm";
  if (intensity < 0.35) return "rising";
  if (intensity < 0.85) return "peak";
  return "peak";
}

/**
 * Storm scheduler: décide quand le prochain “éclair” doit tomber.
 * - plus intensity est élevée, plus c’est fréquent.
 */
function scheduleNextStormEvent(now: number, intensity: number): number {
  const i = clamp(intensity, 0.2, 1.2);
  const minDelay = 2200;
  const maxDelay = 9000;
  const span = maxDelay - minDelay;
  const delay = minDelay + Math.random() * span * (1.2 - clamp(i, 0.2, 1));
  return now + delay;
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export interface WeatherEngineProviderProps {
  children: ReactNode;
  biome?: UseSeasonOptions["biome"];
  worldId?: string;

  /**
   * Tick du moteur (pas le tick de useSeason).
   * 250–500ms = bon feeling (léger).
   */
  tickMs?: number;

  /**
   * Active le mode “useSeason as baseline” (recommandé).
   * Si false: tu contrôles via transitionTo/forceWeather uniquement.
   */
  followSeasonBaseline?: boolean;
}

export default function WeatherEngineProvider({
  children,
  biome = "generic",
  worldId,
  tickMs = 350,
  followSeasonBaseline = true,
}: WeatherEngineProviderProps) {
  // Baseline déterministe (saison/phase/météo/intensité/couleur)
  const season = useSeason({ biome, worldId });

  // Internal state (moteur unifié)
  const [weather, setWeather] = useState<WeatherKind>(season.weather);
  const [intensity, setIntensity] = useState<number>(clamp(season.intensity, 0, 1.2));
  const [phase, setPhase] = useState<WeatherPhase>(computePhase(season.weather, season.intensity));

  const lastUpdateMsRef = useRef<number>(Date.now());
  const nextEventAtRef = useRef<number | null>(season.weather === "storm" ? scheduleNextStormEvent(Date.now(), season.intensity) : null);

  // Transition state
  const transitionRef = useRef<{
    active: boolean;
    fromWeather: WeatherKind;
    toWeather: WeatherKind;
    fromIntensity: number;
    toIntensity: number;
    startMs: number;
    durationMs: number;
  }>({
    active: false,
    fromWeather: season.weather,
    toWeather: season.weather,
    fromIntensity: clamp(season.intensity, 0, 1.2),
    toIntensity: clamp(season.intensity, 0, 1.2),
    startMs: 0,
    durationMs: 0,
  });

  // Event subscribers
  const subsRef = useRef(new Set<(evt: WeatherEvent) => void>());
  const emit = useCallback((evt: WeatherEvent) => {
    subsRef.current.forEach((fn) => {
      try {
        fn(evt);
      } catch {}
    });
  }, []);

  const subscribe = useCallback((fn: (evt: WeatherEvent) => void) => {
    subsRef.current.add(fn);
    return () => subsRef.current.delete(fn);
  }, []);

  // Public API
  const forceWeather = useCallback(
    (w: WeatherKind, i?: number) => {
      const now = Date.now();
      transitionRef.current.active = false;

      const nextI = clamp(typeof i === "number" ? i : intensity, 0, 1.2);

      setWeather(w);
      setIntensity(nextI);
      setPhase(computePhase(w, nextI));
      lastUpdateMsRef.current = now;

      nextEventAtRef.current = w === "storm" ? scheduleNextStormEvent(now, nextI) : null;

      emit({ type: "WEATHER_CHANGED", weather: w, atMs: now });
      emit({ type: "INTENSITY_CHANGED", intensity: nextI, atMs: now });
    },
    [emit, intensity]
  );

  const transitionTo = useCallback(
    (toWeather: WeatherKind, opts?: { durationMs?: number; targetIntensity?: number }) => {
      const now = Date.now();
      const durationMs = clamp(opts?.durationMs ?? 1200, 250, 12000);
      const toIntensity = clamp(
        typeof opts?.targetIntensity === "number" ? opts.targetIntensity : clamp(season.intensity, 0, 1.2),
        0,
        1.2
      );

      transitionRef.current = {
        active: true,
        fromWeather: weather,
        toWeather,
        fromIntensity: intensity,
        toIntensity,
        startMs: now,
        durationMs,
      };

      // Si on transition vers storm, on schedule maintenant (sinon on aurait du “vide”)
      if (toWeather === "storm") {
        nextEventAtRef.current = scheduleNextStormEvent(now, Math.max(0.2, toIntensity));
      }

      emit({ type: "WEATHER_CHANGED", weather: toWeather, atMs: now });
    },
    [emit, intensity, season.intensity, weather]
  );

  // Follow baseline (useSeason) → mais via transitions, pas en “snap”
  useEffect(() => {
    if (!followSeasonBaseline) return;

    // Si la baseline change (nouvelle météo), on transition proprement
    if (season.weather !== weather) {
      transitionTo(season.weather, { durationMs: 1400, targetIntensity: clamp(season.intensity, 0, 1.2) });
      return;
    }

    // Si intensité baseline change beaucoup, on lisse
    const target = clamp(season.intensity, 0, 1.2);
    const delta = Math.abs(target - intensity);
    if (delta > 0.12) {
      transitionTo(weather, { durationMs: 900, targetIntensity: target });
    }
  }, [followSeasonBaseline, season.weather, season.intensity]); // eslint-disable-line react-hooks/exhaustive-deps

  // Tick moteur: applique transitions + schedule events
  useEffect(() => {
    const timer = window.setInterval(() => {
      const now = Date.now();
      lastUpdateMsRef.current = now;

      // 1) Transition active ?
      const tr = transitionRef.current;
      if (tr.active) {
        const t = clamp((now - tr.startMs) / tr.durationMs, 0, 1);
        // easing simple (smoothstep)
        const tt = t * t * (3 - 2 * t);

        const newIntensity = clamp(tr.fromIntensity + (tr.toIntensity - tr.fromIntensity) * tt, 0, 1.2);
        const newWeather: WeatherKind = t >= 0.65 ? tr.toWeather : tr.fromWeather;

        // Quand on “bascule” sur la météo cible
        if (newWeather !== weather) {
          setWeather(newWeather);
        }

        setIntensity(newIntensity);
        setPhase(computePhase(newWeather, newIntensity));

        if (t >= 1) {
          tr.active = false;
          // Rescheduler
          nextEventAtRef.current = newWeather === "storm" ? scheduleNextStormEvent(now, Math.max(0.2, newIntensity)) : null;
        }

        emit({ type: "INTENSITY_CHANGED", intensity: newIntensity, atMs: now });
      }

      // 2) Events (storm lightning)
      if (weather === "storm") {
        if (nextEventAtRef.current == null) {
          nextEventAtRef.current = scheduleNextStormEvent(now, Math.max(0.2, intensity));
        } else if (now >= nextEventAtRef.current) {
          const dist = Math.random(); // 0 proche, 1 loin
          emit({ type: "LIGHTNING_STRIKE", distance01: dist, atMs: now });
          nextEventAtRef.current = scheduleNextStormEvent(now, Math.max(0.2, intensity));
        }
      } else {
        nextEventAtRef.current = null;
      }
    }, tickMs);

    return () => window.clearInterval(timer);
  }, [emit, intensity, tickMs, weather]);

  // API object
  const api = useMemo<WeatherEngineAPI>(() => {
    return {
      state: {
        season,
        weather,
        intensity,
        phase,
        lastUpdateMs: lastUpdateMsRef.current,
        nextEventAtMs: nextEventAtRef.current,
        biome,
        worldId,
      },
      forceWeather,
      transitionTo,
      subscribe,
    };
  }, [biome, forceWeather, phase, season, subscribe, transitionTo, intensity, weather, worldId]);

  return <WeatherEngineContext.Provider value={api}>{children}</WeatherEngineContext.Provider>;
}
