import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  r,
oll: [number, number];
  monsters: string[];
  habitat?: string;
  difficulty?: "easy" | "standard" | "hard" | "deadly";
  description?: string;
}

export const SWAMP_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–10 : Faune du marais
  {
    r,
oll: [1, 10],
    m,
onsters: ["giant-frog", "swamp-snake"],
    h,
abitat: "wet-bogs",
    d,
ifficulty: "easy",
    description: "Des créatures communes mais nombreuses et imprévisibles."},

  // 11–20 : Nuées + parasites marécageux
  {
    r,
oll: [11, 20],
    m,
onsters: ["mosquito-swarm", "rotflies"],
    h,
abitat: "insect-nest",
    d,
ifficulty: "standard",
    description: "Des nuées affamées attirées par la chaleur et le mouvement."},

  // 21–35 : Mort-vivants du marais
  {
    r,
oll: [21, 35],
    m,
onsters: ["drowned-zombie", "bog-skeleton"],
    h,
abitat: "sunken-graves",
    d,
ifficulty: "standard",
    description: "Des corps préservés dans la vase émergent lentement."},

  // 36–50 : Bêtes mutantes / fongiques
  {
    r,
oll: [36, 50],
    m,
onsters: ["fungal-horror", "spore-beast"],
    h,
abitat: "mycelium-zone",
    d,
ifficulty: "hard",
    description: "Des spores flottent… et quelque chose bouge sous la surface."},

  // 51–65 : Sorcières et esprits du marais
  {
    r,
oll: [51, 65],
    m,
onsters: ["swamp-witch", "willow-wraith"],
    h,
abitat: "haunted-mire",
    d,
ifficulty: "hard",
    description: "Une magie ancienne flotte dans les airs, presque étouffante."},

  // 66–80 : Colosses amphibies + créatures géantes
  {
    r,
oll: [66, 80],
    m,
onsters: ["marsh-ogre", "giant-crocodile"],
    h,
abitat: "deep-mangrove",
    d,
ifficulty: "hard",
    description: "Les arbres tremblent sous le poids d'un monstre amphibie."},

  // 81–95 : Aberrations des eaux noires
  {
    r,
oll: [81, 95],
    m,
onsters: ["void-leech", "deep-swamp-aberration"],
    h,
abitat: "black-water",
    d,
ifficulty: "deadly",
    description: "L’eau noire se déchire… quelque chose sort en silence."},

  // 96–100 : BOSS RARE
  {
    r,
oll: [96, 100],
    m,
onsters: ["ancient-hydra", "rot-mire-mythic-witch"],
    h,
abitat: "mythic-swamp-heart",
    d,
ifficulty: "deadly",
    description: "Un cœur de marais vivant qui bat sous vos pieds."}];
