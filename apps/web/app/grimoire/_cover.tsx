'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Cover() {
  const router = useRouter();
  const [opening, setOpening] = useState(false);

  async function enter() {
    setOpening(true);
    await new Promise((r) => setTimeout(r, 550)); // petite anim
    router.replace('/grimoire?view=toc');
  }

  return (
    <div className="relative h-[100svh] w-screen overflow-hidden bg-black">
      {/* (Optionnel) voile pour rappeler la home */}
      <div className="absolute inset-0 bg-[url('/images/bg-hall.jpg')] bg-cover bg-center blur-sm opacity-60" />

      <div className="relative z-10 h-full grid place-items-center">
        <div
          className={[
            'relative w-[min(92vw,960px)] transition-transform duration-500 ease-out',
            opening ? 'animate-[bookOpen_550ms_ease-out_forwards]' : '',
          ].join(' ')}
        >
          {/* Glow magique */}
          <div
            className="pointer-events-none absolute inset-0 mix-blend-screen"
            aria-hidden
          >
            <div
              className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-60"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(255,230,160,0.45) 0%, rgba(255,170,50,0.35) 35%, rgba(120,60,0,0) 70%)',
              }}
            />
          </div>

          {/* Grimoire fermé */}
          <Image
            src="/images/grimoire-closed.png"
            alt="Sheet2Scene grimoire"
            width={1600}
            height={1000}
            priority
            className="w-full h-auto rounded-md shadow-2xl"
          />

          {/* CTA centré sur la couverture */}
          <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={enter}
              className="rounded-lg bg-amber-800/90 px-8 py-3 text-lg font-semibold text-white shadow-lg backdrop-blur-sm hover:bg-amber-700 transition"
            >
              Entrer
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bookOpen {
          0%   { transform: scale(0.96) rotateX(0deg); }
          60%  { transform: scale(1.00) rotateX(8deg); }
          100% { transform: scale(1.04) rotateX(12deg); }
        }
      `}</style>
    </div>
  );
}
