// src/mithril/PageTurner.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

export interface PageTurnerProps {
  /** Numéro de page courant (déclenche l’animation) */
  page: number;

  /** Contenu de la page */
  children: ReactNode;
}

/**
 * 📖 Mithril Engine v2 — PageTurner AAA
 *
 * - Flip 3D naturel façon grimoire
 * - Compatible GrimoireFrame (perspective globale)
 * - Animation déclenchée par `page`
 * - API React standard (children)
 * - Zéro dépendance au contenu interne
 */
export default function PageTurner({
  page,
  children,
}: PageTurnerProps) {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ perspective: "2000px" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
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
            overflow-hidden
            rounded-[8px]
          "
          style={{
            backgroundImage: "url('/engine/grimoire/page-texture.webp')",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Voile subtil parchemin ancien */}
          <div
            className="absolute inset-0 pointer-events-none
                       bg-[rgba(0,0,0,0.08)]
                       mix-blend-multiply"
          />

          {/* Contenu réel de la page */}
          <div className="relative z-10 w-full h-full">
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
