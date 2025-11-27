import type { MythicBoss } from "../types";

export const VOID_LICH: MythicBoss = {
  id: "void-lich",
  name: "Sazhul",
  epithet: "Liche du Néant",

  category: "undead",
  encounterDifficulty: "mythic",
  aiProfile: "void-caster",

  tags: ["undead", "mythic", "void", "astral", "necrotic", "caster"],
  biomes: ["astral-void", "obsidian-desert", "crystal-caverns", "floating-cathedral"],

  summary:
    "Un archiliche cosmique dont les orbites renferment des singularités violettes absorbant la lumière. "
    + "Maître du vide instable, de la gravité distordue et d'une magie entropique ancestrale.",

  phases: [
    // ----------------------------------------------------------
    // PHASE 1 — ARCHILICHE DU NÉANT
    // ----------------------------------------------------------
    {
      key: "phase-1",
      name: "Archiliche du Néant",
      cr: 18,
      role: "mythic-caster",

      description:
        "Sazhul contrôle le terrain avec des zones de vide instables, se téléporte et isole les cibles sensibles.",

      tactics: [
        "Cibler lanceurs et soigneurs d'abord.",
        "Se téléporter pour rester hors de portée.",
        "Créer des zones de vide instables.",
        "Forcer les PJ à se regrouper."
      ],

      stats: {
        hp: 275,
        ac: 19,
        atk: "+15",
        dmg: "4d10+8 (void bolt)",
        speed: "30 ft, hover 20 ft"
      },

      abilities: [
        "Aura de Néant",
        "Faille Gravitationnelle",
        "Déflagration de Vide",
        "Téléportation d’Ombre",
        "Résistance Légendaire (3/jour)"
      ],

      loot: [
        "Phylactère fracturé",
        "Grimoire du Néant",
        "Fragments d’Obsidienne Stellaire"
      ],

      phaseTriggers: [
        "À 0 HP → Sazhul se dissout en singularité et renaît sous une forme de noyau de vide."
      ]
    },

    // ----------------------------------------------------------
    // PHASE 2 — NOYAU SINGULIER
    // ----------------------------------------------------------
    {
      key: "phase-2",
      name: "Noyau Singulier",
      cr: 20,
      role: "mythic-controller",

      description:
        "Lorsque son corps se désintègre, l’âme de Sazhul se condense en un noyau de vide pur entouré d’anneaux runiques.",

      tactics: [
        "Attirer puis disperser le groupe.",
        "Drainer plusieurs cibles simultanément.",
        "Utiliser explosions gravitationnelles en boucle."
      ],

      stats: {
        hp: 320,
        ac: 21,
        atk: "+17",
        dmg: "5d10+10 (void tendrils) + entropy burn",
        speed: "hover 40 ft, teleport 30 ft"
      },

      abilities: [
        "Gravité Inversée",
        "Faille Gravitationnelle Suprême",
        "Noyaux Entropiques",
        "Drain d’Essence",
        "Onde de Néant (Ultime)"
      ],

      loot: [
        "Cœur du Vide Pur",
        "Anneau de l’Entropie",
        "Fragment d’Étoile Maudite"
      ]
    }
  ]
};

export default VOID_LICH;
