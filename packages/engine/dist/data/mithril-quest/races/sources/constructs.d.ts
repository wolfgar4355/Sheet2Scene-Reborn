export declare const MQ_RACES_CONSTRUCTS: readonly [{
    readonly key: "forgeborn";
    readonly label: "Forgeborn";
    readonly description: "Créatures forgées dans la braise et le métal. Leur cœur abrite une braise éternelle.";
    readonly traits: readonly ["Corps métallique résistant", "Vision dans la fumée", "Immunité au poison", "Bénédiction de la forge"];
}, {
    readonly key: "golemkin";
    readonly label: "Golemkin";
    readonly description: "Êtres animés par une magie runique ancienne. Ils sont composés de pierre, d’argile, de cristal ou de métal.";
    readonly traits: readonly ["Peau runique", "Résistance physique élevée", "Pas besoin de respirer", "Présence imposante"];
}, {
    readonly key: "vivicraft";
    readonly label: "Vivicraft";
    readonly description: "Constructs alchimiques créés à partir de chair régénérée et de magie vitale. À mi-chemin entre vivant et artificiel.";
    readonly traits: readonly ["Régénération lente", "Immunité aux maladies", "Stabilité corporelle", "Affinité alchimique"];
}, {
    readonly key: "etherframe";
    readonly label: "Etherframe";
    readonly description: "Esprits errants enfermé dans une enveloppe d’âme cristallisée. Semi-intangibles et sensibles aux flux arcaniques.";
    readonly traits: readonly ["Corps éthéré partiel", "Perception astrale", "Lévitation mineure", "Vulnérabilité aux décharges magiques"];
}, {
    readonly key: "clockwinder";
    readonly label: "Clockwinder";
    readonly description: "Automates conscients animés par un noyau mécanique. Leur esprit est précis, méthodique et logique.";
    readonly traits: readonly ["Précision mécanique", "Résistance au froid", "Mode analyse", "Entretien obligatoire"];
}];
export type MQRaceConstruct = (typeof MQ_RACES_CONSTRUCTS)[number];
