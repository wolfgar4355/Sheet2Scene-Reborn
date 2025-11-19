"use client";

/**
 * ⭐ Mithril Engine – AmbientManager v1.5.1 (patch)
 * - Gestion complète de l’ambiance 3D (WebAudio + caméra)
 * - Positionne les sources sonores (feu, vent, pluie, neige, etc.)
 * - Ajuste les volumes selon saison / heure / météo
 * - Suit la caméra utilisateur pour spatialisation 3D
 * - Rafraîchit phase jour/nuit et saison toutes les 5 min
 */

import { useEffect, useRef } from "react";
import { useCamera } from "./hooks/useCamera";

import {
  AmbientConfig,
  getAmbientColor,
  type AmbientSource,
} from "@/lib/mithril/ambient.config";

import { getSeason, getDayPhase, getWeather } from "./hooks/useSeason";

type NodeBundle = {
  source: AudioBufferSourceNode;
  panner: PannerNode;
  gain: GainNode;
};

export default function AmbientManager() {
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<Map<string, NodeBundle>>(new Map());
  const camera = useCamera(); // { x, y, z, set }

  useEffect(() => {
    if (!AmbientConfig.enableSpatialAudio) {
      return;
    }

    // --- Création du contexte audio (support Safari) ---
    const AudioContextCtor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;

    if (!AudioContextCtor) {
      // WebAudio non supporté
      return;
    }

    const ctx = new AudioContextCtor();
    ctxRef.current = ctx;

    /** 🎨 Synchronise la couleur d’ambiance (CSS variable) */
    const setVisualState = () => {
      const now = new Date();
      const season = getSeason(now.getMonth() + 1);
      const phase = getDayPhase(now.getHours());
      const weather = getWeather();
      const color = getAmbientColor();

      document.body.dataset.season = season;
      document.body.dataset.phase = phase;
      document.body.dataset.weather = weather;
      document.body.style.setProperty("--ambient-color", color);
    };

    /** 🎧 Charge une source audio spatialisée */
    const loadSource = async (s: AmbientSource) => {
      try {
        const res = await fetch(s.file);
        const arr = await res.arrayBuffer();
        const buffer = await ctx.decodeAudioData(arr);

        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.loop = true;

        const panner = ctx.createPanner();
        panner.panningModel = "HRTF";
        panner.distanceModel = "inverse";
        panner.refDistance = s.refDistance ?? 1.5;
        panner.maxDistance = s.maxDistance ?? 50;
        panner.rolloffFactor = s.rolloffFactor ?? 1;
        panner.positionX.value = s.x;
        panner.positionY.value = s.y;
        panner.positionZ.value = s.z;

        const gain = ctx.createGain();
        gain.gain.value = s.volume;

        source.connect(panner);
        panner.connect(gain);
        gain.connect(ctx.destination);

        nodesRef.current.set(s.id, { source, panner, gain });

        source.start(0);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn("[Ambient] failed to load", s.id, err);
      }
    };

    /** 🎥 Suit la caméra pour la spatialisation */
    const updateListener = () => {
      const currentCtx = ctxRef.current;
      if (!currentCtx || !currentCtx.listener) return;

      const { x, y, z } = camera;

      // La caméra “regarde” droit devant le grimoire
      const forwardX = 0;
      const forwardY = 0;
      const forwardZ = 1;

      currentCtx.listener.positionX.value = x;
      currentCtx.listener.positionY.value = y;
      currentCtx.listener.positionZ.value = z;

      currentCtx.listener.forwardX.value = forwardX;
      currentCtx.listener.forwardY.value = forwardY;
      currentCtx.listener.forwardZ.value = forwardZ;
    };

    /** 🌦️ Met à jour les volumes selon saison / météo / phase */
    const updateAmbience = () => {
      const currentCtx = ctxRef.current;
      if (!currentCtx) return;

      const now = new Date();
      const season = getSeason(now.getMonth() + 1);
      const phase = getDayPhase(now.getHours());
      const weather = getWeather();

      const wind = nodesRef.current.get("wind");
      const rain = nodesRef.current.get("rain");
      const snow = nodesRef.current.get("snow");

      let windVol = 0.15;
      let rainVol = 0.1;
      let snowVol = 0.1;

      if (season === "winter") snowVol = 0.35;
      if (season === "autumn") windVol = 0.2;
      if (weather === "rain") rainVol = 0.5;
      if (weather === "snow") snowVol = 0.8;
      if (weather === "fog") windVol = 0.8;
      if (phase === "night") windVol = 0.7;

      try {
        if (wind) {
          wind.gain.gain.setTargetAtTime(
            windVol,
            currentCtx.currentTime,
            2.5,
          );
        }
        if (rain) {
          rain.gain.gain.setTargetAtTime(
            rainVol,
            currentCtx.currentTime,
            2.5,
          );
        }
        if (snow) {
          snow.gain.gain.setTargetAtTime(
            snowVol,
            currentCtx.currentTime,
            2.5,
          );
        }
      } catch {
        if (wind) wind.gain.gain.value = windVol;
        if (rain) rain.gain.gain.value = rainVol;
        if (snow) snow.gain.gain.value = snowVol;
      }
    };

    /** 🔓 Débloque l’audio au premier geste utilisateur */
    const resumeAudio = () => {
      const currentCtx = ctxRef.current;
      if (!currentCtx || currentCtx.state !== "suspended") return;
      currentCtx.resume().catch(() => {});
    };

    // --- Initialisation ---

    // Charge toutes les sources configurées
    Promise.all(AmbientConfig.sources.map((s) => loadSource(s))).catch(() => {});

    // Premier update immédiat
    setVisualState();
    updateAmbience();
    updateListener();

    // Timers
    const ambienceTimer = window.setInterval(updateAmbience, 10_000);
    const tintTimer = window.setInterval(setVisualState, 5 * 60 * 1_000);
    const listenerTimer = window.setInterval(updateListener, 100);

    // Events pour déverrouiller le contexte audio
    window.addEventListener("touchstart", resumeAudio, { once: true });
    window.addEventListener("click", resumeAudio, { once: true });

    /** 🧹 Nettoyage complet */
    return () => {
      window.clearInterval(ambienceTimer);
      window.clearInterval(tintTimer);
      window.clearInterval(listenerTimer);

      window.removeEventListener("touchstart", resumeAudio);
      window.removeEventListener("click", resumeAudio);

      nodesRef.current.forEach((n) => {
        try {
          n.source.stop();
          n.source.disconnect();
          n.panner.disconnect();
          n.gain.disconnect();
        } catch {
          // ignore
        }
      });
      nodesRef.current.clear();

      if (ctxRef.current) {
        ctxRef.current.close().catch(() => {});
        ctxRef.current = null;
      }
    };
  }, []); // on lance une seule fois au montage

  // Ce composant ne rend rien, il ne fait que gérer l’ambiance globale
  return <></>;
}
