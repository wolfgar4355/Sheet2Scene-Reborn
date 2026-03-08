export declare const HABITATS: {
    readonly forest: "Forêts, bois sombres, jungles";
    readonly desert: "Dunes, ruines, oasis";
    readonly mountain: "Falaises, pics rocheux, cavernes";
    readonly swamp: "Marais, tourbières, zones humides";
    readonly arctic: "Toundra, glaciers, banquise";
    readonly volcanic: "Lave, cendres, terres brûlées";
    readonly abyss: "Grottes profondes, gouffres";
    readonly plains: "Collines ouvertes, steppes";
    readonly ruins: "Anciennes cités, donjons, cryptes";
    readonly aquatic: "Océans, rivières, lacs";
    readonly celestial: "Plans supérieurs, cieux éternels";
    readonly infernal: "Enfers, gouffres démoniaques";
};
export type Habitat = keyof typeof HABITATS;
