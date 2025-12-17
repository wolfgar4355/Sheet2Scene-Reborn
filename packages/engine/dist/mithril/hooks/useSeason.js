// src/mithril/hooks/useSeason.ts
"use client";
import { useEffect, useState } from "react";
import { getSeason, getDayPhase, getWeather, getAmbientColor, } from "../time";
// ---------------------------------------------------------------------------
// Utilitaires internes – pseudo aléatoire déterministe
// ---------------------------------------------------------------------------
function lcg(seed) {
    // Linear Congruential Generator très simple, suffisamment stable pour l’ambiance
    const a = 1664525;
    const c = 1013904223;
    const m = 2 ** 32;
    return (a * seed + c) % m;
}
/**
 * Génère une météo déterministe à partir d’un seed de temps + biome.
 * Objectif : même heure/jour → même météo, pas de flicker.
 */
function sampleWeatherFor(baseWeather, seedBase, biome = "generic") {
    // On part d’un seed déterministe simple
    let seed = lcg(seedBase);
    // On transforme en [0,1[
    const rnd = seed / 2 ** 32;
    // Poids de base selon biome
    let rainBias = 0.25;
    let snowBias = 0.15;
    let fogBias = 0.15;
    let stormBias = 0.1;
    switch (biome) {
        case "desert":
            rainBias = 0.05;
            snowBias = 0.0;
            fogBias = 0.05;
            stormBias = 0.15;
            break;
        case "forest":
            rainBias = 0.35;
            fogBias = 0.2;
            break;
        case "mountain":
            snowBias = 0.3;
            fogBias = 0.2;
            break;
        case "city":
            fogBias = 0.1;
            stormBias = 0.2;
            break;
        case "coast":
            rainBias = 0.3;
            stormBias = 0.2;
            break;
        case "void":
            // ambiance plus extrême
            rainBias = 0.1;
            snowBias = 0.1;
            fogBias = 0.2;
            stormBias = 0.3;
            break;
    }
    // Normalisation simple des probabilités
    const clearBias = 1 - (rainBias + snowBias + fogBias + stormBias);
    const pClear = Math.max(0, clearBias);
    const pRain = rainBias;
    const pSnow = snowBias;
    const pFog = fogBias;
    const pStorm = stormBias;
    let acc = 0;
    let weather = baseWeather;
    acc += pClear;
    if (rnd < acc)
        weather = "clear";
    else {
        acc += pRain;
        if (rnd < acc)
            weather = "rain";
        else {
            acc += pSnow;
            if (rnd < acc)
                weather = "snow";
            else {
                acc += pFog;
                if (rnd < acc)
                    weather = "fog";
                else
                    weather = "storm";
            }
        }
    }
    // Intensité : autre sample dérivé
    seed = lcg(seed);
    const lvl = (seed / 2 ** 32) ** 1.3; // plus de calme que d’extrême
    return {
        weather,
        intensity: weather === "clear" ? 0 : lvl, // 0 en ciel clair
    };
}
// ---------------------------------------------------------------------------
// Hook principal – Version AAA + Mobile-friendly
// ---------------------------------------------------------------------------
/**
 * Hook saison / météo pour Mithril Engine.
 *
 * - lit la date/heure actuelle
 * - dérive saison, phase, couleur
 * - simule une météo déterministe (option biome/world)
 * - met à jour à intervalle rare (perf mobile) mais cohérent
 */
export default function useSeason(opts = {}) {
    const { mobileMode = false, updateIntervalMs, biome = "generic", worldId, } = opts;
    // Intervalle par défaut selon plateforme
    const defaultInterval = mobileMode ? 5 * 60 * 1000 : 2 * 60 * 1000; // 5 min mobile, 2 min desktop
    const interval = updateIntervalMs ?? defaultInterval;
    // État initial dérivé de l’instant présent
    const [data, setData] = useState(() => {
        const now = new Date();
        const month = now.getMonth() + 1;
        const hour = now.getHours();
        const dayOfYear = Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) -
            Date.UTC(now.getFullYear(), 0, 0)) /
            86400000);
        const name = getSeason(month);
        const phase = getDayPhase(hour);
        const ambientBase = getAmbientColor(name, phase);
        // Base météo (depuis time.ts, peut-être juste "clear" au début)
        const baseWeather = "clear";
        // Seed temps + biome + monde
        const seedBase = dayOfYear * 24 +
            hour +
            (biome ? biome.length * 17 : 0) +
            (worldId ? worldId.length * 13 : 0);
        const { weather, intensity } = sampleWeatherFor(baseWeather, seedBase, biome);
        return {
            name,
            phase,
            weather,
            intensity,
            ambientColor: ambientBase,
            biome,
            worldId,
        };
    });
    useEffect(() => {
        let cancelled = false;
        // Première synchro avec getWeather() si jamais tu le branches plus tard
        (async () => {
            try {
                const w = await getWeather();
                if (!cancelled && w !== data.weather) {
                    setData((prev) => ({ ...prev, weather: w, intensity: w === "clear" ? 0 : prev.intensity }));
                }
            }
            catch {
                // on garde la météo simulée si erreur
            }
        })();
        // Timer de mise à jour saison/phase/météo/couleur
        const timer = setInterval(() => {
            const now = new Date();
            const month = now.getMonth() + 1;
            const hour = now.getHours();
            const dayOfYear = Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) -
                Date.UTC(now.getFullYear(), 0, 0)) /
                86400000);
            const name = getSeason(month);
            const phase = getDayPhase(hour);
            const ambientBase = getAmbientColor(name, phase);
            const baseWeather = "clear";
            const seedBase = dayOfYear * 24 +
                hour +
                (biome ? biome.length * 17 : 0) +
                (worldId ? worldId.length * 13 : 0);
            const { weather, intensity } = sampleWeatherFor(baseWeather, seedBase, biome);
            if (cancelled)
                return;
            setData((prev) => ({
                ...prev,
                name,
                phase,
                weather,
                intensity,
                ambientColor: ambientBase,
                biome,
                worldId,
            }));
        }, interval);
        return () => {
            cancelled = true;
            clearInterval(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [interval, biome, worldId]);
    return data;
}
// ---------------------------------------------------------------------------
// Ré-export des helpers pour compatibilité
// ---------------------------------------------------------------------------
// Permet de garder des imports existants comme:
//   import { getSeason, getDayPhase } from "./hooks/useSeason";
export { getSeason, getDayPhase, getWeather, getAmbientColor };
