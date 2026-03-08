import React from "react";
import type { Vec2 } from "../iso/isoMath";
export type ActorKind = "player" | "enemy" | "npc";
export type BuffExpire = "startOfNextTurn" | "endOfTurn" | "endOfCombat";
export type Buff = {
    id: string;
    label: string;
    stat: "ac" | "attackBonus" | "damage";
    value: number;
    expiresAt: BuffExpire;
};
export type StatusEffect = "stunned" | "immobilized" | "rooted" | "slowed" | "haste" | "disengaged" | "taunted" | "guarding";
export type TimedStatus = {
    id: string;
    type: StatusEffect;
    duration: number;
    sourceId?: string;
};
export type Actor = {
    id: string;
    name: string;
    kind: ActorKind;
    pos: Vec2;
    hp?: number;
    maxHp?: number;
    ac?: number;
    attackBonus?: number;
    dmg?: {
        dice: number;
        sides: number;
        bonus?: number;
    };
    critMult?: number;
    xpValue?: number;
    loot?: boolean;
    buffs?: Buff[];
    status?: TimedStatus[];
    reactionUsed?: boolean;
};
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
export type TurnContextValue = {
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
    damageActor: (id: string, dmg: number) => void;
    clearActorLoot: (id: string) => void;
};
export declare function TurnController({ children }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function useTurns(): TurnContextValue;
export declare function hasStatus(actor: Actor | null, type: StatusEffect): boolean;
export declare function getStatus(actor: Actor | null, type: StatusEffect): TimedStatus | undefined;
export declare function isImmobilized(actor: Actor | null): boolean;
export declare function canMoveActor(actor: Actor | null): boolean;
export declare function canActActor(actor: Actor | null): boolean;
