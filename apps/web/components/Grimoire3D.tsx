// apps/web/components/Grimoire3D.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "./grimoire3d.css";

export default function Grimoire3D() {
  const ref = useRef<HTMLDivElement>(null);

  // Tilt léger : souris + scroll + mobile friendly
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (x: number, y: number) => {
      const rX = ((y - window.innerHeight / 2) / window.innerHeight) * -6;
      const rY = ((x - window.innerWidth / 2) / window.innerWidth) * 6;
      el.style.setProperty("--tiltX", `${rX}deg`);
      el.style.setProperty("--tiltY", `${rY}deg`);
    };

    const onMouse = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const onScroll = () =>
      onMove(window.innerWidth / 2, window.scrollY % window.innerHeight);

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();

    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // 18 feuilles = épaisseur AAA
  const leaves = Array.from({ length: 18 });

  return (
    <div className="g3d-wrap">
      <div className="g3d-book" ref={ref} aria-label="Grimoire Sheet2Scene">
        {/* dos du livre */}
        <div className="g3d-back" />

        {/* pages empilées */}
        <div className="g3d-pages">
          {leaves.map((_, i) => (
            <div className="g3d-page" key={i} style={{ ["--i" as any]: i }} />
          ))}
        </div>

        {/* couverture */}
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

        {/* ombre */}
        <div className="g3d-shadow" />
      </div>
    </div>
  );
}
