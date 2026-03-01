"use client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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

    if (password !== "123") {
      setErrorMsg("Enchantement refusé");
      playError();
      return;
    }

    const { triggerBookAnimation } = await import(
      "../../components/BookAnimation"
    );

    triggerBookAnimation(6, 120);

    setTimeout(() => {
      router.push("/grimoire/intro");
    }, 1500);
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      <audio
        ref={audioRef}
        src="/sounds/ui/enchantement-refuse.mp3"
        preload="auto"
      />

      <div className="absolute inset-0 grid place-items-center">
        <Image
          src="/images/grimoire-closed.png"
          alt="Grimoire"
          width={900}
          height={700}
          priority
        />
      </div>

      <form
        onSubmit={handleLogin}
        className="absolute inset-0 grid place-items-center"
      >
        <div className="bg-black/50 p-6 rounded-xl border border-amber-600/40">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </main>
  );
}
