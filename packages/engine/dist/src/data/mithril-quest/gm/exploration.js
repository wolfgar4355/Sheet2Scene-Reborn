// @ts-nocheck
// lib/s2s/fantasy/gm/exploration.ts
export const TRAVEL_PACES = [
    { key: "fast", label: "Rapide", distancePerDay: 40, stealthPenalty: -5 },
    { key: "normal", label: "Normal", distancePerDay: 32, stealthPenalty: 0 },
    { key: "slow", label: "Lent", distancePerDay: 24, stealthPenalty: +2 },
];
export const EXPLORATION_HAZARDS = [
    {
        key: "quicksand",
        label: "Sables Mouvants",
        description: "Une zone traîtresse où un faux pas peut engloutir.",
        dangerLevel: 4,
    },
    {
        key: "magic-storm",
        label: "Tempête Magique",
        description: "Distorsions d'énergie, éclairs arcaniques, illusions spontanées.",
        dangerLevel: 8,
    },
    {
        key: "poison-mist",
        label: "Brume Toxique",
        description: "Gaz naturel nocif dans certaines cavernes et ruines.",
        dangerLevel: 6,
    },
];
