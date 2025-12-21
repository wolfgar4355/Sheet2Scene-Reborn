// src/mithril/AmbientManager.tsx
"use client";
import { useEffect, useRef } from "react";
import { useScene } from "./SceneController";
import { AudioBootCoreInstance } from "./AudioBoot";
import { loadAudio } from "./audioLoader";
import { pickWeatherSound } from "@engine/ambient";
/**
 * AmbientManager — Mithril Engine AAA (CANON)
 * - lecture seule du WeatherState
 * - aucun état météo ici
 */
export default function AmbientManager() {
    const scene = useScene();
    const audioRef = useRef(null);
    const gainRef = useRef(null);
    // ---------------------------------------------------------------------------
    // CSS ambient color
    // ---------------------------------------------------------------------------
    useEffect(() => {
        document.documentElement.style.setProperty("--mithril-ambient-color", scene.ambientColor);
    }, [scene.ambientColor]);
    // ---------------------------------------------------------------------------
    // Weather audio loop
    // ---------------------------------------------------------------------------
    useEffect(() => {
        let cancelled = false;
        const weather = scene.weather;
        (async () => {
            if (weather.kind === "clear") {
                fadeOut(gainRef.current);
                return;
            }
            await AudioBootCoreInstance.ready();
            if (cancelled)
                return;
            const ctx = AudioBootCoreInstance.context;
            const sound = pickWeatherSound(weather);
            const el = await loadAudio(sound.mp3);
            if (cancelled)
                return;
            const source = ctx.createMediaElementSource(el);
            const gain = ctx.createGain();
            gain.gain.value = 0;
            source.connect(gain).connect(ctx.destination);
            el.loop = true;
            el.volume = 1;
            try {
                await el.play();
            }
            catch { }
            audioRef.current = el;
            gainRef.current = gain;
            fadeTo(gain, computeVolume(weather), 1);
        })();
        return () => {
            cancelled = true;
            fadeOut(gainRef.current);
        };
    }, [scene.weather]);
    // ---------------------------------------------------------------------------
    // Volume updates
    // ---------------------------------------------------------------------------
    useEffect(() => {
        if (!gainRef.current)
            return;
        fadeTo(gainRef.current, computeVolume(scene.weather), 0.3);
    }, [scene.weather]);
    return null;
}
// ---------------------------------------------------------------------------
// utils
// ---------------------------------------------------------------------------
function computeVolume(weather) {
    if (weather.kind === "clear")
        return 0;
    const base = weather.kind === "storm" ? 0.55 : 0.35;
    return Math.min(1, base + weather.intensity * 0.6);
}
function fadeTo(gain, value, seconds = 0.5) {
    if (!gain)
        return;
    const now = gain.context.currentTime;
    gain.gain.cancelScheduledValues(now);
    gain.gain.linearRampToValueAtTime(value, now + seconds);
}
function fadeOut(gain, seconds = 0.6) {
    if (!gain)
        return;
    const now = gain.context.currentTime;
    gain.gain.cancelScheduledValues(now);
    gain.gain.linearRampToValueAtTime(0, now + seconds);
}
