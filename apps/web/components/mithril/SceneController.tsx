"use client";

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

import {
    useMotionValue,
    useTransform,
    motion,
} from "framer-motion";

import { getSeason, getWeather } from "@/lib/mithril/ambient.config";

interface SceneContextType {
    cameraZoom: number;
    setCameraZoom: (v: number) => void;

    lightLevel: number;
    setLightLevel: (v: number) => void;

    ambientColor: string;
    setAmbientColor: (v: string) => void;

    weather: string;
    setWeather: (v: string) => void;
}

const SceneContext = createContext<SceneContextType | undefined>(undefined);

export function useScene() {
    const ctx = useContext(SceneContext);
    if (!ctx) throw new Error("useScene must be used within SceneController");
    return ctx;
}

export default function SceneController({ children }: { children: ReactNode }) {
    const [cameraZoom, setCameraZoom] = useState(1);
    const [lightLevel, setLightLevel] = useState(1);
    const [ambientColor, setAmbientColor] = useState("#ffffff");
    const [weather, setWeather] = useState("clear");

    /** 🌗 Motion values (Framer Motion requires MotionValue) */
    const zoomMotion = useMotionValue(1);
    const lightMotion = useMotionValue(lightLevel);

    /** 🔥 Transformations dynamiques (éclairage selon heure/saison/météo) */
    const brightness = useTransform(lightMotion, [0, 1], [0.6, 1]);

    /** 🌅 Synchronisation automatique */
    useEffect(() => {
        const updateLighting = async () => {
            const season = getSeason();
            const currentWeather = await getWeather();

            const hour = new Date().getHours();
            const isLight = hour >= 6 && hour < 20;

            // 🎨 Couleurs par saison
            const seasonColor =
                season === "winter"
                    ? "#80b3ff"
                    : season === "autumn"
                    ? "#ff995a"
                    : season === "spring"
                    ? "#9fe79c"
                    : "#ffe186"; // été défaut

            setLightLevel(isLight ? 0.7 : 1);
            setAmbientColor(seasonColor);
            setWeather(currentWeather);

            // ⚡ Mise à jour interpolation
            lightMotion.set(isLight ? 0.7 : 1);
        };

        updateLighting();

        const interval = setInterval(updateLighting, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, [lightMotion]);

    return (
        <SceneContext.Provider
            value={{
                cameraZoom,
                setCameraZoom,
                lightLevel,
                setLightLevel,
                ambientColor,
                setAmbientColor,
                weather,
                setWeather,
            }}
        >
            <motion.div
                style={{
                    scale: zoomMotion,
                    filter: `brightness(${brightness.get()})`,
                    backgroundColor: ambientColor,
                    transition: "background-color 0.6s ease",
                }}
                className="relative w-full h-full overflow-hidden"
            >
                {children}
            </motion.div>
        </SceneContext.Provider>
    );
}
