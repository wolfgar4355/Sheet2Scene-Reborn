// types/factions.ts

export const FACTIONS = [
  "clockwork",
  "conclave",
  "covenant",
  "draconic",
  "eldritch",
  "empire",
  "frostborn",
  "infernal",
  "necroshade",
  "sandborn",
  "sylvan",
  "wildhunt",
] as const;

export type FactionId = (typeof FACTIONS)[number];
