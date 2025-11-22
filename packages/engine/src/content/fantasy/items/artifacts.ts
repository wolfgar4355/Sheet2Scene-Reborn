// lib/s2s/fantasy/items/artifacts.ts

import type { Artifact } from "./types";

export const FANTASY_ARTIFACTS: Artifact[] = [
  {
    key: "ember-heart",
    label: "Cœur de Braise",
    description: "Fragment de feu ancien enfermé dans un cristal vivant.",
    type: "artifact",
    rarity: "legendary",
    value: 10000,
    weight: 1,
    attunement: true,
    effect:
      "Augmente grandement les capacités liées au feu. Permet de lancer des sorts de feu avancés.",
    tags: ["fire", "legendary", "magic"],
  },
  {
    key: "crown-of-whispers",
    label: "Couronne des Murmures",
    description: "Une couronne d’argent qui murmure des secrets sur ceux qui vous entourent.",
    type: "artifact",
    rarity: "very-rare",
    value: 6000,
    weight: 1,
    attunement: true,
    effect:
      "Donne un avantage aux jets d’Intuition et de Tromperie, et permet de percer les illusions mineures.",
    tags: ["psychic", "social", "magic"],
  },
];
