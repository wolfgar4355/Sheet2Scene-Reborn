"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo, useState } from "react";
/* -------------------------------------------------------------------------- */
/* CONTEXT                                                                    */
/* -------------------------------------------------------------------------- */
const TurnContext = createContext(null);
const DEFAULT_PM = 6;
const DEFAULT_AP = 1;
function rollInitiative() {
    return Math.floor(Math.random() * 20) + 1 + Math.random();
}
/* -------------------------------------------------------------------------- */
/* CONTROLLER                                                                 */
/* -------------------------------------------------------------------------- */
export function TurnController({ children }) {
    const [state, setState] = useState({
        active: false,
        round: 1,
        turnIndex: 0,
        actors: [],
        movementPoints: DEFAULT_PM,
        maxMovementPoints: DEFAULT_PM,
        actionPoints: DEFAULT_AP,
        maxActionPoints: DEFAULT_AP,
    });
    /* ---------------------------------- INIT ---------------------------------- */
    const beginTurns = (actors) => {
        const rolled = actors
            .map((a) => ({
            ...a,
            // initiative est "runtime-only" → on le met mais sans typer Actor
            initiative: rollInitiative(),
            hp: a.hp ?? a.maxHp ?? 10,
            maxHp: a.maxHp ?? a.hp ?? 10,
            ac: a.ac ?? 12,
            attackBonus: a.attackBonus ?? 3,
            dmg: a.dmg ?? { dice: 1, sides: 6, bonus: 0 },
            critMult: a.critMult ?? 2,
            buffs: a.buffs ?? [],
            status: a.status ?? [],
        }))
            // sort sur "initiative" runtime
            .sort((a, b) => b.initiative - a.initiative)
            // on nettoie initiative pour rester Actor pur
            .map(({ initiative: _i, ...rest }) => rest);
        setState({
            active: true,
            round: 1,
            turnIndex: 0,
            actors: rolled,
            movementPoints: DEFAULT_PM,
            maxMovementPoints: DEFAULT_PM,
            actionPoints: DEFAULT_AP,
            maxActionPoints: DEFAULT_AP,
        });
    };
    const endTurns = () => {
        setState((s) => ({
            ...s,
            active: false,
            actors: [],
            turnIndex: 0,
            round: 1,
            movementPoints: s.maxMovementPoints,
            actionPoints: s.maxActionPoints,
        }));
    };
    /* ---------------------------------- BUFFS --------------------------------- */
    const addBuff = (actorId, buff) => {
        setState((s) => ({
            ...s,
            actors: s.actors.map((a) => a.id === actorId ? { ...a, buffs: [...(a.buffs ?? []), buff] } : a),
        }));
    };
    const cleanupBuffs = (when) => {
        setState((s) => ({
            ...s,
            actors: s.actors.map((a) => ({
                ...a,
                buffs: (a.buffs ?? []).filter((b) => b.expiresAt !== when),
            })),
        }));
    };
    /* --------------------------------- STATUS --------------------------------- */
    const addStatus = (actorId, status) => {
        setState((s) => ({
            ...s,
            actors: s.actors.map((a) => a.id === actorId ? { ...a, status: [...(a.status ?? []), status] } : a),
        }));
    };
    const clearStatus = (actorId, statusId) => {
        setState((s) => ({
            ...s,
            actors: s.actors.map((a) => a.id === actorId
                ? { ...a, status: (a.status ?? []).filter((st) => st.id !== statusId) }
                : a),
        }));
    };
    /* ---------------------------------- HELPERS -------------------------------- */
    const patchActor = (id, patch) => {
        setState((s) => ({
            ...s,
            actors: s.actors.map((a) => (a.id === id ? { ...a, ...patch } : a)),
        }));
    };
    const setActorPos = (id, pos) => {
        patchActor(id, { pos });
    };
    const damageActor = (id, dmg) => {
        setState((s) => ({
            ...s,
            actors: s.actors.map((a) => {
                if (a.id !== id)
                    return a;
                const hp = Math.max(0, (a.hp ?? a.maxHp ?? 10) - dmg);
                return { ...a, hp };
            }),
        }));
    };
    const clearActorLoot = (id) => {
        patchActor(id, { loot: false });
    };
    const currentActor = () => state.active ? state.actors[state.turnIndex] ?? null : null;
    const isPlayersTurn = () => currentActor()?.kind === "player";
    const spendMovement = (amount = 1) => {
        setState((s) => ({
            ...s,
            movementPoints: Math.max(0, s.movementPoints - amount),
        }));
    };
    const spendAction = (amount = 1) => {
        let ok = false;
        setState((s) => {
            if (s.actionPoints < amount)
                return s;
            ok = true;
            return { ...s, actionPoints: s.actionPoints - amount };
        });
        return ok;
    };
    /* ---------------------------------- TURNS --------------------------------- */
    const nextTurn = () => {
        setState((s) => {
            if (!s.active || s.actors.length === 0)
                return s;
            const next = s.turnIndex + 1;
            // 🔁 NOUVEAU ROUND
            if (next >= s.actors.length) {
                return {
                    ...s,
                    round: s.round + 1,
                    turnIndex: 0,
                    movementPoints: s.maxMovementPoints,
                    actionPoints: s.maxActionPoints,
                    actors: s.actors.map((a) => ({
                        ...a,
                        status: (a.status ?? [])
                            .map((st) => ({ ...st, duration: st.duration - 1 }))
                            .filter((st) => st.duration > 0),
                    })),
                };
            }
            return {
                ...s,
                turnIndex: next,
                movementPoints: s.maxMovementPoints,
                actionPoints: s.maxActionPoints,
            };
        });
        cleanupBuffs("startOfNextTurn");
    };
    const prevTurn = () => {
        setState((s) => {
            if (!s.active || s.actors.length === 0)
                return s;
            const prev = s.turnIndex - 1;
            if (prev < 0) {
                return {
                    ...s,
                    turnIndex: Math.max(0, s.actors.length - 1),
                    movementPoints: s.maxMovementPoints,
                    actionPoints: s.maxActionPoints,
                };
            }
            return {
                ...s,
                turnIndex: prev,
                movementPoints: s.maxMovementPoints,
                actionPoints: s.maxActionPoints,
            };
        });
    };
    const value = useMemo(() => ({
        state,
        beginTurns,
        endTurns,
        nextTurn,
        prevTurn,
        setActorPos,
        patchActor,
        addBuff,
        cleanupBuffs,
        addStatus,
        clearStatus,
        isPlayersTurn,
        currentActor,
        spendMovement,
        spendAction,
        damageActor,
        clearActorLoot,
    }), [state]);
    return _jsx(TurnContext.Provider, { value: value, children: children });
}
/* -------------------------------------------------------------------------- */
/* HOOK                                                                       */
/* -------------------------------------------------------------------------- */
export function useTurns() {
    const ctx = useContext(TurnContext);
    if (!ctx)
        throw new Error("useTurns must be used inside <TurnController>");
    return ctx;
}
/* -------------------------------------------------------------------------- */
/* STATUS HELPERS (B4.5) — ✅ HORS du composant (plus de TS1184)              */
/* -------------------------------------------------------------------------- */
export function hasStatus(actor, type) {
    if (!actor)
        return false;
    return (actor.status ?? []).some((s) => s.type === type);
}
export function getStatus(actor, type) {
    return (actor?.status ?? []).find((s) => s.type === type);
}
export function isImmobilized(actor) {
    return hasStatus(actor, "immobilized") || hasStatus(actor, "rooted");
}
export function canMoveActor(actor) {
    if (!actor)
        return false;
    if (hasStatus(actor, "stunned"))
        return false;
    if (isImmobilized(actor))
        return false;
    return true;
}
export function canActActor(actor) {
    if (!actor)
        return false;
    if (hasStatus(actor, "stunned"))
        return false;
    return true;
}
