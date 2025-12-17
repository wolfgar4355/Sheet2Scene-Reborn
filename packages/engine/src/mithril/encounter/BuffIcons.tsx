"use client";

import type { Actor, Buff } from "./TurnController";

function buffLabel(b: Buff) {
  switch (b.expiresAt) {
    case "startOfNextTurn":
      return "Expire au prochain tour";
    case "endOfTurn":
      return "Expire fin du tour";
    case "endOfCombat":
      return "Expire fin du combat";
    default:
      return "";
  }
}

function buffIcon(b: Buff) {
  switch (b.id) {
    case "guard":
      return "🛡️";
    case "bless":
      return "✨";
    case "poison":
      return "☠️";
    default:
      return "🔹";
  }
}

export default function BuffIcons({
  actor,
  x,
  y,
}: {
  actor: Actor;
  x: number;
  y: number;
}) {
  if (!actor.buffs || actor.buffs.length === 0) return null;

  return (
    <div
      className="absolute flex gap-1"
      style={{
        left: x,
        top: y - 46,
        transform: "translateX(-50%)",
        zIndex: 200,
      }}
    >
      {actor.buffs.map((b) => (
        <div
          key={b.id}
          title={`${b.label} (${b.stat} ${b.value > 0 ? "+" : ""}${b.value})\n${buffLabel(b)}`}
          style={{
            width: 20,
            height: 20,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 6,
            background: "rgba(20,20,20,0.7)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
            cursor: "help",
          }}
        >
          {buffIcon(b)}
        </div>
      ))}
    </div>
  );
}
