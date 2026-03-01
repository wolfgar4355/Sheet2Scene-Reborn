// src/mithril/iso/PlayerController.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { IsoConfig, Vec2 } from "./isoMath";
import {
  clamp,
  isoToWorld,
  worldToIso,
  tileDistance,
} from "./isoMath";
import { useKeys } from "./useKeys";

import { useEncounter } from "../encounter/EncounterController";
import {
  useTurns,
  hasStatus,
  canMoveActor,
  canActActor,
} from "../encounter/TurnController";
import { useAttack } from "../encounter/useAttack";

/* -------------------------------------------------------------------------- */
/* TYPES                                                                      */
/* -------------------------------------------------------------------------- */

export type PlayerState = {
  pos: Vec2;
  target: Vec2 | null;
  speed: number;
};

type EnemyLike = {
  id: string;
  pos: Vec2;
  hp?: number;
  reactionUsed?: boolean;
};

/* -------------------------------------------------------------------------- */
/* UTILS                                                                      */
/* -------------------------------------------------------------------------- */

function dist(a: Vec2, b: Vec2) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function roundTile(p: Vec2): Vec2 {
  return { x: Math.round(p.x), y: Math.round(p.y) };
}

function isInEnemyZOC(pos: Vec2, enemies: EnemyLike[]) {
  return enemies.some(
    (e) => (e.hp ?? 1) > 0 && tileDistance(e.pos, pos) === 1
  );
}

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

export default function PlayerController({
  cfg,
  mapW,
  mapH,
  forcedTarget,
  onArrive,
  onMove,
  actorId = "player-1",
}: {
  cfg: IsoConfig;
  mapW: number;
  mapH: number;
  forcedTarget?: Vec2 | null;
  onArrive?: () => void;
  onMove?: (p: Vec2) => void;
  actorId?: string;
}) {
  const keys = useKeys();
  const encounter = useEncounter();
  const turns = useTurns();
  const { attack } = useAttack();

  /* ---------------- Local visual state ----------------------------------- */

  const [player, setPlayer] = useState<PlayerState>({
    pos: { x: 6, y: 6 },
    target: null,
    speed: 3.2,
  });

  const playerRef = useRef(player);
  useEffect(() => {
    playerRef.current = player;
  }, [player]);

  /* ---------------- Actor sync (encounter source of truth) --------------- */

  const actor = useMemo(
    () => turns.state.actors.find((a) => a.id === actorId) ?? null,
    [turns.state.actors, actorId]
  );

  useEffect(() => {
    if (!encounter.state.active || !actor) return;

    setPlayer((p) => ({
      ...p,
      pos: { ...actor.pos },
      target: null,
    }));
  }, [encounter.state.active, actor?.pos?.x, actor?.pos?.y]);

  /* ---------------- Forced movement (IsometricWorld) --------------------- */

  useEffect(() => {
    if (!forcedTarget) return;

    setPlayer((p) => ({
      ...p,
      pos: forcedTarget,
      target: null,
    }));

    onArrive?.();
  }, [forcedTarget, onArrive]);

  /* ---------------- Enemies (ZOC / AoO) ---------------------------------- */

  const enemies = useMemo<EnemyLike[]>(
    () =>
      turns.state.actors.filter(
        (a) => a.kind === "enemy" && (a.hp ?? 0) > 0
      ),
    [turns.state.actors]
  );

  /* ---------------- Movement permission ---------------------------------- */

  const canMove =
    !encounter.state.active ||
    (turns.state.active &&
      turns.isPlayersTurn() &&
      canMoveActor(actor ?? turns.currentActor()));

  /* ---------------- Pointer-based movement (encounter) ------------------ */

  const onPointerDown = (e: PointerEvent) => {
    if (!canMove) return;

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const s = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    const w = isoToWorld(s, cfg);

    const target = {
      x: clamp(Math.round(w.x), 0, mapW - 1),
      y: clamp(Math.round(w.y), 0, mapH - 1),
    };

    if (!encounter.state.active) {
      setPlayer((p) => ({ ...p, target }));
      return;
    }

    const me = actor ?? turns.currentActor();
    if (!me || me.kind !== "player") return;
    if (!canMoveActor(me)) return;

    const from = roundTile(me.pos);
    let cost = tileDistance(from, target);

    if (hasStatus(me, "slowed")) cost += 1;
    if (cost <= 0) return;
    if ((turns.state.movementPoints ?? 0) < cost) return;

    const fromInZOC = isInEnemyZOC(from, enemies);
    const toInZOC = isInEnemyZOC(target, enemies);
    const leavingZOC = fromInZOC && !toInZOC;

    /* -------- Attaque d’opportunité ------------------------------------- */

    if (leavingZOC && canActActor(me)) {
      const attacker = enemies.find(
        (e) =>
          !e.reactionUsed &&
          tileDistance(e.pos, from) === 1
      );

      if (attacker) {
        turns.patchActor(attacker.id, { reactionUsed: true });
        attack(attacker.id, attacker.pos, me.pos);
      }
    }

    turns.setActorPos(me.id, target);
    turns.spendMovement(cost);

    setPlayer((p) => ({ ...p, pos: target, target: null }));
    onMove?.(target);
  };

  /* ---------------- Exploration movement (RAF) --------------------------- */

  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const tick = (t: number) => {
      const dt = Math.max(0.001, (t - last) / 1000);
      last = t;

      if (encounter.state.active) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const k = keys.current;
      const speed = (k.shift ? 1.8 : 1) * playerRef.current.speed;

      setPlayer((p) => {
        if (!canMove) return { ...p, target: null };

        let { pos, target } = p;
        let nx = pos.x;
        let ny = pos.y;

        const vx = (k.d ? 1 : 0) - (k.a ? 1 : 0);
        const vy = (k.s ? 1 : 0) - (k.w ? 1 : 0);

        if (vx || vy) {
          target = null;
          const len = Math.sqrt(vx * vx + vy * vy) || 1;
          nx += (vx / len) * speed * dt;
          ny += (vy / len) * speed * dt;
        } else if (target) {
          const d = dist(pos, target);
          if (d < 0.03) {
            nx = target.x;
            ny = target.y;
            target = null;
          } else {
            nx += ((target.x - pos.x) / d) * speed * dt;
            ny += ((target.y - pos.y) / d) * speed * dt;
          }
        }

        nx = clamp(nx, 0, mapW - 1);
        ny = clamp(ny, 0, mapH - 1);

        const next = { ...p, pos: { x: nx, y: ny }, target };
        onMove?.(next.pos);
        return next;
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [keys, mapW, mapH, onMove, canMove, encounter.state.active]);

  /* ---------------- Render ------------------------------------------------ */

  const screen = useMemo(
    () => worldToIso(player.pos, cfg),
    [player.pos, cfg]
  );
  const z = Math.floor((player.pos.x + player.pos.y) * 10) + 100;

  return (
    <div
      className="absolute inset-0"
      onPointerDown={(e) => onPointerDown(e.nativeEvent)}
      style={{ touchAction: "none" }}
    >
      <div
        className="absolute"
        style={{
          left: screen.x,
          top: screen.y - 18,
          transform: "translate(-50%, -100%)",
          zIndex: z,
          width: 18,
          height: 26,
          borderRadius: 10,
          background: "rgba(240,220,170,0.95)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
          outline: "1px solid rgba(0,0,0,0.35)",
        }}
      />
    </div>
  );
}
