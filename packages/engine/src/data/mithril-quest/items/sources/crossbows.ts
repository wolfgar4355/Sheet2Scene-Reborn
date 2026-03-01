// @ts-nocheck
// crossbows.ts — Arbalètes MQ Engine : légères, lourdes, exotiques, magiques & mythiques

import type { MQWeapon } from "../types";

export const MQ_CROSSBOWS: MQWeapon[] = [
  // ─────────────────────────────────────────────
  //  A — SIMPLE CROSSBOWS
  // ─────────────────────────────────────────────
  {
    key: "light_crossbow",
    label: "Arbalète Légère",
    damage: { dice: "1d8", type: "piercing" },
    weapon_type: "simple",
    weapon_style: "crossbow",
    rarity: "common",
    value: 25,
    weight: 5,
    range: "80/320",
    properties: ["two-handed", "loading"],
    eras: ["age-of-heroes", "dark-age", "high-kingdoms"],
    description:
      "Une arbalète facile à manier, idéale pour les soldats débutants et les tireurs embusqués."
  },

  {
    key: "tribal_boltbow",
    label: "Arbalète Tribale",
    damage: { dice: "1d8", type: "piercing" },
    weapon_type: "simple",
    weapon_style: "crossbow",
    rarity: "uncommon",
    value: 20,
    weight: 6,
    range: "70/280",
    properties: ["loading"],
    eras: ["ancient-age"],
    description:
      "Une arbalète primitive en bois brut, renforcée de ligatures et de tendons."
  },

  // ─────────────────────────────────────────────
  //  B — MARTIAL CROSSBOWS
  // ─────────────────────────────────────────────
  {
    key: "heavy_crossbow",
    label: "Arbalète Lourde",
    damage: { dice: "1d10", type: "piercing" },
    weapon_type: "martial",
    weapon_style: "crossbow",
    rarity: "common",
    value: 50,
    weight: 14,
    range: "100/400",
    properties: ["two-handed", "heavy", "loading"],
    eras: ["dark-age", "high-kingdoms"],
    description:
      "Puissante et précise, mais lente à recharger. Capable de transpercer des armures épaisses."
  },

  {
    key: "hand_crossbow",
    label: "Arbalète de Poing",
    damage: { dice: "1d6", type: "piercing" },
    weapon_type: "martial",
    weapon_style: "crossbow",
    rarity: "uncommon",
    value: 75,
    weight: 2,
    range: "30/120",
    properties: ["light", "finesse"],
    eras: ["high-kingdoms", "arcane-renaissance"],
    description:
      "Une petite arbalète discrète, prisée des voleurs, assassins et aventuriers urbains."
  },

  {
    key: "siege_slinger",
    label: "Arbalète Portative de Siège",
    damage: { dice: "1d12", type: "piercing" },
    weapon_type: "martial",
    weapon_style: "crossbow",
    rarity: "uncommon",
    value: 150,
    weight: 18,
    range: "120/480",
    properties: ["two-handed", "heavy", "slow-reload"],
    eras: ["dark-age"],
    description:
      "Un modèle massif inspiré des balistes : lent mais terriblement destructeur."
  },

  {
    key: "precision_crossbow",
    label: "Arbalète de Précision",
    damage: { dice: "1d10", type: "piercing" },
    weapon_type: "martial",
    weapon_style: "crossbow",
    rarity: "rare",
    value: 200,
    weight: 12,
    range: "150/600",
    properties: ["two-handed", "loading"],
    eras: ["high-kingdoms", "arcane-renaissance"],
    description:
      "Une arbalète finement calibrée pour les tireurs d’élite et chasseurs de monstres."
  },

  // ─────────────────────────────────────────────
  //  C — MAGICAL CROSSBOWS
  // ─────────────────────────────────────────────
  {
    key: "arcane_repeatbow",
    label: "Arbalète Arcanique à Répétition",
    damage: { dice: "1d8", type: "force" },
    weapon_type: "martial",
    weapon_style: "crossbow",
    rarity: "rare",
    value: 350,
    weight: 10,
    range: "120/480",
    properties: ["two-handed", "magic", "repeating"],
    eras: ["arcane-renaissance"],
    description:
      "Infusée d’énergie éthérique, elle peut tirer plusieurs carreaux avant de devoir être rechargée."
  },

  {
    key: "abyssal_crossbow",
    label: "Arbalète Abyssale",
    damage: { dice: "1d10", type: "necrotic" },
    weapon_type: "martial",
    weapon_style: "crossbow",
    rarity: "legendary",
    value: 900,
    weight: 9,
    range: "100/400",
    properties: ["magic", "cursed"],
    eras: ["dark-age", "mythic-age"],
    description:
      "Une arbalète imprégnée d’énergie du Néant, tirant des carreaux qui drainent la vitalité."
  },

  {
    key: "solar_boltcaster",
    label: "Lance-Carreaux Solaire",
    damage: { dice: "1d12", type: "radiant" },
    weapon_type: "martial",
    weapon_style: "crossbow",
    rarity: "legendary",
    value: 1400,
    weight: 8,
    range: "160/640",
    properties: ["two-handed", "magic"],
    eras: ["high-kingdoms", "mythic-age"],
    description:
      "Bénie par les prêtres du Soleil, elle tire des projectiles de lumière purifiante."
  },

  // ─────────────────────────────────────────────
  //  D — MYTHIC CROSSBOW
  // ─────────────────────────────────────────────
  {
    key: "astral_arbalest",
    label: "Arbalète Astrale",
    damage: { dice: "2d8", type: "force" },
    weapon_type: "martial",
    weapon_style: "crossbow",
    rarity: "mythic",
    value: 2800,
    weight: 6,
    range: "200/800",
    properties: ["magic", "two-handed"],
    eras: ["mythic-age"],
    description:
      "Forgée dans les vents stellaires, elle projette des carreaux d'énergie pure arrachée aux courants cosmiques."
  }
] as const;
