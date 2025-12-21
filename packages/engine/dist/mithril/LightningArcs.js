"use client";
class LightningArcs {
    static canvas = null;
    static ctx = null;
    /** Couleur dynamique selon phase du jour */
    static computeColor(lightLevel) {
        // Nuit = arcs bleutés
        const blueTint = 180 + Math.floor((1 - lightLevel) * 60);
        return `rgba(${blueTint}, ${blueTint}, 255, 0.95)`;
    }
    /** Initialise le canvas dans un layer du moteur */
    static init(parent, lightLevel = 1) {
        if (this.canvas)
            return;
        const canvas = document.createElement("canvas");
        canvas.className =
            "pointer-events-none absolute inset-0 z-[70] mix-blend-screen";
        canvas.style.filter =
            "blur(1.2px) drop-shadow(0 0 8px rgba(255,255,255,0.9))";
        parent.appendChild(canvas);
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.resize();
        this.ctx.strokeStyle = this.computeColor(lightLevel);
        window.addEventListener("resize", () => this.resize());
    }
    /** Resize dynamique */
    static resize() {
        if (!this.canvas)
            return;
        this.canvas.width = this.canvas.parentElement.clientWidth;
        this.canvas.height = this.canvas.parentElement.clientHeight;
    }
    /** API publique : spawn d’un arc */
    static spawn(direction, scene) {
        if (!this.canvas || !this.ctx)
            return;
        const w = this.canvas.width;
        const h = this.canvas.height;
        const startX = direction === "left"
            ? w * 0.20
            : direction === "right"
                ? w * 0.80
                : w * 0.50;
        const color = this.computeColor(scene.lightLevel);
        this.drawArc(startX, -30, h, color, scene.intensity);
    }
    /** Arc vers un point aléatoire (utility) */
    static spawnRandom(scene) {
        const dirs = ["left", "center", "right"];
        this.spawn(dirs[Math.floor(Math.random() * dirs.length)], scene);
    }
    /** Dessin amélioré AAA */
    static drawArc(startX, yStart, maxHeight, color, intensity) {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.strokeStyle = color;
        ctx.lineWidth = 2 + intensity * 1.5;
        let x = startX;
        let y = yStart;
        ctx.beginPath();
        ctx.moveTo(x, y);
        // fractale profonde (plus d'étapes pour intensité élevée)
        const steps = 12 + Math.floor(intensity * 6);
        for (let i = 0; i < steps; i++) {
            x += (Math.random() * 200 - 100) * (0.7 + intensity * 0.3);
            y += 60 + Math.random() * 50;
            ctx.lineTo(x, y);
        }
        ctx.stroke();
        // flash global synchronisé
        this.flash(intensity);
        // fade-out progressif de l'arc
        this.fadeOut();
    }
    /** Flash global très rapide */
    static flash(intensity) {
        if (!this.canvas)
            return;
        const flash = document.createElement("div");
        flash.className =
            "pointer-events-none absolute inset-0 z-[65] mix-blend-screen";
        flash.style.background = `rgba(255,255,255,${0.1 + intensity * 0.3})`;
        this.canvas.parentElement.appendChild(flash);
        flash.animate([
            { opacity: 1 },
            { opacity: 0 }
        ], {
            duration: 180,
            easing: "ease-out",
        }).onfinish = () => flash.remove();
    }
    /** Fade-out progressif du canvas */
    static fadeOut() {
        const ctx = this.ctx;
        let opacity = 1;
        const tick = () => {
            opacity -= 0.06;
            if (opacity <= 0) {
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
