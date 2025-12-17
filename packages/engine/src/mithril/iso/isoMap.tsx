// src/mithril/iso/IsoMap.tsx
"use client";

import { memo, useMemo } from "react";
import type { Vec2, IsoConfig } from "./isoMath";
import { worldToIso } from "./isoMath";

export type TileKind = "grass" | "dirt" | "stone" | "water";

export type IsoMapData = {
  w: number;
  h: number;
  tiles: TileKind[]; // length w*h
};

function idx(x: number, y: number, w: number) {
  return y * w + x;
}

function tileColor(kind: TileKind) {
  switch (kind) {
    case "grass": return "rgba(90,140,85,1)";
    case "dirt":  return "rgba(140,110,75,1)";
    case "stone": return "rgba(120,120,130,1)";
    case "water": return "rgba(70,110,170,1)";
    default:      return "rgba(120,120,120,1)";
  }
}

export const IsoMap = memo(function IsoMap({
  map,
  cfg,
}: {
  map: IsoMapData;
  cfg: IsoConfig;
}) {
  // ordre de rendu iso: par diagonales (y+x)
  const order = useMemo(() => {
    const pts: { x: number; y: number; d: number }[] = [];
    for (let y = 0; y < map.h; y++) for (let x = 0; x < map.w; x++) pts.push({ x, y, d: x + y });
    return pts.sort((a, b) => a.d - b.d);
  }, [map.h, map.w]);

  return (
    <div className="absolute inset-0">
      {order.map(({ x, y }) => {
        const kind = map.tiles[idx(x, y, map.w)] ?? "grass";
        const p = worldToIso({ x, y }, cfg);
        return (
          <div
            key={`${x}-${y}`}
            className="absolute"
            style={{
              left: p.x,
              top: p.y,
              width: cfg.tileW,
              height: cfg.tileH,
              transform: "translate(-50%, -50%)",
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              background: tileColor(kind),
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.25)",
              opacity: kind === "water" ? 0.9 : 1,
              filter: kind === "water" ? "saturate(1.2)" : "none",
            }}
          />
        );
      })}
    </div>
  );
});
