// =====================================================
// FANTASY → MITHRIL ENGINE — MONSTER ADAPTER
// =====================================================
// Choix de taille par défaut
function defaultSizeForCategory(category) {
    switch (category) {
        case "dragon": return "large";
        case "giant": return "huge";
        case "beast": return "medium";
        case "humanoid": return "medium";
        case "undead": return "medium";
        case "construct": return "medium";
        case "elemental": return "large";
        case "fiend": return "medium";
        case "celestial": return "medium";
        case "fey": return "small";
        case "aberration": return "medium";
        default: return "medium";
    }
}
// Construction du statblock
function buildStatBlockFromMinion(minion) {
    return {
        hitPoints: minion.stats.hp,
        armorClass: minion.stats.ac,
        abilities: {
            str: minion.stats.str ?? 10,
            dex: minion.stats.dex ?? 10,
            con: minion.stats.con ?? 10,
            int: minion.stats.int ?? 10,
            wis: minion.stats.wis ?? 10,
            cha: minion.stats.cha ?? 10,
        },
    };
}
// Conversion Minion → MonsterDefinition
export function minionToMonster(worldKey, eraKey, minion) {
    return {
        id: minion.id,
        name: minion.name,
        label: `${minion.name} (CR ${minion.cr})`,
        type: minion.category,
        size: defaultSizeForCategory(minion.category),
        challenge: minion.cr,
        habitat: [...minion.biomes, ...minion.habitat],
        era: eraKey ? [eraKey] : undefined,
        statBlock: buildStatBlockFromMinion(minion),
        attacks: minion.attacks.map(a => ({
            key: `${minion.id}-atk-${a.key}`,
            label: a.key,
            type: a.type,
            damage: a.damage,
            description: a.description,
        })),
        traits: [
            ...minion.traits.map((t) => ({
                key: `${minion.id}-trait-${t.key}`,
                label: t.key,
                description: t.description,
            })),
            {
                key: `${minion.id}-behavior`,
                label: "Comportement",
                description: `Agression ${minion.behavior.aggression} / Courage ${minion.behavior.courage}`,
            },
        ],
        lootTable: minion.loot ?? [],
        faction: minion.faction ?? undefined,
    };
}
