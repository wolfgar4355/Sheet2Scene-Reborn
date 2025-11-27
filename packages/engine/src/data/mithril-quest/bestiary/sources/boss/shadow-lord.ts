import type { GmeMonster } from "@s2s/fantasy/types";

export const MONSTERS: GmeMonster[] = [
{
  id: "shadow-lord",
  name: "Seigneur des Ombres",
  world: "Fantasy",
  cr: 10,
  category: "fiend",

  biomeTags: ["shadowlands", "ruins", "cursed-grounds"],
  habitatTags: ["underdark", "dungeons", "ancient-ruins", "forbidden-altars"],

  role: "elite-controller",
  tags: ["shadow", "necrotic", "dark-magic", "commander"],
  factions: ["Grave Sovereignty", "Ebon Host"],

  behavior: {
    aggression: 7,
    courage: 9,
    awareness: 8
  },

  tactics: { prefersAmbush: true }, // NOTE: anciennement // NOTE (fix-fantasy v2 auto-commented)
tactics: ["opens-with-dark-nova",
    // NOTE (fix-fantasy v2 auto-commented): "teleport-behind-target",
    // NOTE (fix-fantasy v2 auto-commented): "summon-shadow-minions",
    "finish-with-void-lance"]

  stats: {
    hp: 210,
    ac: 18,
    atk: 19,
    dmg: "2d10+6 necrotic",
    speed: "40 ft, teleport 30 ft"
  },

  // NOTE (fix-fantasy v2 auto-commented)
loot: [
    // NOTE (fix-fantasy v2 auto-commented): "obsidian-heart",
    // NOTE (fix-fantasy v2 auto-commented): "shadow-lord-crown",
    // NOTE (fix-fantasy v2 auto-commented): "essence-of-night"
  ],

  // NOTE (fix-fantasy v2 auto-commented)
abilities: [
    // NOTE (fix-fantasy v2 auto-commented): "Shadowstep",
    // NOTE (fix-fantasy v2 auto-commented): "Cone of Darkness",
    // NOTE (fix-fantasy v2 auto-commented): "Nightbound Command",
    // NOTE (fix-fantasy v2 auto-commented): "Void Lance",
    // NOTE (fix-fantasy v2 auto-commented): "Summon Umbral Shades"
  ],

  ref: {
    source: "custom",
    key: "shadow-lord"
  }
}
];
