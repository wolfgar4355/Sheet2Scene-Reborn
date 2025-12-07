// @ts-nocheck
// bows.ts — Arcs MQ Engine : courts, longs, composites, magiques & mythiques

import type { MQWeapon } from "../types";

export const MQ_BOWS: MQWeapon[] = [
  // ─────────────────────────────────────────────
  //  A — SIMPLE BOWS
  // ─────────────────────────────────────────────
  {
    key: "shortbow",
    label: "Arc Court",
    damage: { dice: "1d6", type: "piercing" },
    weapon_type: "simple",
    weapon_style: "bow",
    rarity: "common",
    value: 25,
    weight: 2,
    range: "80/320",
    properties: ["two-handed"],
    eras: ["ancient-age", "age-of-heroes", "dark-age", "high-kingdoms"],
    description:
      "Un arc léger et maniable, idéal pour les éclaireurs et les chasseurs débutants."
  },

  {
    key: "tribal_bow",
    label: "Arc Tribal",
    damage: { dice: "1d6", type: "piercing" },
    weapon_type: "simple",
    weapon_style: "bow",
    rarity: "uncommon",
    value: 20,
    weight: 2,
    range: "70/280",
    properties: ["two-handed"],
    eras: ["ancient-age"],
    description:
      "Un arc primitif décoré de plumes et de gravures rituelles, utilisé par les chasseurs tribaux."
  },

  // ─────────────────────────────────────────────
  //  B — MARTIAL BOWS
  // ─────────────────────────────────────────────
  {
    key: "longbow",
    label: "Arc Long",
    damage: { dice: "1d8", type: "piercing" },
    weapon_type: "martial",
    weapon_style: "bow",
    rarity: "common",
    value: 50,
    weight: 2,
    range: "150/600",
    properties: ["two-handed", "heavy"],
    eras: ["age-of-heroes", "dark-age", "high-kingdoms"],
    description:
      "Une arme de tir à longue portée capable de percer des armures légères à grande distance."
  },

  {
    key: "composite_bow",
    label: "Arc Composite",
    damage: { dice: "1d8", type: "piercing" },
    weapon_type: "martial",
    weapon_style: "bow",
    rarity: "uncommon",
    value: 75,
    weight: 2,
    range: "120/480",
    properties: ["two-handed"],
    eras: ["age-of-heroes", "high-kingdoms"],
    description:
      "Assemblé avec des matériaux flexibles, cet arc compact offre une puissance supérieure."
  },

  {
    key: "ranger_bow",
    label: "Arc du Rôdeur",
    damage: { dice: "1d8", type: "piercing" },
    weapon_type: "martial",
    weapon_style: "bow",
    rarity: "uncommon",
    value: 90,
    weight: 2,
    range: "140/560",
    properties: ["two-handed"],
    eras: ["high-kingdoms"],
    description:
      "Un arc précis, conçu pour les rôdeurs habitués à la traque et aux embuscades."
  },

  {
    key: "elven_longbow",
    label: "Arc Long Elfique",
    damage: { dice: "1d10", type: "piercing" },
    weapon_type: "martial",
    weapon_style: "bow",
    rarity: "rare",
    value: 180,
    weight: 1,
    range: "180/720",
    properties: ["two-handed", "finesse"],
    eras: ["high-kingdoms", "arcane-renaissance"],
    description:
      "Un arc d’une élégance incomparable, façonné dans un bois enchanté par les maîtres artisans elfiques."
  },

  // ─────────────────────────────────────────────
  //  C — MAGICAL BOWS
  // ─────────────────────────────────────────────
  {
    key: "storm_bow",
    label: "Arc des Tempêtes",
    damage: { dice: "1d8", type: "lightning" },
    weapon_type: "martial",
    weapon_style: "bow",
    rarity: "rare",
    value: 300,
    weight: 2,
    range: "150/600",
    properties: ["two-handed", "magic"],
    eras: ["high-kingdoms", "arcane-renaissance"],
    description:
      "Cet arc projette des flèches imprégnées de foudre, capables d'étourdir leurs cibles."
  },

  {
    key: "shadowbow",
    label: "Arc de l’Ombre",
    damage: { dice: "1d8", type: "necrotic" },
    weapon_type: "martial",
    weapon_style: "bow",
    rarity: "legendary",
    value: 900,
    weight: 2,
    range: "120/480",
    properties: ["two-handed", "magic"],
    eras: ["dark-age", "mythic-age"],
    description:
      "Une arme façonnée dans un bois noirci, tirant des projectiles qui drainent la vitalité."
  },

  {
    key: "sunflare_bow",
    label: "Arc Flamme-Solaire",
    damage: { dice: "1d10", type: "radiant" },
    weapon_type: "martial",
    weapon_style: "bow",
    rarity: "legendary",
    value: 1200,
    weight: 2,
    range: "160/640",
    properties: ["two-handed", "magic"],
    eras: ["high-kingdoms", "mythic-age"],
    description:
      "Un arc vibrant d’énergie solaire, infligeant une lumière brûlante aux créatures obscures."
  },

  // ─────────────────────────────────────────────
  //  D — MYTHIC BOWS
  // ─────────────────────────────────────────────
  {
    key: "astral_longbow",
    label: "Arc Astral",
    damage: { dice: "2d6", type: "force" },
    weapon_type: "martial",
    weapon_style: "bow",
    rarity: "mythic",
    value: 3000,
    weight: 1,
    range: "200/800",
    properties: ["two-handed", "magic"],
    eras: ["mythic-age"],
    description:
      "Une arme d’exception, tirant des flèches d’énergie pure puisée dans les courants cosmiques."
  }
] as const;
