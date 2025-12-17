import { useTurns } from "./TurnController";

export function useLoot() {
  const turns = useTurns();

  const lootActor = (actorId: string) => {
    const actor = turns.state.actors.find((a) => a.id === actorId);
    if (!actor || !actor.loot) return;

    console.log("🎒 Loot récupéré :", actor.loot);

    turns.clearActorLoot(actorId);
  };

  return { lootActor };
}
