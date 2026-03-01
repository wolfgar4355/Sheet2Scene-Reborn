"use client";

import { useEffect, useMemo, useState } from "react";

// ✅ IMPORTS CANON
import { IsoMap } from "./IsoMap";
import type { IsoMapData } from "./IsoMap";

import PlayerController from "./PlayerController";
import type { IsoConfig, Vec2 } from "./isoMath";
import { worldToIso } from "./isoMath";

import { useMithril } from "../GrimoireFrame";
import { useEncounter } from "../encounter/EncounterController";
import { useTurns } from "../encounter/TurnController";
import { useEnemyAI } from "../encounter/useEnemyAI";

// -----------------------------------------------------------------------------
// Demo map
// -----------------------------------------------------------------------------
function makeDemoMap(w: number, h: number): IsoMapData {
  const tiles = Array.from({ length: w * h }, (_, i) => {
    const x = i % w;
    const y = Math.floor(i / w);
    if (Math.abs(x - y) <= 1 && x > 2) return "water";
    if ((x + y) % 11 === 0) return "stone";
    if ((x * 7 + y * 3) % 9 === 0) return "dirt";
    return "grass";
  });

  return { w, h, tiles };
}

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
export default function IsometricWorld({
  className = "",
  mapW = 18,
  mapH = 18,
}: {
  className?: string;
  mapW?: number;
  mapH?: number;
}) {
  const { camera } = useMithril();
  const encounter = useEncounter();
  const turns = useTurns();

  useEnemyAI();

  const map = useMemo(() => makeDemoMap(mapW, mapH), [mapW, mapH]);

  const cfg: IsoConfig = useMemo(
    () => ({
      tileW: 96,
      tileH: 48,
      origin: { x: 720, y: 220 },
    }),
    []
  );

  // ---------------------------------------------------------------------------
  // Camera lock during encounter
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!camera?.set) return;

    if (encounter.state.active && encounter.state.center) {
      const p = worldToIso(encounter.state.center, cfg);
      camera.set((c: any) => ({
        ...c,
        lock: true,
        zoom: 1.25,
        target: p,
      }));
    } else {
      camera.set((c: any) => ({
        ...c,
        lock: false,
        target: null,
      }));
    }
  }, [encounter.state.active, encounter.state.center, cfg, camera]);

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${camera.offsetX ?? 0}px, ${
              camera.offsetY ?? 0
            }px) scale(${camera.zoom ?? 1})`,
            transformOrigin: "0 0",
          }}
        >
          {/* 🌍 MAP */}
          <IsoMap map={map} cfg={cfg} />

          {/* 🧙 PLAYER */}
          <PlayerController cfg={cfg} mapW={map.w} mapH={map.h} />
        </div>
      </div>
    </div>
  );
}
