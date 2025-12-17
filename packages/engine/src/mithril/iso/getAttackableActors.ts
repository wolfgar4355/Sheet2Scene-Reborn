import type { Actor } from "./TurnController";
import type { Vec2 } from "../iso/isoMath";

function dist(a: Vec2, b: Vec2) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

export function getAttackableActors(
  attacker: Actor,
  actors: Actor[],
  range: number
) {
  return actors.filter(
    (a) =>
      a.id !== attacker.id &&
      dist(attacker.pos, a.pos) <= range
  );
}
