"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

import AudioBoot from "./AudioBoot";
import useSeason, { type SeasonData } from "./hooks/useSeason";

interface MithrilContextType {
  season: SeasonData;
  setSeason: Dispatch<SetStateAction<SeasonData>>;
  flip: () => void;
  isFlipping: boolean;
}

const MithrilContext = createContext<MithrilContextType | null>(null);

export function useMithril(): MithrilContextType {
  const ctx = useContext(MithrilContext);
  if (!ctx) {
    throw new Error("useMithril must be used inside <GrimoireFrame>");
  }
  return ctx;
}

type GrimoireFrameProps = {
  children: ReactNode;
};

/**
 * 🧙‍♂️ GrimoireFrame — layout global du grimoire
 * Gestion du flip de page, saison, ambiance, etc.
 */
export default function GrimoireFrame({ children }: GrimoireFrameProps) {
  const initialSeason = useSeason();
  const [season, setSeason] = useState<SeasonData>(initialSeason);
  const [isFlipping, setFlipping] = useState(false);

  // Si le hook recalcule la saison (changement d’heure / de mois), on synchronise l’état
  useEffect(() => {
    setSeason(initialSeason);
  }, [initialSeason]);

  const flip = () => {
    setFlipping(true);
    setTimeout(() => setFlipping(false), 800);
  };

  const bg = "/images/bg_hall.png";
  const parchment = "/images/parchment.png";

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

        {/* Animation de flip des pages */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isFlipping ? "flip" : "idle"}
            initial={{ rotateY: 0, opacity: 1 }}
            animate={{ rotateY: isFlipping ? 180 : 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>

        {/* Boot audio / ambiances */}
        <AudioBoot />
      </main>
    </MithrilContext.Provider>
  );
}
