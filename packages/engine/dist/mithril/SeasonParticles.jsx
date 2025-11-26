"use client";
import { useEffect, useRef } from "react";
import { useScene } from "./SceneController";
export default function SeasonParticles() {
    const canvasRef = useRef(null);
    const { season } = useScene();
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        let particles = [];
        let raf;
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };
        const initParticles = () => {
            particles = Array.from({ length: 120 }).map(() => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speed: Math.random() * 1.5 + 0.5,
                color: season === "winter"
                    ? "rgba(255,255,255,0.8)"
                    : season === "autumn"
                        ? "rgba(255,165,0,0.8)"
                        : "rgba(255,255,255,0.15)",
            }));
        };
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let p of particles) {
                p.y += p.speed;
                if (p.y > canvas.height)
                    p.y = -10;
                ctx.beginPath();
                ctx.fillStyle = p.color;
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }
            raf = requestAnimationFrame(animate);
        };
        resize();
        animate();
        window.addEventListener("resize", resize);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
        };
    }, [season]);
    return (<canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[1]" style={{ mixBlendMode: "screen" }}/>);
}
