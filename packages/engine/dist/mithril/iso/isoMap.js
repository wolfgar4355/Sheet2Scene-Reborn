// src/mithril/iso/IsoMap.tsx
"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { memo, useMemo } from "react";
import { worldToIso } from "./isoMath";
function idx(x, y, w) {
    return y * w + x;
}
function tileColor(kind) {
    switch (kind) {
        case "grass": return "rgba(90,140,85,1)";
        case "dirt": return "rgba(140,110,75,1)";
        case "stone": return "rgba(120,120,130,1)";
        case "water": return "rgba(70,110,170,1)";
        default: return "rgba(120,120,120,1)";
    }
}
export const IsoMap = memo(function IsoMap({ map, cfg, }) {
    // ordre de rendu iso: par diagonales (y+x)
    const order = useMemo(() => {
        const pts = [];
        for (let y = 0; y < map.h; y++)
            for (let x = 0; x < map.w; x++)
                pts.push({ x, y, d: x + y });
        return pts.sort((a, b) => a.d - b.d);
    }, [map.h, map.w]);
    return (_jsx("div", { className: "absolute inset-0", children: order.map(({ x, y }) => {
            const kind = map.tiles[idx(x, y, map.w)] ?? "grass";
            const p = worldToIso({ x, y }, cfg);
            return (_jsx("div", { className: "absolute", style: {
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
                } }, `${x}-${y}`));
        }) }));
});
