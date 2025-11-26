import { MythicBoss, MythicPhase } from "../../types";

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
    "mythic",
    "primordial",
    "earth-spirit",
    "guardian",
    "nature-god",
    "world-soul"
  ],

  biomes: [
    "ancient-forests",
    "sacred-groves",
    "crystal-meadows",
    "verdant-mountains",
    "primordial-shrines"
  ],

  encounterDifficulty: "mythic",
  aiProfile: "primordial-tank-controller",

  summary:
    "Ancienne entité née avec le monde. ORAKAI protège la terre, " +
    "renverse les intrus comme les tempêtes renversent les montagnes, " +
    "et invoque les racines, pierres et cristaux vivants pour défendre le Cœur du Monde.",

  mythicActions: [
    "Onde Tellurique — secoue toute la map, renverse les créatures à 12 m.",
    "Mur de Racines — crée un mur naturel qui bloque la ligne de vue.",
    "Appel du Monde — invoque 1d3 élémentaires mineurs."
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
        "la création de boucliers naturels.",

      tactics: [
        "Punir les intrus qui s'approchent du territoire sacré.",
        "Utiliser les racines pour diviser le groupe.",
        "Créer des murs naturels pour couper les lignes de vue."
      ],

      abilities: [
        "Étreinte de Racines — entrave les ennemis, dégâts de constriction.",
        "Bastion Vivant — réduit 50% des dégâts perforants/tranchants.",
        "Onde Tellurique — brise les boucliers et renverse tout à 9 m.",
        "Souffle de Pollen Ancien — affaiblit et ralentit plusieurs cibles.",
        "Peau de Golem Naturel — résistance aux sorts faibles."
      ],

      phaseTriggers: [
        "À 0 PV → ORAKAI s’effondre en poussière… puis le sol s’ouvre.",
        "Montée de puissance tellurique.",
        "Transition vers sa forme planétaire."
      ],

      loot: [
        "Graine de l’Arbre-Monde",
        "Écorce Millénaire",
        "Cœur de Racines",
        "Poussière Primordiale"
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
        "world-heart",
        "primordial-core",
        "earth-soul-zones"
      ],

      description:
        "La terre s’ouvre et ORAKAI révèle son véritable noyau vivant : " +
        "un cœur planétaire entouré de cristaux pulsants, d’énergie verdoyante " +
        "et de forces tectoniques incontrôlées.",

      tactics: [
        "Contrôle total de la map par fissures, tremblements et cristaux vivants.",
        "Empêcher tout soin grâce aux toxines naturelles.",
        "Punir massivement les zones denses."
      ],

      abilities: [
        "Essence de Terre Vivante — immunité totale aux dégâts non-magiques.",
        "Régénération Planétaire — +40 PV/round.",
        "Fracture Primordiale — fissures explosives dans toute la zone.",
        "Souffle Verdoyant — inflige toxines naturelles + soin inversé.",
        "Cristallisation de l’Âme — invoque 3 cristaux vivants.",
        "Chant du Monde (Ultime) — tremblement mythique + buff alliés naturels."
      ],

      phaseTriggers: [
        "À 200 PV — ORAKAI déclenche un séisme majeur.",
        "Chaque fois qu’un cristal vivant meurt — il gagne un buff de terre."
      ],

      loot: [
        "Cœur de Terre Vivante",
        "Pierre-Monde Parfaite",
        "Rune Primordiale de Vie",
        "Fragment de Nexus Naturel"
      ]
    }
  ]
};

export default ORAKAI;
