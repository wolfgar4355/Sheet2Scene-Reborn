// src/mithril/hooks/useSeason.ts
"use client";
import { useEffect, useState } from "react";
import { getSeason, getDayPhase, getAmbientColor, } from "../time";
// ---------------------------------------------------------------------------
// Pseudo-RNG déterministe
// ---------------------------------------------------------------------------
function lcg(seed) {
    const a = 1664525;
    const c = 1013904223;
    const m = 2 ** 32;
    return (a * seed + c) % m;
}
/**
 * Sélection météo déterministe selon biome + seed horaire
 */
function sampleWeatherFor(seedBase, biome = "generic") {
    let seed = lcg(seedBase);
    const rnd = seed / 2 ** 32;
    let rainBias = 0.25;
    let snowBias = 0.15;
    let fogBias = 0.15;
    let stormBias = 0.1;
    switch (biome) {
        case "desert":
            rainBias = 0.05;
            snowBias = 0;
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
            rainBias = 0.1;
            snowBias = 0.1;
            fogBias = 0.2;
            stormBias = 0.3;
            break;
    }
    const clearBias = Math.max(0, 1 - (rainBias + snowBias + fogBias + stormBias));
    let acc = clearBias;
    let weather = "clear";
    if (rnd < acc) {
        weather = "clear";
    }
    else {
        acc += rainBias;
        if (rnd < acc) {
            weather = "rain";
        }
        else {
            acc += snowBias;
            if (rnd < acc) {
                weather = "snow";
            }
            else {
                acc += fogBias;
                weather = rnd < acc ? "fog" : "storm";
            }
        }
    }
    seed = lcg(seed);
    const intensity = weather === "clear" ? 0 : Math.pow(seed / 2 ** 32, 1.3);
    return { weather, intensity };
}
// ---------------------------------------------------------------------------
// Hook principal
// ---------------------------------------------------------------------------
export default function useSeason(opts = {}) {
    const { mobileMode = false, updateIntervalMs, biome = "generic", worldId, } = opts;
    const defaultInterval = mobileMode
        ? 5 * 60 * 1000
        : 2 * 60 * 1000;
    const interval = updateIntervalMs ?? defaultInterval;
    const [data, setData] = useState(() => {
        const now = new Date();
        const month = now.getMonth() + 1;
        const hour = now.getHours();
        const dayOfYear = Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) -
            Date.UTC(now.getFullYear(), 0, 0)) /
            86400000);
        const name = getSeason(month);
        const phase = getDayPhase(hour);
        const ambientColor = getAmbientColor(name, phase);
        const seedBase = dayOfYear * 24 +
            hour +
            biome.length * 17 +
            (worldId?.length ?? 0) * 13;
        const { weather, intensity } = sampleWeatherFor(seedBase, biome);
        return {
            name,
            phase,
            ambientColor,
            weather,
            intensity,
            biome,
            worldId,
        };
    });
    useEffect(() => {
        let cancelled = false;
        const timer = setInterval(() => {
            if (cancelled)
                return;
            const now = new Date();
            const month = now.getMonth() + 1;
            const hour = now.getHours();
            const dayOfYear = Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) -
                Date.UTC(now.getFullYear(), 0, 0)) /
                86400000);
            const name = getSeason(month);
            const phase = getDayPhase(hour);
            const ambientColor = getAmbientColor(name, phase);
            const seedBase = dayOfYear * 24 +
                hour +
                biome.length * 17 +
                (worldId?.length ?? 0) * 13;
            const { weather, intensity } = sampleWeatherFor(seedBase, biome);
            setData({
                name,
                phase,
                ambientColor,
                weather,
                intensity,
                biome,
                worldId,
            });
        }, interval);
        return () => {
            cancelled = true;
            clearInterval(timer);
        };
    }, [interval, biome, worldId]);
    return data;
}
