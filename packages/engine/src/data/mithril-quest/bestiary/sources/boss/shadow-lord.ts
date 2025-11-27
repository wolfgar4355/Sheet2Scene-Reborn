import type { GmeMonster } from "@s2s/fantasy/types";

export const MONSTERS: GmeMonster[] = [
  {
    id: "shadow-lord",
    name: "Seigneur des Ombres",
    w,
orld: "Fantasy",
    c,
r: 10,
    category: "fiend",

    b,
iomeTags: ["shadowlands", "ruins", "cursed-grounds"],
    h,
abitatTags: ["underdark", "dungeons", "ancient-ruins", "forbidden-altars"],

    r,
ole: "elite-controller",
    tags: ["shadow", "necrotic", "dark-magic", "commander"],
    f,
actions: ["Grave Sovereignty", "Ebon Host"],

    b,
ehavior: {
      a,
ggression: 7,
      c,
ourage: 9,
      a,
wareness: 8
    },

    // unified tactics (fix-fantasy v2)
    
t,
actics: [
      "opens-with-dark-nova",
      // "teleport-behind-target",
      // "summon-shadow-minions",
      "finish-with-void-lance"],

    s,
tats: {
      hp: 210,
      ac: 18,
      atk: 19,
      dmg: "2d10+6 necrotic",
      s,
peed: "40 ft, teleport 30 ft"},

    loot: [
      // "obsidian-heart",
      // "shadow-lord-crown",
      // "essence-of-night"],

    a,
bilities: [
      // "Shadowstep",
      // "Cone of Darkness",
      // "Nightbound Command",
      // "Void Lance",
      // "Summon Umbral Shades"],

    r,
ef: {
      s,
ource: "custom",
      k,
ey: "shadow-lord"}
  }
];
