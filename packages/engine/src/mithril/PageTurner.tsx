// src/mithril/PageTurner.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

interface PageTurnerProps {
  step: number;
  pages: ReactNode[];
}

/**
 * 📖 Mithril Engine v2 — PageTurner AAA
 * - Flip 3D naturel
 * - Compatible GrimoireFrame (perspective, texture, ombrage)
 * - Sécurisé contre les steps hors-borne
 * - Rendu parchemin cohérent avec toute l’UI
 */
export default function PageTurner({ step, pages }: PageTurnerProps) {
  const safeStep = Math.max(0, Math.min(step, pages.length - 1));

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ perspective: "2000px" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={safeStep}
          initial={{
            rotateY: 90,
            opacity: 0,
            skewY: "4deg",
            z: 20,
          }}
          animate={{
            rotateY: 0,
            opacity: 1,
            skewY: "0deg",
            z: 0,
          }}
          exit={{
            rotateY: -90,
            opacity: 0,
            skewY: "-4deg",
            z: -20,
          }}
          transition={{
            duration: 0.85,
            ease: "easeInOut",
          }}
          className="
            absolute inset-0
            shadow-[0_0_60px_rgba(0,0,0,0.55)]
            bg-no-repeat bg-cover bg-center
            p-8 overflow-y-auto
            rounded-[8px]
          "
          style={{
            backgroundImage: "url('/assets/bg-parchment.png')",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Voile subtil pour renforcer le côté grimoire ancien */}
          <div className="absolute inset-0 pointer-events-none bg-[rgba(0,0,0,0.08)] mix-blend-multiply"></div>

          {/* Contenu de la page */}
          <div className="relative z-10">
            {pages[safeStep] ?? (
              <div className="text-center text-xl opacity-60">
                (Page manquante)
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
