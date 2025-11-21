"use client";

import { useRouter } from "next/navigation";
import GrimoireFrame from "@lib/mithril/GrimoireFrame";
import TransitionLayer from "@lib/mithril/TransitionLayer";
import SceneController from "@lib/mithril/SceneController";

export default function Home() {
  const router = useRouter();

  function openBook() {
    try { (navigator as any)?.vibrate?.(12); } catch {}
    router.push("/create");
  }

  return (
    <main className="relative min-h-[100svh] overflow-hidden">
      {/* Fond study en arrière-plan (parallaxe légère via .bg-hall) */}
      <div className="bg-hall" aria-hidden />

      {/* Scène : lutrin centré + grimoire posé sur le plateau bas */}
      <section className="relative mx-auto w-full max-w-[720px] md:max-w-[860px] pt-[6svh] pb-[22svh]">
        {/* Lutrin (décor) */}
<img
  src="/images/lectern-clear.png"
  alt=""
  className="lectern-img pointer-events-none select-none absolute left-1/2 -translate-x-1/2 bottom-[18vh] w-[min(560px,92vw)]"
  draggable={false}
/>
        {/* Grimoire (cliquable) – reliure centrée sur le plateau */}
        <button
          type="button"
          aria-label="Ouvrir le grimoire"
          onClick={openBook}
          className="
            absolute left-1/2 -translate-x-1/2
            bottom-[9.5%] sm:bottom-[10%] md:bottom-[10.5%] lg:bottom-[9.5%]
            w-[700px] sm:w-[620px] md:w-[540px] lg:w-[480px]
            outline-none focus:outline-none focus:ring-0
          "
        >
          <img
            src="/images/grimoire-closed-clear.png"
            alt=""
            className="w-full h-auto select-none"
            draggable={false}
          />
        </button>
      </section>

      {/* CTA */}
      <nav className="fixed left-1/2 -translate-x-1/2 z-20 flex gap-3 bottom-[calc(env(safe-area-inset-bottom)+16px)]">
        <a
          href="/create"
          className="rounded-2xl px-4 py-3 bg-emerald-600/90 text-white font-semibold shadow-lg backdrop-blur"
        >
          Créer une scène
        </a>
        <a
          href="/demo"
          className="rounded-2xl px-4 py-3 bg-neutral-900/85 text-white font-semibold shadow-lg backdrop-blur"
        >
          Voir la démo
        </a>
      </nav>
    </main>
  );
}
