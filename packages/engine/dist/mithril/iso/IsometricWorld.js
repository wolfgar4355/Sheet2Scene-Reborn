"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { IsoMap } from "./IsoMap";
import PlayerController from "./PlayerController";
import { worldToIso } from "./isoMath";
import { useMithril } from "../GrimoireFrame";
import { useEncounter } from "../encounter/EncounterController";
import { useTurns } from "../encounter/TurnController";
import { useEnemyAI } from "../encounter/useEnemyAI";
// -----------------------------------------------------------------------------
// Demo map
// -----------------------------------------------------------------------------
function makeDemoMap(w, h) {
    const tiles = Array.from({ length: w * h }, (_, i) => {
        const x = i % w;
        const y = Math.floor(i / w);
        if (Math.abs(x - y) <= 1 && x > 2)
            return "water";
        if ((x + y) % 11 === 0)
            return "stone";
        if ((x * 7 + y * 3) % 9 === 0)
            return "dirt";
        return "grass";
    });
    return { w, h, tiles };
}
// -----------------------------------------------------------------------------
// Utils B3
// -----------------------------------------------------------------------------
const DIRS = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
];
function key(p) {
    return `${p.x},${p.y}`;
}
// BFS simple (PM-based)
function buildReachableTiles(start, maxPM, mapW, mapH) {
    const out = new Map();
    const queue = [];
    out.set(key(start), 0);
    queue.push({ p: start, cost: 0 });
    while (queue.length) {
        const { p, cost } = queue.shift();
        if (cost >= maxPM)
            continue;
        for (const d of DIRS) {
            const n = { x: p.x + d.x, y: p.y + d.y };
            if (n.x < 0 || n.y < 0 || n.x >= mapW || n.y >= mapH)
                continue;
            const k = key(n);
            if (out.has(k))
                continue;
            out.set(k, cost + 1);
            queue.push({ p: n, cost: cost + 1 });
        }
    }
    return out;
}
// Reconstruit le chemin le plus court
function reconstructPath(target, reachable) {
    const path = [];
    let cur = { ...target };
    while (true) {
        path.push(cur);
        const c = reachable.get(key(cur));
        if (c === undefined || c === 0)
            break;
        let found = false;
        for (const d of DIRS) {
            const n = { x: cur.x + d.x, y: cur.y + d.y };
            if (reachable.get(key(n)) === c - 1) {
                cur = n;
                found = true;
                break;
            }
        }
        if (!found)
            break;
    }
    return path.reverse();
}
// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
export default function IsometricWorld({ className = "", mapW = 18, mapH = 18, }) {
    const { camera } = useMithril();
    const encounter = useEncounter();
    const turns = useTurns();
    useEnemyAI();
    const map = useMemo(() => makeDemoMap(mapW, mapH), [mapW, mapH]);
    const cfg = useMemo(() => ({
        tileW: 96,
        tileH: 48,
        origin: { x: 720, y: 220 },
    }), []);
    // ---------------------------------------------------------------------------
    // B3 state
    // ---------------------------------------------------------------------------
    const [hoverTile, setHoverTile] = useState(null);
    const [moveTarget, setMoveTarget] = useState(null);
    const player = turns.currentActor();
    const canPreview = encounter.state.active &&
        turns.isPlayersTurn() &&
        turns.state.movementPoints > 0 &&
        player?.kind === "player";
    const reachable = useMemo(() => {
        if (!canPreview || !player)
            return null;
        return buildReachableTiles(player.pos, turns.state.movementPoints, mapW, mapH);
    }, [canPreview, player, turns.state.movementPoints, mapW, mapH]);
    // ---------------------------------------------------------------------------
    // Camera lock on encounter
    // ---------------------------------------------------------------------------
    useEffect(() => {
        if (!camera?.set)
            return;
        if (encounter.state.active && encounter.state.center) {
            const p = worldToIso(encounter.state.center, cfg);
            camera.set((c) => ({
                ...c,
                lock: true,
                zoom: 1.25,
                target: p,
            }));
        }
        else {
            camera.set((c) => ({
                ...c,
                lock: false,
                target: null,
            }));
        }
    }, [encounter.state.active]);
    // ---------------------------------------------------------------------------
    // Render
    // ---------------------------------------------------------------------------
    return (_jsx("div", { className: `absolute inset-0 ${className}`, children: _jsx("div", { className: "absolute inset-0 overflow-hidden", children: _jsxs("div", { className: "absolute inset-0", style: {
                    transform: `translate(${camera.offsetX ?? 0}px, ${camera.offsetY ?? 0}px) scale(${camera.zoom ?? 1})`,
                    transformOrigin: "0 0",
                }, children: [_jsx(IsoMap, { map: map, cfg: cfg }), _jsx(PlayerController, { cfg: cfg, mapW: map.w, mapH: map.h, forcedTarget: moveTarget, onArrive: () => setMoveTarget(null) }), reachable &&
                        [...reachable.entries()].map(([k, cost]) => {
                            if (cost === 0)
                                return null;
                            const [x, y] = k.split(",").map(Number);
                            const p = worldToIso({ x, y }, cfg);
                            return (_jsx("div", { onMouseEnter: () => setHoverTile({ x, y }), onMouseLeave: () => setHoverTile(null), onClick: () => {
                                    // B3.4 — déplacement réel
                                    if (!player)
                                        return;
                                    const path = reconstructPath({ x, y }, reachable);
                                    turns.spendMovement(path.length - 1);
                                    setMoveTarget({ x, y });
                                }, className: "absolute", style: {
                                    left: p.x,
                                    top: p.y,
                                    transform: "translate(-50%, -50%) rotate(45deg)",
                                    width: 34,
                                    height: 34,
                                    borderRadius: 6,
                                    background: "rgba(80,200,120,0.25)",
                                    outline: "1px solid rgba(200,255,200,0.55)",
                                    zIndex: 40,
                                    cursor: "pointer",
                                }, title: `Coût : ${cost} PM` }, k));
                        }), hoverTile &&
                        reachable &&
                        reconstructPath(hoverTile, reachable).map((step, i) => {
                            const p = worldToIso(step, cfg);
                            return (_jsx("div", { className: "absolute pointer-events-none", style: {
                                    left: p.x,
                                    top: p.y,
                                    transform: "translate(-50%, -50%)",
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background: "rgba(120,255,180,0.85)",
                                    boxShadow: "0 0 6px rgba(120,255,180,0.9)",
                                    zIndex: 60,
                                } }, `${step.x}-${step.y}-${i}`));
                        })] }) }) }));
}
