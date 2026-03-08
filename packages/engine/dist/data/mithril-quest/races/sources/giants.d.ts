export declare const MQ_RACES_GIANTS: readonly [{
    readonly key: "stoneborn";
    readonly label: "Stoneborn";
    readonly description: "Descendants des géants de pierre, leur corps semble sculpté dans la roche même.";
    readonly traits: readonly ["Peau de granit", "Force colossale", "Résistance au saignement", "Stabilité parfaite"];
}, {
    readonly key: "embercoloss";
    readonly label: "Embercoloss";
    readonly description: "Nés des lignées enflammées, leurs veines luisent comme des braises ardentes.";
    readonly traits: readonly ["Résistance au feu", "Braises intérieures", "Poigne brûlante", "Présence intimidante"];
}, {
    readonly key: "stormwalker";
    readonly label: "Stormwalker";
    readonly description: "Le tonnerre court dans leurs veines : rapides, sensibles aux flux électriques.";
    readonly traits: readonly ["Affinité électrique", "Vitesse accrue", "Cri du tonnerre", "Résistance à l’électricité"];
}, {
    readonly key: "frostforged";
    readonly label: "Frostforged";
    readonly description: "Forgés par le froid ancestral, ils résistent aux températures extrêmes.";
    readonly traits: readonly ["Résistance au froid", "Souffle glacé", "Peau givrée", "Calme glacial"];
}];
export type MQRaceGiant = (typeof MQ_RACES_GIANTS)[number];
