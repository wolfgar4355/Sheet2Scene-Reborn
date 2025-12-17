// packages/engine/src/ambient/engine-worklet.ts
export class MithrilAudioEngine {
    opts;
    ctx = null;
    masterGain = null;
    workletReady = false;
    constructor(opts = {}) {
        this.opts = opts;
    }
    async init() {
        if (this.ctx)
            return;
        const Ctor = window.AudioContext || window.webkitAudioContext;
        this.ctx = new Ctor();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = 1;
        this.masterGain.connect(this.ctx.destination);
        if (this.opts.useWorklet && this.ctx.audioWorklet) {
            try {
                // Worklet inline minimal – tu pourras plus tard relier un module WASM ici.
                const workletCode = `
          class MithrilProcessor extends AudioWorkletProcessor {
            // Ici tu peux plus tard mélanger plusieurs flux, appliquer EQ, reverb, etc.
            process(inputs, outputs, parameters) {
              // Pour l'instant : passthrough
              const input = inputs[0];
              const output = outputs[0];
              if (input && output) {
                for (let ch = 0; ch < output.length; ch++) {
                  const inChan = input[ch] || input[0];
                  const outChan = output[ch];
                  if (inChan && outChan) {
                    outChan.set(inChan);
                  }
                }
              }
              return true;
            }
          }
          registerProcessor('mithril-processor', MithrilProcessor);
        `;
                const blob = new Blob([workletCode], { type: "application/javascript" });
                const url = URL.createObjectURL(blob);
                await this.ctx.audioWorklet.addModule(url);
                const node = new AudioWorkletNode(this.ctx, "mithril-processor");
                this.masterGain.disconnect();
                this.masterGain.connect(node).connect(this.ctx.destination);
                this.workletReady = true;
            }
            catch (err) {
                // eslint-disable-next-line no-console
                console.warn("[MithrilAudioEngine] Worklet failed, using fallback", err);
            }
        }
    }
    /**
     * Reprend l'audio (mobile/iOS gate).
     */
    async resume() {
        if (!this.ctx)
            return;
        if (this.ctx.state === "suspended") {
            await this.ctx.resume();
        }
    }
    /**
     * Charge un buffer depuis une URL.
     */
    async loadBuffer(url) {
        if (!this.ctx)
            throw new Error("AudioContext not initialized");
        const res = await fetch(url);
        const arr = await res.arrayBuffer();
        return await this.ctx.decodeAudioData(arr);
    }
    /**
     * Joue une boucle à partir d'une liste d'URLs (ogg + mp3).
     * Prend la première qui marche.
     */
    async playLoopFromUrls(urls, volume = 1) {
        if (!this.ctx || !this.masterGain)
            return null;
        // on essaie les URLs en séquence
        for (const url of urls) {
            try {
                const buf = await this.loadBuffer(url);
                const src = this.ctx.createBufferSource();
                src.buffer = buf;
                src.loop = true;
                const gain = this.ctx.createGain();
                gain.gain.value = volume;
                src.connect(gain).connect(this.masterGain);
                src.start();
                return gain;
            }
            catch {
                // on passe à l'URL suivante
            }
        }
        return null;
    }
    /**
     * Joue un one-shot (non loopé), avec délai, volume, pan, detune.
     */
    async playOneShot(urls, opts = {}) {
        if (!this.ctx || !this.masterGain)
            return;
        const { delayMs = 0, volume = 1, stereoPan = 0, detune = 0 } = opts;
        for (const url of urls) {
            try {
                const buf = await this.loadBuffer(url);
                const src = this.ctx.createBufferSource();
                src.buffer = buf;
                src.loop = false;
                src.detune.value = detune;
                const gain = this.ctx.createGain();
                gain.gain.value = volume;
                const pan = this.ctx.createStereoPanner();
                pan.pan.value = stereoPan;
                src.connect(gain).connect(pan).connect(this.masterGain);
                const startTime = this.ctx.currentTime + delayMs / 1000;
                src.start(startTime);
                break; // premier qui marche
            }
            catch {
                // on continue
            }
        }
    }
    /**
     * Joue un événement de tonnerre complet AAA++ (layers).
     */
    async playThunderEvent(event) {
        const { layers } = event;
        for (const layer of layers) {
            await this.playOneShot(layer.sources, {
                delayMs: layer.delayMs,
                volume: layer.volume,
                stereoPan: layer.stereoPan ?? 0,
                detune: layer.detune ?? 0,
            });
        }
    }
}
/**
 * Helper global (singleton léger si tu veux)
 */
let _engine = null;
export function getMithrilAudioEngine() {
    if (!_engine) {
        _engine = new MithrilAudioEngine({ useWorklet: true });
        // init lazy: le front peut faire `await getMithrilAudioEngine().init()`
    }
    return _engine;
}
