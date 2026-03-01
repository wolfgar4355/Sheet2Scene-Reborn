// @ts-nocheck
// ============================================================================
// 🧭 PLAYER BACKGROUNDS — MITHRIL-QUEST ENGINE
// ============================================================================
//
// Les “Backgrounds” définissent l’histoire, les ressources et les talents
// d’un personnage avant le début de son aventure.
//
// Ils influencent :
// - les compétences suggérées (MQ_SKILLS)
// - les outils appris (MQ_TOOLS)
// - les langues bonus (MQ_LANGUAGES)
// - l’équipement et la richesse de départ
//
// ============================================================================

export interface MQ_BackgroundDef {
  key: string;
  label: string;
  description: string;
  suggestedSkills: string[];      // keys from MQ_SKILLS
  suggestedTools?: string[];      // outils, kits, instruments
  suggestedLanguages?: string[];  // MQ_LANGUAGES keys
  startingWealth?: string;        // ex: "10 pièces d'or"
  startingGear?: string[];        // équipement de départ
}

export const MQ_BACKGROUNDS: MQ_BackgroundDef[] = [

  // --------------------------------------------------------------------------
  // 🛡️ Gardien de Village
  // --------------------------------------------------------------------------
  {
    key: "village-guardian",
    label: "Gardien de Village",
    description:
      "Vous protégiez un petit village contre les bêtes, bandits et dangers des chemins.",
    suggestedSkills: ["survival", "athletics", "perception"],
    suggestedTools: ["kit-chasseur"],
    startingWealth: "10 pièces d'argent",
    startingGear: [
      "Lance simple OU arc court avec 20 flèches",
      "Cape de voyage",
      "Symbole de votre village (talisman, ruban, broche)",
    ],
  },

  // --------------------------------------------------------------------------
  // 📚 Apprenti Arcaniste
  // --------------------------------------------------------------------------
  {
    key: "arcane-apprentice",
    label: "Apprenti Arcaniste",
    description:
      "Vous avez étudié sous la tutelle d’un mage, dans une tour, une académie ou un sanctuaire caché.",
    suggestedSkills: ["arcana", "history"],
    suggestedTools: ["matériel-écriture", "trousse-alchimie"],
    suggestedLanguages: ["arcanique"],
    startingWealth: "15 pièces d'or",
    startingGear: [
      "Grimoire simple",
      "Composants basiques de sorts",
      "Robe de mage usée",
    ],
  },

  // --------------------------------------------------------------------------
  // ✝️ Acolyte de Temple
  // --------------------------------------------------------------------------
  {
    key: "temple-acolyte",
    label: "Acolyte de Temple",
    description:
      "Vous serviez un temple ou un sanctuaire, en tant que novice, prêtre ou assistant.",
    suggestedSkills: ["religion", "insight", "medicine"],
    suggestedLanguages: ["liturgique"],
    startingWealth: "5 pièces d'or",
    startingGear: [
      "Symbole sacré",
      "Livre de prières",
      "Habits religieux simples",
    ],
  },

  // --------------------------------------------------------------------------
  // 🐀 Enfant des Rues
  // --------------------------------------------------------------------------
  {
    key: "street-urchin",
    label: "Enfant des Rues",
    description:
      "Vous avez grandi dans les ruelles, survivant par la ruse, la fuite et les petits larcins.",
    suggestedSkills: ["stealth", "sleight-of-hand", "deception"],
    startingWealth: "5 pièces d'argent",
    startingGear: [
      "Couteau caché",
      "Talisman porte-bonheur",
      "Vieux manteau élimé",
    ],
  },

  // --------------------------------------------------------------------------
  // 👑 Noble de Naissance
  // --------------------------------------------------------------------------
  {
    key: "noble-born",
    label: "Noble de Naissance",
    description:
      "Vous appartenez à une maison noble, que vous la serviez ou la rejetiez.",
    suggestedSkills: ["persuasion", "history", "insight"],
    startingWealth: "50 pièces d'or",
    startingGear: [
      "Bagues ou sceau de famille",
      "Tenue de noble",
      "Lettre d'introduction",
    ],
  },

];
