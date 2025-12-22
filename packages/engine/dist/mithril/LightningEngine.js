// src/mithril/LightningEngine.tsx
"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { useWeather } from "./WeatherEngine";
import { triggerCameraShake } from "./CameraShake";
import { generateThunderEvent, } from "@engine/ambient/thunder";
import { SoundManifest } from "@engine/ambient/sound.manifest";
/**
 * ⚡ LightningEngine — Weather-driven AAA (canon)
 * --------------------------------------------------
 * - écoute WeatherEngine (events uniquement)
 * - flash visuel synchronisé
 * - tonnerre audio réaliste (distance + intensité)
 * - camera shake proportionnelle
 * - zéro logique météo interne
 */
export default function LightningEngine() {
    const { state, subscribe } = useWeather();
    const weatherRef = useRef(state.weather);
    const [flash, setFlash] = useState(false);
    const timeoutRef = useRef(null);
    // ---------------------------------------------------------------------------
    // Garder la météo courante sans closures obsolètes
    // ---------------------------------------------------------------------------
    useEffect(() => {
        weatherRef.current = state.weather;
    }, [state.weather]);
    // ---------------------------------------------------------------------------
    // Écoute événements météo (LIGHTNING_STRIKE)
    // ---------------------------------------------------------------------------
    useEffect(() => {
        if (typeof window === "undefined")
            return;
        // Pas de tempête → nettoyage
        if (state.weather.kind !== "storm") {
            clear();
            return;
        }
        const unsubscribe = subscribe((evt) => {
            if (evt.type !== "LIGHTNING_STRIKE")
                return;
            handleLightning(evt.distance01);
        });
        return () => {
            unsubscribe();
            clear();
        };
    }, [state.weather.kind, subscribe]);
    // ---------------------------------------------------------------------------
    // Réaction à un éclair (déjà décidé par WeatherEngine)
    // ---------------------------------------------------------------------------
    function handleLightning(distance01) {
        const event = generateThunderEvent(distance01);
        const weather = weatherRef.current;
        // ⚡ FLASH VISUEL
        setFlash(true);
        window.setTimeout(() => setFlash(false), 120);
        // 🎥 CAMERA SHAKE (plus proche = plus violent)
        triggerCameraShake((1 - distance01) * 900);
        // 🎧 AUDIO (retardé selon distance)
        timeoutRef.current = window.setTimeout(() => {
            try {
                // Résolution canon depuis le SoundManifest
                const thunderGroup = SoundManifest.thunder[event.distance];
                if (!thunderGroup)
                    return;
                const url = thunderGroup[Math.floor(Math.random() * thunderGroup.length)];
                const audio = new Audio(url);
                const distanceFactor = event.distance === "close"
                    ? 1
                    : event.distance === "mid"
                        ? 0.75
                        : 0.55;
                audio.volume = Math.min(1, distanceFactor * (0.6 + weather.intensity * 0.7));
                audio.play().catch(() => { });
            }
            catch {
                /* silence volontaire */
            }
        }, event.delayMs);
    }
    // ---------------------------------------------------------------------------
    // Cleanup
    // ---------------------------------------------------------------------------
    function clear() {
        if (timeoutRef.current !== null) {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setFlash(false);
    }
    // ---------------------------------------------------------------------------
    // Flash overlay visuel
    // ---------------------------------------------------------------------------
    return (_jsx("div", { "aria-hidden": "true", className: "pointer-events-none fixed inset-0 transition-opacity duration-150", style: {
            opacity: flash ? 1 : 0,
            background: "radial-gradient(circle at 30% 0%, rgba(255,255,255,0.95), rgba(255,255,255,0.35) 45%, transparent 75%)",
            mixBlendMode: "screen",
            zIndex: 50,
        } }));
}
