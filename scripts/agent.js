// scripts/agent.js
import fs from "fs";
import path from "path";

const evPath = process.env.GITHUB_EVENT_PATH;
const ev = evPath && fs.existsSync(evPath) ? JSON.parse(fs.readFileSync(evPath, "utf8")) : {};
const body = ev?.issue?.body || "";

// Répertoire app (monorepo: apps/web/…)
const APP = "apps/web";

// Tâche simple: "home-hero-v1"  => applique ton accueil (fond study + lutrin centré + CTA)
const wantsHome = /home-hero-v1/i.test(body) || /task:\s*home-hero-v1/i.test(body);

if (!wantsHome) {
  console.log("No matching task in issue body (expect 'home-hero-v1'). Nothing to do.");
  process.exit(0);
}

// 1) page.tsx
const pagePath = path.join(APP, "app/page.tsx");
const pageCode = `\"use client\";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* FOND: study */}
      <div className="bg-hall" aria-hidden />

      {/* voile léger */}
      <div className="absolute inset-0 bg-black/14 pointer-events-none" />

      {/* LUTRIN CENTRÉ */}
      <section className="home-hero relative mx-auto w-full max-w-[720px] md:max-w-[860px] pt-[6svh] pb-[22svh]">
        <img
          src="/images/lectern-clear.png"
          alt=""
          className="lectern-img absolute left-1/2 -translate-x-1/2 bottom-[18svh] w-[min(560px,92vw)]"
          draggable={false}
        />
      </section>

      {/* CTA */}
      <nav className="fixed left-1/2 -translate-x-1/2 z-20 flex gap-3 bottom-[calc(env(safe-area-inset-bottom)+16px)]">
        <a href="/create" className="rounded-2xl px-4 py-3 bg-emerald-600/90 text-white font-semibold shadow-lg backdrop-blur">
          Créer une scène
        </a>
        <a href="/demo" className="rounded-2xl px-4 py-3 bg-neutral-900/85 text-white font-semibold shadow-lg backdrop-blur">
          Voir la démo
        </a>
      </nav>
    </main>
  );
}
`;
fs.mkdirSync(path.dirname(pagePath), { recursive: true });
fs.writeFileSync(pagePath, pageCode, "utf8");
console.log("Wrote", pagePath);

// 2) globals.css (append override si absent)
const cssPath = path.join(APP, "app/globals.css");
let css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, "utf8") : "";
const marker = "/* ==== S2S OVERRIDES — HOME ==== */";
if (!css.includes(marker)) {
  css += `
${marker}
html, body { background:#0b0b10 !important; }
.bg-hall{ position:fixed; inset:0; background-image:url('/images/bg-hall.png');
  background-size:cover; background-position:50% 50%; background-repeat:no-repeat; z-index:-1; }
.home-hero{ min-height:100svh; }
.home-hero::before,.home-hero::after,.book-wrap::before,.book-wrap::after{
  display:none!important; border:0!important; box-shadow:none!important;
}
.lectern-img{
  display:block; pointer-events:none; user-select:none;
  -webkit-mask-image:radial-gradient(ellipse at center,#000 78%,transparent 102%);
          mask-image:radial-gradient(ellipse at center,#000 78%,transparent 102%);
  filter:drop-shadow(0 16px 26px rgba(0,0,0,.45));
}
`;
  fs.writeFileSync(cssPath, css, "utf8");
  console.log("Patched", cssPath);
} else {
  console.log("Overrides already present in", cssPath);
}

console.log("Done.");
