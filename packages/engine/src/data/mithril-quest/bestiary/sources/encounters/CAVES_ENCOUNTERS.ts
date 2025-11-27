import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  r,
oll: [number, number];
  monsters: string[];
  habitat?: string;
  difficulty?: "easy" | "standard" | "hard" | "deadly";
  description?: string;
}

export const CAVES_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–10 : Faune cavernicole basique
  {
    r,
oll: [1, 10],
    m,
onsters: ["cave-bat-swarm", "blind-rat"],
    h,
abitat: "narrow-tunnels",
    d,
ifficulty: "easy",
    description: "Petites créatures rapides qui vivent dans les tunnels."},

  // 11–20 : Prédateurs aveugles
  {
    r,
oll: [11, 20],
    m,
onsters: ["lurking-stalker", "tunnel-ambusher"],
    h,
abitat: "shadow-chambers",
    d,
ifficulty: "standard",
    description: "Des prédateurs qui détectent par vibrations."},

  // 21–35 : Champignons vivants
  {
    r,
oll: [21, 35],
    m,
onsters: ["spore-mycot", "toxic-capling"],
    h,
abitat: "fungal-forest",
    d,
ifficulty: "standard",
    description: "Le sol semble respirer… et grincer."},

  // 36–50 : Insectes géants
  {
    r,
oll: [36, 50],
    m,
onsters: ["giant-centipede", "crystal-scorpion"],
    h,
abitat: "mineral-caves",
    d,
ifficulty: "standard",
    description: "Carapaces chitineuses et mouvements rapides."},

  // 51–65 : Aberrations
  {
    r,
oll: [51, 65],
    m,
onsters: ["void-jelly", "tentacle-watcher"],
    h,
abitat: "eldritch-chasm",
    d,
ifficulty: "hard",
    description: "Rictus impossibles et chair difforme venue d’ailleurs."},

  // 66–80 : Créatures anciennes de l’Underdark
  {
    r,
oll: [66, 80],
    m,
onsters: ["deep-troll", "subterranean-horror"],
    h,
abitat: "ancient-deeps",
    d,
ifficulty: "hard",
    description: "Des géants difformes, survivants d’ères préhistoriques."},

  // 81–90 : Cultistes du Vide / rituels interdits
  {
    r,
oll: [81, 90],
    m,
onsters: ["void-cultist", "abyssal-acolyte"],
    h,
abitat: "forbidden-shrine",
    d,
ifficulty: "hard",
    description: "Les torches violettes dansent au rythme de murmures."},

  // 91–98 : Cavaliers du Néant (élite)
  {
    r,
oll: [91, 98],
    m,
onsters: ["void-knight", "echo-wraith"],
    h,
abitat: "night-crystal-halls",
    d,
ifficulty: "deadly",
    description:
      "Armures fractales, armes qui hurlent, illusions répercutées."},

  // 99–100 : BOSS RARE — Dragon Souterrain
  {
    r,
oll: [99, 100],
    m,
onsters: ["umbral-earth-drake", "chasm-tyrant-mythic"],
    h,
abitat: "mythic-depth",
    d,
ifficulty: "deadly",
    description: "Un ancien dragon sculpté dans l’obscurité elle-même."}];

export default CAVES_ENCOUNTERS;
