export declare const TYPE_ARTILLERY: {
    readonly role: "Artillery";
    readonly description: "Spécialiste du combat à distance, inflige des dégâts massifs mais fragile en mêlée.";
    readonly stats: {
        readonly hp: "Faibles";
        readonly ac: "Faible";
        readonly damage: "Très élevé (distance)";
        readonly mobility: "Moyenne";
    };
    readonly traits: readonly ["Dégâts à longue portée", "Faible résistance physique", "Dangerosité accrue si protégé"];
    readonly examples: readonly ["Arbalétrier lourd", "Mage pyromancien", "Canon vivant cristallin"];
};
