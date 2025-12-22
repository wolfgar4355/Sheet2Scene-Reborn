// src/mithril/GrimoireFrame.tsx
"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

import IsometricWorld from "./iso/IsometricWorld";
import WeatherEngineProvider from "./WeatherEngine";
import AudioBoot from "./AudioBoot";
import AmbientManager from "./AmbientManager";
import LightningEngine from "./LightningEngine";
import WorldAmbientController from "./WorldAmbientController";
import SeasonParticles from "./SeasonParticles";
import TransitionLayer from "./TransitionLayer";
import PageTurner from "./PageTurner";
import DevControls from "./DevControls";
import { TurnController } from "./encounter/TurnController";

import { useCamera } from "./hooks/useCamera";
import useSeason, {
  type SeasonData,
  type UseSeasonOptions,
} from "./hooks/useSeason";

// 🧠 Encounter
import { EncounterController } from "./encounter/EncounterController";

/* -------------------------------------------------------------------------- */
/* CONTEXTE MITHRIL                                                            */
/* -------------------------------------------------------------------------- */

export interface MithrilContextValue {
  worldId: string;
  eraId?: string;
  page: number;
  season: SeasonData;
  camera: ReturnType<typeof useCamera>;
}

const MithrilContext = createContext<MithrilContextValue | undefined>(undefined);

export function useMithril(): MithrilContextValue {
  const ctx = useContext(MithrilContext);
  if (!ctx) {
    throw new Error("useMithril must be used inside <GrimoireFrame>");
  }
  return ctx;
}

/* -------------------------------------------------------------------------- */
/* PROPS                                                                       */
/* -------------------------------------------------------------------------- */

export interface GrimoireFrameProps {
  worldId?: string;
  eraId?: string;
  biome?: UseSeasonOptions["biome"];
  page?: number;
  devMode?: boolean;
  children?: ReactNode;
}

/* -------------------------------------------------------------------------- */
/* COMPOSANT PUBLIC                                                            */
/* -------------------------------------------------------------------------- */

export default function GrimoireFrame({
  worldId = "mithril-quest",
  eraId,
  biome = "generic",
  page = 1,
  devMode = false,
  children,
}: GrimoireFrameProps) {
  return (
    <MithrilFrameInner
      worldId={worldId}
      eraId={eraId}
      biome={biome}
      page={page}
      devMode={devMode}
    >
      {children}
    </MithrilFrameInner>
  );
}

/* -------------------------------------------------------------------------- */
/* COUCHE INTERNE                                                              */
/* -------------------------------------------------------------------------- */

function MithrilFrameInner({
  worldId,
  eraId,
  biome,
  page,
  devMode,
  children,
}: Omit<GrimoireFrameProps, "devMode"> & { devMode: boolean }) {
  const frameRef = useRef<HTMLDivElement | null>(null);

  // 🔐 Sécurisation stricte (TS strict-safe)
  const safeWorldId = worldId ?? "mithril-quest";
  const safePage = page ?? 1;

  // 🌦️ Saison / météo
  const season = useSeason({
    biome,
    worldId: safeWorldId,
  });

  // 🎥 Caméra AAA
  const camera = useCamera();

  // 📜 Parallaxe / mouvement du grimoire
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;

    const { x, y, yaw, pitch, zoom } = camera;

    el.style.transform = `
      translate3d(${x * 8}px, ${-y * 6}px, 0)
      scale(${zoom})
      rotateX(${pitch * 8}deg)
      rotateY(${yaw * 8}deg)
    `;
  }, [camera]);

  const ctxValue: MithrilContextValue = {
    worldId: safeWorldId,
    eraId,
    page: safePage,
    season,
    camera,
  };

  return (
    <MithrilContext.Provider value={ctxValue}>
      <AudioBoot />

      <div
        ref={frameRef}
        data-mithril-root
        className="relative w-full h-full overflow-hidden select-none"
        style={{
          perspective: "1600px",
          transformStyle: "preserve-3d",
          backgroundColor: season.ambientColor,
          transition: "background-color 0.7s ease",
        }}
      >
        <WeatherEngineProvider biome={biome} worldId={safeWorldId}>
          {/* =================== ENCOUNTER / WORLD =================== */}
          <EncounterController>
            <WorldAmbientController>
              <TransitionLayer />
              <SeasonParticles />
              <AmbientManager />
              <LightningEngine />

              {/* 🌍 Monde isométrique */}
              <TurnController>
                <IsometricWorld />
              </TurnController>

              {devMode && <DevControls />}
            </WorldAmbientController>
          </EncounterController>

          {/* =================== GRIMOIRE / UI =================== */}
          <div className="relative mx-auto w-[95%] max-w-[1550px] h-full pointer-events-auto">
            <PageTurner page={safePage}>
              <div
                className="
                  w-full h-full
                  bg-[url('/engine/grimoire/page-texture.webp')]
                  bg-cover bg-center bg-no-repeat
                  p-6 md:p-10 lg:p-14
                  font-serif text-[#210] dark:text-[#dedede]
                "
              >
                {children}
              </div>
            </PageTurner>
          </div>
        </WeatherEngineProvider>
      </div>
    </MithrilContext.Provider>
  );
}
