export declare const TAGS: {
    readonly BIOLOGY: readonly ["humanoid", "beast", "monstrosity", "dragon", "aberration", "construct", "fiend", "celestial", "giant", "elemental", "undead", "plant", "ooze", "fey", "insect", "reptile", "amphibian", "avian", "aquatic", "swarm"];
    readonly MORPH: readonly ["multi-headed", "winged", "serpentine", "insectoid", "amorphous", "skeletal", "ethereal-form", "crystalline", "armored", "giant-sized", "tiny-sized"];
    readonly ELEMENTAL: readonly ["fire", "water", "earth", "air", "lightning", "cold", "poison", "acid", "necrotic", "radiant", "psychic", "force", "shadow", "arcane", "holy", "unholy"];
    readonly BEHAVIOR: readonly ["aggressive", "territorial", "pack-hunter", "ambusher", "stalker", "guardian", "berserker", "cowardly", "opportunist", "strategist", "summoner", "controller", "caster", "skirmisher", "lurker", "siege-beast", "alpha"];
    readonly ENVIRONMENT: readonly ["forest", "jungle", "desert", "tundra", "mountain", "swamp", "plains", "hills", "ocean", "coast", "caves", "underdark", "astral", "ethereal", "shadowfell", "feywild", "volcanic", "ruins", "temple", "dungeon"];
    readonly COMBAT: readonly ["brute", "soldier", "skirmisher", "artillery", "controller", "assassin", "tank", "support", "elite", "legendary", "solo", "boss", "mythic"];
    readonly MAGIC: readonly ["spellcaster", "ritualist", "summoned", "cursed", "hexed", "enchanted", "time-warped", "void-touched", "astral-bound", "arcane-surge", "mana-leech", "eldritch", "psionic"];
    readonly PHYSICAL: readonly ["fast", "slow", "flying", "burrowing", "climbing", "amphibious", "stealthy", "massive", "ferocious", "fragile", "unyielding", "armored-hide"];
    readonly ALIGNMENT: readonly ["lawful", "chaotic", "neutral", "good", "evil", "primordial", "corrupted", "pure"];
    readonly VISUAL: readonly ["dark", "mystical", "glowing", "ancient", "corrupted", "ethereal", "primal", "ominous", "radiant", "shadowy", "colossal", "heroic", "mythic"];
};
export type TagFamily = keyof typeof TAGS;
export type Tag = (typeof TAGS)[TagFamily][number];
