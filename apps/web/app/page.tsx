"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
      {/* BACKGROUND (CSS .bg-hall dans globals.css) */}
      <div
        className={`
          bg-hall absolute inset-0 transition-all duration-700
          ${cinematic ? "blur-2xl scale-105 opacity-60" : "blur-md opacity-100"}
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

      {/* LECTERN (lutrin) */}
      <Image
        src="/images/ui-lectern-clear.png"
        alt="Lutrin"
        width={1200}
        height={1200}
        draggable={false}
        priority
        className={`
          absolute left-1/2 bottom-[18vh]
          -translate-x-1/2
          w-[min(760px,96vw)]
          select-none pointer-events-none
          transition-all duration-700 ease-out
          ${cinematic ? "opacity-0 scale-95" : "opacity-100 scale-100"}
        `}
      />

      {/* GRIMOIRE (bouton) */}
      <button
        onClick={openBook}
        aria-label="Ouvrir le grimoire"
        className={`
          absolute left-1/2 -translate-x-1/2
          bottom-[10vh]
          z-20
          focus:outline-none
          transition-transform duration-300
          ${cinematic ? "pointer-events-none" : "hover:scale-[1.02] active:scale-[0.99]"}
        `}
      >
        <Image
          src="/images/ui-grimoire-closed-clear.png"
          alt="Grimoire"
          width={1100}
          height={800}
          draggable={false}
          priority
          className={`
            w-[min(820px,96vw)]
            drop-shadow-[0_24px_48px_rgba(0,0,0,0.65)]
            transition-all ease-out duration-700
            ${
              cinematic
                ? "scale-[1.55] translate-y-[-12vh] opacity-100"
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
