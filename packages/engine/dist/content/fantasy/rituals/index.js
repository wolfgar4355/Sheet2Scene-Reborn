export * from "./sources/ritual_divine";
export * from "./sources/ritual_nature";
export * from "./sources/ritual_arcane";
export * from "./sources/ritual_necromancy";
export * from "./sources/ritual_spirit";
export const ALL_RITUALS = [
    ...RITUALS_DIVINE,
    ...RITUALS_NATURE,
    ...RITUALS_ARCANE,
    ...RITUALS_NECRO,
    ...RITUALS_SPIRIT,
];
