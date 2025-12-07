// @ts-nocheck
// schema.ts — Fiche de personnage Mithril-Quest (MQ)
// ======================================================================
// 🎭  SCHEMA "CORE" — Standard pour tout personnage du monde MQ
// ======================================================================
export const MQ_SHEET_SCHEMA_CORE = {
    variant: "core",
    sections: [
        // -------------------------------------------------------
        // IDENTITÉ
        // -------------------------------------------------------
        {
            key: "identity",
            label: "Identité",
            fields: [
                { path: "identity.name", label: "Nom", type: "text", width: "full" },
                { path: "identity.gender", label: "Genre", type: "text", width: "half" },
                { path: "identity.age", label: "Âge", type: "number", width: "half" },
                { path: "identity.race", label: "Race", type: "text", width: "half" },
                { path: "identity.subrace", label: "Sous-race", type: "text", width: "half" },
                { path: "identity.class", label: "Classe", type: "text", width: "half" },
                { path: "identity.archetype", label: "Archétype", type: "text", width: "half" },
                { path: "identity.era", label: "Ère (MQ)", type: "text", width: "half" },
                { path: "identity.subworld", label: "Sous-monde", type: "text", width: "half" },
            ],
        },
        // -------------------------------------------------------
        // ATTRIBUTS (MQ)
        // -------------------------------------------------------
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
        // -------------------------------------------------------
        // COMPÉTENCES (MQ)
        // -------------------------------------------------------
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
        // -------------------------------------------------------
        // MAGIE (MQ)
        // -------------------------------------------------------
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
        // -------------------------------------------------------
        // HISTORIQUE (MQ)
        // -------------------------------------------------------
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
// ======================================================================
// VARIANTS (à étendre plus tard)
// ======================================================================
export const MQ_SHEET_SCHEMAS = {
    core: MQ_SHEET_SCHEMA_CORE,
    // "shadow-realms": ...
    // "desert-and-runes": ...
    // "skyshard-empires": ...
};
// ======================================================================
// SELECTEUR DE SCHEMA
// ======================================================================
export function getMQSheetSchema(variant = "core") {
    return MQ_SHEET_SCHEMAS[variant] ?? MQ_SHEET_SCHEMA_CORE;
}
