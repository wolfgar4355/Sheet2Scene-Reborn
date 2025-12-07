"use client";
/*
 * Mithril Engine – AmbientManager v1.5.1 (patch)
 * - Gère l’ambiance 3D (WebAudio + caméra)
 * - Positionne les sources (vent, pluie, neige, mer, etc.)
 * - Ajuste les volumes selon saison / météo / phase du jour
 * - Suit la caméra utilisateur pour la spatialisation 3D
 * - Rafraîchit saison / météo toutes les 5 minutes
 */
import { useEffect, useRef } from "react";
import useCamera from "./hooks/useCamera";
import AmbientConfigDefault from "./ambient-config";
import { getSeason, getDayPhase, getWeather } from "./hooks/useSeason";
const AmbientManager = () => {
    // refs principaux
    const ctxRef = useRef(null);
    const nodesRef = useRef(new Map());
    const resumeRequestedRef = useRef(false);
    // caméra (position + orientation)
    const { position, forward } = useCamera();
    // on “assouplit” la config pour éviter les erreurs de type
    const AmbientConfig = AmbientConfigDefault;
    const sources = (AmbientConfig.sources ?? []);
    /**
     * Si la spatialisation est explicitement désactivée,
     * on ne monte rien.
     */
    if (AmbientConfig.enableSpatialAudio === false) {
        return null;
    }
    /**
     * Crée une source spatialisée pour un AmbientSource.
     */
    const buildNodeFromSource = (ctx, buffer, s) => {
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.loop = true;
        const panner = ctx.createPanner();
        panner.panningModel = "HRTF";
        panner.distanceModel = "inverse";
        const opts = s ?? {};
        const refDistance = opts.refDistance ?? 1.5;
        const rolloffFactor = opts.rolloffFactor ?? 1;
        panner.refDistance = refDistance;
        panner.rolloffFactor = rolloffFactor;
        const gain = ctx.createGain();
        gain.gain.value = opts.volume ?? 0.5;
        // position initiale
        const x = opts.x ?? 0;
        const y = opts.y ?? 0;
        const z = opts.z ?? 0;
        panner.positionX.value = x;
        panner.positionY.value = y;
        panner.positionZ.value = z;
        source.connect(panner);
        panner.connect(gain);
        gain.connect(ctx.destination);
        return {
            id: String(s.id ?? `src-${Math.random().toString(16).slice(2)}`),
            source,
            panner,
            gain,
        };
    };
    /**
     * Met à jour la couleur d’ambiance du <body> (CSS)
     */
    const updateAmbientColor = () => {
        const now = new Date();
        const season = getSeason(now.getMonth() + 1);
        const phase = getDayPhase(now.getHours());
        // on laisse la logique fine à ambient-config,
        // ici on se contente de poser les data-attrs.
        document.body.dataset.season = season;
        document.body.dataset.phase = phase;
    };
    /**
     * Met à jour les volumes selon la saison / la météo / la phase.
     * NOTE: async car getWeather() retourne une Promise<WeatherKind>.
     */
    const updateAmbience = async () => {
        const currentCtx = ctxRef.current;
        if (!currentCtx)
            return;
        const now = new Date();
        const season = getSeason(now.getMonth() + 1);
        const phase = getDayPhase(now.getHours());
        const weather = await getWeather(); // <- correction principale
        document.body.dataset.weather = weather;
        const windNode = nodesRef.current.get("wind");
        const rainNode = nodesRef.current.get("rain");
        const snowNode = nodesRef.current.get("snow");
        let windVol = 0.1;
        let rainVol = 0;
        let snowVol = 0;
        // saison
        if (season === "winter")
            snowVol = 0.25;
        if (season === "spring")
            windVol = 0.2;
        if (season === "summer")
            windVol = 0.3;
        if (season === "autumn")
            windVol = 0.25;
        // phase du jour (on peut nuancer le vent par ex.)
        if (phase === "night") {
            windVol *= 0.6;
        }
        // météo (override partiel)
        if (weather === "rain") {
            rainVol = 0.5;
            windVol *= 0.7;
        }
        if (weather === "snow") {
            snowVol = Math.max(snowVol, 0.8);
            windVol *= 0.5;
        }
        if (weather === "fog") {
            windVol = Math.max(windVol, 0.8);
        }
        try {
            if (windNode) {
                windNode.gain.gain.setTargetAtTime(windVol, currentCtx.currentTime, 2.5);
            }
            if (rainNode) {
                rainNode.gain.gain.setTargetAtTime(rainVol, currentCtx.currentTime, 2.5);
            }
            if (snowNode) {
                snowNode.gain.gain.setTargetAtTime(snowVol, currentCtx.currentTime, 2.5);
            }
        }
        catch {
            // on ne casse pas si une source manque
        }
    };
    /**
     * Repositionne la caméra dans le listener audio 3D
     */
    const updateListenerFromCamera = () => {
        const ctx = ctxRef.current;
        if (!ctx)
            return;
        const listener = ctx.listener;
        const { x, y, z } = position;
        const { x: fx, y: fy, z: fz } = forward;
        listener.positionX.value = x;
        listener.positionY.value = y;
        listener.positionZ.value = z;
        listener.forwardX.value = fx;
        listener.forwardY.value = fy;
        listener.forwardZ.value = fz;
        // up vector fixe (0, 1, 0)
        listener.upX.value = 0;
        listener.upY.value = 1;
        listener.upZ.value = 0;
    };
    /**
     * Lance le contexte audio au premier geste utilisateur.
     */
    const ensureAudioResumed = () => {
        const ctx = ctxRef.current;
        if (!ctx)
            return;
        if (resumeRequestedRef.current)
            return;
        resumeRequestedRef.current = true;
        if (ctx.state === "suspended") {
            void ctx.resume();
        }
    };
    useEffect(() => {
        // création du contexte si non existant
        const ctx = ctxRef.current ??
            new (window.AudioContext || window.webkitAudioContext)();
        ctxRef.current = ctx;
        // charge & instancie toutes les sources configurées
        const loadAllSources = async () => {
            for (const src of sources) {
                try {
                    const res = await fetch(src.file);
                    const arr = await res.arrayBuffer();
                    const buffer = await ctx.decodeAudioData(arr);
                    const node = buildNodeFromSource(ctx, buffer, src);
                    nodesRef.current.set(src.id ?? node.id, node);
                    node.source.start(0);
                }
                catch (err) {
                    // eslint-disable-next-line no-console
                    console.warn("[Ambient] failed to load source", src.id, err);
                }
            }
        };
        void loadAllSources();
        // premier update immédiat
        updateAmbientColor();
        void updateAmbience();
        updateListenerFromCamera();
        // timers
        const ambienceTimer = window.setInterval(() => {
            updateAmbientColor();
            void updateAmbience();
        }, 5 * 60 * 1000); // toutes les 5 minutes
        const listenerTimer = window.setInterval(() => {
            updateListenerFromCamera();
        }, 100);
        // reprise audio au 1er geste utilisateur
        window.addEventListener("pointerdown", ensureAudioResumed, {
            once: true,
        });
        window.addEventListener("click", ensureAudioResumed, { once: true });
        return () => {
            window.clearInterval(ambienceTimer);
            window.clearInterval(listenerTimer);
            window.removeEventListener("pointerdown", ensureAudioResumed);
            window.removeEventListener("click", ensureAudioResumed);
            // nettoyage des nodes et du contexte
            nodesRef.current.forEach((n) => {
                try {
                    n.source.stop();
                    n.source.disconnect();
                    n.panner.disconnect();
                    n.gain.disconnect();
                }
                catch {
                    // ignore
                }
            });
            nodesRef.current.clear();
            if (ctxRef.current) {
                ctxRef.current.close().catch(() => { });
                ctxRef.current = null;
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // on met à jour la position du listener dès que la caméra change
    useEffect(() => {
        updateListenerFromCamera();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position.x, position.y, position.z, forward.x, forward.y, forward.z]);
    // Ce composant ne rend rien : il ne fait que gérer l’ambiance.
    return null;
};
export default AmbientManager;
