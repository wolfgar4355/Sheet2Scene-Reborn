// @ts-nocheck
// blades.ts — Lames MQ Engine : épées, rapières, grandes lames, lames mythiques

import type { MQWeapon } from "../types";

export const MQ_BLADES: MQWeapon[] = [
  // ─────────────────────────────────────────────
  //  A — BLADES : STANDARD / MARTIAL
  // ─────────────────────────────────────────────
  {
    key: "shortsword",
    label: "Épée Courte",
    damage: { dice: "1d6", type: "slashing" },
    weapon_type: "martial",
    weapon_style: "blade",
    rarity: "common",
    value: 10,
    weight: 2,
    properties: ["finesse", "light"],
    eras: ["ancient-age", "age-of-heroes", "dark-age", "high-kingdoms"],
    description:
      "Une lame courte et polyvalente, appréciée des voleurs et éclaireurs."
  },

  {
    key: "longsword",
    label: "Épée Longue",
    damage: { dice: "1d8", type: "slashing" },
    weapon_type: "martial",
    weapon_style: "blade",
    rarity: "common",
    value: 15,
    weight: 3,
    properties: ["versatile"],
    versatile_damage: "1d10",
    eras: ["age-of-heroes", "dark-age", "high-kingdoms"],
    description: "L’arme emblématique des chevaliers et soldats entraînés."
  },

  {
    key: "greatsword",
    label: "Espadon",
    damage: { dice: "2d6", type: "slashing" },
    weapon_type: "martial",
    weapon_style: "blade",
    rarity: "common",
    value: 50,
    weight: 6,
    properties: ["two-handed", "heavy"],
    eras: ["dark-age", "high-kingdoms"],
    description:
      "Une immense lame maniée à deux mains, capable de fendre une armure."
  },

  {
    key: "scimitar",
    label: "Cimeterre",
    damage: { dice: "1d6", type: "slashing" },
    weapon_type: "martial",
    weapon_style: "blade",
    rarity: "common",
    value: 25,
    weight: 3,
    properties: ["finesse", "light"],
    eras: ["age-of-heroes", "high-kingdoms"],
    description: "Une lame courbe prisée des nomades et des marins."
  },

  {
    key: "rapier",
    label: "Rapière",
    damage: { dice: "1d8", type: "slashing" },
    weapon_type: "martial",
    weapon_style: "blade",
    rarity: "uncommon",
    value: 30,
    weight: 2,
    properties: ["finesse"],
    eras: ["high-kingdoms", "arcane-renaissance"],
    description: "Une arme d'estoc élégante, parfaite pour les duellistes."
  },

  {
    key: "falchion",
    label: "Fauchon",
    damage: { dice: "2d4", type: "slashing" },
    weapon_type: "martial",
    weapon_style: "blade",
    rarity: "uncommon",
    value: 40,
    weight: 5,
    properties: ["heavy"],
    eras: ["age-of-heroes", "dark-age"],
    description:
      "Une lourde lame courbe, redoutable en taille et en puissance brute."
  },

  // ─────────────────────────────────────────────
  //  B — BLADES RARES
  // ─────────────────────────────────────────────
  {
    key: "katana",
    label: "Katana",
    damage: { dice: "1d8", type: "slashing" },
    weapon_type: "martial",
    weapon_style: "blade",
    rarity: "rare",
    value: 60,
    weight: 3,
    properties: ["finesse", "versatile"],
    versatile_damage: "1d10",
    eras: ["age-of-heroes", "high-kingdoms"],
    description:
      "Une lame légendaire forgée avec art, symbole de discipline guerrière."
  },

  {
    key: "dual_blades",
    label: "Lames Jumelles",
    damage: { dice: "1d6", type: "slashing" },
    weapon_type: "martial",
    weapon_style: "blade",
    rarity: "rare",
    value: 75,
    weight: 4,
    properties: ["dual-wield", "light"],
    eras: ["high-kingdoms", "arcane-renaissance"],
    description:
      "Une paire de lames équilibrées conçues pour des frappes rapides et synchronisées."
  },

  // ─────────────────────────────────────────────
  //  C — BLADES MAGIQUES / LÉGENDAIRES / MYTHIQUES
  // ─────────────────────────────────────────────
  {
    key: "runic_blade",
    label: "Lame Runique",
    damage: { dice: "1d8", type: "slashing" },
    weapon_type: "martial",
    weapon_style: "blade",
    rarity: "legendary",
    value: 500,
    weight: 3,
    properties: ["magic", "versatile"],
    versatile_damage: "1d10",
    eras: ["mythic-age", "high-kingdoms"],
    description:
      "Forgée dans un acier ancien, cette lame rayonne d’inscriptions mystiques."
  },

  {
    key: "void_edge",
    label: "Tranche-Vide",
    damage: { dice: "1d10", type: "slashing" },
    weapon_type: "martial",
    weapon_style: "blade",
    rarity: "mythic",
    value: 1200,
    weight: 2,
    properties: ["finesse", "magic", "soulcut"],
    eras: ["mythic-age"],
    description:
      "Une lame noire qui déchire la réalité elle-même. Les blessures qu’elle inflige refusent de guérir."
  }
] as const;
