"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function IntroClient() {
  const router = useRouter();

  useEffect(() => {
    // ⏳ Pause magique 2 secondes
    const timer = setTimeout(() => {
      router.push("/grimoire?view=toc");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="relative w-full h-full grid place-items-center text-white">
      <div className="flex flex-col items-center gap-4 animate-fadeIn">
        <div className="relative">
          {/* Glow magique derrière le logo */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-3xl opacity-70"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,240,180,0.55), rgba(180,120,40,0.0))",
            }}
          />

          <Image
            src="/images/logos/mithril-engine.png"
            width={260}
            height={260}
            alt="Mithril Engine"
            priority
          />
        </div>

        <h1 className="mt-2 text-3xl font-bold tracking-[0.18em] uppercase">
          Powered by Mithril Engine
        </h1>

        <p className="text-sm text-amber-200/80 mt-2">
          Initialisation des grimoires, des mondes et des agents IA...
        </p>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 600ms ease-out both;
        }
      `}</style>
    </main>
  );
}
