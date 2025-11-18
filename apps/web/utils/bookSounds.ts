// apps/web/utils/bookSounds.ts
type ClipName = "open" | "flip" | "close";

const CLIPS: Record<ClipName, string> = {
  open:  "/sounds/book-open.mp3",
  flip:  "/sounds/page-flip.mp3",
  close: "/sounds/book-close.mp3",
};

class BookAudioManager {
  private buffers = new Map<ClipName, AudioBuffer>();
  private ctx?: AudioContext;

  private ensureCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AC =
        (window as any).AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AC();
    }
  }

  // Réveille le contexte si suspendu (cas fréquent sur mobile)
  private async ensureActive() {
    this.ensureCtx();
    if (this.ctx && this.ctx.state === "suspended") {
      try { await this.ctx.resume(); } catch {}
    }
  }

  private async preload() {
    await this.ensureActive();
    if (!this.ctx) return;

    await Promise.all(
      (Object.keys(CLIPS) as ClipName[]).map(async (name) => {
        if (this.buffers.has(name)) return;
        const res = await fetch(CLIPS[name]);
        const arr = await res.arrayBuffer();
        const buf = await this.ctx!.decodeAudioData(arr);
        this.buffers.set(name, buf);
      })
    );
  }

  private playBuffer(name: ClipName, volume = 0.6) {
    if (!this.ctx) return;
    const buf = this.buffers.get(name);
    if (!buf) return;

    const src = this.ctx.createBufferSource();
    src.buffer = buf;

    const gain = this.ctx.createGain();
    gain.gain.value = volume;

    src.connect(gain).connect(this.ctx.destination);
    src.start();
  }

  async open(volume = 0.6)  { await this.preload(); this.playBuffer("open",  volume); }
  async flip(volume = 0.35) { await this.preload(); this.playBuffer("flip",  volume); }
  async close(volume = 0.6) { await this.preload(); this.playBuffer("close", volume); }
}

export const bookAudio = new BookAudioManager();
export default bookAudio;
