"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import bookAudio from "../../../utils/bookSounds";

export default function GrimoireHero() {
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  async function openBook() {
    if (opened) return;
    setOpened(true);
    try {
      await bookAudio.open();
    } catch {}
    // Laisse l’animation se jouer avant la navigation
    await new Promise((r) => setTimeout(r, 450));
    router.push("/create");
  }

  return (
    <section className="text-white">
      <div className="mx-auto max-w-5xl px-4 pt-16 pb-24">
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-8">
          Touchez le grimoire pour ouvrir
        </h1>

        {/* Lutrin (décor) */}
        <div className="relative mx-auto w-full max-w-[820px]">
          <Image
            src="/images/lectern.png"
            alt="Lutrin"
            width={1200}
            height={1800}
            priority
            className="select-none pointer-events-none mx-auto h-auto w-full"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 820px"
          />

          {/* Zone interactive : grimoire par-dessus le plateau */}
          <motion.div
            className="
              absolute z-10 left-1/2 -translate-x-1/2
              bottom-[10.5%]
              w-[70%] sm:w-[62%] md:w-[54%] lg:w-[48%]
              cursor-pointer
            "
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={openBook}
            role="button"
            aria-label="Ouvrir le grimoire"
          >
            {/* Grimoire fermé (PNG fond propre) */}
            <Image
              src="/images/grimoire-closed-clear.png"
              alt="Grimoire fermé"
              width={820}
              height={1100}
              draggable={false}
              className={`object-contain rounded-xl shadow-2xl transition-opacity duration-300 ${
                opened ? "opacity-0" : "opacity-100"
              }`}
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 54vw, 48vw"
            />

            {/* Grimoire ouvert (PNG fond transparent) */}
            <Image
              src="/images/grimoire-open.png"
              alt="Grimoire ouvert"
              width={960}
              height={1200}
              draggable={false}
              className={`object-contain shadow-2xl absolute inset-0 m-auto transition-opacity duration-300 ${
                opened ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 54vw, 48vw"
            />
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center gap-4">
          <button
            className="btn-primary"
            onClick={openBook}
            aria-label="Créer une scène"
          >
            Créer une scène
          </button>
          <a
            href="/create?demo=1"
            className="btn-secondary"
            aria-label="Voir la démo"
          >
            Voir la démo
          </a>
        </div>
      </div>
    </section>
  );
}
