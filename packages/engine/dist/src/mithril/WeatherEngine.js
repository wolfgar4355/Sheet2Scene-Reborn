// src/mithril/WeatherEngine.tsx
"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, } from "react";
import useSeason from "./hooks/useSeason";
import { createWeatherState } from "../ambient/weather";
const WeatherEngineContext = createContext(undefined);
export function useWeather() {
    const ctx = useContext(WeatherEngineContext);
    if (!ctx) {
        throw new Error("useWeather must be used inside <WeatherEngineProvider>");
    }
    return ctx;
}
// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function clamp(n, a, b) {
    return Math.max(a, Math.min(b, n));
}
function computePhase(weather) {
    if (weather.kind === "clear" || weather.intensity <= 0.05) {
        return "calm";
    }
    if (weather.intensity < 0.35)
        return "rising";
    if (weather.intensity < 0.85)
        return "peak";
    return "peak";
}
function scheduleNextStormEvent(now, intensity) {
    const i = clamp(intensity, 0.2, 1.2);
    const minDelay = 2200;
    const maxDelay = 9000;
    const span = maxDelay - minDelay;
    const delay = minDelay + Math.random() * span * (1.2 - i);
    return now + delay;
}
export default function WeatherEngineProvider({ children, biome = "generic", worldId, tickMs = 350, followSeasonBaseline = true, }) {
    // Baseline déterministe
    const season = useSeason({ biome, worldId });
    const [weather, setWeather] = useState(() => createWeatherState(season.weather, season.intensity));
    const [phase, setPhase] = useState(() => computePhase(weather));
    // Refs (évite closures obsolètes)
    const weatherRef = useRef(weather);
    const lastUpdateMsRef = useRef(Date.now());
    const nextEventAtRef = useRef(null);
    useEffect(() => {
        weatherRef.current = weather;
    }, [weather]);
    // Transition state
    const transitionRef = useRef({
        active: false,
        from: weather,
        to: weather,
        startMs: 0,
        durationMs: 0,
    });
    // Event subscribers
    const subsRef = useRef(new Set());
    const emit = useCallback((evt) => {
        subsRef.current.forEach((fn) => {
            try {
                fn(evt);
            }
            catch { }
        });
    }, []);
    const subscribe = useCallback((fn) => {
        subsRef.current.add(fn);
        return () => subsRef.current.delete(fn);
    }, []);
    // -------------------------------------------------------------------------
    // Public API
    // -------------------------------------------------------------------------
    const forceWeather = useCallback((kind, intensity) => {
        const now = Date.now();
        transitionRef.current.active = false;
        const next = createWeatherState(kind, intensity ?? weatherRef.current.intensity);
        setWeather(next);
        setPhase(computePhase(next));
        lastUpdateMsRef.current = now;
        nextEventAtRef.current =
            next.kind === "storm"
                ? scheduleNextStormEvent(now, next.intensity)
                : null;
        emit({ type: "WEATHER_CHANGED", weather: next, atMs: now });
        emit({
            type: "INTENSITY_CHANGED",
            intensity: next.intensity,
            atMs: now,
        });
    }, [emit]);
    const transitionTo = useCallback((kind, opts) => {
        const now = Date.now();
        const durationMs = clamp(opts?.durationMs ?? 1200, 250, 12000);
        const to = createWeatherState(kind, opts?.targetIntensity ?? weatherRef.current.intensity);
        transitionRef.current = {
            active: true,
            from: weatherRef.current,
            to,
            startMs: now,
            durationMs,
        };
        emit({
            type: "WEATHER_CHANGED",
            weather: to,
            atMs: now,
        });
    }, [emit]);
    // -------------------------------------------------------------------------
    // Follow season baseline
    // -------------------------------------------------------------------------
    useEffect(() => {
        if (!followSeasonBaseline)
            return;
        const baseline = createWeatherState(season.weather, season.intensity);
        const current = weatherRef.current;
        if (baseline.kind !== current.kind ||
            Math.abs(baseline.intensity - current.intensity) > 0.12) {
            transitionTo(baseline.kind, {
                durationMs: 1400,
                targetIntensity: baseline.intensity,
            });
        }
    }, [followSeasonBaseline, season.weather, season.intensity, transitionTo]);
    // -------------------------------------------------------------------------
    // Tick moteur
    // -------------------------------------------------------------------------
    useEffect(() => {
        const timer = window.setInterval(() => {
            const now = Date.now();
            lastUpdateMsRef.current = now;
            const tr = transitionRef.current;
            if (tr.active) {
                const t = clamp((now - tr.startMs) / tr.durationMs, 0, 1);
                const tt = t * t * (3 - 2 * t);
                const newIntensity = tr.from.intensity +
                    (tr.to.intensity - tr.from.intensity) * tt;
                const newKind = t >= 0.65 ? tr.to.kind : tr.from.kind;
                const next = createWeatherState(newKind, newIntensity);
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
                            ? scheduleNextStormEvent(now, Math.max(0.2, next.intensity))
                            : null;
                }
            }
            const current = weatherRef.current;
            if (current.kind === "storm") {
                if (nextEventAtRef.current == null ||
                    now >= nextEventAtRef.current) {
                    emit({
                        type: "LIGHTNING_STRIKE",
                        distance01: Math.random(),
                        atMs: now,
                    });
                    nextEventAtRef.current = scheduleNextStormEvent(now, Math.max(0.2, current.intensity));
                }
            }
            else {
                nextEventAtRef.current = null;
            }
        }, tickMs);
        return () => window.clearInterval(timer);
    }, [emit, tickMs]);
    // -------------------------------------------------------------------------
    // API
    // -------------------------------------------------------------------------
    const api = useMemo(() => ({
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
    }), [
        biome,
        forceWeather,
        phase,
        season,
        subscribe,
        transitionTo,
        weather,
        worldId,
    ]);
    return (_jsx(WeatherEngineContext.Provider, { value: api, children: children }));
}
