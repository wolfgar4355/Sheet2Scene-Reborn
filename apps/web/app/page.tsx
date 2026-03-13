"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { bg_hall_b64, ui_lectern_b64, ui_grimoire_b64 } from "./assetsBase64";

export default function Home() {
  const router = useRouter();
  const [cinematic, setCinematic] = useState(false);

  function openBook() {
    try { navigator.vibrate?.(15); } catch {}
    setCinematic(true);
    setTimeout(() => router.push("/auth/login"), 850);
  }

  return (
    <main
      className="relative w-full overflow-hidden bg-[#0a0a0f]"
      style={{ height: "100svh" }}
    >
      {/* ── BACKGROUND LIBRARY ── */}
      <img
        src={bg_hall_b64}
        alt=""
        aria-hidden
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-all duration-700
          ${cinematic ? "scale-110 opacity-40 blur-xl" : "scale-100 opacity-100"}
        `}
      />

      {/* ── DARK VIGNETTE ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, transparent 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      {/* ── SCENE CONTAINER: lectern + grimoire stacked ── */}
      <div
        className={`
          absolute left-1/2 bottom-0
          -translate-x-1/2
          flex flex-col items-center
          transition-all duration-700
          ${cinematic ? "opacity-0 translate-y-8" : "opacity-100"}
        `}
        style={{ width: "min(580px, 90vw)" }}
      >
        {/* GRIMOIRE — sits above the lectern shelf */}
        <button
          onClick={openBook}
          aria-label="Ouvrir le grimoire"
          className={`
            relative z-10
            p-0 border-none ring-0 bg-transparent
            outline-none focus:outline-none
            cursor-pointer select-none
            transition-transform duration-300
            ${cinematic ? "pointer-events-none" : "hover:scale-105 active:scale-95"}
          `}
          style={{ width: "min(260px, 40vw)" }}
        >
          <img
            src={ui_grimoire_b64}
            alt="Grimoire de Sheet2Scene"
            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            draggable={false}
          />
        </button>

        {/* LECTERN — directly under the grimoire */}
        <img
          src={ui_lectern_b64}
          alt=""
          aria-hidden
          className="w-full h-auto object-contain -mt-[8%] select-none pointer-events-none"
          draggable={false}
        />
      </div>

      {/* ── CTA TEXT ── */}
      <div
        className={`
          fixed left-1/2 -translate-x-1/2
          bottom-5 z-30
          text-center pointer-events-none
          transition-all duration-500
          ${cinematic ? "opacity-0 translate-y-2" : "opacity-100"}
        `}
      >
        <p className="text-amber-200/80 text-sm tracking-widest uppercase font-light">
          Touchez le grimoire pour entrer
        </p>
      </div>
    </main>
  );
}
