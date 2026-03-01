// packages/engine/src/ambient/audioBus.ts
// --------------------------------------------------
// Mithril Engine v2 — Simple Audio Bus (2D)
// --------------------------------------------------

type LoopMap = Map<string, HTMLAudioElement>;

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof Audio !== "undefined";
}

/**
 * Bus audio ultra-simple pour:
 * - boucles d'ambiance (weather, world, etc.)
 * - one-shots (sorts, UI, impacts…)
 */
class SimpleAudioBus {
  private loops: LoopMap = new Map();

  playLoop(id: string, url: string, volume: number = 1): void {
    if (!isBrowser()) return;

    // Si déjà en train de jouer ce loop, on ne recrée pas
    const existing = this.loops.get(id);
    if (existing) {
      existing.volume = volume;
      return;
    }

    const audio = new Audio(url);
    audio.loop = true;
    audio.volume = volume;
    audio.load();
    void audio.play().catch(() => {
      // Laisser le navigateur gérer le "user interaction needed"
    });

    this.loops.set(id, audio);
  }

  stopLoop(id: string): void {
    const audio = this.loops.get(id);
    if (!audio) return;
    try {
      audio.pause();
      audio.currentTime = 0;
    } catch {
      // ignore
    }
    this.loops.delete(id);
  }

  fadeLoop(id: string, targetVolume: number, durationMs: number = 800): void {
    const audio = this.loops.get(id);
    if (!audio) return;

    const startVol = audio.volume;
    const delta = targetVolume - startVol;
    const steps = 30;
    const stepTime = durationMs / steps;
    let currentStep = 0;

    const tick = () => {
      currentStep++;
      const t = currentStep / steps;
      const v = startVol + delta * t;
      audio.volume = Math.max(0, Math.min(1, v));
      if (currentStep < steps) {
        window.setTimeout(tick, stepTime);
      } else if (targetVolume <= 0) {
        this.stopLoop(id);
      }
    };

    tick();
  }

  playOneShot(url: string, volume: number = 1): void {
    if (!isBrowser()) return;
    const audio = new Audio(url);
    audio.volume = volume;
    audio.load();
    void audio.play().catch(() => {
      // ignore: navigateur bloquera tant que pas de gesture
    });
  }

  stopAll(): void {
    for (const [id, audio] of this.loops.entries()) {
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch {
        // ignore
      }
      this.loops.delete(id);
    }
  }
}

export const audioBus = new SimpleAudioBus();
