"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { useScene } from "./SceneController";
import { triggerCameraShake } from "./CameraShake";
import LightningArcs from "./LightningArcs";
/**
 * ⚡ Mithril Engine — Lightning + Thunder AAA PACK
 * - Éclairs directionnels (left, right, center, behind)
 * - Flash avec intensité variable
 * - Distance réaliste -> délai tonnerre
 * - Plusieurs samples audio selon distance
 * - Intégration camera shake
 * - Arcs lightning en Canvas
 */
export default function LightningEngine() {
    const { weather, intensity } = useScene();
    const flashRef = useRef(null);
    const audioCtx = useRef(null);
    useEffect(() => {
        if (weather !== "storm")
            return;
        if (!audioCtx.current) {
            audioCtx.current = new AudioContext();
        }
        let running = true;
        const loop = async () => {
            while (running) {
                const next = 1200 + Math.random() * (6000 / (intensity + 0.3));
                await delay(next);
                if (!running)
                    break;
                // 1) Générer un éclair
                const dist = getRandomDistance();
                const dir = getDirection();
                const delaySound = dist / 340;
                // 2) flash visuel
                triggerFlash(dir, intensity);
                // 3) arcs lightning si proche
                if (dist < 250)
                    LightningArcs.spawn(dir);
                // 4) camera shake
                triggerCameraShake(dist);
                // 5) jouer tonnerre
                playThunder(dist, delaySound);
            }
        };
        loop();
        return () => { running = false; };
    }, [weather, intensity]);
    const triggerFlash = (dir, intensity) => {
        if (!flashRef.current)
            return;
        const power = Math.min(1, 0.4 + intensity * 0.7);
        const angle = dir === "left" ? "translateX(-20%)"
            : dir === "right" ? "translateX(20%)"
                : dir === "behind" ? "scale(0.6)"
                    : "none";
        flashRef.current.style.transform = angle;
        flashRef.current.style.opacity = String(power);
        setTimeout(() => {
            if (flashRef.current)
                flashRef.current.style.opacity = "0";
        }, 60 + Math.random() * 70);
    };
    const playThunder = async (dist, delay) => {
        if (!audioCtx.current)
            return;
        const sample = pickSample(dist);
        const arr = await fetch("/sounds/thunder/" + sample).then(r => r.arrayBuffer());
        const buffer = await audioCtx.current.decodeAudioData(arr);
        setTimeout(() => {
            const src = audioCtx.current.createBufferSource();
            const gain = audioCtx.current.createGain();
            const volume = dist < 100
                ? 1.2
                : dist < 400
                    ? 1.0
                    : dist < 1200
                        ? 0.6
                        : 0.3;
            gain.gain.value = volume;
            src.buffer = buffer;
            src.connect(gain);
            gain.connect(audioCtx.current.destination);
            src.start(0);
        }, delay * 1000);
    };
    return (_jsx("div", { ref: flashRef, className: "pointer-events-none absolute inset-0 z-[80] bg-white", style: {
            opacity: 0,
            transition: "opacity 0.07s linear",
            mixBlendMode: "screen"
        } }));
}
function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
}
function getRandomDistance() {
    // 15% des éclairs = impact direct (sorts)
    if (Math.random() < 0.15)
        return 0;
    return Math.floor(80 + Math.random() * 2000);
}
function getDirection() {
    const dirs = ["left", "right", "center", "behind"];
    return dirs[Math.floor(Math.random() * dirs.length)];
}
function pickSample(dist) {
    if (dist === 0)
        return "thunder_close_1.mp3";
    if (dist < 300)
        return rand(["thunder_close_1.mp3", "thunder_close_2.mp3"]);
    if (dist < 900)
        return rand(["thunder_mid_1.mp3", "thunder_mid_2.mp3"]);
    return rand(["thunder_far_1.mp3", "thunder_far_2.mp3"]);
}
function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
