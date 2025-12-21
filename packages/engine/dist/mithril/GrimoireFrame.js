// src/mithril/GrimoireFrame.tsx
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useRef, } from "react";
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
import useSeason from "./hooks/useSeason";
// 🧠 Encounter
import EncounterController from "./encounter/EncounterController";
const MithrilContext = createContext(undefined);
export function useMithril() {
    const ctx = useContext(MithrilContext);
    if (!ctx) {
        throw new Error("useMithril must be used inside <GrimoireFrame>");
    }
    return ctx;
}
// ---------------------------------------------------------------------------
// Composant public
// ---------------------------------------------------------------------------
export default function GrimoireFrame({ worldId = "mithril-quest", eraId, biome = "generic", page = 1, devMode = false, children, }) {
    return (_jsx(MithrilFrameInner, { worldId: worldId, eraId: eraId, biome: biome, page: page, devMode: devMode, children: children }));
}
// ---------------------------------------------------------------------------
// Couche interne : caméra + monde + encounter + grimoire
// ---------------------------------------------------------------------------
function MithrilFrameInner({ worldId, eraId, biome, page, devMode, children, }) {
    const frameRef = useRef(null);
    // Saison / météo
    const season = useSeason({ biome, worldId });
    // Caméra AAA
    const camera = useCamera();
    // Parallaxe / mouvement du grimoire
    useEffect(() => {
        const el = frameRef.current;
        if (!el)
            return;
        const { x, y, yaw, pitch, zoom } = camera;
        el.style.transform = `
      translate3d(${x * 8}px, ${-y * 6}px, 0)
      scale(${zoom})
      rotateX(${pitch * 8}deg)
      rotateY(${yaw * 8}deg)
    `;
    }, [camera]);
    const ctxValue = {
        worldId,
        eraId,
        page,
        season,
        camera,
    };
    return (_jsxs(MithrilContext.Provider, { value: ctxValue, children: [_jsx(AudioBoot, {}), _jsx("div", { ref: frameRef, "data-mithril-root": true, className: "relative w-full h-full overflow-hidden select-none", style: {
                    perspective: "1600px",
                    transformStyle: "preserve-3d",
                    backgroundColor: season.ambientColor,
                    transition: "background-color 0.7s ease",
                }, children: _jsxs(WeatherEngineProvider, { biome: biome, worldId: worldId, children: [_jsx(EncounterController, { children: _jsxs(WorldAmbientController, { children: [_jsx(TransitionLayer, {}), _jsx(SeasonParticles, {}), _jsx(AmbientManager, {}), _jsx(LightningEngine, {}), _jsx(TurnController, { children: _jsx(IsometricWorld, {}) }), devMode && _jsx(DevControls, {})] }) }), _jsx("div", { className: "relative mx-auto w-[95%] max-w-[1550px] h-full pointer-events-auto", children: _jsx(PageTurner, { page: page, children: _jsx("div", { className: "\n                  w-full h-full\n                  bg-[url('/engine/grimoire/page-texture.webp')]\n                  bg-cover bg-center bg-no-repeat\n                  p-6 md:p-10 lg:p-14\n                  font-serif text-[#210] dark:text-[#dedede]\n                ", children: children }) }) })] }) })] }));
}
