"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

import AudioBoot from "./AudioBoot";
import { useSeason } from "@components/mithril/hooks/useSeason";

interface MithrilContextType {
  cameraZoom: number;
  setCameraZoom: (v: number) => void;
  lightLevel: number;
  setLightLevel: (v: number) => void;
  toggleBook: () => void;
  isOpen: boolean;
}

const MithrilContext = createContext<MithrilContextType | null>(null);

export const useMithril = () => {
  const ctx = useContext(MithrilContext);
  if (!ctx) throw new Error("useMithril must be used inside <MithrilProvider>");
  return ctx;
};

/**
 * 📘 GrimoireFrame v1.4
 * Gestion du moteur visuel global (parchemin, pages, flip, audio)
 */
export default function GrimoireFrame({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [cameraZoom, setCameraZoom] = useState(1);
  const [lightLevel, setLightLevel] = useState(1);

  const toggleBook = () => setIsOpen((v) => !v);

  const season = useSeason();

  /** Effet “respiration” de la caméra */
  useEffect(() => {
    const interval = setInterval(() => {
      setCameraZoom((z) => (z > 1.05 ? 0.95 : 1.1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MithrilContext.Provider
      value={{
        cameraZoom,
        setCameraZoom,
        lightLevel,
        setLightLevel,
        toggleBook,
        isOpen
      }}
    >

      <main className="relative w-full h-full overflow-hidden bg-black text-white">
        <motion.div
          className="absolute inset-0 bg-[url('/images/bg-hall.png')] bg-cover bg-center opacity-25"
          animate={{ opacity: isOpen ? 0.4 : 0.1 }}
          transition={{ duration: 1.2 }}
        />

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="book-open"
              initial={{ rotateY: -180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 180, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="relative mx-auto mt-10 w-[90%] max-w-6xl h-[85vh] flex shadow-2xl bg-[url('/images/parchment.png')] bg-cover rounded-2xl overflow-hidden"
            >
              <div className="flex-1 p-6 overflow-y-auto">{children}</div>
            </motion.div>
          ) : (
            <motion.div
              key="book-closed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 bg-[url('/images/grimoire-closed-clear.png')] bg-center bg-contain bg-no-repeat"
            />
          )}
        </AnimatePresence>
      </main>
    </MithrilContext.Provider>
  );
}
