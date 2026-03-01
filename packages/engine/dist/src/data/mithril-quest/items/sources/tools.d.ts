export declare const TOOLS: readonly [{
    readonly key: "smith_tools";
    readonly label: "Outils de Forgeron";
    readonly rarity: "common";
    readonly value: 20;
    readonly category: "artisan";
    readonly effects: readonly ["Permet de forger et réparer armes/armures"];
    readonly eras: readonly ["ancient-age", "age-of-heroes", "high-kingdoms"];
    readonly description: "Un ensemble de marteaux, tenailles et limes pour la forge.";
}, {
    readonly key: "carpenter_tools";
    readonly label: "Outils de Charpentier";
    readonly rarity: "common";
    readonly value: 15;
    readonly category: "artisan";
    readonly effects: readonly ["Construction de structures simples"];
    readonly eras: readonly ["ancient-age", "age-of-heroes"];
    readonly description: "Outils essentiels pour façonner le bois.";
}, {
    readonly key: "alchemist_supplies";
    readonly label: "Fournitures d’Alchimiste";
    readonly rarity: "uncommon";
    readonly value: 50;
    readonly category: "artisan";
    readonly effects: readonly ["Permet de fabriquer potions, huiles et acides"];
    readonly eras: readonly ["age-of-heroes", "high-kingdoms"];
    readonly description: "Cornues, fioles, brûleurs et composants alchimiques.";
}, {
    readonly key: "leatherworker_tools";
    readonly label: "Outils de Tanneur";
    readonly rarity: "common";
    readonly value: 5;
    readonly category: "artisan";
    readonly effects: readonly ["Fabrication d’armures en cuir"];
    readonly eras: readonly ["ancient-age"];
    readonly description: "Outils pour travailler le cuir.";
}, {
    readonly key: "thieves_tools";
    readonly label: "Outils de Voleur";
    readonly rarity: "uncommon";
    readonly value: 25;
    readonly category: "criminal";
    readonly effects: readonly ["Permet de crocheter serrures et pièges"];
    readonly eras: readonly ["dark-age", "high-kingdoms"];
    readonly description: "Crochets, lames fines et outils de précision.";
}, {
    readonly key: "poison_kit";
    readonly label: "Kit à Poisons";
    readonly rarity: "rare";
    readonly value: 150;
    readonly category: "criminal";
    readonly effects: readonly ["Création et application de poisons"];
    readonly eras: readonly ["dark-age"];
    readonly description: "Substances toxiques, aiguilles, gants épais.";
}, {
    readonly key: "shadow_cloakkit";
    readonly label: "Kit de Dissimulation Nocturne";
    readonly rarity: "rare";
    readonly value: 200;
    readonly category: "criminal";
    readonly effects: readonly ["Camouflage urbain", "Faux papiers", "Accessoires d’espion"];
    readonly eras: readonly ["dark-age"];
    readonly description: "Un kit complet pour opérer dans l’ombre.";
}, {
    readonly key: "herbalism_kit";
    readonly label: "Kit d’Herboriste";
    readonly rarity: "uncommon";
    readonly value: 20;
    readonly category: "survival";
    readonly effects: readonly ["Potions simples", "Antidotes", "Baumes naturels"];
    readonly eras: readonly ["age-of-heroes"];
    readonly description: "Sachets de plantes, mortier et pestle.";
}, {
    readonly key: "navigator_tools";
    readonly label: "Outils de Navigateur";
    readonly rarity: "uncommon";
    readonly value: 25;
    readonly category: "exploration";
    readonly effects: readonly ["Navigation maritime ou terrestre"];
    readonly eras: readonly ["age-of-heroes", "high-kingdoms"];
    readonly description: "Boussole, sextant, cartes et compas.";
}, {
    readonly key: "cartographer_tools";
    readonly label: "Outils de Cartographe";
    readonly rarity: "uncommon";
    readonly value: 20;
    readonly category: "exploration";
    readonly effects: readonly ["Créer cartes précises", "Analyser géographie"];
    readonly eras: readonly ["high-kingdoms"];
    readonly description: "Plumes, encres, calque, gabarits.";
}, {
    readonly key: "flute";
    readonly label: "Flûte";
    readonly rarity: "common";
    readonly value: 2;
    readonly category: "instrument";
    readonly effects: readonly ["Performances", "Soutien bardique"];
    readonly eras: readonly ["ancient-age"];
    readonly description: "Une flûte simple taillée dans du bois.";
}, {
    readonly key: "lute";
    readonly label: "Luth";
    readonly rarity: "uncommon";
    readonly value: 35;
    readonly category: "instrument";
    readonly effects: readonly ["Performances", "Sorts bardiques"];
    readonly eras: readonly ["high-kingdoms"];
    readonly description: "Un luth de qualité, parfait pour les bardes.";
}, {
    readonly key: "drum";
    readonly label: "Tambour Tribal";
    readonly rarity: "common";
    readonly value: 6;
    readonly category: "instrument";
    readonly effects: readonly ["Rythmes de guerre", "Intimidation légère"];
    readonly eras: readonly ["ancient-age"];
    readonly description: "Un tambour rituel fait de peaux tendues.";
}, {
    readonly key: "scribe_kit";
    readonly label: "Kit de Scribe Arcanique";
    readonly rarity: "rare";
    readonly value: 200;
    readonly category: "magic";
    readonly effects: readonly ["Copie de sorts", "Analyse runique"];
    readonly eras: readonly ["arcane-renaissance"];
    readonly description: "Encres enchantées, plumes d’énergie, parchemins purifiés.";
}, {
    readonly key: "ritual_focus";
    readonly label: "Focaliseur de Rituel";
    readonly rarity: "uncommon";
    readonly value: 50;
    readonly category: "magic";
    readonly effects: readonly ["Stabilité de rituels", "Bonus d’incantation"];
    readonly eras: readonly ["age-of-heroes"];
    readonly description: "Un artefact focalisant l’énergie magique.";
}, {
    readonly key: "druid_seedpouch";
    readonly label: "Bourse à Graines Druidique";
    readonly rarity: "rare";
    readonly value: 120;
    readonly category: "magic";
    readonly effects: readonly ["Sorts naturels renforcés", "Croissance accélérée"];
    readonly eras: readonly ["age-of-heroes"];
    readonly description: "Un petit sac rempli de graines sacrées.";
}, {
    readonly key: "gnome_toolkit";
    readonly label: "Kit d’Ingénieur Gnome";
    readonly rarity: "rare";
    readonly value: 300;
    readonly category: "tech";
    readonly effects: readonly ["Réparer machineries", "Créer gadgets"];
    readonly eras: readonly ["arcane-renaissance"];
    readonly description: "Un chaos organisé de tournevis, engrenages et fioles d’énergie.";
}, {
    readonly key: "spark_lens";
    readonly label: "Lentille d’Étincelle";
    readonly rarity: "rare";
    readonly value: 180;
    readonly category: "tech";
    readonly effects: readonly ["Analyse magique", "Vision spectrale"];
    readonly eras: readonly ["arcane-renaissance"];
    readonly description: "Un monocle mécanique permettant de voir les flux d’énergie.";
}, {
    readonly key: "holy_reliquary";
    readonly label: "Reliquaire Sacré";
    readonly rarity: "legendary";
    readonly value: 900;
    readonly category: "relic";
    readonly effects: readonly ["Bonus channel divin", "Repousser morts-vivants"];
    readonly eras: readonly ["high-kingdoms", "mythic-age"];
    readonly description: "Un reliquaire contenant des fragments sacrés.";
}, {
    readonly key: "void_compass";
    readonly label: "Boussole du Vide";
    readonly rarity: "mythic";
    readonly value: 4000;
    readonly category: "relic";
    readonly effects: readonly ["Indique failles", "Détecte magie noire", "Navigation planaire"];
    readonly eras: readonly ["dark-age", "mythic-age"];
    readonly description: "Une boussole instable pointant vers les anomalies du Néant.";
}];
