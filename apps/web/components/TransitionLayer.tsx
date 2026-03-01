// apps/web/lib/mithril/TransitionLayer.tsx
"use client";

import { useEffect, useState } from "react";

/**
 * TransitionLayer — Web UI
 * --------------------------------------------------
 * - Calque visuel global (cinématique, transitions)
 * - 100% contrôlé par le web
 * - AUCUNE dépendance directe à @engine
 */

export interface TransitionLayerProps {
  active?: boolean;
  durationMs?: number;
}

export default function TransitionLayer({
  active = true,
  durationMs = 700,
}: TransitionLayerProps) {
  const [visible, setVisible] = useState(active);

  useEffect(() => {
    setVisible(active);
  }, [active]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90]"
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity ${durationMs}ms ease`,
        background: `
          radial-gradient(
            circle at 50% 40%,
            rgba(255, 245, 220, 0.08),
            rgba(0, 0, 0, 0.45) 65%,
            rgba(0, 0, 0, 0.85) 100%
          )
        `,
      }}
    />
  );
}
