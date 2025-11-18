export const FANTASY_RACES = [
  {
    key: "human",
    label: "Humain",
    description: "Polyvalents et adaptables, les humains prospèrent dans toutes les époques.",
    traits: [
      "Adaptabilité",
      "Apprentissage accéléré",
      "Bonus de compétence au choix"
    ]
  },
  {
    key: "high-elf",
    label: "Elfe Haut-Né",
    description: "Élégants et érudits, ils maîtrisent la magie et les arts anciens.",
    traits: [
      "Vision nocturne",
      "Affinité magique",
      "Perception accrue"
    ]
  },
  {
    key: "wood-elf",
    label: "Elfe Sylvestre",
    description: "Rapides et agiles, les elfes sylvestres vivent en harmonie avec la nature.",
    traits: [
      "Camouflage naturel",
      "Discrétion améliorée",
      "Vision nocturne"
    ]
  },
  {
    key: "dwarf",
    label: "Nain",
    description: "Robustes, endurants et fiers, les nains excellent dans les métiers et les combats.",
    traits: [
      "Résistance physique",
      "Connaissance de la pierre",
      "Résistance au poison"
    ]
  },
  {
    key: "halfling",
    label: "Semi-homme",
    description: "Curieux et chanceux, ils voyagent souvent pour vivre des aventures inattendues.",
    traits: [
      "Chance surnaturelle",
      "Discrétion naturelle",
      "Grande agilité"
    ]
  },
  {
    key: "orc",
    label: "Orc",
    description: "Puissants et agressifs, les orcs sont des guerriers redoutables.",
    traits: [
      "Force brute",
      "Intimidation naturelle",
      "Endurance élevée"
    ]
  },
  {
    key: "draconian",
    label: "Draconien",
    description: "Descendants des dragons, ils possèdent des dons élémentaires.",
    traits: [
      "Souffle élémentaire",
      "Résistance élémentaire",
      "Écailles protectrices"
    ]
  }
] as const;

export type FantasyRace = typeof FANTASY_RACES[number];
