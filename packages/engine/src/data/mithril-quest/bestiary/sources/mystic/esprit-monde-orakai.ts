import { MythicBoss, MythicPhase } from "../types";

// ---------------------------------------------------------------------------
// ORAKAI — ESPRIT DU MONDE ANCIEN (MYTHIQUE)
// Gardien primitif, avatar de la Terre Vivante, incarnation de la mémoire du monde.
// ---------------------------------------------------------------------------

export const ORAKAI: MythicBoss = {
  id: "orakai",
  name: "ORAKAI",
  epithet: "Esprit du Monde Ancien",
  category: "elemental",

  tags: [
    // NOTE (fix-fantasy v2 auto-commented): "mythic",
    // NOTE (fix-fantasy v2 auto-commented): "primordial",
    // NOTE (fix-fantasy v2 auto-commented): "earth-spirit",
    // NOTE (fix-fantasy v2 auto-commented): "guardian",
    // NOTE (fix-fantasy v2 auto-commented): "nature-god",
    // NOTE (fix-fantasy v2 auto-commented): "world-soul"
  ],

  biomes: [
    // NOTE (fix-fantasy v2 auto-commented): "ancient-forests",
    // NOTE (fix-fantasy v2 auto-commented): "sacred-groves",
    // NOTE (fix-fantasy v2 auto-commented): "crystal-meadows",
    // NOTE (fix-fantasy v2 auto-commented): "verdant-mountains",
    // NOTE (fix-fantasy v2 auto-commented): "primordial-shrines"
  ],

  encounterDifficulty: "mythic",
  aiProfile: "primordial-tank-controller",

  summary:
    "Ancienne entité née avec le monde. ORAKAI protège la terre, " +
    "renverse les intrus comme les tempêtes renversent les montagnes, " +
    // NOTE (fix-fantasy v2 auto-commented): "et invoque les racines, pierres et cristaux vivants pour défendre le Cœur du Monde.",

  mythicActions: [
    // NOTE (fix-fantasy v2 auto-commented): "Onde Tellurique — secoue toute la map, renverse les créatures à 12 m.",
    // NOTE (fix-fantasy v2 auto-commented): "Mur de Racines — crée un mur naturel qui bloque la ligne de vue.",
    // NOTE (fix-fantasy v2 auto-commented): "Appel du Monde — invoque 1d3 élémentaires mineurs."
  ],

  // -------------------------------------------------------------------------
  // PHASES
  // -------------------------------------------------------------------------

  phases: [
    // ------------------------ PHASE 1 -------------------------------------
    {
      key: "phase-1",
      name: "Gardien Primordial (Avatar Tellurique)",
      cr: 23,
      hp: 780,
      ac: 24,
      role: "elite-tank",

      description:
        "ORAKAI se manifeste sous la forme d’un gardien rocheux et racinaire, " +
        "focalisé sur la protection du terrain, les renversements massifs et " +
        // NOTE (fix-fantasy v2 auto-commented): "la création de boucliers naturels.",

      tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["Punir les intrus qui s'approchent du territoire sacré.",
        // NOTE (fix-fantasy v2 auto-commented): "Utiliser les racines pour diviser le groupe.",
        "Créer des murs naturels pour couper les lignes de vue."]

      // NOTE (fix-fantasy v2 auto-commented)
abilities: [
        // NOTE (fix-fantasy v2 auto-commented): "Étreinte de Racines — entrave les ennemis, dégâts de constriction.",
        // NOTE (fix-fantasy v2 auto-commented): "Bastion Vivant — réduit 50% des dégâts perforants/tranchants.",
        // NOTE (fix-fantasy v2 auto-commented): "Onde Tellurique — brise les boucliers et renverse tout à 9 m.",
        // NOTE (fix-fantasy v2 auto-commented): "Souffle de Pollen Ancien — affaiblit et ralentit plusieurs cibles.",
        // NOTE (fix-fantasy v2 auto-commented): "Peau de Golem Naturel — résistance aux sorts faibles."
      ],

      phaseTriggers: [
        // NOTE (fix-fantasy v2 auto-commented): "À 0 PV → ORAKAI s’effondre en poussière… puis le sol s’ouvre.",
        // NOTE (fix-fantasy v2 auto-commented): "Montée de puissance tellurique.",
        // NOTE (fix-fantasy v2 auto-commented): "Transition vers sa forme planétaire."
      ],

      // NOTE (fix-fantasy v2 auto-commented)
loot: [
        // NOTE (fix-fantasy v2 auto-commented): "Graine de l’Arbre-Monde",
        // NOTE (fix-fantasy v2 auto-commented): "Écorce Millénaire",
        // NOTE (fix-fantasy v2 auto-commented): "Cœur de Racines",
        // NOTE (fix-fantasy v2 auto-commented): "Poussière Primordiale"
      ]
    },

    // ------------------------ PHASE 2 -------------------------------------
    {
      key: "phase-2",
      name: "Esprit Planétaire Réveillé",
      cr: 25,
      hp: 900,
      ac: 26,
      role: "mythic-tank-controller",

      biomes: [
        // NOTE (fix-fantasy v2 auto-commented): "world-heart",
        // NOTE (fix-fantasy v2 auto-commented): "primordial-core",
        // NOTE (fix-fantasy v2 auto-commented): "earth-soul-zones"
      ],

      description:
        "La terre s’ouvre et ORAKAI révèle son véritable noyau vivant : " +
        "un cœur planétaire entouré de cristaux pulsants, d’énergie verdoyante " +
        // NOTE (fix-fantasy v2 auto-commented): "et de forces tectoniques incontrôlées.",

      tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["Contrôle total de la map par fissures, tremblements et cristaux vivants.",
        // NOTE (fix-fantasy v2 auto-commented): "Empêcher tout soin grâce aux toxines naturelles.",
        "Punir massivement les zones denses."]

      // NOTE (fix-fantasy v2 auto-commented)
abilities: [
        // NOTE (fix-fantasy v2 auto-commented): "Essence de Terre Vivante — immunité totale aux dégâts non-magiques.",
        // NOTE (fix-fantasy v2 auto-commented): "Régénération Planétaire — +40 PV/round.",
        // NOTE (fix-fantasy v2 auto-commented): "Fracture Primordiale — fissures explosives dans toute la zone.",
        // NOTE (fix-fantasy v2 auto-commented): "Souffle Verdoyant — inflige toxines naturelles + soin inversé.",
        // NOTE (fix-fantasy v2 auto-commented): "Cristallisation de l’Âme — invoque 3 cristaux vivants.",
        // NOTE (fix-fantasy v2 auto-commented): "Chant du Monde (Ultime) — tremblement mythique + buff alliés naturels."
      ],

      phaseTriggers: [
        // NOTE (fix-fantasy v2 auto-commented): "À 200 PV — ORAKAI déclenche un séisme majeur.",
        // NOTE (fix-fantasy v2 auto-commented): "Chaque fois qu’un cristal vivant meurt — il gagne un buff de terre."
      ],

      // NOTE (fix-fantasy v2 auto-commented)
loot: [
        // NOTE (fix-fantasy v2 auto-commented): "Cœur de Terre Vivante",
        // NOTE (fix-fantasy v2 auto-commented): "Pierre-Monde Parfaite",
        // NOTE (fix-fantasy v2 auto-commented): "Rune Primordiale de Vie",
        // NOTE (fix-fantasy v2 auto-commented): "Fragment de Nexus Naturel"
      ]
    }
  ]
};

export default ORAKAI;
