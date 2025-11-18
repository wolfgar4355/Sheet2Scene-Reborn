'use client';
export const dynamic = 'force-dynamic';

import Image from 'next/image';

export default function AuthPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background flouté */}
      <Image
        src="/images/bg-hall.jpg"
        alt="Hall background"
        fill
        className="object-cover blur-md"
        priority
      />

      {/* Lutrin */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <Image
          src="/images/lectern.png"
          alt="Lectern"
          width={800}
          height={600}
          className="drop-shadow-2xl"
        />
      </div>

      {/* Grimoire fermé au centre */}
      <div className="absolute inset-0 grid place-items-center">
        <Image
          src="/images/grimoire-closed.png"
          alt="Sheet2Scene grimoire"
          width={900}
          height={700}
          className="drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
          priority
        />
      </div>

      {/* Boutons Login / Join centrés sur le grimoire */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="flex gap-6">
          <a
            href="#"
            className="rounded-lg bg-amber-800/90 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-amber-700 transition"
          >
            Login
          </a>
          <a
            href="#"
            className="rounded-lg bg-emerald-800/90 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-emerald-700 transition"
          >
            Join
          </a>
        </div>
      </div>
    </main>
  );
}
