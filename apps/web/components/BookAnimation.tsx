"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// -----------------------------------------------------------
// EVENTS PUBLICS POUR LE MOTEUR
// -----------------------------------------------------------
const DEFAULT_CADENCE = 110;

type BookEvent = {
  mode: "openFlip" | "close" | "pageTurn" | "intro";
  flips?: number;
  cadenceMs?: number;
};

// Animation complète avec X flips
export function triggerBookAnimation(flips: number, cadenceMs = DEFAULT_CADENCE) {
  window.dispatchEvent(
    new CustomEvent("book:animate", {
      detail: { mode: "openFlip", flips, cadenceMs } as BookEvent,
    })
  );
}

// Fermer le livre
export function triggerBookClose() {
  window.dispatchEvent(
    new CustomEvent("book:animate", {
      detail: { mode: "close" } as BookEvent,
    })
  );
}

// 1 seul flip → changer de page
export function triggerPageTurn() {
  window.dispatchEvent(
    new CustomEvent("book:animate", {
      detail: { mode: "pageTurn", flips: 1, cadenceMs: 180 } as BookEvent,
    })
  );
}

// Animation complète d’introduction
export function triggerBookIntro() {
  window.dispatchEvent(
    new CustomEvent("book:animate", {
      detail: { mode: "intro", flips: 2, cadenceMs: 140 } as BookEvent,
    })
  );
}

// -----------------------------------------------------------
// COMPONENT
// -----------------------------------------------------------
export default function BookAnimation() {
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState<BookEvent["mode"]>("openFlip");
  const [flips, setFlips] = useState(0);
  const [cadence, setCadence] = useState(DEFAULT_CADENCE);
  const [dust, setDust] = useState(false);

  const blockRef = useRef(false);
  const tRef = useRef<number | null>(null);

  function playFlipSound() {
    const audio = new Audio("/sounds/sound-page-flip.mp3");
    audio.volume = 0.45;
    audio.play().catch(() => {});
  }

  // ---------------------------------------------------------
  // EVENTS
  // ---------------------------------------------------------
  useEffect(() => {
    const onAnim = (e: any) => {
      if (blockRef.current) return;
      blockRef.current = true;

      const {
        mode = "openFlip",
        flips = 6,
        cadenceMs = DEFAULT_CADENCE,
      } = (e.detail || {}) as BookEvent;

      setMode(mode);
      setDust(false);
      setFlips(flips);
      setCadence(cadenceMs);
      setActive(true);

      playFlipSound();

      const total =
        mode === "close"
          ? 1070
          : mode === "pageTurn"
          ? 450
          : 700 + flips * cadenceMs + 600;

      if (tRef.current) clearTimeout(tRef.current);
      tRef.current = window.setTimeout(() => {
        setActive(false);
        blockRef.current = false;
      }, total);
    };

    window.addEventListener("book:animate", onAnim);
    return () => window.removeEventListener("book:animate", onAnim);
  }, []);

  useEffect(() => {
    if (!active || mode !== "close") return;
    const t = window.setTimeout(() => setDust(true), 540);
    return () => clearTimeout(t);
  }, [active, mode]);

  const pages = useMemo(() => Array.from({ length: flips }), [flips]);

  if (!active) return null;

  return (
    <>
      <style jsx global>{`
        @keyframes bookOpen {
          0% { transform: scale(.85) rotate(-3deg); opacity: 0; }
          60% { transform: scale(1.02); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes bookClose {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(.88) rotate(2deg); opacity: 0; }
        }
        @keyframes pageFlip {
          0% { transform: rotateY(0deg); opacity: 0; }
          50% { transform: rotateY(-160deg); opacity: 1; }
          100% { transform: rotateY(-180deg); opacity: 0; }
        }
        @keyframes dustRise {
          from { opacity: 0; transform: translate(-50%, 4px) scale(.8); }
          to { opacity: 0; transform: translate(-50%, -22px) scale(1.1); }
        }
        .book-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: grid;
          place-items: center;
          pointer-events: none;
          background: radial-gradient(transparent, rgba(0,0,0,.35));
        }
        .book {
          width: min(560px, 86vw);
          height: min(360px, 56vw);
          perspective: 2000px;
          animation: var(--book-anim);
        }
        .cover, .pages, .page {
          position: absolute;
          inset: 0;
          border-radius: 14px;
        }
        .cover { background: linear-gradient(135deg,#6b4e2e,#4c321a); }
        .pages { background: #fdf8ef; inset: 6% 6% 6% 10%; }
        .page {
          background: white;
          inset: 6% 6% 6% 10%;
          transform-origin: left center;
          backface-visibility: hidden;
        }
        .dust { position: absolute; left: 50%; bottom: 18%; }
        .speck {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: radial-gradient(#ffe9a8,#cda86f);
          animation: dustRise .7s ease-out forwards;
        }
      `}</style>

      <div className="book-overlay">
        <div
          className="book"
          style={{
            ["--book-anim" as any]:
              mode === "close"
                ? "bookClose .62s cubic-bezier(.3,.01,.2,1) both"
                : "bookOpen .7s ease-out both",
          }}
        >
          <div className="cover" />
          <div className="pages" />

          {["openFlip", "pageTurn", "intro"].includes(mode) &&
            pages.map((_, i) => (
              <div
                key={i}
                className="page"
                style={{
                  animation: `pageFlip ${Math.max(
                    0.32,
                    cadence / 1000
                  )}s cubic-bezier(.3,.01,.2,1) ${
                    i * (cadence / 1000)
                  }s forwards`,
                }}
              />
            ))}

          {mode === "close" && dust && (
            <div className="dust">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="speck"
                  style={{ left: `${(i - 2.5) * 6}px`, animationDelay: `${i * 60}ms` }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
