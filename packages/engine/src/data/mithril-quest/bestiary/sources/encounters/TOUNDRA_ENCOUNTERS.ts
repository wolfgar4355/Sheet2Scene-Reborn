import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  r,
oll: [number, number];
  monsters: string[];
  habitat?: string;
  difficulty?: "easy" | "standard" | "hard" | "deadly";
  description?: string;
}

export const TUNDRA_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–10 : Faune arctique
  {
    r,
oll: [1, 10],
    m,
onsters: ["arctic-wolf", "snow-hare"],
    h,
abitat: "frozen-plains",
    d,
ifficulty: "easy",
    description: "Des traces fraîches indiquent la présence de bêtes rapides."},

  // 11–20 : Prédateurs du froid
  {
    r,
oll: [11, 20],
    m,
onsters: ["snow-leopard", "ice-bear"],
    h,
abitat: "frosted-cliffs",
    d,
ifficulty: "standard",
    description: "Une bête polaire affamée surveille ses proies."},

  // 21–35 : Morts gelés
  {
    r,
oll: [21, 35],
    m,
onsters: ["frozen-corpse", "ice-skeleton"],
    h,
abitat: "snow-ruins",
    d,
ifficulty: "standard",
    description: "Des silhouettes figées dans la glace prennent soudain vie."},

  // 36–50 : Élémentaires glacés / vents vivants
  {
    r,
oll: [36, 50],
    m,
onsters: ["frost-elemental", "blizzard-wisp"],
    h,
abitat: "blizzard-zone",
    d,
ifficulty: "hard",
    description: "Un vent surnaturel hurle avec une intention meurtrière."},

  // 51–65 : Peuples du nord / tribus froides
  {
    r,
oll: [51, 65],
    m,
onsters: ["ice-goliath", "tundra-hunter"],
    h,
abitat: "wind-plateau",
    d,
ifficulty: "hard",
    description: "Une tribu guerrière protège ses territoires gelés."},

  // 66–80 : Géants de givre
  {
    r,
oll: [66, 80],
    m,
onsters: ["frost-giant", "winter-ogre"],
    h,
abitat: "giant-icefields",
    d,
ifficulty: "hard",
    description: "Le sol tremble sous les pas d’un géant glacé."},

  // 81–95 : Aberrations arctiques
  {
    r,
oll: [81, 95],
    m,
onsters: ["ice-aberration", "void-frost-spawn"],
    h,
abitat: "glacial-chasm",
    d,
ifficulty: "deadly",
    description: "Une fissure glacée laisse filtrer quelque chose… d’impossible."},

  // 96–100 : BOSS RARE
  {
    r,
oll: [96, 100],
    m,
onsters: ["ancient-yeti-king", "frost-wyrm-mythic"],
    h,
abitat: "mythic-glacier",
    d,
ifficulty: "deadly",
    description: "Un souffle arctique gèle l’air lui-même autour de vous."}];
