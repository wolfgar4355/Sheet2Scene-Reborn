export declare const MQ_RACES_INFERNAL: readonly [{
    readonly key: "cambion";
    readonly label: "Cambion";
    readonly description: "Influencés par une lignée démoniaque, ils possèdent une puissance sombre.";
    readonly traits: readonly ["Magie noire", "Résistance au feu", "Aura intimidante"];
}, {
    readonly key: "abyssal-born";
    readonly label: "Abyssal-Né";
    readonly description: "Nés dans les ténèbres du gouffre, leur présence dérange.";
    readonly traits: readonly ["Ombres mouvantes", "Résistance nécrotique", "Furtivité nocturne"];
}, {
    readonly key: "hellion";
    readonly label: "Hellion";
    readonly description: "Enfants des flammes infernales, leur peau semble brûler d'énergie rougeoyante.";
    readonly traits: readonly ["Feu intérieur", "Intimidation accrue", "Magie ardente"];
}];
export type MQRaceInfernal = (typeof MQ_RACES_INFERNAL)[number];
