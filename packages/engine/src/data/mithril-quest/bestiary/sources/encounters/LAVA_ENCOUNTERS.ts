import { MonsterDefinition } from "../categories";

export interface EncounterTableEntry {
  r,
oll: [number, number];
  monsters: string[];
  habitat?: string;
  difficulty?: "easy" | "standard" | "hard" | "deadly";
  description?: string;
}

export const LAVA_ENCOUNTERS: EncounterTableEntry[] = [
  // 1–10 : Faune ignée basique
  {
    r,
oll: [1, 10],
    m,
onsters: ["fire-imp", "ember-sprite"],
    h,
abitat: "lava-rivers",
    d,
ifficulty: "easy",
    description: "Petits êtres espiègles formés d’étincelles et de braises."},

  // 11–20 : Conduits volcaniques
  {
    r,
oll: [11, 20],
    m,
onsters: ["magma-crab", "obsidian-beetle"],
    h,
abitat: "obsidian-tunnels",
    d,
ifficulty: "standard",
    description: "Creatures à carapace noire cherchant la chaleur extrême."},

  // 21–35 : Élémentaires de feu & magma
  {
    r,
oll: [21, 35],
    m,
onsters: ["fire-elemental", "magma-elemental"],
    h,
abitat: "molten-chambers",
    d,
ifficulty: "standard",
    description: "Des silhouettes incandescentes émergent de la lave vivante."},

  // 36–50 : Salamandres & serpents thermiques
  {
    r,
oll: [36, 50],
    m,
onsters: ["salamander-spear", "lava-serpent"],
    h,
abitat: "crimson-caverns",
    d,
ifficulty: "standard",
    description: "Les tunnels vibrent d’un chaudron vivant sous vos pas."},

  // 51–65 : Démons du Brasier
  {
    r,
oll: [51, 65],
    m,
onsters: ["flame-demon", "charred-fiend"],
    h,
abitat: "hellfire-fissures",
    d,
ifficulty: "hard",
    description:
      "Les murs fondent sous leur présence, distordant la réalité thermique."},

  // 66–80 : Titans de Cendres
  {
    r,
oll: [66, 80],
    m,
onsters: ["ashen-colossus", "pyroclast-golem"],
    h,
abitat: "eruption-pits",
    d,
ifficulty: "hard",
    description:
      "Géants de roche vivante portant des cicatrices incandescentes."},

  // 81–90 : Prédateurs thermiques d’élite
  {
    r,
oll: [81, 90],
    m,
onsters: ["igneous-hunter", "flare-stalker"],
    h,
abitat: "thermal-breaches",
    d,
ifficulty: "hard",
    description:
      "Chasseurs félins ignés, invisibles dans la chaleur ondulante."},

  // 91–98 : Essaims de lave vivante
  {
    r,
oll: [91, 98],
    m,
onsters: ["molten-swarm", "ember-wraith"],
    h,
abitat: "magma-pools",
    d,
ifficulty: "deadly",
    description: "L’éruption prend vie et cherche à vous consumer."},

  // 99–100 : Boss Mythique — Titan du Cœur Magmatique
  {
    r,
oll: [99, 100],
    m,
onsters: ["mythic-magma-titan", "heart-of-the-volcano"],
    h,
abitat: "mythic-core",
    d,
ifficulty: "deadly",
    description:
      "Une entité colossale née du noyau en fusion, dotée d’un pouvoir ancien."}];

export default LAVA_ENCOUNTERS;
