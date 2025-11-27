import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  r,
oll: [number, number];
  monsters: string[];
  habitat?: string;
  difficulty?: "easy" | "standard" | "hard" | "deadly";
  description?: string;
}

export const HILLS_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–10 : Faune des collines
  {
    r,
oll: [1, 10],
    m,
onsters: ["hill-ram", "rock-hyena"],
    h,
abitat: "grassy-hills",
    d,
ifficulty: "easy",
    description: "De petits troupeaux se déplacent rapidement entre les pierres."},

  // 11–20 : Prédateurs furtifs
  {
    r,
oll: [11, 20],
    m,
onsters: ["hill-panther", "burrow-wolf"],
    h,
abitat: "rock-hollows",
    d,
ifficulty: "standard",
    description: "Des silhouettes rapides surgissent entre les rochers."},

  // 21–35 : Outlaws & pillards réfugiés
  {
    r,
oll: [21, 35],
    m,
onsters: ["hill-bandit", "sling-raider"],
    h,
abitat: "bandit-camp",
    d,
ifficulty: "standard",
    description: "Un camp sauvage utilise les hauteurs pour surveiller la route."},

  // 36–50 : Esprits druidiques & gardiens de pierre
  {
    r,
oll: [36, 50],
    m,
onsters: ["hill-spirit", "stone-warden"],
    h,
abitat: "druidic-circle",
    d,
ifficulty: "hard",
    description: "Les anciennes pierres vibrent d’une puissance oubliée."},

  // 51–65 : Créatures souterraines
  {
    r,
oll: [51, 65],
    m,
onsters: ["tunnel-worm", "cave-horror"],
    h,
abitat: "cave-entrance",
    d,
ifficulty: "hard",
    description: "Le sol tremble brièvement… avant de se fissurer."},

  // 66–80 : Géants des collines
  {
    r,
oll: [66, 80],
    m,
onsters: ["hill-giant", "stone-thrasher"],
    h,
abitat: "giant-territory",
    d,
ifficulty: "hard",
    description: "La colline elle-même semble se déplacer."},

  // 81–95 : Aberrations rocheuses
  {
    r,
oll: [81, 95],
    m,
onsters: ["void-stone-beast", "crystal-aberration"],
    h,
abitat: "broken-ridge",
    d,
ifficulty: "deadly",
    description: "Des cristaux se forment et cliquettent avec une conscience étrange."},

  // 96–100 : BOSS RARE
  {
    r,
oll: [96, 100],
    m,
onsters: ["ancient-stone-colossus", "hill-titan-mythic"],
    h,
abitat: "mythic-cairn",
    d,
ifficulty: "deadly",
    description: "Un titan des collines s’éveille sous un tumulus millénaire."}];
