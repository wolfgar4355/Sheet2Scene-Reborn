// Actor canon Mithril Engine AAA v2

export type ActorId = string;

export interface Actor {
  id: ActorId;
  kind: "player" | "enemy" | "npc";

  hp: number;
  hpMax: number;

  alive: boolean;

  reactionUsed?: boolean;

  position?: {
    x: number;
    y: number;
  };
}
