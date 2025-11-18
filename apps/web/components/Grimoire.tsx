"use client";

import { motion } from "framer-motion";
import { PropsWithChildren, useCallback } from "react";
import { bookAudio } from "../utils/bookSounds"; // ton chemin actuel

export function BookShell({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative rounded-2xl bg-[#3b2f2a] p-[10px] shadow-xl">
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-black/30" />
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 rounded-xl overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

export function PageLeft({ children }: PropsWithChildren) {
  const onFlip = useCallback(() => {
    bookAudio.flip().catch(() => {});
  }, []);

  return (
    <motion.div
      initial={{ rotateY: -2, opacity: 0.98 }}
      whileHover={{ rotateY: -1 }}
      onPointerDown={onFlip}              // ✅ fonctionne sur mobile + desktop
      className="bg-[url('/images/parchment.png')] bg-cover bg-center p-6 md:p-8"
      style={{ transformOrigin: "right center" }}
    >
      {children}
    </motion.div>
  );
}

export function PageRight({ children }: PropsWithChildren) {
  const onFlip = useCallback(() => {
    bookAudio.flip().catch(() => {});
  }, []);

  return (
    <motion.div
      initial={{ rotateY: 2, opacity: 0.98 }}
      whileHover={{ rotateY: 1 }}
      onPointerDown={onFlip}              // ✅ idem
      className="bg-[url('/images/parchment.png')] bg-cover bg-center p-6 md:p-8"
      style={{ transformOrigin: "left center" }}
    >
      {children}
    </motion.div>
  );
}
