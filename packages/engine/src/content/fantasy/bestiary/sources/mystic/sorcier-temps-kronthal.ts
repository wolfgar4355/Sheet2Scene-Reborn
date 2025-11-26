import { MythicBoss } from "@engine/content/fantasy/types";

// ---------------------------------------------------------------------------
// KRON’THAL — SORCIER PRIMORDIAL DU TEMPS (MYTHIQUE)
// Maître absolu des paradoxes, capable de réécrire l’initiative et de figer le temps.
// ---------------------------------------------------------------------------

export const KRONTHAL: MythicBoss = {
  id: "kronthal",
  name: "Kron’Thal",
  epithet: "Sorcier Primordial du Temps",

  category: "arcane",
  encounterDifficulty: "mythic",
  aiProfile: "chronomancer",
  tags: [
    "mythic",
    "time",
    "arcane",
    "chronomancer",
    "paradox",
    "time-lord"
  ],

  biomes: [
    "time-rifts",
    "ancient-labs",
    "crystal-spires",
    "arcane-ruins",
    "temporal-storms"
  ],

  summary:
    "Un mage qui manipule initiative, actions, clones temporels et paradoxes. " +
    "Ses pouvoirs peuvent effacer des événements entiers ou rejouer un round complet.",

  // -------------------------------------------------------------------------
  // PHASES
  // -------------------------------------------------------------------------
  phases: [
    // ---------------------------------------------------------------------
    // PHASE 1 — ARCHIMAGE CHRONOMANCIEN
    // ---------------------------------------------------------------------
    {
      key: "phase-1",
      name: "Kron’Thal — Archimage Chronomancien",
      cr: 22,
      role: "mythic-controller",

      description:
        "Un maître du temps qui inverse initiative, réécrit les actions et " +
        "manipule les points faibles temporels du champ de bataille.",

      tactics: [
        "Cibler les joueurs trop rapides.",
        "Annuler les actions clés.",
        "Désorganiser le combat avec du déplacement temporel."
      ],

      stats: {
        hp: 520,
        ac: 22,
        atk: "+17",
        dmg: "4d8+9 (arcane bolt) + time ripple",
        speed: "30 ft, blink 15 ft (bonus)"
      },

      abilities: [
        "Rebond du Temps — renvoie 1 attaque vers l’attaquant (1/round).",
        "Vieillir d’Âge — affaiblit ou fait vieillir une cible.",
        "Double Incantation — lance 2 sorts moyens.",
        "Boucle Temporelle Mineure — répète la dernière action d’un joueur.",
        "Aurore Chronique — ralentit toutes les créatures proches."
      ],

      loot: [
        "Sablier de Kron’Thal",
        "Fragment d’Âge Perdu",
        "Tome des Paradoxes",
        "Gemme des Millénaires"
      ],

      phaseTriggers: [
        "À 0 HP → fracturation temporelle massive.",
        "Les clones instables apparaissent autour de lui."
      ]
    },

    // ---------------------------------------------------------------------
    // PHASE 2 — KRON'THAL FRACTURÉ, SEIGNEUR DES PARADOXES
    // ---------------------------------------------------------------------
    {
      key: "phase-2",
      name: "Kron’Thal Fracturé — Seigneur des Paradoxes",
      cr: 25,
      role: "mythic-controller",

      biomes: [
        "time-rifts",
        "temporal-storms",
        "non-places",
        "fractured-time"
      ],

      description:
        "Le sorcier devient instable, existant en plusieurs états temporels. " +
        "Il contrôle les clones, efface des tours, et manipule des tempêtes chrono-fractales.",

      tactics: [
        "Manipuler les clones pour absorber les attaques.",
        "Effacer les rounds des joueurs.",
        "Créer un chaos temporel constant."
      ],

      stats: {
        hp: 700,
        ac: 25,
        atk: "+20",
        dmg: "5d10+12 (temporal distortion)",
        speed: "40 ft, hover 20 ft"
      },

      abilities: [
        "Effondrement Temporel — supprime un tour complet (1x/combat).",
        "Âge Inversé — renforce ou affaiblit une cible au hasard.",
        "Clones Paradoxaux — 2 doubles instables.",
        "Flash du Millénaire — téléportation + attaque bonus.",
        "Pause Globale — arrête toutes les créatures 1 tour (recharge 6).",
        "Stabilité Impossible — régénère 20 PV tant que les clones existent."
      ],

      loot: [
        "Cœur Paradoxal de Kron’Thal",
        "Chronoblade du Seigneur du Temps",
        "Ancre Temporelle",
        "Graine d’Âge Infini"
      ]
    }
  ]
};

export default KRONTHAL;
