import { useEffect } from "react";
import { tileDistance } from "../iso/isoMath";
import { useTurns } from "./TurnController";

export function useEnemyAI() {
  const turns = useTurns();

  useEffect(() => {
    const actor = turns.currentActor();
    if (!actor || !turns.state.active) return;
    if (actor.kind !== "enemy") return;

    // petit délai pour lisibilité
    const t = setTimeout(() => {
      const players = turns.state.actors.filter(
        (a) => a.kind === "player" && a.alive
      );
      if (!players.length) {
        turns.nextTurn();
        return;
      }

      // cible la plus proche
      const target = players.reduce((best, p) =>
        tileDistance(actor.pos, p.pos) <
        tileDistance(actor.pos, best.pos)
          ? p
          : best
      );

      const dist = tileDistance(actor.pos, target.pos);

      // 1️⃣ Attaque si adjacent
      if (dist <= 1) {
        const dmg = Math.floor(Math.random() * 5) + 2;
        turns.damageActor(target.id, dmg);
        turns.nextTurn();
        return;
      }

      // 2️⃣ Sinon, avance vers la cible (1 case)
      const dx = Math.sign(target.pos.x - actor.pos.x);
      const dy = Math.sign(target.pos.y - actor.pos.y);

      const nextPos = {
        x: actor.pos.x + dx,
        y: actor.pos.y + dy,
      };

      turns.setActorPos(actor.id, nextPos);
      turns.spendMovement(1);
      turns.nextTurn();
    }, 450);

    return () => clearTimeout(t);
  }, [turns]);
}
