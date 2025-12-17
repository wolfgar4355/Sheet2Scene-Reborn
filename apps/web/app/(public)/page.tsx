"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { triggerBookAnimation } from "@/components/BookAnimation";

export default function PublicLandingPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const audioRef = useRef<HTMLAudioElement | null>(null);

  function playError() {
    try {
      audioRef.current?.play();
    } catch {}
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    // Placeholder auth
    if (password !== "123") {
      setErrorMsg("Enchantement refusé");
      playError();
      return;
    }

    // 🎉 Succès → Animation AAA
    triggerBookAnimation(6, 120);

    setTimeout(() => {
      router.push("/grimoire/intro");
    }, 1500);
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">

      {/* audio erreur */}
      <audio
        ref={audioRef}
        src="/sounds/ui/enchantement-refuse.mp3"
        preload="auto"
      />

      {/* couverture + glow */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative">
          <Image
            src="/images/grimoire-closed.png"
            alt="Grimoire"
            width={900}
            height={700}
            priority
            className="drop-shadow-[0_0_28px_rgba(255,200,120,0.25)]"
          />
        </div>
      </div>

      {/* formulaire centré */}
      <form
        onSubmit={handleLogin}
        className="absolute inset-0 grid place-items-center pointer-events-auto"
      >
        <div
          className={`
            flex flex-col gap-4 
            bg-black/50 p-6 rounded-xl shadow-2xl backdrop-blur-xl
            border border-amber-600/40
            transition-all
            ${errorMsg ? "animate-[shake_0.4s_ease]" : ""}
          `}
        >
          <label className="flex flex-col text-amber-200">
            Adresse email
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="px-3 py-2 rounded bg-white/10 border border-amber-500/40 focus:ring-2 focus:ring-amber-300/40"
            />
          </label>

          <label className="flex flex-col text-amber-200">
            Mot de passe
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="px-3 py-2 rounded bg-white/10 border border-amber-500/40 focus:ring-2 focus:ring-amber-300/40"
            />
          </label>

          {errorMsg && (
            <p className="text-center text-red-400 font-bold">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-amber-700 hover:bg-amber-600 uppercase tracking-wide shadow-md"
          >
            Login
          </button>
        </div>
      </form>

      {/* animation shake */}
      <style jsx global>{`
        @keyframes shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </main>
  );
}
