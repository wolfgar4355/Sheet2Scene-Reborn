// apps/web/lib/mithril/GrimoireFrame.tsx
"use client";

import { ReactNode } from "react";

/**
 * GrimoireFrame — Web UI wrapper
 * --------------------------------------------------
 * - Composant racine du rendu Mithril côté WEB
 * - Ne dépend PAS directement de @engine
 * - Sert de point d’ancrage pour :
 *   - caméra
 *   - météo
 *   - transitions
 *   - scènes futures
 */

export interface GrimoireFrameProps {
  children?: ReactNode;
  className?: string;
}

export default function GrimoireFrame({
  children,
  className = "",
}: GrimoireFrameProps) {
  return (
    <div
      data-grimoire-frame
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
