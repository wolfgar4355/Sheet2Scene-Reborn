// packages/engine/src/worlds/pathseeker/world.ts
import type { MithrilWorld } from "../../core/types/world";

export const PATHSEEKER_WORLD: MithrilWorld = {
  id: "pathseeker",
  key: "ps",
  label: "Pathseeker",
  description:
    "Monde de fantasy ancrée et de survie : sentiers dangereux, vertus et vices, exploration lente et choix difficiles.",
  tags: ["fantasy", "survival", "grounded"],
  worldType: "survival",

  eras: [
    "first-tracks",         // Pionniers, premiers sentiers cartographiés
    "age-of-frontiers",     // Colonies, postes avancés, territoires sauvages
    "ashen-expanse",        // Monde marqué par des guerres et catastrophes passées
  ],
};
