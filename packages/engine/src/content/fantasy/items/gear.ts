// lib/s2s/fantasy/items/gear.ts

import type { Gear } from "./types";

export const FANTASY_GEAR: Gear[] = [
  {
    key: "rope-15m",
    label: "Corde (15m)",
    description: "Corde solide capable de supporter le poids d’un aventurier équipé.",
    type: "gear",
    rarity: "common",
    value: 1,
    weight: 3,
    tags: ["utility"],
  },
  {
    key: "torch",
    label: "Torche",
    description: "Source de lumière simple et bon marché.",
    type: "gear",
    rarity: "common",
    value: 0.1,
    weight: 1,
    tags: ["utility", "light"],
  },
  {
    key: "traveler-pack",
    label: "Pack du Voyageur",
    description: "Sac contenant des rations, une gourde, un couvert simple et une couverture.",
    type: "gear",
    rarity: "common",
    value: 5,
    weight: 5,
    tags: ["utility"],
  },
  {
    key: "lockpicks",
    label: "Outils de Crochetage",
    description: "Trousseau d’outils pour ouvrir portes et coffres verrouillés.",
    type: "gear",
    rarity: "uncommon",
    value: 25,
    weight: 0.5,
    tags: ["utility", "stealth"],
  },
];
