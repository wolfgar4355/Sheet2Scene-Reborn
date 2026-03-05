"use client";

import { motion } from "framer-motion";
import { PropsWithChildren, useCallback } from "react";

/**
 * Génère un son de "page qui tourne" (page flip) de façon 100% procédurale (sans fichier audio externe).
 * Utilise l'API Web Audio pour créer un bruit blanc filtré avec une enveloppe percussive.
 */
function playSynthesizedPageFlip() {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    const ctx = new AudioContextClass();
    const bufferSize = ctx.sampleRate * 0.15; // 150ms
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      // Filtre passe-bas très basique pour adoucir le bruit
      data[i] = (lastOut + (0.05 * white)) / 1.05;
      lastOut = data[i];
      
      // Enveloppe : attaque immédiate, chute exponentielle rapide
      const envelope = Math.exp(-i / (bufferSize / 4));
      data[i] *= envelope * 2.5;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;

    // Filtre pour donner un aspect "papier" (médiums/aigus)
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1200;
    filter.Q.value = 0.5;

    noiseSource.connect(filter);
    filter.connect(ctx.destination);
    
    noiseSource.start();
  } catch (err) {
    console.warn("L'API Web Audio n'a pas pu jouer le son de page flip.", err);
  }
}

/**
 * Composant de base (Shell) qui contient le livre.
 */
export function BookShell({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto max-w-5xl my-8">
      <div className="relative rounded-2xl bg-[#3b2f2a] p-[10px] shadow-2xl ring-1 ring-black/50">
        {/* Reliure centrale */}
        <div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-black/40 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 hidden md:block" />
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 rounded-xl overflow-hidden relative">
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Page gauche du grimoire avec effet au survol et son au clic.
 */
export function PageLeft({ children }: PropsWithChildren) {
  const onFlip = useCallback(() => {
    playSynthesizedPageFlip();
  }, []);

  return (
    <motion.div
      initial={{ rotateY: -2, opacity: 0.98 }}
      whileHover={{ rotateY: -1 }}
      onPointerDown={onFlip}
      className="bg-[url('/images/parchment.png')] bg-cover bg-center p-8 md:p-12 text-[#2d2317] min-h-[500px] md:shadow-[inset_-12px_0_20px_rgba(0,0,0,0.15)] cursor-pointer border-b md:border-b-0 md:border-r border-black/20"
      style={{ transformOrigin: "right center" }}
    >
      <div className="font-serif leading-relaxed h-full">
        {children}
      </div>
    </motion.div>
  );
}

/**
 * Page droite du grimoire avec effet au survol et son au clic.
 */
export function PageRight({ children }: PropsWithChildren) {
  const onFlip = useCallback(() => {
    playSynthesizedPageFlip();
  }, []);

  return (
    <motion.div
      initial={{ rotateY: 2, opacity: 0.98 }}
      whileHover={{ rotateY: 1 }}
      onPointerDown={onFlip}
      className="bg-[url('/images/parchment.png')] bg-cover bg-center p-8 md:p-12 text-[#2d2317] min-h-[500px] md:shadow-[inset_12px_0_20px_rgba(0,0,0,0.15)] cursor-pointer"
      style={{ transformOrigin: "left center" }}
    >
      <div className="font-serif leading-relaxed h-full">
        {children}
      </div>
    </motion.div>
  );
}
