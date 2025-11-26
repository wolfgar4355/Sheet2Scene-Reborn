import { MythicBoss } from "@engine/content/fantasy/types";

// ---------------------------------------------------------------------------
// GROTH’KARN — TITAN DU MONDE-RACINE (MYTHIQUE)
// Colosse tellurique, fusion de pierre, racines, cristal et pression tectonique.
// ---------------------------------------------------------------------------

export const GROTHKARN: MythicBoss = {
  id: "grothkarn",
  name: "Groth'Karn",
  epithet: "Titan du Monde-Racine",

  category: "elemental",
  aiProfile: "titan-brute-controller",
  encounterDifficulty: "mythic",

  tags: [
    "mythic",
    "titan",
    "colossus",
    "earthborn",
    "primordial",
    "crystal",
    "root-god"
  ],

  biomes: [
    "mountains",
    "ancient-forest",
    "jungle",
    "earth-core",
    "underdark"
  ],

  summary:
    "Un titan pré-continental, fusion de pierre vivante, de racines primordiales " +
    "et de cristaux telluriques. Chaque pas provoque un séisme. " +
    "Groth’Karn est un bulldozer mythique, une force tectonique vivante.",

  phases: [
    // ---------------------------------------------------------------------
    // PHASE 1 — FORMATION TITANIQUE
    // ---------------------------------------------------------------------
    {
      key: "phase-1",
      name: "Groth'Karn — Titan du Monde-Racine",
      cr: 22,
      hp: 760,
      ac: 23,
      role: "mythic-brute",

      description:
        "Une masse colossale de roches et de racines se lève du sol. " +
        "Le titan déclenche des séismes et projette des épines massives en jaillissant du sol.",

      tactics: [
        "Secouer constamment le terrain pour désavantager les lanceurs de sorts.",
        "Uproot Spines pour frapper les cibles à distance.",
        "Empêcher les joueurs de rester regroupés."
      ],

      abilities: [
        "Séisme Titanesque — 60 ft autour, renverse, étourdit 1 round.",
        "Peau de Granit-Vivant — résistance aux dégâts non-magiques.",
        "Épines de Racines — jaillissent en ligne, ciblent 3 joueurs.",
        "Hurlement Tellurique — brise les protections magiques."
      ],

      phaseTriggers: [
        "À 0 HP → le titan se fissure, révélant un noyau vivant magnétique.",
        "Transition vers sa forme élémentaire supérieure."
      ],

      loot: [
        "Fragment de Cœur Tellurique",
        "Racines Primordiales",
        "Poussière de Titan"
      ]
    },

    // ---------------------------------------------------------------------
    // PHASE 2 — AVATAR ÉLÉMENTAIRE
    // ---------------------------------------------------------------------
    {
      key: "phase-2",
      name: "Groth'Karn — Avatar de Terre Vivante",
      cr: 24,
      hp: 820,
      ac: 25,
      role: "mythic-controller",
      biomes: ["mountains", "crystal-caves", "ancient-forest"],

      description:
        "Le noyau cristallin se réveille. Le titan se transforme en un avatar tellurique " +
        "magnétique, contrôlant les cristaux, la terre et les champs gravitationnels.",

      tactics: [
        "Magnétisme violent pour repositionner / attirer / repousser le groupe.",
        "Créer des explosions cristallines pour contrôler les zones.",
        "Mode enragé sous 200 HP."
      ],

      abilities: [
        "Forme Cristalline — renvoie 50% des dégâts physiques.",
        "Magnétisme Violent — attire ou repousse les joueurs.",
        "Éruption de Quartz — 6 éclats surgissent du sol.",
        "Cœur du Monde (Ultime) — séisme total, dégâts massifs + CC.",
        "Régénération Tellurique — +20 HP par round."
      ],

      phaseTriggers: [
        "À 200 HP → Groth’Karn passe en mode Enragé.",
        "Chaque cristal détruit → augmente ses dégâts de 10% pour 2 rounds."
      ],

      loot: [
        "Cœur de Quartz Vivant",
        "Minerai Primordial",
        "Fragment de Terre-Mère",
        "Gemme du Titan Endormi"
      ]
    }
  ]
};

export default GROTHKARN;
