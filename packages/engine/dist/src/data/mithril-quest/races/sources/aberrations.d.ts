export declare const MQ_RACES_ABERRATIONS: readonly [{
    readonly key: "voidspawn";
    readonly label: "Voidspawn";
    readonly description: "Nés d’une faille dans le Vide, leur corps fluctue entre existence et néant.";
    readonly traits: readonly ["Vision du vide", "Résistance nécrotique", "Voile d’ombre", "Présence dissonante"];
}, {
    readonly key: "mindpiercer";
    readonly label: "Mindpiercer";
    readonly description: "Leurs pensées percent la réalité. Ils communiquent par psionisme instinctif.";
    readonly traits: readonly ["Télépathie courte portée", "Perception mentale", "Résistance psychique", "Fatigue psionique"];
}, {
    readonly key: "fleshweaver";
    readonly label: "Fleshweaver";
    readonly description: "Maîtres de la morphose, ils peuvent temporairement modifier leur propre chair.";
    readonly traits: readonly ["Morphose mineure", "Résilience organique", "Immunité à la paralysie", "Instabilité corporelle"];
}, {
    readonly key: "veilmind";
    readonly label: "Veilmind";
    readonly description: "Leurs yeux perçoivent émotions, illusions et distorsions de réalité.";
    readonly traits: readonly ["Vue du voile", "Immunité aux illusions mineures", "Empathie mentale", "Fatigue sensorielle"];
}, {
    readonly key: "echoform";
    readonly label: "Echoform";
    readonly description: "Êtres partiellement désynchronisés : une partie de leur essence existe dans l’Éther.";
    readonly traits: readonly ["Déphasage éthéré", "Légèreté surnaturelle", "Voix dédoublée", "Vulnérabilité aux décharges astrales"];
}];
export type MQRaceAberration = (typeof MQ_RACES_ABERRATIONS)[number];
