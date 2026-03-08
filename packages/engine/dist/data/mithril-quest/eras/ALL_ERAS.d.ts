export declare const ALL_MQ_ERAS: readonly [{
    readonly id: "age-of-heroes";
    readonly worldId: "mithril-quest";
    readonly name: "Âge des Héros";
    readonly shortDescription: "Montée des royaumes, paladins, guerres de frontières et légendes vivantes.";
    readonly recommendedLevels: readonly [1, 10];
    readonly themes: readonly ["chevalerie", "épopée", "exploration", "lumière contre ténèbres", "royaumes en expansion"];
    readonly magieDominante: readonly ["magie divine", "magie de bataille", "bénédictions"];
    readonly technologie: readonly ["acier", "forteresses", "armes lourdes", "enchantements"];
    readonly factions: readonly ["Ordre du Soleil Radieux", "Gardes des Frontières"];
    readonly ennemis: readonly ["orcs", "morts-vivants", "bêtes monstrueuses"];
    readonly climat: readonly ["forêts profondes", "plaines", "forteresses royales"];
    readonly evenements: readonly ["Couronnement du Premier Roi", "Guerre des Trois Lances", "Alliance des Sceaux"];
    readonly tags: readonly ["heroic-fantasy", "light-vs-dark", "epic", "knights"];
}];
export type MQEra = typeof ALL_MQ_ERAS[number];
