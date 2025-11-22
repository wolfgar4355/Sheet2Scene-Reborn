// healing.ts — Soins, régénération et purification (Fantasy S2S)

import type { Spell } from "../schema";

export const HEALING_SPELLS: Spell[] = [
  // TIER 1 — Soins légers
  {
    key: "minor_heal",
    name: "Soin Mineur",
    tier: "tier1",
    school: "vitalité",
    casting: "instantané",
    range: { type: "contact" },
    duration: "immédiat",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["healing", "basic"],
    availableInEras: ["age-of-heroes", "high-kingdoms"],
    shortSummary: "Restaure une petite quantité de vitalité.",
    description: "Le lanceur canalyse une énergie bienveillante pour sceller brièvement une blessure mineure."
  },

  {
    key: "soothing_touch",
    name: "Toucher Apaisant",
    tier: "tier1",
    school: "vitalité",
    casting: "action",
    range: { type: "contact" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["healing"],
    availableInEras: ["ancient-age", "age-of-heroes"],
    shortSummary: "Apaise la douleur et stabilise le blessé.",
    description: "Un flux d'énergie douce réduit la douleur, calme le corps et aide à stabiliser une blessure légère."
  },

  // TIER 2 — Soins modérés
  {
    key: "renewing_wave",
    name: "Vague Régénératrice",
    tier: "tier2",
    school: "vitalité",
    casting: "instantané",
    range: { type: "rayon", value: "6m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["healing", "aoe"],
    availableInEras: ["high-kingdoms", "mystic-age"],
    shortSummary: "Soigne légèrement plusieurs alliés.",
    description: "Une vague d’énergie régénératrice émane du lanceur et soigne les alliés proches."
  },

  {
    key: "cleanse_minor",
    name: "Purification Mineure",
    tier: "tier2",
    school: "vitalité",
    casting: "action",
    range: { type: "contact" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["cleanse"],
    availableInEras: ["arcane-renaissance", "mystic-age"],
    shortSummary: "Retire une petite altération.",
    description: "Une énergie purificatrice élimine une maladie légère, un poison faible ou une altération mineure."
  },

  // TIER 3 — Soins sérieux / restauration
  {
    key: "greater_heal",
    name: "Soin Supérieur",
    tier: "tier3",
    school: "vitalité",
    casting: "action",
    range: { type: "contact" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["healing"],
    availableInEras: ["high-kingdoms", "mystic-age"],
    shortSummary: "Soigne modérément un allié.",
    description: "Une énergie vivifiante referme les blessures importantes, répare les tissus et revitalise un allié."
  },

  {
    key: "cleanse_affliction",
    name: "Purge des Afflictions",
    tier: "tier3",
    school: "vitalité",
    casting: "action",
    range: { type: "contact" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true },
    tags: ["cleanse", "purification"],
    availableInEras: ["arcane-renaissance"],
    shortSummary: "Retire poisons, maladies et malédictions légères.",
    description: "Une onde purificatrice disperse les toxines et les afflictions faibles qui affectent la cible."
  },

  // TIER 4 — Grands soins
  {
    key: "mass_heal",
    name: "Soin de Masse",
    tier: "tier4",
    school: "vitalité",
    casting: "action",
    range: { type: "rayon", value: "12m" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["healing", "aoe", "major"],
    availableInEras: ["mystic-age"],
    shortSummary: "Soigne grandement tous les alliés dans une zone.",
    description: "Une puissante vague lumineuse restaure massivement la vitalité des alliés dans un large rayon."
  },

  // TIER 5 — Restauration totale / miracles
  {
    key: "divine_restoration",
    name: "Restauration Divine",
    tier: "tier5",
    school: "vitalité",
    casting: "rituel",
    range: { type: "contact" },
    duration: "instantané",
    concentration: false,
    components: { verbal: true, somatic: true },
    tags: ["healing", "miracle", "full-restore"],
    availableInEras: ["high-kingdoms", "mystic-age"],
    shortSummary: "Guérison complète.",
    description:
      "Une lumière sacrée restaure pleinement la vitalité, purge toutes les afflictions et revitalise intégralement un allié."
  }
];
