import type { Vec2 } from "../iso/isoMath";

export type EncounterZone = {
  id: string;
  center: Vec2;      // en tiles world
  radius: number;    // rayon en tiles
  once?: boolean;
};

export const ENCOUNTER_ZONES: EncounterZone[] = [
  {
    id: "forest-ambush",
    center: { x: 8, y: 10 },
    radius: 1.5,
    once: true,
  },
  {
    id: "ruins-guardian",
    center: { x: 14, y: 6 },
    radius: 2,
  },
];
