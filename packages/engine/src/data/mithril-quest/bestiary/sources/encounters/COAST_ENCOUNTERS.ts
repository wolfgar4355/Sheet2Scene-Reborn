import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  r,
oll: [number, number];
  monsters: string[];
  habitat?: string;
  difficulty?: "easy" | "standard" | "hard" | "deadly";
  description?: string;
}

export const COAST_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–10 : Faune côtière
  {
    r,
oll: [1, 10],
    m,
onsters: ["shore-crab", "seagull-swarm"],
    h,
abitat: "tidal-zone",
    d,
ifficulty: "easy",
    description: "Des créatures opportunistes cherchent de la nourriture dans les marées."},

  // 11–20 : Pirates & contrebandiers
  {
    r,
oll: [11, 20],
    m,
onsters: ["pirate-cutthroat", "pirate-gunner"],
    h,
abitat: "abandoned-dock",
    d,
ifficulty: "standard",
    description: "Une petite bande de pirates surveille un vieux quai."},

  // 21–35 : Prédateurs marins à marée haute
  {
    r,
oll: [21, 35],
    m,
onsters: ["reef-shark", "sand-stingray"],
    h,
abitat: "shallow-waters",
    d,
ifficulty: "standard",
    description: "Une silhouette tourne dans l’eau trouble à proximité."},

  // 36–50 : Créatures de récifs + golems de corail
  {
    r,
oll: [36, 50],
    m,
onsters: ["coral-golem", "reef-guardian"],
    h,
abitat: "coral-reef",
    d,
ifficulty: "hard",
    description: "Des structures coralliennes bougent comme si elles respiraient."},

  // 51–65 : Esprits de tempête / brume vivante
  {
    r,
oll: [51, 65],
    m,
onsters: ["storm-wisp", "tide-wraith"],
    h,
abitat: "stormfront",
    d,
ifficulty: "hard",
    description: "Le vent se met à hurler… puis prend forme."},

  // 66–80 : Bêtes géantes + monstruosités côtières
  {
    r,
oll: [66, 80],
    m,
onsters: ["giant-crab", "rock-snapper", "coast-serpent"],
    h,
abitat: "wave-breaker-cliffs",
    d,
ifficulty: "hard",
    description: "Quelque chose de colossal se déplace sous les vagues."},

  // 81–95 : Aberrations venues des profondeurs
  {
    r,
oll: [81, 95],
    m,
onsters: ["void-tentacle-beast", "abyssal-crawler"],
    h,
abitat: "dark-water",
    d,
ifficulty: "deadly",
    description: "L’eau devient anormalement froide avant de se déchirer."},

  // 96–100 : BOSS RARE
  {
    r,
oll: [96, 100],
    m,
onsters: ["ancient-sea-titan", "storm-leviathan-mythic"],
    h,
abitat: "mythic-coast",
    d,
ifficulty: "deadly",
    description: "Une tempête s’incarne dans un titan ancestral."}];
