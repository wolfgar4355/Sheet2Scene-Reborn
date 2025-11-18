"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Grimoire3D() {
  const ref = useRef<HTMLDivElement>(null);

  // Tilt léger au scroll / gyroscope (mobile-safe)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (x: number, y: number) => {
      const rX = (y - window.innerHeight / 2) / window.innerHeight * -6; // inclinaison
      const rY = (x - window.innerWidth / 2) / window.innerWidth * 6;
      el.style.setProperty("--tiltX", `${rX}deg`);
      el.style.setProperty("--tiltY", `${rY}deg`);
    };

    const onMouse = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const onScroll = () => onMove(window.innerWidth / 2, window.scrollY % window.innerHeight);

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Génère 18 “feuillets” pour l'épaisseur
  const leaves = Array.from({ length: 18 });

  return (
    <div className="g3d-wrap">
      <div className="g3d-book" ref={ref} aria-label="Grimoire Sheet2Scene">
        {/* tranche arrière */}
        <div className="g3d-back" />
        {/* pile de pages */}
        <div className="g3d-pages">
          {leaves.map((_, i) => (
            <div className="g3d-page" style={{ ["--i" as any]: i }} key={i} />
          ))}
        </div>
        {/* couverture (ton PNG) */}
        <div className="g3d-cover">
          <Image
            src="/assets/props/grimoire.png"
            alt="Grimoire"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 560px"
          />
          <div className="g3d-cover-gloss" />
        </div>
        {/* ombre portée */}
        <div className="g3d-shadow" />
      </div>
    </div>
  );
}
