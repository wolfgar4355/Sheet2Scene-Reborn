"use client";

import { motion } from "framer-motion";
import { PropsWithChildren, useCallback } from "react";
import bookAudio from "@utils/bookSounds"; // ✅ IMPORTANT — import par défaut

// ---------------------
// COUVERTURE DU LIVRE
// ---------------------
export function BookShell({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative rounded-2xl bg-[#3b2f2a] p-[10px] shadow-xl">
        {/* tranche cuir */}
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-black/30" />
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 rounded-xl overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

// ---------------------
// PAGE DE DROITE
// ---------------------
export function PageRight({ children }: PropsWithChildren) {

  const onFlip = useCallback(() => {
    bookAudio.flip(); // 🔊 joue le son de page flip
  }, []);

  return (
    <motion.div
      onClick={onFlip}         // 🔥 click = flip
      initial={{ rotateY: -2, opacity: 0.98 }}
      whileHover={{ rotateY: -1 }}
      className="bg-[url('/assets/visuals/parchment.jpg')] bg-cover bg-center p-6 md:p-8"
      style={{ transformOrigin: "right center" }}
    >
      {children}
    </motion.div>
  );
}

// ---------------------
// PAGE DE GAUCHE
// ---------------------
export function PageLeft({ children }: PropsWithChildren) {

  const onFlip = useCallback(() => {
    bookAudio.flip(); // 🔊 joue le son de page à gauche aussi
  }, []);

  return (
    <motion.div
      onClick={onFlip}         // 🔥 click = flip
      initial={{ rotateY: 2, opacity: 0.98 }}
      whileHover={{ rotateY: 1 }}
      className="bg-[url('/assets/visuals/parchment.jpg')] bg-cover bg-center p-6 md:p-8 border-l border-black/10"
      style={{ transformOrigin: "left center" }}
    >
      {children}
    </motion.div>
  );
}
