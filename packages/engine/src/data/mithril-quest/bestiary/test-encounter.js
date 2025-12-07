// @ts-nocheck
import { generateFantasyEncounter } from "./encounter-engine";
async function runTest() {
    const encounter = generateFantasyEncounter({
        partyLevel: 5,
        partySize: 4,
        difficulty: "medium",
        minCR: 1,
        maxCR: 8,
        biome: "forest",
        tags: ["undead"], // si tu veux filtrer
    });
    console.log("=== ENCOUNTER GÉNÉRÉ ===");
    console.log("Difficulté:", encounter.difficulty);
    console.log("Total CR:", encounter.totalCR);
    console.log("\nMonstres:");
    console.log(encounter.monsters.map((m) => ({
        id: m.id,
        name: m.name,
        cr: m.cr,
        biomeTags: m.biomeTags,
        habitatTags: m.habitatTags,
        ref: m.ref,
    })));
}
runTest();
