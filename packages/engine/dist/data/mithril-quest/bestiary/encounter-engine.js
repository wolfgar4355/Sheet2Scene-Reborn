// =====================================================
// FANTASY → MITHRIL ENGINE — ENCOUNTER ADAPTER
// =====================================================
import { runEncounterEngine } from "@engine/mithril";
import { ALL_MONSTERS } from "./ALL_MONSTERS";
const WORLD = "fantasy";
// Conversion MonsterDefinition → MithrilMonster
function toMithril(m) {
    return {
        id: m.id,
        name: m.label,
        world: WORLD,
        cr: Number(m.challenge ?? m.cr ?? 1),
        category: m.type,
        biomeTags: m.biomes ?? [],
        habitatTags: m.habitat ?? [],
        ref: {
            source: "fantasy-bestiary",
            key: m.id,
        },
    };
}
// Map complet
function getMonsterList() {
    return ALL_MONSTERS.map(toMithril);
}
// API principale
export function generateFantasyEncounter(req) {
    const finalReq = {
        world: WORLD,
        ...req,
    };
    return runEncounterEngine(getMonsterList(), finalReq);
}
