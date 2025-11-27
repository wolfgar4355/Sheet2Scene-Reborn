import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  r,
oll: [number, number];
  monsters: string[];
  habitat?: string;
  difficulty?: "easy" | "standard" | "hard" | "deadly";
  description?: string;
}

export const JUNGLE_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–10 : Faune tropicale agressive
  {
    r,
oll: [1, 10],
    m,
onsters: ["jungle-boar", "razor-parrot"],
    h,
abitat: "underbrush",
    d,
ifficulty: "easy",
    description: "Petits animaux agressifs, rapides et imprévisibles."},

  // 11–20 : Prédateurs embusqués
  {
    r,
oll: [11, 20],
    m,
onsters: ["shadow-panther", "vine-stalker"],
    h,
abitat: "thick-forest",
    d,
ifficulty: "standard",
    description: "Des créatures qui chassent par embuscade."},

  // 21–35 : Chasseurs venimeux
  {
    r,
oll: [21, 35],
    m,
onsters: ["emerald-viper", "toxic-frog"],
    h,
abitat: "swampy-jungle",
    d,
ifficulty: "standard",
    description: "La jungle devient silencieuse avant l’attaque."},

  // 36–50 : Tribu de créatures intelligentes
  {
    r,
oll: [36, 50],
    m,
onsters: ["jungle-goblin", "tree-shaman"],
    h,
abitat: "camp-ruins",
    d,
ifficulty: "standard",
    description: "Tambours et pièges artisanaux résonnent dans la jungle."},

  // 51–65 : Esprits de la jungle / plantes vivantes
  {
    r,
oll: [51, 65],
    m,
onsters: ["root-wraith", "carnivorous-blossom"],
    h,
abitat: "ancient-grove",
    d,
ifficulty: "hard",
    description: "La végétation semble se mouvoir et respirer."},

  // 66–80 : Bêtes colossales
  {
    r,
oll: [66, 80],
    m,
onsters: ["giant-ape", "thunder-lizard"],
    h,
abitat: "lost-plateau",
    d,
ifficulty: "hard",
    description: "La terre tremble sous des pas énormes."},

  // 81–95 : Aberrations tropicales anciennes
  {
    r,
oll: [81, 95],
    m,
onsters: ["eldritch-mandrake", "jungle-abomination"],
    h,
abitat: "forbidden-depths",
    d,
ifficulty: "deadly",
    description: "Un murmure au fond de votre crâne annonce un danger ancien."},

  // 96–100 : BOSS RARE
  {
    r,
oll: [96, 100],
    m,
onsters: ["ancient-jungle-titan", "serpent-god-mythic"],
    h,
abitat: "mythic-jungle",
    d,
ifficulty: "deadly",
    description: "Un ancien dieu-serpent s’éveille sous les lianes."}];

export default JUNGLE_ENCOUNTERS;
