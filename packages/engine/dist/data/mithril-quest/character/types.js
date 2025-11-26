// ==========================================================================
// FANTASY — Character Types
// ==========================================================================
// --------------------------------------------------------------------------
// DEFAULT SHEET
// --------------------------------------------------------------------------
export const DEFAULT_FANTASY_SHEET = {
    id: "",
    world: "fantasy",
    variant: "core",
    identity: {
        name: "",
        age: null,
        gender: "",
        race: "",
        subrace: "",
        class: "",
        archetype: "",
        era: "",
        subworld: "",
    },
    attributes: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
    },
    skills: {
        combat: 0,
        survival: 0,
        magic: 0,
        diplomacy: 0,
        stealth: 0,
        crafting: 0,
    },
    inventory: [],
    background: {
        origin: "",
        occupation: "",
        faction: "",
        personalGoal: "",
        flaw: "",
        trait: "",
        notes: "",
    },
    magic: {
        school: "",
        focus: "",
        spells: [],
        rituals: [],
    },
    portraitUrl: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
};
// --------------------------------------------------------------------------
// FACTORY — crée une nouvelle fiche vide
// --------------------------------------------------------------------------
export function createEmptyFantasySheet(id) {
    const now = new Date().toISOString();
    return {
        ...DEFAULT_FANTASY_SHEET,
        id,
        createdAt: now,
        updatedAt: now,
    };
}
