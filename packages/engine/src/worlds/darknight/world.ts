// packages/engine/src/worlds/darknight/world.ts
import type { MithrilWorld } from "../../core/types/world";

export const DARKNIGHT_WORLD: MithrilWorld = {
  id: "darknight",
  key: "dn",
  label: "The Darknight Chronicles",
  description:
    "Monde gothique contemporain : pactes occultes, sociétés secrètes, créatures de la nuit et villes sous la pluie.",
  tags: ["gothic", "horror", "modern", "occult"],
  worldType: "gothic",

  eras: [
    "ashen-century",        // XXe siècle tardif, guerres et réveils anciens
    "age-of-neon-shadows",  // Villes modernes, néons, masques et complots
    "last-eclipse",         // Période d'intensification des phénomènes occultes
  ],
};
