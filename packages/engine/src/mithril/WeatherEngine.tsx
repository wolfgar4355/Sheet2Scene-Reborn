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
  type UseSeasonOptions,
} from "./hooks/useSeason";

import type {
  WeatherState,
  WeatherKind,
} from "@engine/ambient/weather";

import { createWeatherState } from "@engine/ambient/weather";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type WeatherPhase = "calm" | "rising" | "peak" | "fading";

export type WeatherEvent =
  | { type: "LIGHTNING_STRIKE"; distance01: number; atMs: number }
  | { type: "WEATHER_CHANGED"; weather: WeatherState; atMs: number }
  | { type: "INTENSITY_CHANGED"; intensity: number; atMs: number };

export type WeatherEngineState = {
  season: SeasonData;
  weather: WeatherState;
  phase: WeatherPhase;

  lastUpdateMs: number;
  nextEventAtMs: number | null;

  biome: UseSeasonOptions["biome"];
  worldId?: string;
};

export type WeatherEngineAPI = {
  state: WeatherEngineState;

  forceWeather: (kind: WeatherKind, intensity?: number) => void;
  transitionTo: (
    kind: WeatherKind,
    opts?: { durationMs?: number; targetIntensity?: number }
  ) => void;

  subscribe: (fn: (evt: WeatherEvent) => void) => () => void;
};

const WeatherEngineContext =
  createContext<WeatherEngineAPI | undefined>(undefined);

