
"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  getSeason,
  getDayPhase,
  getWeather,
  getAmbientColor
} from '@ambient';

interface SceneContextType {
  cameraZoom: number;
  setCameraZoom: (v: number) => void;
  lightLevel: number;
  setLightLevel: (v: number) => void;
  weather: string;
  season: string;
}

const SceneContext = createContext<SceneContextType | undefined>(undefined);

export function useScene() {
  const cx = useContext(SceneContext);
  if (!cx) throw new Error("useScene must be used within SceneController");
  return cx;
}

export default function SceneController({
  children,
}: {
  children: ReactNode;
}) {
  const [cameraZoom, setCameraZoom] = useState(1);
  const [lightLevel, setLightLevel] = useState(0.85);
  const [season, setSeason] = useState(getSeason());
  const [weather, setWeather] = useState("clear");

  // Framer Motion
  const zoomMotion = useMotionValue(cameraZoom);
  const lightMotion = useMotionValue(lightLevel);
  const brightness = useTransform(lightMotion, [0, 1], [0.6, 1]);

  // Synchronisation automatique (heure / saisons / météo)
  useEffect(() => {
    async function syncLighting() {
      const currWeather = await getWeather();
      setWeather(currWeather);

      const hour = new Date().getHours();
      const isNight = hour < 6 || hour > 20;

      // Light Levels
      if (isNight) setLightLevel(0.7);
      else setLightLevel(1);

      // Saisons : actualiser toutes les minutes
      setSeason(getSeason());
    }

    syncLighting();
    const interval = setInterval(syncLighting, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Pousser valeurs dans Framer Motion
  useEffect(() => {
    zoomMotion.set(cameraZoom);
    lightMotion.set(lightLevel);
  }, [cameraZoom, lightLevel]);

  return (
    <SceneContext.Provider
      value={{
        cameraZoom,
        setCameraZoom,
        lightLevel,
        setLightLevel,
        season,
        weather,
      }}
    >
      <motion.div
        style={{
          scale: zoomMotion,
          filter: `brightness(${brightness.get()})`,
        }}
        className="relative w-full h-full overflow-hidden transition-all"
      >
        {children}
      </motion.div>
    </SceneContext.Provider>
  );
}
