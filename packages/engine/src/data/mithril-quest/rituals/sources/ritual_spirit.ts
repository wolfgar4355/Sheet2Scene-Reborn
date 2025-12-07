// @ts-nocheck
import type { Ritual } from "../schema";

export const RITUAL_SPIRIT: Ritual[] = [
  {
    id: "summon_ancestor",
    label: "Invocation des Ancêtres",
    school: "spirit",
    level: 6,
    castTime: "3 heures",
    ingredients: ["masque tribal", "braises"],
    description:
      "Invoque l’esprit d’un ancêtre pour guider, protéger ou conseiller."
  },
  {
    id: "ward_spirit",
    label: "Cercle Spirituel",
    school: "spirit",
    level: 5,
    castTime: "2 heures",
    ingredients: ["poudre de craie", "huile parfumée"],
    description:
      "Crée une zone où les esprits hostiles ne peuvent pénétrer."
  },
  {
    id: "appease_restless",
    label: "Apaisement des Tourmentés",
    school: "spirit",
    level: 4,
    castTime: "1 heure",
    ingredients: ["offrande", "fibres végétales"],
    description:
      "Apaise des esprits tourmentés et les empêche d’agir pendant un temps."
  },
  {
    id: "totem_guard",
    label: "Totem Gardien",
    school: "spirit",
    level: 7,
    castTime: "4 heures",
    ingredients: ["totem sculpté", "encens ancien"],
    description:
      "Lie un esprit protecteur à un objet totémique."
  },
  {
    id: "dream_walk",
    label: "Marche Onirique",
    school: "spirit",
    level: 8,
    castTime: "6 heures",
    ingredients: ["pierre de lune", "plume blanche"],
    description:
      "Permet d’entrer dans les rêves d’un individu et d’y communiquer."
  },
  {
    id: "veil_between",
    label: "Voile des Mondes",
    school: "spirit",
    level: 9,
    castTime: "1 nuit",
    ingredients: ["encens spirituel", "cloche creuse"],
    description:
      "Affaiblit la frontière entre vivants et esprits, permettant des passages temporaires."
  },
  {
    id: "call_minor_spirit",
    label: "Appel de Petit Esprit",
    school: "spirit",
    level: 3,
    castTime: "1 heure",
    ingredients: ["sel", "os creux"],
    description:
      "Invoque un petit esprit pour des tâches simples ou porter un message."
  },
  {
    id: "spirit_binding",
    label: "Lien Spirituel",
    school: "spirit",
    level: 7,
    castTime: "4 heures",
    ingredients: ["fils de soie", "talisman personnel"],
    description:
      "Unit temporairement l’âme de deux êtres pour partager émotions et visions."
  }
];
