"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import GrimoireFrame from "@lib/mithril/GrimoireFrame";
import TransitionLayer from "@lib/mithril/TransitionLayer";

export default function Home() {
  const router = useRouter();
  const [cinematic, setCinematic] = useState(false);

  function openBook() {
    try { navigator.vibrate?.(15); } catch {}

    // Début de l’effet cinématique
    setCinematic(true);

    // On laisse la caméra zoomer un peu AVANT d'aller à /create
    setTimeout(() => {
      router.push("/create");
    }, 850); // timing calibré pour un effet impressionnant
  }

  return (
    <main className="relative min-h-[100svh] overflow-hidden">
      
      {/* --- BACKGROUND HALL --- */}
      <div
        className={`
          bg-hall absolute inset-0 transition-all duration-700 
          ${cinematic ? "blur-2xl scale-105 opacity-60" : "blur-md opacity-100"}
        `}
      />

      {/* --- LUTRIN rapproché --- */}
      <Image
        src="/images/lectern-clear.png"
        alt="Lutrin"
        width={900}
        height={900}
        draggable={false}
        className={`
          absolute left-[42%] bottom-[22vh]
          -translate-x-1/2
          w-[min(680px,95vw)]
          select-none pointer-events-none
          transition-all duration-600 ease-out
          ${cinematic ? "opacity-0 scale-95" : "opacity-100 scale-100"}
        `}
      />

      {/* --- GRIMOIRE FERME (vue rapprochée) --- */}
      <button
        onClick={openBook}
        aria-label="Ouvrir le grimoire"
        className="
          absolute left-1/2 -translate-x-1/2 
          bottom-[14vh]
          focus:outline-none
          z-20
        "
      >
        <Image
          src="/images/grimoire-closed-clear.png"
          alt="Grimoire"
          width={800}
          height={600}
          draggable={false}
          priority
          className={`
            w-[min(720px,92vw)] transition-all ease-out duration-700
            ${cinematic ? "scale-[1.55] translate-y-[-10vh] opacity-100" : "scale-100 opacity-100"}
          `}
        />
      </button>

      {/* --- CTA (disparaît en mode cinematic) --- */}
      <nav
        className={`
          fixed left-1/2 -translate-x-1/2 bottom-[calc(env(safe-area-inset-bottom)+16px)]
          z-30 flex gap-3 transition-all duration-500
          ${cinematic ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <a className="rounded-2xl px-4 py-3 bg-emerald-600/90 text-white font-semibold shadow-lg backdrop-blur">
          Créer une scène
        </a>
        <a className="rounded-2xl px-4 py-3 bg-neutral-900/85 text-white font-semibold shadow-lg backdrop-blur">
          Voir la démo
        </a>
      </nav>

      {/* --- LAYERS DU MITHRIL ENGINE --- */}
      <GrimoireFrame />
      <TransitionLayer />
    </main>
  );
}
