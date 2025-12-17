"use client";
class LightningArcs {
    static canvas = null;
    static init() {
        if (this.canvas)
            return;
        this.canvas = document.createElement("canvas");
        this.canvas.className = "absolute inset-0 pointer-events-none z-[75]";
        document.body.appendChild(this.canvas);
    }
    static spawn(direction) {
        this.init();
        const ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        const startX = direction === "left" ? 50 :
            direction === "right" ? window.innerWidth - 50 :
                window.innerWidth / 2;
        const startY = 0;
        drawArc(ctx, startX, startY);
    }
}
function drawArc(ctx, x, y) {
    let points = [{ x, y }];
    for (let i = 0; i < 12; i++) {
        points.push({
            x: points[i].x + (Math.random() * 200 - 100),
            y: points[i].y + 80 + Math.random() * 40
        });
    }
    ctx.strokeStyle = "rgba(255,255,255,0.9)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let p of points) {
        ctx.lineTo(p.x, p.y);
    }
    ctx.stroke();
    setTimeout(() => ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height), 120);
}
export default LightningArcs;
