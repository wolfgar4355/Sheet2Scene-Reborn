// @ts-nocheck
import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  roll: [number, number];
  monsters: string[];
  habitat: string;
  difficulty: "easy" | "standard" | "hard" | "deadly";
  description: string;
}

export const DUNGEON_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–10 : Vermine & échos sombres
  {
    roll: [1, 10],
    monsters: ["gloom-rat", "crypt-mite"],
    habitat: "collapsed-halls",
    difficulty: "easy",
    description:
      "Petites créatures proliférant dans les zones abandonnées et effondrées.",
  },

  // 11–20 : Gardiens oubliés
  {
    roll: [11, 20],
    monsters: ["rusted-sentinel", "ancient-warder"],
    habitat: "forgotten-corridors",
    difficulty: "standard",
    description:
      "Des sentinelles archaïques animées par de vieux enchantements.",
  },

  // 21–35 : Ombres rampantes
  {
    roll: [21, 35],
    monsters: ["shade-stalker", "flesh-creeper"],
    habitat: "shadow-passages",
    difficulty: "standard",
    description:
      "Des horreurs nocturnes qui glissent sur les murs et attaquent par surprise.",
  },

  // 36–50 : Horreurs des profondeurs
  {
    roll: [36, 50],
    monsters: ["crypt-horror", "bone-hunger"],
    habitat: "deep-crypts",
    difficulty: "hard",
    description:
      "Créatures difformes attirées par le sang et les vibrations.",
  },

  // 51–65 : Prisonniers du Néant
  {
    roll: [51, 65],
    monsters: ["void-wanderer", "rift-born"],
    habitat: "void-chambers",
    difficulty: "hard",
    description:
      "Entités instables provenant de brèches fermées depuis longtemps.",
  },

  // 66–80 : Sectes interdites
  {
    roll: [66, 80],
    monsters: ["cult-necrolite", "blight-prophet"],
    habitat: "ritual-sanctums",
    difficulty: "hard",
    description:
      "Des fanatiques exécutant d'anciens rituels dans l’obscurité.",
  },

  // 81–90 : Apparitions tourmentées
  {
    roll: [81, 90],
    monsters: ["weeping-spirit", "dungeon-wraith"],
    habitat: "haunted-halls",
    difficulty: "deadly",
    description:
      "Esprits de prisonniers morts dans d’horribles circonstances.",
  },

  // 91–98 : Créatures mythiques enfermées
  {
    roll: [91, 98],
    monsters: ["labyrinth-minotaur", "chained-chimera"],
    habitat: "sealed-chambers",
    difficulty: "deadly",
    description:
      "Des monstres légendaires confinés depuis des siècles sous terre.",
  },

  // 99–100 : Terreur du Gouffre
  {
    roll: [99, 100],
    monsters: ["abyss-devourer"],
    habitat: "abyss-core",
    difficulty: "deadly",
    description:
      "Une entité titanesque sculptée dans le vide vivant.",
  },
];

export default DUNGEON_ENCOUNTERS;
