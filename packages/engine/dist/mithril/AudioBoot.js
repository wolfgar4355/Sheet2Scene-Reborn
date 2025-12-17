"use client";
import { useEffect } from "react";
/**
 * AudioBoot v2 — Réveille l'AudioContext au premier geste utilisateur.
 * Nécessaire pour iOS, Safari et Android (policy autoplay).
 */
export default function AudioBoot() {
    useEffect(() => {
        let ctx = null;
        const boot = async () => {
            try {
                if (!ctx) {
                    ctx = new (window.AudioContext ||
                        window.webkitAudioContext)();
                }
                if (ctx.state === "suspended") {
                    await ctx.resume();
                }
            }
            catch (err) {
                console.warn("[AudioBoot] resume failed", err);
            }
        };
        const once = () => {
            boot();
            cleanup();
        };
        const cleanup = () => {
            window.removeEventListener("pointerdown", once);
            window.removeEventListener("touchstart", once);
            window.removeEventListener("keydown", once);
        };
        window.addEventListener("pointerdown", once, { once: true });
        window.addEventListener("touchstart", once, { once: true });
        window.addEventListener("keydown", once, { once: true });
        return cleanup;
    }, []);
    return null;
}
