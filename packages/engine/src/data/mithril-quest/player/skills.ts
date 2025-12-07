// @ts-nocheck
// ============================================================================
// 🎯 MQ_SKILLS — Compétences Mithril-Quest
// ============================================================================

export type AbilityKey =
  | "strength"
  | "dexterity"
  | "constitution"
  | "intelligence"
  | "wisdom"
  | "charisma";

export interface MQSkill {
  key: string;
  label: string;
  ability: AbilityKey;
  description: string;
}

export const MQ_SKILLS: MQSkill[] = [
  {
    key: "athletics",
    label: "Athlétisme",
    ability: "strength",
    description: "Sauter, grimper, nager, forcer des portes, lutter au corps-à-corps.",
  },
  {
    key: "acrobatics",
    label: "Acrobaties",
    ability: "dexterity",
    description: "Équilibre, roulades, esquives, funambulisme, cascades physiques.",
  },
  {
    key: "stealth",
    label: "Discrétion",
    ability: "dexterity",
    description: "Se cacher, suivre sans être vu, déplacement silencieux.",
  },
  {
    key: "sleight-of-hand",
    label: "Escamotage",
    ability: "dexterity",
    description: "Pickpocket, prestidigitation, dissimulation rapide d’objets.",
  },
  {
    key: "perception",
    label: "Perception",
    ability: "wisdom",
    description: "Repérer des détails, remarquer un piège ou une embuscade.",
  },
  {
    key: "insight",
    label: "Intuition",
    ability: "wisdom",
    description: "Deviner les intentions, repérer les mensonges, comprendre une émotion.",
  },
  {
    key: "survival",
    label: "Survie",
    ability: "wisdom",
    description: "Chasse, orientation, traces, feux de camp, tempêtes et dangers naturels.",
  },
  {
    key: "arcana",
    label: "Arcanes",
    ability: "intelligence",
    description: "Connaissance des sorts, rituels, créatures magiques, artefacts.",
  },
  {
    key: "history",
    label: "Histoire",
    ability: "intelligence",
    description: "Anciennes guerres, empires, dynasties, héros, légendes.",
  },
  {
    key: "nature",
    label: "Nature",
    ability: "intelligence",
    description: "Faune, flore, terrains, créatures sauvages, cycles naturels.",
  },
  {
    key: "religion",
    label: "Religion",
    ability: "intelligence",
    description: "Panthéons, cultes, rituels, dogmes, symboles sacrés.",
  },
  {
    key: "deception",
    label: "Tromperie",
    ability: "charisma",
    description: "Mensonges, bluff, faux-semblants, manipulation basique.",
  },
  {
    key: "intimidation",
    label: "Intimidation",
    ability: "charisma",
    description: "Menaces, regard glacial, pression psychologique.",
  },
  {
    key: "persuasion",
    label: "Persuasion",
    ability: "charisma",
    description: "Négociation, diplomatie, convaincre, inspirer confiance.",
  },
  {
    key: "performance",
    label: "Représentation",
    ability: "charisma",
    description: "Chant, théâtre, musique, discours, spectacle.",
  },
  {
    key: "medicine",
    label: "Médecine",
    ability: "wisdom",
    description: "Soins, bandages, stabiliser un mourant, diagnostiquer un mal.",
  },
  {
    key: "crafting",
    label: "Artisanat",
    ability: "intelligence",
    description: "Forge, sculpture, couture, alchimie, fabrication d’objets.",
  },
];
