// apps/web/components/Grimoire3D.tsx
'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

type Vars = React.CSSProperties & {
  ['--i']?: number | string;
  ['--tiltX']?: string;
  ['--tiltY']?: string;
  ['--thickness']?: string;
};

export default function Grimoire3D() {
  const [open, setOpen] = React.useState(false);

  // Tu peux animer l’ouverture en jouant sur transform du book (ou page-turn)
  const bookTilt: Vars = { '--tiltX': open ? '6deg' : '10deg', '--tiltY': open ? '-4deg' : '-8deg' };

  return (
    <div className="relative g3d-wrap">
      {/* Halos/Glow au-dessus du décor */}
      <div className="g2-candle-halo" aria-hidden />
      <div className="g2-book-glow" aria-hidden />

      <motion.button
        type="button"
        aria-pressed={open}
        onClick={() => setOpen(v => !v)}
        className="relative g3d-book outline-none"
        style={bookTilt}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
      >
        {/* Couverture (image) */}
        <Image src="/images/grimoire-closed-clear.png" alt="" className="g3d-cover" draggable={false} />
        <div className="g3d-cover_gloss" aria-hidden />
        
        {/* Tranche arrière */}
        <div className="g3d-back" aria-hidden />

        {/* Pile de pages */}
        <div className="g3d-pages" aria-hidden>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="g3d-page" style={{ ['--i']: i } as Vars} />
          ))}
        </div>

        {/* Ombre portée */}
        <div className="g3d-shadow" aria-hidden />
      </motion.button>
    </div>
  );
}
