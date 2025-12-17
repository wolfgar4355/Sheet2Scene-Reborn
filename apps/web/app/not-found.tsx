// apps/web/app/not-found.tsx

"use client";

import Link from "next/link";
import Footer from "@components/Footer";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">

      {/* Fond brumeux et flou */}
      <div className="absolute inset-0 bg-hall bg-cover bg-center opacity-60 blur-md" />

      {/* Overlay sombre pour focus sur le message */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Contenu centré */}
      <section className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        
        {/* Petit grimoire mystérieux */}
        <div className="mb-6">
          <Image
            src="/images/grimoire-closed-clear.png"
            alt="Grimoire"
            width={240}
            height={180}
            className="opacity-90 drop-shadow-xl animate-[pulse_2.8s_ease-in-out_infinite]"
          />
        </div>

        <h1 className="text-4xl font-bold mb-3 tracking-wide">
          Page introuvable
        </h1>

        <p className="max-w-[380px] text-amber-200/90 mb-8">
          Le sort recherché semble s’être dissipé dans le néant...
          <br />
          Peut-être qu’un autre chemin te mènera à ton destin.
        </p>

        {/* CTA retour */}
        <Link
          href="/"
          className="
            px-6 py-3 rounded-xl 
            bg-amber-700/90 hover:bg-amber-600 
            text-white font-semibold shadow-lg 
            transition backdrop-blur-sm
          "
        >
          Retour au grimoire
        </Link>
      </section>

      <Footer />
    </main>
  );
}
