// src/mithril/SeasonParticles.tsx
"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { useScene } from "./SceneController";
export default function SeasonParticles() {
    const canvasRef = useRef(null);
    const { season, weather, lightLevel } = useScene();
    const intensity = weather.intensity;
    useEffect(() => {
        if (typeof window === "undefined")
            return;
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        let particles = [];
        let rafId = 0;
        // -----------------------------------------------------------------------
        // DENSITÉ DES PARTICULES
        // -----------------------------------------------------------------------
        const baseDensity = weather.kind === "snow"
            ? 140
            : weather.kind === "rain"
                ? 180
                : weather.kind === "fog"
                    ? 80
                    : weather.kind === "storm"
                        ? 200
                        : season === "autumn"
                            ? 90
                            : season === "winter"
                                ? 110
                                : 40;
        const density = Math.round(baseDensity * (0.4 + intensity * 1.6));
        // -----------------------------------------------------------------------
        // RÉSOLUTION + INIT
        // -----------------------------------------------------------------------
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };
        const initParticles = () => {
            particles = Array.from({ length: density }).map(() => {
                const isRain = weather.kind === "rain" || weather.kind === "storm";
                const isSnow = weather.kind === "snow";
                const isFog = weather.kind === "fog";
                const size = isRain
                    ? Math.random() * 1 + 0.6
                    : isSnow
                        ? Math.random() * 3.5 + 1
                        : isFog
                            ? Math.random() * 5 + 3
                            : Math.random() * 2.2 + 1;
                const color = isRain
                    ? `rgba(180,180,255,${0.2 + intensity * 0.3})`
                    : isSnow
                        ? `rgba(255,255,255,${0.3 + intensity * 0.4})`
                        : isFog
                            ? `rgba(200,200,200,${0.15 + intensity * 0.2})`
                            : season === "autumn"
                                ? "rgba(255,150,40,0.7)"
                                : "rgba(255,255,255,0.4)";
                const wind = weather.kind === "storm"
                    ? 2.5 + intensity * 3
                    : weather.kind === "rain"
                        ? 1.5 + intensity * 2
                        : weather.kind === "fog"
                            ? 0.3
                            : 0.2 + intensity * 0.5;
                const vx = wind * (0.7 + Math.random() * 0.6);
                const vy = isRain
                    ? 4 + intensity * 4
                    : isSnow
                        ? 1 + intensity * 1.5
                        : isFog
                            ? 0.2 + Math.random() * 0.3
                            : 0.5 + Math.random() * 1;
                return {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx,
                    vy,
                    size,
                    opacity: Math.random() * 0.7 + 0.2,
                    color,
                };
            });
        };
        // -----------------------------------------------------------------------
        // ANIMATION
        // -----------------------------------------------------------------------
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (weather.kind === "storm") {
                    p.x +=
                        Math.sin(p.y * 0.025) *
                            (1 + intensity * 2.5);
                }
                else {
                    p.x += Math.sin(p.y * 0.002) * 0.2;
                }
                if (p.y > canvas.height + 20)
                    p.y = -10;
                if (p.x > canvas.width + 20)
                    p.x = -10;
                if (p.x < -20)
                    p.x = canvas.width + 10;
                ctx.beginPath();
                ctx.globalAlpha =
                    p.opacity * (0.6 + lightLevel * 0.4);
                ctx.fillStyle = p.color;
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = 1;
            rafId = requestAnimationFrame(animate);
        };
        resize();
        animate();
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(rafId);
        };
    }, [season, weather.kind, weather.intensity, lightLevel]);
    return (_jsx("canvas", { ref: canvasRef, className: "absolute inset-0 pointer-events-none z-[2]", style: { mixBlendMode: "screen" } }));
}
