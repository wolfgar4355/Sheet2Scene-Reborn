// src/mithril/SceneController.tsx
"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import useSeason from "./hooks/useSeason";
import { useCamera } from "./hooks/useCamera";
import { createWeatherState } from "@engine/ambient/weather";
const SceneContext = createContext(undefined);
export function useScene() {
    const ctx = useContext(SceneContext);
    if (!ctx) {
        throw new Error("useScene must be used inside <SceneController>");
    }
    return ctx;
}
// ---------------------------------------------------------------------------
// AAA SceneController
// ---------------------------------------------------------------------------
export default function SceneController({ biome = "generic", worldId = "mithril-quest", children, }) {
    // -------------------------------------------------------------------------
    // Saison + météo + ambiance
    // -------------------------------------------------------------------------
    const season = useSeason({ biome, worldId });
    /**
     * Construction canon du WeatherState
     * → UNE seule source de vérité
     */
    const weather = createWeatherState(season.weather, season.intensity ?? 0);
    // -------------------------------------------------------------------------
    // Lumière globale selon la phase
    // -------------------------------------------------------------------------
    const lightLevel = season.phase === "night"
        ? 0.25
        : season.phase === "evening" || season.phase === "morning"
            ? 0.55
            : 1;
    // -------------------------------------------------------------------------
    // Camera AAA v3
    // -------------------------------------------------------------------------
    const camera = useCamera();
    const lightMotion = useSpring(lightLevel, {
        stiffness: 90,
        damping: 25,
    });
    const brightness = useTransform(lightMotion, [0, 1], [0.4, 1]);
    // -------------------------------------------------------------------------
    // Render
    // -------------------------------------------------------------------------
    return (_jsx(SceneContext.Provider, { value: {
            camera,
            lightLevel,
            season: season.name,
            phase: season.phase,
            weather,
            ambientColor: season.ambientColor,
            biome,
            worldId,
        }, children: _jsx(motion.div, { style: {
                scale: camera.zoom,
                filter: useTransform(brightness, (v) => `brightness(${v})`),
                backgroundColor: season.ambientColor,
            }, className: "relative w-full h-full overflow-hidden transition-colors duration-700", children: children }) }));
}
