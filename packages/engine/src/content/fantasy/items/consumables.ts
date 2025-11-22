// lib/s2s/fantasy/items/consumables.ts

import type { Consumable } from "./types";

export const FANTASY_CONSUMABLES: Consumable[] = [
  {
    key: "healing-potion",
    label: "Potion de Soin Mineure",
    description: "Restaure une quantité modérée de vitalité.",
    type: "consumable",
    effect: "Restaure 2d4+2 points de vie.",
    uses: 1,
    rarity: "common",
    value: 50,
    weight: 0.5,
    tags: ["healing"],
  },
  {
    key: "greater-healing-potion",
    label: "Potion de Soin Supérieure",
    description: "Restaure une grande quantité de vitalité.",
    type: "consumable",
    effect: "Restaure 4d4+4 points de vie.",
    uses: 1,
    rarity: "uncommon",
    value: 150,
    weight: 0.5,
    tags: ["healing"],
  },
  {
    key: "mana-vial",
    label: "Fiole de Mana",
    description: "Recharge une partie de l’énergie magique.",
    type: "consumable",
    effect: "Le lanceur récupère un petit nombre de points de mana (ou emplacement).",
    uses: 1,
    rarity: "uncommon",
    value: 100,
    weight: 0.2,
    tags: ["magic"],
  },
  {
    key: "explosive-flask",
    label: "Flasque Explosive",
    description: "Lancée sur une zone, elle libère une explosion brûlante.",
    type: "consumable",
    effect: "Inflige 2d6 dégâts de feu dans une petite zone.",
    uses: 1,
    rarity: "rare",
    value: 200,
    weight: 0.5,
    tags: ["fire", "aoe"],
  },
];
