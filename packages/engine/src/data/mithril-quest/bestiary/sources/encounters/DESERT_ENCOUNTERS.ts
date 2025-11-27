import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  r,
oll: [number, number];
  monsters: string[];
  habitat?: string;
  difficulty?: "easy" | "standard" | "hard" | "deadly";
  description?: string;
}

export const DESERT_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–10 : Faune du désert
  {
    r,
oll: [1, 10],
    m,
onsters: ["sand-lizard", "dune-scorpion"],
    h,
abitat: "dune-field",
    d,
ifficulty: "easy",
    description: "Des créatures habituées à se cacher sous le sable."},

  // 11–20 : Caravanes, pillards
  {
    r,
oll: [11, 20],
    m,
onsters: ["desert-bandit", "sand-raider"],
    h,
abitat: "oasis-road",
    d,
ifficulty: "standard",
    description: "Une bande rôde entre les routes commerciales."},

  // 21–35 : Élémentaires de sable / tempêtes
  {
    r,
oll: [21, 35],
    m,
onsters: ["sand-elemental", "dust-swirl"],
    h,
abitat: "wind-dunes",
    d,
ifficulty: "standard",
    description: "Le vent se charge de magie et prend forme."},

  // 36–50 : Serpents géants
  {
    r,
oll: [36, 50],
    m,
onsters: ["giant-sand-python", "ash-worm"],
    h,
abitat: "sinking-dunes",
    d,
ifficulty: "hard",
    description: "Le sol bouge… puis une gueule surgit du sable."},

  // 51–65 : Gardiens des ruines
  {
    r,
oll: [51, 65],
    m,
onsters: ["ancient-construct", "scarab-guardian"],
    h,
abitat: "sunken-ruins",
    d,
ifficulty: "hard",
    description: "Les ruines vibrent d’une magie antique."},

  // 66–80 : Entités corrompues / mirages vivants
  {
    r,
oll: [66, 80],
    m,
onsters: ["void-mirage", "cinder-phantom"],
    h,
abitat: "mirage-zone",
    d,
ifficulty: "deadly",
    description: "La chaleur déforme la réalité… parfois jusqu’à lui donner vie."},

  // 81–95 : Titans ou colosses des sables
  {
    r,
oll: [81, 95],
    m,
onsters: ["sand-titan", "obsidian-colossus"],
    h,
abitat: "forbidden-dunes",
    d,
ifficulty: "deadly",
    description: "Un géant recouvert de sable s'éveille."},

  // 96–100 : BOSS RARE
  {
    r,
oll: [96, 100],
    m,
onsters: ["ancient-sphinx", "solar-pharaoh"],
    h,
abitat: "mythic-pyramid",
    d,
ifficulty: "deadly",
    description: "Une divinité oubliée vous observe, immobile."}];
