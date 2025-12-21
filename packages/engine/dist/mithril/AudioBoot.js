"use client";
import { useEffect } from "react";
// -----------------------------------------------------------------------------
// AudioBoot AAA — Gestion centralisée d'un unique AudioContext
// -----------------------------------------------------------------------------
class AudioBootCore {
    _ctx = null;
    _readyPromise;
    _resolve;
    constructor() {
        this._readyPromise = new Promise((res) => {
            this._resolve = res;
        });
    }
    /**
     * Retourne l'AudioContext global (créé si nécessaire)
     */
    get context() {
        if (!this._ctx) {
            const Ctx = window.AudioContext || window.webkitAudioContext;
            this._ctx = new Ctx();
        }
        return this._ctx;
    }
    /**
     * Promesse résolue lorsque le contexte est activé
     */
    ready() {
        return this._readyPromise;
    }
    /**
     * Force un "resume" du contexte (iOS/Safari friendly)
     */
    async ensure() {
        try {
            const ctx = this.context;
            if (ctx.state === "suspended") {
                await ctx.resume();
            }
            // Résout la promesse si c'est la première activation
            this._resolve(ctx);
        }
        catch (err) {
            console.warn("[AudioBoot] resume failed", err);
        }
    }
    /**
     * Boot automatique au premier geste utilisateur
     */
    attachUserGestures() {
        const run = () => this.ensure();
        const opts = { once: true };
        window.addEventListener("pointerdown", run, opts);
        window.addEventListener("touchstart", run, opts);
        window.addEventListener("keydown", run, opts);
    }
}
// Singleton global
export const AudioBootCoreInstance = new AudioBootCore();
// -----------------------------------------------------------------------------
// Composant React (facultatif mais pratique)
// -----------------------------------------------------------------------------
export default function AudioBoot() {
    useEffect(() => {
        AudioBootCoreInstance.attachUserGestures();
    }, []);
    return null;
}
