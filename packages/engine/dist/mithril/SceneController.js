"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState, } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { getSeason, getDayPhase, getWeather, getAmbientColor, } from "./time";
const SceneContext = createContext(undefined);
export function useScene() {
    const ctx = useContext(SceneContext);
    if (!ctx)
        throw new Error("useScene must be used inside <SceneController>");
    return ctx;
}
// ---------------------------------------------------------------------------
// Controller principal
// ---------------------------------------------------------------------------
export default function SceneController({ children }) {
    // États principaux ---------------------------------------------------------
    const [cameraZoom, setCameraZoom] = useState(1);
    const [lightLevel, setLightLevel] = useState(0.9);
    const [season, setSeason] = useState(getSeason());
    const [dayPhase, setDayPhase] = useState(getDayPhase());
    const [weather, setWeather] = useState("clear");
    const [ambientColor, setAmbientColorState] = useState(getAmbientColor(season, dayPhase));
    // Motion values (suivi caméra / lumière) ----------------------------------
    const zoomMotion = useSpring(cameraZoom, {
        stiffness: 100,
        damping: 20,
    });
    const lightMotion = useSpring(lightLevel, {
        stiffness: 90,
        damping: 25,
    });
    const brightness = useTransform(lightMotion, [0, 1], [0.4, 1]);
    // ---------------------------------------------------------------------------
    // Synchronisation automatique météo + saison + phase du jour
    // ---------------------------------------------------------------------------
    useEffect(() => {
        async function sync() {
            // saison & phase
            const newSeason = getSeason();
            const newPhase = getDayPhase();
            setSeason(newSeason);
            setDayPhase(newPhase);
            // météo
            const w = await getWeather();
            setWeather(w);
            // couleur ambiance
            setAmbientColorState(getAmbientColor(newSeason, newPhase));
            // lumière selon la phase du jour
            if (newPhase === "night")
                setLightLevel(0.7);
            else if (newPhase === "evening")
                setLightLevel(0.85);
            else
                setLightLevel(1);
        }
        sync();
        const t = setInterval(sync, 60 * 1000);
        return () => clearInterval(t);
    }, []);
    // ---------------------------------------------------------------------------
    // Sync motion controllers quand state change
    // ---------------------------------------------------------------------------
    useEffect(() => {
        zoomMotion.set(cameraZoom);
        lightMotion.set(lightLevel);
    }, [cameraZoom, lightLevel]);
    // ---------------------------------------------------------------------------
    // Render
    // ---------------------------------------------------------------------------
    return (_jsx(SceneContext.Provider, { value: {
            cameraZoom,
            setCameraZoom,
            lightLevel,
            setLightLevel,
            season,
            dayPhase,
            weather,
            ambientColor,
        }, children: _jsx(motion.div, { style: {
                scale: zoomMotion,
                filter: brightness.to((v) => `brightness(${v})`),
                backgroundColor: ambientColor,
            }, className: "relative w-full h-full overflow-hidden transition-colors duration-700", children: children }) }));
}
