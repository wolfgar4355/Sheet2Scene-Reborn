// -----------------------------------------------------
// SCHEMA "CORE"
// -----------------------------------------------------
export const FANTASY_SHEET_SCHEMA_CORE = {
    variant: "core",
    sections: [
        {
            key: "identity",
            label: "Identité",
            fields: [
                { path: "identity.name", label: "Nom", type: "text", width: "full" },
                { path: "identity.gender", label: "Genre", type: "text", width: "half" },
                { path: "identity.age", label: "Âge", type: "number", width: "half" },
                { path: "identity.race", label: "Race", type: "text", width: "half" },
                { path: "identity.class", label: "Classe", type: "text", width: "half" },
                { path: "identity.archetype", label: "Archétype", type: "text", width: "full" },
                { path: "identity.era", label: "Ère", type: "text", width: "half" },
                { path: "identity.subworld", label: "Sous-monde", type: "text", width: "half" },
            ],
        },
        {
            key: "attributes",
            label: "Caractéristiques",
            fields: [
                { path: "attributes.strength", label: "Force", type: "number", width: "half" },
                { path: "attributes.dexterity", label: "Dextérité", type: "number", width: "half" },
                { path: "attributes.constitution", label: "Constitution", type: "number", width: "half" },
                { path: "attributes.intelligence", label: "Intelligence", type: "number", width: "half" },
                { path: "attributes.wisdom", label: "Sagesse", type: "number", width: "half" },
                { path: "attributes.charisma", label: "Charisme", type: "number", width: "half" },
            ],
        },
        {
            key: "skills",
            label: "Compétences",
            fields: [
                { path: "skills.combat", label: "Combat", type: "number", width: "half" },
                { path: "skills.survival", label: "Survie", type: "number", width: "half" },
                { path: "skills.magic", label: "Magie", type: "number", width: "half" },
                { path: "skills.diplomacy", label: "Diplomatie", type: "number", width: "half" },
                { path: "skills.stealth", label: "Discrétion", type: "number", width: "half" },
                { path: "skills.crafting", label: "Artisanat", type: "number", width: "half" },
            ],
        },
        {
            key: "magic",
            label: "Magie",
            fields: [
                { path: "magic.school", label: "École / Tradition", type: "text", width: "full" },
                { path: "magic.focus", label: "Focus magique", type: "text", width: "full" },
                { path: "magic.spells", label: "Sorts connus", type: "textarea", width: "full" },
                { path: "magic.rituals", label: "Rituels connus", type: "textarea", width: "full" },
            ],
        },
        {
            key: "background",
            label: "Historique",
            fields: [
                { path: "background.origin", label: "Origine", type: "text", width: "half" },
                { path: "background.occupation", label: "Occupation", type: "text", width: "half" },
                { path: "background.faction", label: "Faction", type: "text", width: "full" },
                { path: "background.personalGoal", label: "Objectif personnel", type: "textarea", width: "full" },
                { path: "background.flaw", label: "Défaut", type: "textarea", width: "full" },
                { path: "background.notes", label: "Notes", type: "textarea", width: "full" },
            ],
        },
    ],
};
// -----------------------------------------------------
// MAP DES VARIANTS (pour l'avenir)
// -----------------------------------------------------
export const FANTASY_SHEET_SCHEMAS = {
    core: FANTASY_SHEET_SCHEMA_CORE,
    // "shadow-domains": ... (quand tu voudras)
    // "highlands": ...
    // "desert-and-runes": ...
};
// -----------------------------------------------------
// SELECTEUR DE SCHEMA
// -----------------------------------------------------
export function getFantasySheetSchema(variant = "core") {
    return FANTASY_SHEET_SCHEMAS[variant] ?? FANTASY_SHEET_SCHEMA_CORE;
}
