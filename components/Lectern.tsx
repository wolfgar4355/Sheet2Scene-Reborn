'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

/**
 * Lutrin global, cliquable vers la page du grimoire.
 * Positionné en bas à droite, au-dessus du contenu.
 */
export default function Lectern() {
  const [ready, setReady] = useState(false);

  // Petit safe-guard pour éviter un flash au mount (facultatif)
  useEffect(() => setReady(true), []);
  if (!ready) return null;

  return (
    <div
      style={{
        position: 'fixed',
        right: '1rem',
        bottom: '1rem',
        zIndex: 9999,
        pointerEvents: 'auto',
      }}
      aria-label="Ouvrir le grimoire"
    >
      <Link href="/grimoire" aria-label="Ouvrir le grimoire">
        <Image
          src="/images/lectern.png"   // grâce à Next/Image, le basePath /beta est géré tout seul
          alt="Lutrin"
          width={140}
          height={280}
          priority
          style={{
            display: 'block',
            filter: 'drop-shadow(0 8px 12px rgba(0,0,0,.35))',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        />
      </Link>
    </div>
  );
}