export function useWeather(): WeatherEngineAPI {
  const ctx = useContext(WeatherEngineContext);
  if (!ctx) {
    throw new Error(
      "useWeather must be used inside <WeatherEngineProvider>"
    );
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function computePhase(weather: WeatherState): WeatherPhase {
  if (weather.kind === "clear" || weather.intensity <= 0.05) {
    return "calm";
  }
  if (weather.intensity < 0.35) return "rising";
  if (weather.intensity < 0.85) return "peak";
  return "peak";
}

function scheduleNextStormEvent(
  now: number,
  intensity: number
): number {
  const i = clamp(intensity, 0.2, 1.2);
  const minDelay = 2200;
  const maxDelay = 9000;
  const span = maxDelay - minDelay;
  const delay =
    minDelay + Math.random() * span * (1.2 - clamp(i, 0.2, 1));
  return now + delay;
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export interface WeatherEngineProviderProps {
  children: ReactNode;
  biome?: UseSeasonOptions["biome"];
  worldId?: string;
  tickMs?: number;
  followSeasonBaseline?: boolean;
}

export default function WeatherEngineProvider({
  children,
  biome = "generic",
  worldId,
  tickMs = 350,
  followSeasonBaseline = true,
}: WeatherEngineProviderProps) {
  // Baseline déterministe
  const season = useSeason({ biome, worldId });

  const [weather, setWeather] = useState<WeatherState>(() =>
    createWeatherState(season.weather, season.intensity)
  );

  const [phase, setPhase] = useState<WeatherPhase>(() =>
    computePhase(weather)
  );

  const lastUpdateMsRef = useRef(Date.now());
  const nextEventAtRef = useRef<number | null>(
    weather.kind === "storm"
      ? scheduleNextStormEvent(
          Date.now(),
          weather.intensity
        )
      : null
  );

  // Transition state
  const transitionRef = useRef<{
    active: boolean;
    from: WeatherState;
    to: WeatherState;
    startMs: number;
    durationMs: number;
  }>({
    active: false,
    from: weather,
    to: weather,
    startMs: 0,
    durationMs: 0,
  });

  // Events
  const subsRef = useRef(
    new Set<(evt: WeatherEvent) => void>()
  );

  const emit = useCallback((evt: WeatherEvent) => {
    subsRef.current.forEach((fn) => {
      try {
        fn(evt);
      } catch {}
    });
  }, []);

  const subscribe = useCallback(
    (fn: (evt: WeatherEvent) => void) => {
      subsRef.current.add(fn);
      return () => subsRef.current.delete(fn);
    },
    []
  );

  // -------------------------------------------------------------------------
  // Public API
  // -------------------------------------------------------------------------

  const forceWeather = useCallback(
    (kind: WeatherKind, intensity?: number) => {
      const now = Date.now();
      transitionRef.current.active = false;

      const next = createWeatherState(
        kind,
        intensity ?? weather.intensity
      );

      setWeather(next);
      setPhase(computePhase(next));
      lastUpdateMsRef.current = now;

      nextEventAtRef.current =
        next.kind === "storm"
          ? scheduleNextStormEvent(now, next.intensity)
          : null;

      emit({
        type: "WEATHER_CHANGED",
        weather: next,
        atMs: now,
      });
      emit({
        type: "INTENSITY_CHANGED",
        intensity: next.intensity,
        atMs: now,
      });
    },
    [emit, weather.intensity]
  );

  const transitionTo = useCallback(
    (
      kind: WeatherKind,
      opts?: {
        durationMs?: number;
        targetIntensity?: number;
      }
    ) => {
      const now = Date.now();
      const durationMs = clamp(
        opts?.durationMs ?? 1200,
        250,
        12000
      );

      const to = createWeatherState(
        kind,
        opts?.targetIntensity ?? weather.intensity
      );

      transitionRef.current = {
        active: true,
        from: weather,
        to,
        startMs: now,
        durationMs,
      };

      emit({
        type: "WEATHER_CHANGED",
        weather: to,
        atMs: now,
      });
    },
    [emit, weather]
  );

  // -------------------------------------------------------------------------
  // Follow season baseline
  // -------------------------------------------------------------------------

  useEffect(() => {
    if (!followSeasonBaseline) return;

    const baseline = createWeatherState(
      season.weather,
      season.intensity
    );

    if (
      baseline.kind !== weather.kind ||
      Math.abs(
        baseline.intensity - weather.intensity
      ) > 0.12
    ) {
      transitionTo(baseline.kind, {
        durationMs: 1400,
        targetIntensity: baseline.intensity,
      });
    }
  }, [
    followSeasonBaseline,
    season.weather,
    season.intensity,
  ]); // eslint-disable-line

  // -------------------------------------------------------------------------
  // Tick moteur
  // -------------------------------------------------------------------------

  useEffect(() => {
    const timer = window.setInterval(() => {
      const now = Date.now();
      lastUpdateMsRef.current = now;

      const tr = transitionRef.current;
      if (tr.active) {
        const t = clamp(
          (now - tr.startMs) / tr.durationMs,
          0,
          1
        );
        const tt = t * t * (3 - 2 * t);

        const newIntensity =
          tr.from.intensity +
          (tr.to.intensity - tr.from.intensity) *
            tt;

        const newKind =
          t >= 0.65 ? tr.to.kind : tr.from.kind;

        const next = createWeatherState(
          newKind,
          newIntensity
        );

        setWeather(next);
        setPhase(computePhase(next));

        emit({
          type: "INTENSITY_CHANGED",
          intensity: next.intensity,
          atMs: now,
        });

        if (t >= 1) {
          tr.active = false;
          nextEventAtRef.current =
            next.kind === "storm"
              ? scheduleNextStormEvent(
                  now,
                  Math.max(0.2, next.intensity)
                )
              : null;
        }
      }

      if (weather.kind === "storm") {
        if (
          nextEventAtRef.current == null ||
          now >= nextEventAtRef.current
        ) {
          emit({
            type: "LIGHTNING_STRIKE",
            distance01: Math.random(),
            atMs: now,
          });
          nextEventAtRef.current =
            scheduleNextStormEvent(
              now,
              Math.max(0.2, weather.intensity)
            );
        }
      } else {
        nextEventAtRef.current = null;
      }
    }, tickMs);

    return () => window.clearInterval(timer);
  }, [emit, tickMs, weather]);

  // -------------------------------------------------------------------------
  // API
  // -------------------------------------------------------------------------

  const api = useMemo<WeatherEngineAPI>(
    () => ({
      state: {
        season,
        weather,
        phase,
        lastUpdateMs: lastUpdateMsRef.current,
        nextEventAtMs: nextEventAtRef.current,
        biome,
        worldId,
      },
      forceWeather,
      transitionTo,
      subscribe,
    }),
    [
      biome,
      forceWeather,
      phase,
      season,
      subscribe,
      transitionTo,
      weather,
      worldId,
    ]
  );

  return (
    <WeatherEngineContext.Provider value={api}>
      {children}
    </WeatherEngineContext.Provider>
  );
}
