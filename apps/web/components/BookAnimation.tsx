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

// Animation complète d’introduction : cover → intro → toc
export function triggerBookIntro() {
  window.dispatchEvent(
    new CustomEvent("book:animate", {
      detail: { mode: "intro", flips: 2, cadenceMs: 140 } as BookEvent,
    })
  );
}

// -----------------------------------------------------------
// BOOKANIMATION COMPONENT
// -----------------------------------------------------------
export default function BookAnimation() {
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState<BookEvent["mode"]>("openFlip");
  const [flips, setFlips] = useState(0);
  const [cadence, setCadence] = useState(DEFAULT_CADENCE);
  const [dust, setDust] = useState(false);
  const blockRef = useRef(false); // Anti-spam d'événements
  const tRef = useRef<number | null>(null);

  // ---------------------------------------------------------
  // LECTURE SONORE SYNCHRONE
  // ---------------------------------------------------------
  function playFlipSound() {
    const audio = new Audio("/sounds/sound-page-flip.mp3");
    audio.volume = 0.45;
    audio.play().catch(() => {});
  }

  // ---------------------------------------------------------
  // RÉCEPTION DES EVENTS
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

      // Déclenche son
      playFlipSound();

      // Durée selon type
      const total =
        mode === "close"
          ? 620 + 450
          : mode === "pageTurn"
          ? 450
          : 700 + flips * cadenceMs + 600;

      if (tRef.current) window.clearTimeout(tRef.current);
      tRef.current = window.setTimeout(() => {
        setActive(false);
        blockRef.current = false;
      }, total);
    };

    window.addEventListener("book:animate", onAnim);
    return () => window.removeEventListener("book:animate", onAnim);
  }, []);

  // ---------------------------------------------------------
  // DUST FX RUNIQUES (bonus)
  // ---------------------------------------------------------
  useEffect(() => {
    if (!active || mode !== "close") return;

    const t = window.setTimeout(() => setDust(true), 540);
    return () => window.clearTimeout(t);
  }, [active, mode]);

  // Pages dynamiques
  const pages = useMemo(() => Array.from({ length: flips }), [flips]);

  // ---------------------------------------------------------
  // RENDER
  // ---------------------------------------------------------
  if (!active) return null;

  return (
    <>
      {/* STYLE GLOBAL */}
      <style jsx global>{`
        @keyframes bookOpen {
          0% {
            transform: scale(0.85) rotate(-3deg);
            opacity: 0;
          }
          60% {
            transform: scale(1.02) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes pageFlip {
          0% {
            transform: rotateY(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: rotateY(-160deg);
            opacity: 1;
          }
          100% {
            transform: rotateY(-180deg);
            opacity: 0;
          }
        }

        @keyframes bookClose {
          0% {
            transform: scale(1) rotate(0);
            opacity: 1;
          }
          45% {
            transform: scale(1.02) rotate(0.8deg);
            opacity: 1;
          }
          100% {
            transform: scale(0.88) rotate(2.4deg);
            opacity: 0;
          }
        }

        @keyframes dustRise {
          0% {
            opacity: 0;
            transform: translate(-50%, 4px) scale(0.8);
          }
          20% {
            opacity: 0.45;
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -22px) scale(1.1);
          }
        }

        .book-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: grid;
          place-items: center;
          pointer-events: none;
          background: radial-gradient(
            transparent,
            rgba(0, 0, 0, 0.35)
          );
        }

        .book {
          width: min(560px, 86vw);
          height: min(360px, 56vw);
          position: relative;
          perspective: 2000px;
          filter: drop-shadow(0 18px 40px rgba(0, 0, 0, 0.45));
          animation: var(--book-anim);
        }

        .cover,
        .pages,
        .page {
          position: absolute;
          inset: 0;
          border-radius: 14px;
        }

        .cover {
          background: linear-gradient(135deg, #6b4e2e, #4c321a);
          border: 2px solid rgba(255, 255, 255, 0.08);
        }

        .pages {
          left: 10%;
          right: 6%;
          top: 6%;
          bottom: 6%;
          background: #fdf8ef;
          border-radius: 10px;
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
        }

        .page {
          left: 10%;
          right: 6%;
          top: 6%;
          bottom: 6%;
          background: white;
          transform-origin: left center;
          border-radius: 10px;
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);
          backface-visibility: hidden;
        }

        .dust {
          position: absolute;
          left: 50%;
          bottom: 18%;
          width: 0;
          height: 0;
          pointer-events: none;
        }

        .speck {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: radial-gradient(#ffe9a8, #cda86f);
          opacity: 0;
          animation: dustRise 700ms ease-out forwards;
        }
      `}</style>

      {/* --------------------------------------------------------- */}
      {/* ANIMATION */}
      {/* --------------------------------------------------------- */}
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

          {/* PAGE TURNING */}
          {["openFlip", "pageTurn", "intro"].includes(mode) &&
            pages.map((_, i) => (
              <div
                key={i}
                className="page"
                style={{
                  animation: `pageFlip ${
                    Math.max(0.32, cadence / 1000)
                  }s cubic-bezier(.3,.01,.2,1) ${
                    i * (cadence / 1000)
                  }s forwards`,
                }}
              />
            ))}

          {/* DUST FX */}
          {mode === "close" && dust && (
            <div className="dust">
              {Array.from({ length: 6 }).map((_, i) => {
                const spread = (i - 2.5) * 6;
                return (
                  <span
                    key={i}
                    className="speck"
                    style={{
                      left: `${spread}px`,
                      animationDelay: `${i * 60}ms`,
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
