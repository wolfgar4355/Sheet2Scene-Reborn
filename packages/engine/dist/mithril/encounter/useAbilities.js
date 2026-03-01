"use client";
import { useState, useMemo } from "react";
import { useTurns } from "./TurnController";
import { useCombatLog } from "./useCombatLog";
/* -------------------------------------------------------------------------- */
/* HOOK                                                                       */
/* -------------------------------------------------------------------------- */
export function useAbilities() {
    const turns = useTurns();
    const log = useCombatLog();
    const [selected, setSelected] = useState("basic");
    /* ---------------------------- REGISTRE ---------------------------------- */
    const abilities = useMemo(() => [
        {
            id: "basic",
            name: "Attaque",
            desc: "Attaque de base au corps à corps.",
            requiresTarget: true,
            range: 1,
        },
        {
            id: "powerStrike",
            name: "Power Strike",
            desc: "Attaque puissante infligeant plus de dégâts.",
            requiresTarget: true,
            range: 1,
        },
        {
            id: "guard",
            name: "Garde",
            desc: "Augmente l’armure jusqu’au prochain tour.",
            requiresTarget: false,
            self: true,
        },
    ], []);
    /* ---------------------------- ACTIVATION -------------------------------- */
    const activateSelf = (id) => {
        const actor = turns.currentActor();
        if (!actor || actor.kind !== "player")
            return;
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
    /* ------------------------------------------------------------------------ */
    return {
        abilities,
        selected,
        setSelected,
        activateSelf,
    };
}
