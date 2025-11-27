import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  r,
oll: [number, number];
  monsters: string[];
  habitat?: string;
  difficulty?: "easy" | "standard" | "hard" | "deadly";
  description?: string;
}

export const MOUNTAIN_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–12 : Faune agressive
  {
    r,
oll: [1, 12],
    m,
onsters: ["mountain-goat", "rock-wolf"],
    h,
abitat: "cliffside",
    d,
ifficulty: "easy",
    description: "Des bêtes de montagne protègent leur territoire."},

  // 13–25 : Bandits et pillards
  {
    r,
oll: [13, 25],
    m,
onsters: ["mountain-bandit", "bandit-archer"],
    h,
abitat: "mountain-pass",
    d,
ifficulty: "standard",
    description: "Des brigands embusqués profitent des hauteurs."},

  // 26–40 : Golems ou gardiens anciens
  {
    r,
oll: [26, 40],
    m,
onsters: ["stone-golem", "obsidian-guardian"],
    h,
abitat: "ancient-ruins",
    d,
ifficulty: "standard",
    description: "Des statues s’animent lorsque vous approchez."},

  // 41–55 : Harpies et créatures volantes
  {
    r,
oll: [41, 55],
    m,
onsters: ["harpy", "sky-harpy", "roc-young"],
    h,
abitat: "high-cliff",
    d,
ifficulty: "hard",
    description: "Des silhouettes volantes tournent au-dessus de vous."},

  // 56–70 : Titans mineurs / élémentaires
  {
    r,
oll: [56, 70],
    m,
onsters: ["minor-storm-elemental", "earth-shambler"],
    h,
abitat: "storm-peak",
    d,
ifficulty: "hard",
    description: "Les vents sifflent d’une façon presque vivante."},

  // 71–85 : Créatures corrompues
  {
    r,
oll: [71, 85],
    m,
onsters: ["abyssal-goat", "void-harpy"],
    h,
abitat: "dark-peak",
    d,
ifficulty: "deadly",
    description: "Une corruption invisible altère la pierre elle-même."},

  // 86–95 : GÉANTS
  {
    r,
oll: [86, 95],
    m,
onsters: ["hill-giant", "frost-giant-scout", "storm-giant-apprentice"],
    h,
abitat: "giant-territory",
    d,
ifficulty: "deadly",
    description: "Les pas lourds résonnent sur la montagne."},

  // 96–100 : BOSS RARE
  {
    r,
oll: [96, 100],
    m,
onsters: ["mountain-colossus", "ancient-storm-titan"],
    h,
abitat: "mythic-throne",
    d,
ifficulty: "deadly",
    description: "Une puissance mythique règne depuis les hauteurs éternelles."}];
