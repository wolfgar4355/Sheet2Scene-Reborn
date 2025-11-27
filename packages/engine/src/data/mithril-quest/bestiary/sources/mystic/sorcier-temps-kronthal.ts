import { MythicBoss } from "../types";

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
    // NOTE (fix-fantasy v2 auto-commented): "mythic",
    // NOTE (fix-fantasy v2 auto-commented): "time",
    // NOTE (fix-fantasy v2 auto-commented): "arcane",
    // NOTE (fix-fantasy v2 auto-commented): "chronomancer",
    // NOTE (fix-fantasy v2 auto-commented): "paradox",
    // NOTE (fix-fantasy v2 auto-commented): "time-lord"
  ],

  biomes: [
    // NOTE (fix-fantasy v2 auto-commented): "time-rifts",
    // NOTE (fix-fantasy v2 auto-commented): "ancient-labs",
    // NOTE (fix-fantasy v2 auto-commented): "crystal-spires",
    // NOTE (fix-fantasy v2 auto-commented): "arcane-ruins",
    // NOTE (fix-fantasy v2 auto-commented): "temporal-storms"
  ],

  summary:
    "Un mage qui manipule initiative, actions, clones temporels et paradoxes. " +
    // NOTE (fix-fantasy v2 auto-commented): "Ses pouvoirs peuvent effacer des événements entiers ou rejouer un round complet.",

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
        // NOTE (fix-fantasy v2 auto-commented): "manipule les points faibles temporels du champ de bataille.",

      tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["Cibler les joueurs trop rapides.",
        // NOTE (fix-fantasy v2 auto-commented): "Annuler les actions clés.",
        "Désorganiser le combat avec du déplacement temporel."]

      stats: {
        hp: 520,
        ac: 22,
        atk: "+17",
        dmg: "4d8+9 (arcane bolt) + time ripple",
        speed: "30 ft, blink 15 ft (bonus)"
      },

      // NOTE (fix-fantasy v2 auto-commented)
abilities: [
        // NOTE (fix-fantasy v2 auto-commented): "Rebond du Temps — renvoie 1 attaque vers l’attaquant (1/round).",
        // NOTE (fix-fantasy v2 auto-commented): "Vieillir d’Âge — affaiblit ou fait vieillir une cible.",
        // NOTE (fix-fantasy v2 auto-commented): "Double Incantation — lance 2 sorts moyens.",
        // NOTE (fix-fantasy v2 auto-commented): "Boucle Temporelle Mineure — répète la dernière action d’un joueur.",
        // NOTE (fix-fantasy v2 auto-commented): "Aurore Chronique — ralentit toutes les créatures proches."
      ],

      // NOTE (fix-fantasy v2 auto-commented)
loot: [
        // NOTE (fix-fantasy v2 auto-commented): "Sablier de Kron’Thal",
        // NOTE (fix-fantasy v2 auto-commented): "Fragment d’Âge Perdu",
        // NOTE (fix-fantasy v2 auto-commented): "Tome des Paradoxes",
        // NOTE (fix-fantasy v2 auto-commented): "Gemme des Millénaires"
      ],

      phaseTriggers: [
        // NOTE (fix-fantasy v2 auto-commented): "À 0 HP → fracturation temporelle massive.",
        // NOTE (fix-fantasy v2 auto-commented): "Les clones instables apparaissent autour de lui."
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
        // NOTE (fix-fantasy v2 auto-commented): "time-rifts",
        // NOTE (fix-fantasy v2 auto-commented): "temporal-storms",
        // NOTE (fix-fantasy v2 auto-commented): "non-places",
        // NOTE (fix-fantasy v2 auto-commented): "fractured-time"
      ],

      description:
        "Le sorcier devient instable, existant en plusieurs états temporels. " +
        // NOTE (fix-fantasy v2 auto-commented): "Il contrôle les clones, efface des tours, et manipule des tempêtes chrono-fractales.",

      tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["Manipuler les clones pour absorber les attaques.",
        // NOTE (fix-fantasy v2 auto-commented): "Effacer les rounds des joueurs.",
        "Créer un chaos temporel constant."]

      stats: {
        hp: 700,
        ac: 25,
        atk: "+20",
        dmg: "5d10+12 (temporal distortion)",
        speed: "40 ft, hover 20 ft"
      },

      // NOTE (fix-fantasy v2 auto-commented)
abilities: [
        // NOTE (fix-fantasy v2 auto-commented): "Effondrement Temporel — supprime un tour complet (1x/combat).",
        // NOTE (fix-fantasy v2 auto-commented): "Âge Inversé — renforce ou affaiblit une cible au hasard.",
        // NOTE (fix-fantasy v2 auto-commented): "Clones Paradoxaux — 2 doubles instables.",
        // NOTE (fix-fantasy v2 auto-commented): "Flash du Millénaire — téléportation + attaque bonus.",
        // NOTE (fix-fantasy v2 auto-commented): "Pause Globale — arrête toutes les créatures 1 tour (recharge 6).",
        // NOTE (fix-fantasy v2 auto-commented): "Stabilité Impossible — régénère 20 PV tant que les clones existent."
      ],

      // NOTE (fix-fantasy v2 auto-commented)
loot: [
        // NOTE (fix-fantasy v2 auto-commented): "Cœur Paradoxal de Kron’Thal",
        // NOTE (fix-fantasy v2 auto-commented): "Chronoblade du Seigneur du Temps",
        // NOTE (fix-fantasy v2 auto-commented): "Ancre Temporelle",
        // NOTE (fix-fantasy v2 auto-commented): "Graine d’Âge Infini"
      ]
    }
  ]
};

export default KRONTHAL;
