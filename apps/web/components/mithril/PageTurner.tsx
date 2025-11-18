"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface PageTurnerProps {
  step: number;
  pages: ReactNode[];
}

/**
 * 🪶 Mithril Engine v1.3 — PageTurner
 * Gère les transitions animées entre les pages du grimoire (tourner la feuille).
 */
export default function PageTurner({ step, pages }: PageTurnerProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-[url('/images/parchment.png')] bg-cover bg-center shadow-xl p-8 overflow-y-auto"
        >
          {pages[step]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
