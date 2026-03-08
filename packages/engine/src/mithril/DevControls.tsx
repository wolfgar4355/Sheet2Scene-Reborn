// src/mithril/DevControls.tsx
"use client";

import { useState, useEffect } from "react";
import { AmbientConfig } from "../ambient.config";
import { useCamera } from "./hooks/useCamera";
import { getSeason, getDayPhase } from "./time";

/**
 * Mithril Engine — DevControls v2.0
 * Panneau debug interne pour tester ambiance + caméra
 */
export default function DevControls() {
  const [visible, setVisible] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const [season, setSeason] = useState(getSeason(new Date().getMonth()));
  const [phase, setPhase] = useState(getDayPhase(new Date().getHours()));

  const camera = useCamera();

  // Accent visuel saison → bordure
  useEffect(() => {
    if (!visible) return;
    document.body.style.outline = `2px solid ${AmbientConfig.ambientLight[phase]}`;
  }, [phase, visible]);

  // Synchroniser dataset (utilisé par AmbientManager)
  useEffect(() => {
    if (!visible) return;
    document.body.dataset.season = season;
    document.body.dataset.phase = phase;
  }, [season, phase]);

  if (!visible)
    return (
      <button
        onClick={() => setVisible(true)}
        className="fixed bottom-3 right-3 z-[9999] bg-amber-800/80 text-white text-xs px-3 py-1.5 rounded-md shadow-lg"
      >
        ⚙️ Dev
      </button>
    );

  return (
    <div className="fixed bottom-3 right-3 z-[9999] w-64 p-3 bg-neutral-900/95 text-white rounded-lg border border-amber-700 shadow-xl">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-bold">⚙️ Dev Controls</h3>
        <button
          onClick={() => setVisible(false)}
          className="text-amber-400 hover:text-amber-200"
        >
          ✖
        </button>
      </div>

      {/* Audio toggle */}
      <div className="mb-2">
        <label className="flex items-center space-x-2 text-xs">
          <input
            type="checkbox"
            checked={audioEnabled}
            onChange={() => setAudioEnabled(!audioEnabled)}
          />
          <span>Activer son spatial</span>
        </label>
      </div>

      {/* Saison */}
      <div className="mb-2">
        <label className="text-xs">🌸 Saison :</label>
        <select
          value={season}
          onChange={(e) => setSeason(e.target.value as any)}
          className="w-full mt-1 bg-neutral-800 text-xs rounded px-1 py-0.5"
        >
          <option value="winter">❄️ Hiver</option>
          <option value="spring">🌷 Printemps</option>
          <option value="summer">☀️ Été</option>
          <option value="autumn">🍂 Automne</option>
        </select>
      </div>

      {/* Moment du jour */}
      <div className="mb-2">
        <label className="text-xs">🕓 Moment du jour :</label>
        <select
          value={phase}
          onChange={(e) => setPhase(e.target.value as any)}
          className="w-full mt-1 bg-neutral-800 text-xs rounded px-1 py-0.5"
        >
          <option value="morning">🌅 Matin</option>
          <option value="day">🌞 Jour</option>
          <option value="evening">🌇 Soir</option>
          <option value="night">🌙 Nuit</option>
        </select>
      </div>

      {/* Caméra */}
      <div className="mt-3 border-t border-neutral-700 pt-2">
        <label className="text-xs block mb-1">🎥 Position caméra</label>
        {(["x", "y", "z"] as const).map((axis) => (
          <div key={axis} className="flex items-center mb-1">
            <span className="w-4 text-right text-xs mr-1">
              {axis.toUpperCase()}
            </span>
            <input
              type="range"
              min={-5}
              max={5}
              step={0.1}
              value={camera[axis]}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                camera.set((prev) => ({
                  ...prev,
                  [axis]: value,
                }));
              }}
              className="flex-1 accent-amber-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
