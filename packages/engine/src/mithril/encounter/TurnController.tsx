"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import type { Vec2 } from "../iso/isoMath";

/* -------------------------------------------------------------------------- */
/* TYPES                                                                      */
/* -------------------------------------------------------------------------- */

export type ActorKind = "player" | "enemy" | "npc";

/* ---------------------------- BUFFS (STATS) ------------------------------- */

export type BuffExpire =
  | "startOfNextTurn"
  | "endOfTurn"
  | "endOfCombat";

export type Buff = {
  id: string;
  label: string;
  stat: "ac" | "attackBonus" | "damage";
  value: number;
  expiresAt: BuffExpire;
};

/* ---------------------------- STATUS (B4) --------------------------------- */

export type StatusEffect =
  | "stunned"
  | "immobilized"
  | "rooted"
  | "slowed"
  | "haste"
  | "disengaged"
  | "taunted"
  | "guarding";

export type TimedStatus = {
  id: string;
  type: StatusEffect;
  duration: number; // rounds
  sourceId?: string;
};

/* ------------------------------ ACTOR ------------------------------------- */

export type Actor = {
  id: string;
  name: string;
  kind: ActorKind;
  pos: Vec2;

  hp?: number;
  maxHp?: number;
  ac?: number;
  attackBonus?: number;
  dmg?: { dice: number; sides: number; bonus?: number };
  critMult?: number;

  xpValue?: number;
  loot?: boolean;

  buffs?: Buff[];
  status?: TimedStatus[]; // ✅ B4
};

/* ------------------------------ TURN STATE -------------------------------- */

export type TurnState = {
  active: boolean;
  round: number;
  turnIndex: number;
  actors: Actor[];

  movementPoints: number;
  maxMovementPoints: number;

  actionPoints: number;
  maxActionPoints: number;
};

type TurnContextValue = {
  state: TurnState;

  beginTurns: (actors: Actor[]) => void;
  endTurns: () => void;

  nextTurn: () => void;
  prevTurn: () => void;

  setActorPos: (id: string, pos: Vec2) => void;
  patchActor: (id: string, patch: Partial<Actor>) => void;

  addBuff: (actorId: string, buff: Buff) => void;
  cleanupBuffs: (when: BuffExpire) => void;

  addStatus: (actorId: string, status: TimedStatus) => void;
  clearStatus: (actorId: string, statusId: string) => void;

  isPlayersTurn: () => boolean;
  currentActor: () => Actor | null;

  spendMovement: (amount?: number) => void;
  spendAction: (amount?: number) => boolean;
};

/* -------------------------------------------------------------------------- */
/* CONTEXT                                                                    */
/* -------------------------------------------------------------------------- */

const TurnContext = createContext<TurnContextValue | null>(null);

const DEFAULT_PM = 6;
const DEFAULT_AP = 1;

function rollInitiative() {
  return Math.floor(Math.random() * 20) + 1 + Math.random();
}

/* -------------------------------------------------------------------------- */
/* CONTROLLER                                                                 */
/* -------------------------------------------------------------------------- */

