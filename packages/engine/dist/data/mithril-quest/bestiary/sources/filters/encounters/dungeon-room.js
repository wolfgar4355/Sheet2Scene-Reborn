// @ts-nocheck
export const DUNGEON_ROOMS = [
    {
        name: "Slime Consumption Pit",
        cr: 1,
        biome: ["dungeon", "caves"],
        category: "aberrations",
        tactic: "Oozes drop from above when tiles shift",
    },
    {
        name: "Skeletal Guardians",
        cr: 2,
        biome: ["dungeon", "ruins"],
        category: "undead",
        tactic: "Guard braziers that empower them",
    },
    {
        name: "Cultist Ritual Chamber",
        cr: 3,
        biome: ["dungeon", "shadowlands"],
        category: "humanoids",
        tactic: "Ritual mid-progress, powerful if uninterrupted",
    },
    {
        name: "Golem Hallway",
        cr: 4,
        biome: ["dungeon"],
        category: "constructs",
        tactic: "Only activates when party steps on sigils",
    },
    {
        name: "Dragon Whelp Nursery",
        cr: 5,
        biome: ["dungeon", "mountains"],
        category: "dragons",
        tactic: "Whelps screech—adult may approach",
    }
];
