"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { bg_hall_b64, ui_lectern_b64, ui_grimoire_b64 } from "./assetsBase64";

export default function Home() {
  const router = useRouter();
  const [cinematic, setCinematic] = useState(false);

  function openBook() {
    try {
      navigator.vibrate?.(15);
    } catch {}

    setCinematic(true);

    // ✅ IMPORTANT: tu n'as pas de /create -> on va au login
    setTimeout(() => {
      router.push("/auth/login");
    }, 850);
  }

  return (
    <main className="relative min-h-[100svh] overflow-hidden">
      {/* BACKGROUND */}
      <img
        src={bg_hall_b64}
        alt="Bibliothèque"
        className={`
          absolute inset-0 w-full h-full object-cover transition-all duration-700
          ${cinematic ? "blur-xl scale-105 opacity-50" : "opacity-100"}
        `}
      />

      {/* VIGNETTE + ATMOSPHERE */}
      <div
        className={`
          absolute inset-0 transition-opacity duration-700
          ${cinematic ? "opacity-40" : "opacity-100"}
        `}
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(0,0,0,0.15), rgba(0,0,0,0.85) 70%)",
        }}
      />

      {/* LECTERN (lutrin) — fond de scène */}
      <img
        src={ui_lectern_b64}
        alt="Lutrin"
        className={`
          absolute left-1/2 bottom-0
          -translate-x-1/2
          w-[min(680px,90vw)] h-auto object-contain
          select-none pointer-events-none
          transition-all duration-700 ease-out
          ${cinematic ? "opacity-0 scale-95" : "opacity-100 scale-100"}
        `}
      />

      {/* GRIMOIRE (bouton cliquable sur le lutrin) */}
      <button
        onClick={openBook}
        aria-label="Ouvrir le grimoire"
        className={`
          absolute left-1/2 -translate-x-1/2
          bottom-[28vh]
          z-20
          p-0 m-0 border-none ring-0 bg-transparent
          outline-none focus:outline-none focus-visible:outline-none
          transition-transform duration-300
          ${cinematic ? "pointer-events-none" : "hover:scale-[1.03] active:scale-[0.98]"}
        `}
      >
        <img
          src={ui_grimoire_b64}
          alt="Grimoire"
          className={`
            w-[min(300px,45vw)] h-auto object-contain
            drop-shadow-[0_16px_40px_rgba(0,0,0,0.8)]
            transition-all ease-out duration-700
            ${
              cinematic
                ? "scale-[1.4] translate-y-[-8vh] opacity-0"
                : "scale-100 opacity-100"
            }
          `}
        />
      </button>

      {/* CTA */}
      <div
        className={`
          fixed left-1/2 -translate-x-1/2
          bottom-[calc(env(safe-area-inset-bottom)+14px)]
          z-30 text-center transition-all duration-500
          ${cinematic ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}
        `}
      >
        <p className="text-amber-200/90 text-sm tracking-wide">
          Touchez le grimoire pour entrer
        </p>
      </div>
    </main>
  );
}
