// lib/s2s/fantasy/player/backgrounds.ts

export interface FantasyBackgroundDef {
  key: string;
  label: string;
  description: string;
  suggestedSkills: string[];  // keys from FANTASY_SKILLS
  suggestedTools?: string[];  // outils, instruments, kits
  suggestedLanguages?: string[];
  startingWealth?: string;    // ex: "10 pièces d'or"
  startingGear?: string[];    // description libre
}

export const FANTASY_BACKGROUNDS: FantasyBackgroundDef[] = [
  {
    key: "village-guardian",
    label: "Gardien de Village",
    description:
      "Vous protégiez un petit village contre les bêtes, bandits et dangers des chemins.",
    suggestedSkills: ["survival", "athletics", "perception"],
    suggestedTools: ["outils de chasseur"],
    startingWealth: "10 pièces d'argent",
    startingGear: [
      "Lance simple ou arc court avec 20 flèches",
      "Cape de voyage",
      "Symbole de votre village (talisman, ruban, broche)",
    ],
  },
  {
    key: "arcane-apprentice",
    label: "Apprenti Arcaniste",
    description:
      "Vous avez étudié sous la tutelle d’un mage, dans une tour, une académie ou un sanctuaire caché.",
    suggestedSkills: ["arcana", "history"],
    suggestedTools: ["matériel d'écriture", "trousse d'alchimie"],
    suggestedLanguages: ["langue arcanique"],
    startingWealth: "15 pièces d'or",
    startingGear: [
      "Grimoire simple",
      "Composants basiques de sorts",
      "Robe de mage usée",
    ],
  },
  {
    key: "temple-acolyte",
    label: "Acolyte de Temple",
    description:
      "Vous serviez un temple ou un sanctuaire, en tant que novice, prêtre ou assistant.",
    suggestedSkills: ["religion", "insight", "medicine"],
    suggestedLanguages: ["langue liturgique"],
    startingWealth: "5 pièces d'or",
    startingGear: [
      "Symbole sacré",
      "Livre de prières",
      "Habits religieux simples",
    ],
  },
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
