"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

import AudioBoot from './AudioBoot';
import useSeason, {
  getSeason,
  getDayPhase,
  getWeather,
  getAmbientColor
} from './hooks/useSeason';

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

/** --------------------------------------------------------------------------
 * 🎨 GrimoireFrame v2 – Layout global du grimoire
 * Gestion flip, saison, ambiance, pages UI
 * -------------------------------------------------------------------------- */

export default function GrimoireFrame({
  children,
}: {
  children: ReactNode;
}) {
  const seasonHook = useSeason();
  const [season, setSeason] = useState(seasonHook);
  const [isFlipping, setFlipping] = useState(false);

  const flip = () => {
    setFlipping(true);
    setTimeout(() => setFlipping(false), 800);
  };

  const bg = `/images/bg_hall.png`;
  const parchment = `/images/parchment.png`;

  return (
    <MithrilContext.Provider value={{ season, setSeason, flip, isFlipping }}>
      <main className="relative w-full h-full overflow-hidden bg-black text-white">
        {/* Décor principal */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 transition-all"
          style={{ backgroundImage: `url(${bg})` }}
        />

        {/* Parchemin */}
        <div
          className="absolute inset-0 pointer-events-none bg-no-repeat bg-contain mix-blend-lighten opacity-90 transition-all"
          style={{ backgroundImage: `url(${parchment})` }}
        />

        {/* Animation Flip */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isFlipping ? "flip" : "idle"}
            initial={{ rotateY: 0, opacity: 1 }}
            animate={{ rotateY: isFlipping ? 180 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>

        <AudioBoot />
      </main>
    </MithrilContext.Provider>
  );
}