export function TurnController({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<TurnState>({
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

  const beginTurns = (actors: Actor[]) => {
    const rolled = actors
      .map((a) => ({
        ...a,
        initiative: rollInitiative(),
        hp: a.hp ?? a.maxHp ?? 10,
        maxHp: a.maxHp ?? a.hp ?? 10,
        ac: a.ac ?? 12,
        attackBonus: a.attackBonus ?? 3,
        dmg: a.dmg ?? { dice: 1, sides: 6, bonus: 0 },
        critMult: a.critMult ?? 2,
        buffs: [],
        status: [], // ✅ B4
      }))
      .sort((a, b) => (b as any).initiative - (a as any).initiative);

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
    }));
  };

  /* ---------------------------------- BUFFS --------------------------------- */

  const addBuff = (actorId: string, buff: Buff) => {
    setState((s) => ({
      ...s,
      actors: s.actors.map((a) =>
        a.id === actorId
          ? { ...a, buffs: [...(a.buffs ?? []), buff] }
          : a
      ),
    }));
  };

  const cleanupBuffs = (when: BuffExpire) => {
    setState((s) => ({
      ...s,
      actors: s.actors.map((a) => ({
        ...a,
        buffs: (a.buffs ?? []).filter((b) => b.expiresAt !== when),
      })),
    }));
  };

  /* --------------------------------- STATUS --------------------------------- */

  const addStatus = (actorId: string, status: TimedStatus) => {
    setState((s) => ({
      ...s,
      actors: s.actors.map((a) =>
        a.id === actorId
          ? { ...a, status: [...(a.status ?? []), status] }
          : a
      ),
    }));
  };

  const clearStatus = (actorId: string, statusId: string) => {
    setState((s) => ({
      ...s,
      actors: s.actors.map((a) =>
        a.id === actorId
          ? {
              ...a,
              status: (a.status ?? []).filter((s) => s.id !== statusId),
            }
          : a
      ),
    }));
  };

  /* ---------------------------------- TURNS --------------------------------- */

  const nextTurn = () => {
    setState((s) => {
      if (!s.active || s.actors.length === 0) return s;

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

  const prevTurn = () => {};

  /* ---------------------------------- HELPERS -------------------------------- */

  const patchActor = (id: string, patch: Partial<Actor>) => {
    setState((s) => ({
      ...s,
      actors: s.actors.map((a) => (a.id === id ? { ...a, ...patch } : a)),
    }));
  };

  const currentActor = () =>
    state.active ? state.actors[state.turnIndex] ?? null : null;

  const isPlayersTurn = () =>
    currentActor()?.kind === "player";

  const spendMovement = (amount = 1) => {
    setState((s) => ({
      ...s,
      movementPoints: Math.max(0, s.movementPoints - amount),
    }));
  };

  const spendAction = (amount = 1) => {
    let ok = false;
    setState((s) => {
      if (s.actionPoints < amount) return s;
      ok = true;
      return { ...s, actionPoints: s.actionPoints - amount };
    });
    return ok;
  };

/* -------------------------------------------------------------------------- */
/* STATUS HELPERS (B4.5)                                                      */
/* -------------------------------------------------------------------------- */

export function hasStatus(
  actor: Actor | null,
  type: StatusEffect
): boolean {
  if (!actor) return false;
  return (actor.status ?? []).some((s) => s.type === type);
}

export function getStatus(
  actor: Actor | null,
  type: StatusEffect
): TimedStatus | undefined {
  return (actor?.status ?? []).find((s) => s.type === type);
}

export function isImmobilized(actor: Actor | null): boolean {
  return (
    hasStatus(actor, "immobilized") ||
    hasStatus(actor, "rooted")
  );
}

export function canMoveActor(actor: Actor | null): boolean {
  if (!actor) return false;
  if (hasStatus(actor, "stunned")) return false;
  if (isImmobilized(actor)) return false;
  return true;
}

export function canActActor(actor: Actor | null): boolean {
  if (!actor) return false;
  if (hasStatus(actor, "stunned")) return false;
  return true;
}

  const value = useMemo<TurnContextValue>(
    () => ({
      state,
      beginTurns,
      endTurns,
      nextTurn,
      prevTurn,
      setActorPos: patchActor as any,
      patchActor,
      addBuff,
      cleanupBuffs,
      addStatus,
      clearStatus,
      isPlayersTurn,
      currentActor,
      spendMovement,
      spendAction,
    }),
    [state]
  );

  return (
    <TurnContext.Provider value={value}>
      {children}
    </TurnContext.Provider>
  );
}

export function useTurns() {
  const ctx = useContext(TurnContext);
  if (!ctx) throw new Error("useTurns must be used inside <TurnController>");
  return ctx;
}
