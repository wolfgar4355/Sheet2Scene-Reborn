import { MythicBoss } from "../types";

// ---------------------------------------------------------------------------
// VOID LICH — SAZHUL, ARCHILICHE DU NÉANT
// Boss mythique en 2 phases — Contrôleur du Vide Astral
// ---------------------------------------------------------------------------

export const VOID_LICH: MythicBoss = {
  id: "void-lich",
  name: "Sazhul",
  epithet: "Liche du Néant",

  category: "undead",
  encounterDifficulty: "mythic",
  aiProfile: "void-caster",

  tags: [
    // NOTE (fix-fantasy v2 auto-commented): "undead",
    // NOTE (fix-fantasy v2 auto-commented): "mythic",
    // NOTE (fix-fantasy v2 auto-commented): "void",
    // NOTE (fix-fantasy v2 auto-commented): "astral",
    // NOTE (fix-fantasy v2 auto-commented): "necrotic",
    // NOTE (fix-fantasy v2 auto-commented): "caster"
  ],

  biomes: [
    // NOTE (fix-fantasy v2 auto-commented): "astral-void",
    // NOTE (fix-fantasy v2 auto-commented): "obsidian-desert",
    // NOTE (fix-fantasy v2 auto-commented): "crystal-caverns",
    // NOTE (fix-fantasy v2 auto-commented): "floating-cathedral"
  ],

  summary:
    // NOTE (fix-fantasy v2 auto-commented): "Un archiliche cosmique dont les orbites renferment des singularités violettes "
    + "absorbant la lumière. Maître du vide instable, de la gravité distordue et de "
    + "la transposition dimensionnelle, il manipule l’espace pour annihiler les vivants.",

  // -------------------------------------------------------------------------
  // PHASES
  // -------------------------------------------------------------------------
  phases: [

    // ---------------------------------------------------------------------
    // PHASE 1 — ARCHILICHE DU NÉANT
    // ---------------------------------------------------------------------
    {
      key: "phase-1",
      name: "Archiliche du Néant",
      cr: 18,

      role: "mythic-caster",

      description:
        // NOTE (fix-fantasy v2 auto-commented): "Sazhul apparaît comme un squelette élancé dont les orbites abritent des "
        + "singularités violettes absorbant toute lumière. Il contrôle le terrain, "
        + "se téléporte et cible prioritairement les lanceurs et soigneurs.",

      tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["Cibler lanceurs et soigneurs d'abord.",
        // NOTE (fix-fantasy v2 auto-commented): "Se téléporter pour rester hors de portée.",
        // NOTE (fix-fantasy v2 auto-commented): "Créer des zones de vide instables.",
        "Forcer les PJ à se regrouper."]

      stats: {
        hp: 275,
        ac: 19,
        atk: "+15",
        dmg: "4d10+8 (void bolt)",
        speed: "30 ft, hover 20 ft"
      },

      // NOTE (fix-fantasy v2 auto-commented)
abilities: [
        // NOTE (fix-fantasy v2 auto-commented): "Aura de Néant — drain 1d6 PV/round pour les créatures à 6 m.",
        // NOTE (fix-fantasy v2 auto-commented): "Faille Gravitationnelle — attire ou repousse une cible à 6 m.",
        // NOTE (fix-fantasy v2 auto-commented): "Déflagration de Vide — dégâts force/nécrotique à distance.",
        // NOTE (fix-fantasy v2 auto-commented): "Téléportation d’Ombre — téléportation 18 m vers un lieu obscur.",
        // NOTE (fix-fantasy v2 auto-commented): "Résistance Légendaire (3/jour)."
      ],

      // NOTE (fix-fantasy v2 auto-commented)
loot: [
        // NOTE (fix-fantasy v2 auto-commented): "Phylactère Fracturé de Sazhul",
        // NOTE (fix-fantasy v2 auto-commented): "Grimoire du Néant",
        // NOTE (fix-fantasy v2 auto-commented): "Fragments d’Obsidienne Stellaire",
        // NOTE (fix-fantasy v2 auto-commented): "Carte Partielle d’un Donjon Astral"
      ],

      phaseTriggers: [
        // NOTE (fix-fantasy v2 auto-commented): "À 0 HP → Sazhul se dissout en singularité et renaît sous une forme de noyau de vide."
      ]
    },

    // ---------------------------------------------------------------------
    // PHASE 2 — CRÂNE SINGULIER
    // ---------------------------------------------------------------------
    {
      key: "phase-2",
      name: "Noyau Singulier",
      cr: 20,

      role: "mythic-controller",

      description:
        // NOTE (fix-fantasy v2 auto-commented): "Lorsque son corps se désintègre, l’âme de Sazhul se condense en un noyau "
        + "de vide pur entouré d’anneaux runiques projetant des éclairs d’énergie astrale.",

      tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["Inonder la map de zones instables.",
        // NOTE (fix-fantasy v2 auto-commented): "Attirer puis disperser le groupe.",
        // NOTE (fix-fantasy v2 auto-commented): "Drainer plusieurs cibles simultanément.",
        "Utiliser explosions gravitationnelles en boucle."]

      stats: {
        hp: 320,
        ac: 21,
        atk: "+17",
        dmg: "5d10+10 (void tendrils) + entropy burn",
        speed: "hover 40 ft, teleport 30 ft"
      },

      // NOTE (fix-fantasy v2 auto-commented)
abilities: [
        // NOTE (fix-fantasy v2 auto-commented): "Gravité Inversée — zone 6 m, renverse, dégâts ++.",
        // NOTE (fix-fantasy v2 auto-commented): "Faille Gravitationnelle Suprême — zone 12 m, projet violent + étourdissement.",
        // NOTE (fix-fantasy v2 auto-commented): "Noyaux Entropiques — 3 orbes d’énergie orbitent autour du boss.",
        // NOTE (fix-fantasy v2 auto-commented): "Drain d’Essence — absorbe 10 PV à 3 cibles.",
        // NOTE (fix-fantasy v2 auto-commented): "Onde de Néant (Ultime) — explosion de zone détruisant les protections."
      ],

      // NOTE (fix-fantasy v2 auto-commented)
loot: [
        // NOTE (fix-fantasy v2 auto-commented): "Cœur du Vide Pur",
        // NOTE (fix-fantasy v2 auto-commented): "Anneau de l’Entropie",
        // NOTE (fix-fantasy v2 auto-commented): "Main de Sazhul",
        // NOTE (fix-fantasy v2 auto-commented): "Fragment d’Étoile Maudite"
      ]
    }
  ]
};

export default VOID_LICH;
