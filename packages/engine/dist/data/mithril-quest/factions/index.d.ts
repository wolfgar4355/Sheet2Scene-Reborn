export declare const FACTIONS: {
    readonly draconic: "Dragons, drakéides et cultistes draconiques";
    readonly frostborn: "Tribus glacées, morts gelés, bêtes nordiques";
    readonly infernal: "Diables, démons, corruption du feu";
    readonly conclave: "Mages, golems, arcanes supérieures";
    readonly sylvan: "Esprits, dryades, créatures forestières";
    readonly empire: "Armées, chevaliers, machines de guerre";
    readonly sandborn: "Déserts, scorpions géants, momies";
    readonly necroshade: "Nécromants, morts-vivants, ombres";
    readonly eldritch: "Abominations, horreurs cosmiques";
    readonly covenant: "Ordres sacrés, paladins, protecteurs";
    readonly wildhunt: "Cerfs géants, lycans, chasseurs primordiaux";
    readonly clockwork: "Automates, golems mécaniques";
};
export type Faction = keyof typeof FACTIONS;
