// scrolls.ts — Parchemins de sorts de niveaux variés, bénis, maudits & mythiques

export const SCROLLS = [
  //
  // ──────────
  //  BAS NIVEAUX
  // ──────────
  //
  {
    key: "scroll_magic_missile",
    label: "Parchemin : Projectiles Magiques",
    tier: 1,
    rarity: "common",
    value: 50,
    spell: "magic_missile",
    eras: ["high-kingdoms"],
    description: "Un parchemin contenant un sort offensif automatique."
  },

  {
    key: "scroll_heal",
    label: "Parchemin : Soin",
    tier: 1,
    rarity: "common",
    value: 45,
    spell: "heal_minor",
    eras: ["age-of-heroes"],
    description: "Favori des novices cléricaux."
  },

  //
  // ──────────
  //  NIVEAUX MOYENS
  // ──────────
  //
  {
    key: "scroll_fireball",
    label: "Parchemin : Boule de Feu",
    tier: 3,
    rarity: "rare",
    value: 250,
    spell: "fireball",
    eras: ["high-kingdoms"],
    description:
      "Une boule de feu comprimée sous forme d’écriture runique."
  },

  {
    key: "scroll_lightning",
    label: "Parchemin : Éclair",
    tier: 3,
    rarity: "rare",
    value: 260,
    spell: "lightning_bolt",
    eras: ["arcane-renaissance"],
    description:
      "Un sort rapide libérant un éclair devant le lanceur."
  },

  //
  // ──────────
  //  NIVEAUX ÉLEVÉS
  // ──────────
  //
  {
    key: "scroll_mass_heal",
    label: "Parchemin : Soin de Masse",
    tier: 5,
    rarity: "legendary",
    value: 1200,
    spell: "mass_heal",
    eras: ["mythic-age"],
    description:
      "Un parchemin sacré capable de guérir des groupes entiers."
  },

  {
    key: "scroll_planeshift",
    label: "Parchemin : Changement de Plan",
    tier: 6,
    rarity: "legendary",
    value: 2000,
    spell: "plane_shift",
    eras: ["mythic-age"],
    description:
      "Un parchemin complexe permettant de voyager entre les plans."
  },

  //
  // ──────────
  //  PARCHEMINS MAUDITS
  // ──────────
  //
  {
    key: "scroll_curse_mark",
    label: "Parchemin Maudit : Marque de Malédiction",
    tier: 3,
    rarity: "cursed",
    value: 0,
    spell: "curse_mark",
    eras: ["dark-age"],
    description:
      "Un parchemin sombre gravé de glyphes ruineux."
  }
] as const;
