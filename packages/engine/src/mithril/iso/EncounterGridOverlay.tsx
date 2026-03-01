// src/mithril/iso/EncounterGridOverlay.tsx
"use client";

import React, { useMemo } from "react";
import type { IsoConfig } from "./isoMath";
import { worldToIso } from "./isoMath";
import type { IsoGrid } from "./isoGrid";

export default function EncounterGridOverlay({
  grid,
  cfg,
  showBlocked = true,
  showOccupied = true,
  opacity = 0.55,
}: {
  grid: IsoGrid;
  cfg: IsoConfig;
  showBlocked?: boolean;
  showOccupied?: boolean;
  opacity?: number;
}) {
  const polys = useMemo(() => {
    const out: Array<{
      key: string;
      points: string;
      blocked: boolean;
      occupied: boolean;
    }> = [];

    const hw = cfg.tileW / 2;
    const hh = cfg.tileH / 2;

    for (const t of grid.tiles) {
      const p = worldToIso({ x: t.x, y: t.y }, cfg);

      // diamond points around tile center
      const pts = [
        `${p.x},${p.y - hh}`,
        `${p.x + hw},${p.y}`,
        `${p.x},${p.y + hh}`,
        `${p.x - hw},${p.y}`,
      ].join(" ");

      out.push({
        key: `${t.x}-${t.y}`,
        points: pts,
        blocked: !t.walkable,
        occupied: !!t.occupiedBy,
      });
    }

    return out;
  }, [grid, cfg]);

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      style={{ opacity }}
      width="100%"
      height="100%"
    >
      {/* Grid lines */}
      {polys.map((p) => (
        <polygon
          key={p.key}
          points={p.points}
          fill={
            (showBlocked && p.blocked)
              ? "rgba(180,60,60,0.18)"
              : (showOccupied && p.occupied)
              ? "rgba(255,255,255,0.06)"
              : "transparent"
          }
          stroke="rgba(255,255,255,0.10)"
          strokeWidth={1}
        />
      ))}
    </svg>
  );
}
