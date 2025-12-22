// src/mithril/LightningArcs.tsx
"use client";

import { useScene } from "./SceneController";

/**
 * ⚡ LightningArcs — rendu canvas des arcs d’éclairs
 * - Couleur dynamique selon lumière ambiante
 * - Intensité liée à la météo
 * - Flash + fade-out cinématique
 */
class LightningArcs {
  static canvas: HTMLCanvasElement | null = null;
  static ctx: CanvasRenderingContext2D | null = null;

  // ---------------------------------------------------------------------------
  // Utils
  // ---------------------------------------------------------------------------

  /** Couleur dynamique selon luminosité (nuit → bleu) */
  private static computeColor(lightLevel: number): string {
    const blueTint = 180 + Math.floor((1 - lightLevel) * 60);
    return `rgba(${blueTint}, ${blueTint}, 255, 0.95)`;
  }

  // ---------------------------------------------------------------------------
  // Lifecycle
  // ---------------------------------------------------------------------------

  /** Initialise le canvas dans un parent donné */
  static init(parent: HTMLElement, lightLevel = 1) {
    if (this.canvas) return;

    const canvas = document.createElement("canvas");
    canvas.className =
      "pointer-events-none absolute inset-0 z-[70] mix-blend-screen";
    canvas.style.filter =
      "blur(1.2px) drop-shadow(0 0 8px rgba(255,255,255,0.9))";

    parent.appendChild(canvas);

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.resize();

    if (this.ctx) {
      this.ctx.strokeStyle = this.computeColor(lightLevel);
    }

    window.addEventListener("resize", this.resize);
  }

  /** Resize dynamique */
  static resize = () => {
    if (!this.canvas || !this.canvas.parentElement) return;

    this.canvas.width = this.canvas.parentElement.clientWidth;
    this.canvas.height = this.canvas.parentElement.clientHeight;
  };

  // ---------------------------------------------------------------------------
  // API publique
  // ---------------------------------------------------------------------------

  /** Spawn d’un arc directionnel */
  static spawn(
    direction: "left" | "center" | "right",
    scene: ReturnType<typeof useScene>
  ) {
    if (!this.canvas || !this.ctx) return;

    const w = this.canvas.width;
    const h = this.canvas.height;

    const startX =
      direction === "left"
        ? w * 0.2
        : direction === "right"
        ? w * 0.8
        : w * 0.5;

    const color = this.computeColor(scene.lightLevel);

this.drawArc(startX, -30, h, color, scene.lightLevel);
  }

  /** Spawn aléatoire (helper) */
  static spawnRandom(scene: ReturnType<typeof useScene>) {
    const dirs = ["left", "center", "right"] as const;
    this.spawn(dirs[Math.floor(Math.random() * dirs.length)], scene);
  }

  // ---------------------------------------------------------------------------
  // Rendu
  // ---------------------------------------------------------------------------

  private static drawArc(
    startX: number,
    yStart: number,
    maxHeight: number,
    color: string,
    intensity: number
  ) {
    if (!this.ctx || !this.canvas) return;

    const ctx = this.ctx;

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.globalAlpha = 1;

    ctx.strokeStyle = color;
    ctx.lineWidth = 2 + intensity * 1.5;

    let x = startX;
    let y = yStart;

    ctx.beginPath();
    ctx.moveTo(x, y);

    const steps = 12 + Math.floor(intensity * 6);

    for (let i = 0; i < steps; i++) {
      x += (Math.random() * 200 - 100) * (0.7 + intensity * 0.3);
      y += 60 + Math.random() * 50;

      ctx.lineTo(x, y);
    }

    ctx.stroke();

    this.flash(intensity);
    this.fadeOut();
  }

  /** Flash blanc global très bref */
  private static flash(intensity: number) {
    if (!this.canvas || !this.canvas.parentElement) return;

    const flash = document.createElement("div");
    flash.className =
      "pointer-events-none absolute inset-0 z-[65] mix-blend-screen";
    flash.style.background = `rgba(255,255,255,${0.1 + intensity * 0.3})`;

    this.canvas.parentElement.appendChild(flash);

    flash
      .animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 180,
        easing: "ease-out",
      })
      .onfinish = () => flash.remove();
  }

  /** Fade-out progressif du canvas */
  private static fadeOut() {
    if (!this.ctx || !this.canvas) return;

    const ctx = this.ctx;
    let opacity = 1;

    const tick = () => {
      opacity -= 0.06;

      if (opacity <= 0) {
        ctx.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
        ctx.globalAlpha = 1;
        return;
      }

      ctx.globalAlpha = opacity;
      requestAnimationFrame(tick);
    };

    tick();
  }
}

export default LightningArcs;
