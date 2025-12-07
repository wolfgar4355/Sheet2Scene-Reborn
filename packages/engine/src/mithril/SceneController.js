"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { getSeason, getWeather } from "./time";
const SceneContext = createContext(undefined);
export function useScene() {
    const ctx = useContext(SceneContext);
    if (!ctx)
        throw new Error("useScene must be used inside SceneController");
    return ctx;
}
export default function SceneController({ children, }) {
    const [cameraZoom, setCameraZoom] = useState(1);
    const [lightLevel, setLightLevel] = useState(0.85);
    const [season, setSeason] = useState(getSeason());
    const [weather, setWeather] = useState("clear");
    const zoomMotion = useMotionValue(cameraZoom);
    const lightMotion = useMotionValue(lightLevel);
    const brightness = useTransform(lightMotion, [0, 1], [0.6, 1]);
    // Lumières & météo
    useEffect(() => {
        async function sync() {
            const w = await getWeather();
            setWeather(w);
            const now = new Date().getHours();
            const isNight = now < 6 || now > 20;
            setLightLevel(isNight ? 0.7 : 1);
        }
        sync();
        const interval = setInterval(sync, 60 * 1000);
        return () => clearInterval(interval);
    }, []);
    // Synchro motion
    useEffect(() => {
        zoomMotion.set(cameraZoom);
        lightMotion.set(lightLevel);
    }, [cameraZoom, lightLevel]);
    return (_jsx(SceneContext.Provider, { value: {
            cameraZoom,
            setCameraZoom,
            lightLevel,
            setLightLevel,
            season,
            weather,
        }, children: _jsx(motion.div, { style: {
                scale: zoomMotion,
                filter: `brightness(${brightness.get()})`,
            }, className: "relative w-full h-full overflow-hidden transition-all", children: children }) }));
}
