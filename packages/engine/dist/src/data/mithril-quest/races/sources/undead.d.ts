export declare const MQ_RACES_UNDEAD: readonly [{
    readonly key: "revenant";
    readonly label: "Revenant";
    readonly description: "Animés par une volonté inébranlable, ils reviennent pour accomplir un destin.";
    readonly traits: readonly ["Résilience immortelle", "Vision spectrale", "Volonté de fer"];
}, {
    readonly key: "dhampir";
    readonly label: "Dhampir";
    readonly description: "Entre deux mondes, ils sont liés à une lignée vampirique.";
    readonly traits: readonly ["Morsure vampirique", "Agilité préternaturelle", "Endurance surnaturelle"];
}, {
    readonly key: "spectravel";
    readonly label: "Spectravel";
    readonly description: "Êtres partiellement immatériels, oscillant entre vie et éther.";
    readonly traits: readonly ["Lévitation légère", "Passage éthéré", "Perception astrale"];
}];
export type MQRaceUndead = (typeof MQ_RACES_UNDEAD)[number];
