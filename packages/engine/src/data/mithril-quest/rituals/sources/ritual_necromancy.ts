import type { Ritual } from "../schema.ts";

export const RITUALS_NECRO: Ritual[] = [
  {
    id: "raise_dead_soft",
    label: "Réveil des Défunts",
    school: "necromancy",
    level: 5,
    castTime: "3 heures",
    ingredients: ["os propre", "sable noir", "bougie funèbre"],
    description:
      "Ramène un mort sous une forme docile, consciente mais silencieuse, pour obtenir informations ou aide simple."
  },
  {
    id: "wail_grave",
    label: "Lamentation de la Tombe",
    school: "necromancy",
    level: 8,
    castTime: "6 heures",
    ingredients: ["urne", "cendre humaine"],
    description:
      "Libère une vague d'énergie morbide purifiant ou tourmentant les esprits proches."
  },
  {
    id: "bind_undead",
    label: "Lien Inerte",
    school: "necromancy",
    level: 6,
    castTime: "2 heures",
    ingredients: ["chaîne de fer", "sang du lanceur"],
    description:
      "Permet de contrôler un mort-vivant spécifique de force modérée."
  },
  {
    id: "speak_with_dead_ritual",
    label: "Voix des Ancêtres",
    school: "necromancy",
    level: 4,
    castTime: "1 heure",
    ingredients: ["crâne", "encens d'os"],
    description:
      "Permet à un esprit lié à un corps de répondre à trois questions."
  },
  {
    id: "curse_ground",
    label: "Malédiction du Sol",
    school: "necromancy",
    level: 7,
    castTime: "4 heures",
    ingredients: ["sel noir", "pierre tombale"],
    description:
      "Rend une zone maudite, drainant énergie et vitalité des intrus."
  },
  {
    id: "extract_soul",
    label: "Extraction d'Âme",
    school: "necromancy",
    level: 9,
    castTime: "6 heures",
    ingredients: ["gemme vide", "dague rituelle"],
    description:
      "Arrache une âme affaiblie pour la conserver ou la protéger."
  },
  {
    id: "death_ward",
    label: "Marque d’Outre-Tombe",
    school: "necromancy",
    level: 5,
    castTime: "2 heures",
    ingredients: ["poussière d'os", "sang"],
    description:
      "Appose une protection contre la mort violente ou les effets de mort instantanée."
  },
  {
    id: "revenant_call",
    label: "Appel Revenant",
    school: "necromancy",
    level: 8,
    castTime: "6 heures",
    ingredients: ["terre de tombe", "âme affligée"],
    description:
      "Invoque un esprit vengeur animé par un ancien serment."
  }
];
