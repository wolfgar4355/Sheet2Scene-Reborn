"use client";

import { useState, useMemo } from "react";
import { useTurns } from "./TurnController";
import { useCombatLog } from "./useCombatLog";

export function useAbilities() {
  const turns = useTurns();
  const log = useCombatLog();
  const [selected, setSelected] = useState<"basic" | "powerStrike">("basic");

  const abilities = useMemo(
    () => [
      { id: "basic", name: "Attaque", range: 1 },
      { id: "powerStrike", name: "Power Strike", range: 1 },
      { id: "guard", name: "Garde", self: true },
    ],
    []
  );

  const activateSelf = (id: string) => {
    const actor = turns.currentActor();
    if (!actor || actor.kind !== "player") return;

    if (!turns.spendAction(1)) {
      log.push("⛔ Plus d’action.");
      return;
    }

    if (id === "guard") {
      turns.addBuff(actor.id, {
        id: "guard",
        label: "Garde",
        stat: "ac",
        value: 2,
        expiresAt: "startOfNextTurn",
      });

      log.push("🛡️ Garde active (+2 AC jusqu’au prochain tour)");
    }
  };

  return {
    abilities,
    selected,
    setSelected,
    activateSelf,
  };
}
