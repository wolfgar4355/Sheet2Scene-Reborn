// src/mithril/iso/EncounterGridOverlay.tsx
"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { worldToIso } from "./isoMath";
export default function EncounterGridOverlay({ grid, cfg, showBlocked = true, showOccupied = true, opacity = 0.55, }) {
    const polys = useMemo(() => {
        const out = [];
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
    return (_jsx("svg", { className: "absolute inset-0 pointer-events-none", style: { opacity }, width: "100%", height: "100%", children: polys.map((p) => (_jsx("polygon", { points: p.points, fill: (showBlocked && p.blocked)
                ? "rgba(180,60,60,0.18)"
                : (showOccupied && p.occupied)
                    ? "rgba(255,255,255,0.06)"
                    : "transparent", stroke: "rgba(255,255,255,0.10)", strokeWidth: 1 }, p.key))) }));
}
