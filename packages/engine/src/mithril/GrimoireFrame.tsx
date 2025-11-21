"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import AudioBoot from "@lib/mithril/AudioBoot";
import useSeason from "@lib/mithril/hooks/useSeason";
import {
  getSeason,
  getDayPhase,
  getWeather,
  getAmbientColor
} from '@ambient';

interface MithrilContextType {
  season: string;
  setSeason: (s: string) => void;
  flip: () => void;
  isFlipping: boolean;
}

const MithrilContext = createContext<MithrilContextType | null>(null);

export function useMithril() {
  const ctx = useContext(MithrilContext);
  if (!ctx) throw new Error("useMithril must be used inside <MithrilProvider>");
  return ctx;
}

/* ---------------------------------------------------------------------
   ► GRIMOIRE FRAME v1.5
   Cadre global : décor, saison, ambiance, flip, audio
------------------------------------------------------------------------ */

export default function GrimoireFrame({
  children,
}: {
  children: ReactNode;
}) {
  const [season, setSeason] = useState(useSeason());
  const [isFlipping, setFlipping] = useState(false);

  function flip() {
    setFlipping(true);
    setTimeout(() => setFlipping(false), 800); // durée animation
  }

  const bg = ambient.background ?? "/images/bg-hall.png";
  const parchment = ambient.parchment ?? "/images/parchment.png";

  return (
    <MithrilContext.Provider value={{ season, setSeason, flip, isFlipping }}>
      <main className="relative w-full h-full overflow-hidden bg-black text-white">
        {/* Décor principal */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 transition-all"
          style={{ backgroundImage: `url(${bg})` }}
        />

        {/* Papier / grille */}
        <div
          className="absolute inset-0 pointer-events-none bg-no-repeat bg-contain mix-blend-lighten opacity-90 transition-all"
          style={{ backgroundImage: `url(${parchment})` }}
        />

        {/* Animation FLIP */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isFlipping ? "flip" : "idle"}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isFlipping ? 180 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>

        {/* Préchargement audio global */}
        <AudioBoot />
      </main>
    </MithrilContext.Provider>
  );
}
