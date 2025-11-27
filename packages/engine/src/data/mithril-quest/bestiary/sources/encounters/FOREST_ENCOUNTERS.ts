import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  r,
oll: [number, number];       // Range sur d100
  monsters: string[];           // IDs seulement
  habitat?: string;             // forest-deep | clearing | river | ruins
  difficulty?: "easy" | "standard" | "hard" | "deadly";
  description?: string;
}

// 🌲 TABLE ENCOUNTERS — FOREST (Mithril Engine Optimisée)
export const FOREST_ENCOUNTERS: EncounterTableEntry[] = [
  
  // 1–10 : Faune commune
  {
    r,
oll: [1, 10],
    m,
onsters: ["wolf"],
    h,
abitat: "forest-deep",
    d,
ifficulty: "easy",
    description: "Une meute de loups traque le groupe à distance."},

  // 11–25 : Gobelins de forêt
  {
    r,
oll: [11, 25],
    m,
onsters: ["goblin", "goblin-scout"],
    h,
abitat: "clearing",
    d,
ifficulty: "standard",
    description: "Des gobelins embusqués surgissent depuis les buissons."},

  // 26–40 : Brigands (humanoids)
  {
    r,
oll: [26, 40],
    m,
onsters: ["forest-bandit", "forest-bandit-archer"],
    h,
abitat: "trail",
    d,
ifficulty: "standard",
    description: "Un groupe de brigands réclame un ‘péage’."},

  // 41–55 : Bêtes dangereuses
  {
    r,
oll: [41, 55],
    m,
onsters: ["dire-boar", "owlbear"],
    h,
abitat: "forest-deep",
    d,
ifficulty: "hard",
    description: "La forêt devient silencieuse… quelque chose de massif approche."},

  // 56–70 : Sylvains corrompus
  {
    r,
oll: [56, 70],
    m,
onsters: ["corrupted-dryad", "shadow-satyr"],
    h,
abitat: "corrupted-grove",
    d,
ifficulty: "hard",
    description: "La magie corrompue tord les arbres autour de vous."},

  // 71–85 : Minions sombres
  {
    r,
oll: [71, 85],
    m,
onsters: ["shadow-minion", "shade-stalker"],
    h,
abitat: "ruins",
    d,
ifficulty: "deadly",
    description: "Les ombres prennent forme et se déplacent contre nature."},

  // 86–95 : Élites
  {
    r,
oll: [86, 95],
    m,
onsters: ["forest-wraith", "alpha-dire-wolf"],
    h,
abitat: "ancient-forest",
    d,
ifficulty: "deadly",
    description: "Une présence surnaturelle domine la forêt."},

  // 96–100 : Boss rare
  {
    r,
oll: [96, 100],
    m,
onsters: ["dark-lord"],
    h,
abitat: "forgotten-altar",
    d,
ifficulty: "deadly",
    description: "Un ancien seigneur des ombres émerge de l’autel oublié."}];
