import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  r,
oll: [number, number];
  monsters: string[];
  habitat: string;
  d,
ifficulty: "easy" | "standard" | "hard" | "deadly";
  description: string;
}

export const DUNGEON_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–10 : Vermine & échos sombres
  {
    r,
oll: [1, 10],
    m,
onsters: ["gloom-rat", "crypt-mite"],
    h,
abitat: "collapsed-halls",
    d,
ifficulty: "easy",
    description:
      "Petites créatures proliférant dans les zones abandonnées et effondrées."},

  // 11–20 : Gardiens oubliés
  {
    r,
oll: [11, 20],
    m,
onsters: ["rusted-sentinel", "ancient-warder"],
    h,
abitat: "forgotten-corridors",
    d,
ifficulty: "standard",
    description:
      "Des sentinelles archaïques animées par de vieux enchantements."},

  // 21–35 : Ombres rampantes
  {
    r,
oll: [21, 35],
    m,
onsters: ["shade-stalker", "flesh-creeper"],
    h,
abitat: "shadow-passages",
    d,
ifficulty: "standard",
    description:
      "Des horreurs nocturnes qui glissent sur les murs et attaquent par surprise."},

  // 36–50 : Horreurs des profondeurs
  {
    r,
oll: [36, 50],
    m,
onsters: ["crypt-horror", "bone-hunger"],
    h,
abitat: "deep-crypts",
    d,
ifficulty: "hard",
    description:
      "Créatures difformes attirées par le sang et les vibrations."},

  // 51–65 : Prisonniers du Néant
  {
    r,
oll: [51, 65],
    m,
onsters: ["void-wanderer", "rift-born"],
    h,
abitat: "void-chambers",
    d,
ifficulty: "hard",
    description:
      "Entités instables provenant de brèches fermées depuis longtemps."},

  // 66–80 : Sectes interdites
  {
    r,
oll: [66, 80],
    m,
onsters: ["cult-necrolite", "blight-prophet"],
    h,
abitat: "ritual-sanctums",
    d,
ifficulty: "hard",
    description:
      "Des fanatiques exécutant d'anciens rituels dans l’obscurité."},

  // 81–90 : Apparitions tourmentées
  {
    r,
oll: [81, 90],
    m,
onsters: ["weeping-spirit", "dungeon-wraith"],
    h,
abitat: "haunted-halls",
    d,
ifficulty: "deadly",
    description:
      "Esprits de prisonniers morts dans d’horribles circonstances."},

  // 91–98 : Créatures mythiques enfermées
  {
    r,
oll: [91, 98],
    m,
onsters: ["labyrinth-minotaur", "chained-chimera"],
    h,
abitat: "sealed-chambers",
    d,
ifficulty: "deadly",
    description:
      "Des monstres légendaires confinés depuis des siècles sous terre."},

  // 99–100 : Terreur du Gouffre
  {
    r,
oll: [99, 100],
    m,
onsters: ["abyss-devourer"],
    h,
abitat: "abyss-core",
    d,
ifficulty: "deadly",
    description:
      "Une entité titanesque sculptée dans le vide vivant."}];

export default DUNGEON_ENCOUNTERS;
