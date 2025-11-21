import type { Ritual } from "../schema.ts";

export const RITUALS_NATURE: Ritual[] = [
  {
    id: "calm_storm",
    label: "Apaiser la Tempête",
    school: "nature",
    level: 7,
    castTime: "4 heures",
    ingredients: ["plumes", "eau de pluie", "rameau d’if"],
    description:
      "Dissipe une tempête locale et stabilise la météo."
  },
  {
    id: "wild_growth",
    label: "Croissance Sauvage",
    school: "nature",
    level: 5,
    castTime: "2 heures",
    ingredients: ["semences", "terre fertile"],
    description:
      "Accélère la croissance d’une forêt ou restaure un écosystème endommagé."
  },
  {
    id: "beast_bond",
    label: "Pacte Animal",
    school: "nature",
    level: 4,
    castTime: "1 heure",
    ingredients: ["fourrure", "sang animal", "encens naturel"],
    description:
      "Lie un gardien animal à un druide ou rôdeur."
  },
  {
    id: "call_grove",
    label: "Appel des Anciens Bois",
    school: "nature",
    level: 6,
    castTime: "3 heures",
    ingredients: ["racine sacrée", "pierre moussu"],
    description:
      "Réveille un esprit sylvestre endormi pour protégerou guider."
  },
  {
    id: "shape_weather",
    label: "Guider les Saisons",
    school: "nature",
    level: 8,
    castTime: "8 heures",
    ingredients: ["branches", "neige pure", "cendre"],
    description:
      "Modifie la météo régionale pendant plusieurs jours."
  },
  {
    id: "purify_land",
    label: "Purification du Sol",
    school: "nature",
    level: 5,
    castTime: "2 heures",
    ingredients: ["herbes purificatrices", "sel", "eau"],
    description:
      "Élimine corruption, toxines et influences nécrotiques de la terre."
  },
  {
    id: "summon_beast",
    label: "Appel du Gardien Sylvestre",
    school: "nature",
    level: 7,
    castTime: "4 heures",
    ingredients: ["branche ancienne", "sang de cerf"],
    description:
      "Invoque un grand esprit animal protecteur."
  },
  {
    id: "speak_land",
    label: "Voix de la Terre",
    school: "nature",
    level: 3,
    castTime: "1 heure",
    ingredients: ["pierre plate", "terre", "feuille"],
    description:
      "Permet d’interroger brièvement l’esprit d’un lieu naturel."
  }
];
