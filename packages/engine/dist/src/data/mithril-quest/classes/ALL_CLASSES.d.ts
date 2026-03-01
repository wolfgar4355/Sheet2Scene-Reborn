export declare const ALL_CLASSES: readonly [{
    readonly key: "alchemist";
    readonly label: "Alchimiste";
    readonly description: "Spécialiste des mélanges instables, toxines raffinées, explosifs et mutations alchimiques.";
    readonly hitdice: "d8";
    readonly primaryAbility: "Intelligence";
    readonly archetypes: readonly ["Verrier Fou", "Maître des Élixirs", "Protochimiste"];
}, {
    readonly key: "artificer";
    readonly label: "Artificier";
    readonly description: "Inventeur arcanique créant gadgets, armes magiques et mécanismes complexes.";
    readonly hitdice: "d8";
    readonly primaryAbility: "Intelligence";
    readonly archetypes: readonly ["Forgeur d’Acier", "Ingénieur Runique", "Inventeur Avancé"];
}, {
    readonly key: "assassin";
    readonly label: "Assassin";
    readonly description: "Tueur spécialisé dans les cibles prioritaires, poisons et attaques décisives.";
    readonly hitdice: "d8";
    readonly primaryAbility: "Dextérité";
    readonly archetypes: readonly ["Lame Silencieuse", "Venin du Scorpion", "Ombre du Crépuscule"];
}, {
    readonly key: "bard";
    readonly label: "Barde";
    readonly description: "Artiste et conteur inspirant, guérisseur, manipulateur ou déstabilisateur. Le barde canalise la magie par la musique, la poésie et les récits.";
    readonly hitdice: "d8";
    readonly primaryAbility: "Charisme";
    readonly archetypes: readonly ["Éminent Illusionniste", "Ménestrel Somptueux", "Chanteur de Légendes"];
}, {
    readonly key: "battlemage";
    readonly label: "Mage de Bataille";
    readonly description: "Combattant arcanique renforçant armes et armures de magie offensive. Maîtrise les runes martiales et les enchantements de guerre.";
    readonly hitdice: "d8";
    readonly primaryAbility: "Intelligence";
    readonly archetypes: readonly ["Lame Runique", "Déferlement Arcanique", "Épée des Tempêtes"];
}, {
    readonly key: "berserker";
    readonly label: "Berserker";
    readonly description: "Guerrier possédé par une fureur ancestrale. Rage de bataille et endurance inhumaine.";
    readonly hitdice: "d12";
    readonly primaryAbility: "Force";
    readonly archetypes: readonly ["Fureur du Nord", "Totem des Ancêtres", "Chant de Guerre"];
}, {
    readonly key: "bloodmage";
    readonly label: "Mage de Sang";
    readonly description: "Canalise sa propre vitalité pour alimenter des sorts plus puissants, au prix de sévères contrecoups.";
    readonly hitdice: "d6";
    readonly primaryAbility: "Intelligence";
    readonly archetypes: readonly ["Rituel Écarlate", "Sang d’Obsidienne", "Cœur Rouge"];
}, {
    readonly key: "cleric";
    readonly label: "Clerc";
    readonly description: "Serviteur d’une divinité. Mélange de soins, protections et magie sacrée.";
    readonly hitdice: "d8";
    readonly primaryAbility: "Sagesse";
    readonly archetypes: readonly ["Prêtre de Lumière", "Oracle des Lances", "Gardien du Sanctuaire"];
}, {
    readonly key: "druid";
    readonly label: "Druide";
    readonly description: "Gardien des forêts et des esprits naturels. Maîtrise les sorts de nature, les métamorphoses animales et les soins.";
    readonly hitdice: "d8";
    readonly primaryAbility: "Sagesse";
    readonly archetypes: readonly ["Cercle des Bêtes", "Cercle des Arcanes Sauvages", "Cercle des Anciennes Racines"];
}, {
    readonly key: "duelist";
    readonly label: "Duelliste";
    readonly description: "Maître des lames fines, expert en esquives, contre-attaques et techniques de précision.";
    readonly hitdice: "d8";
    readonly primaryAbility: "Dextérité";
    readonly archetypes: readonly ["Danseur de Lame", "Fine Lame", "École du Couteau"];
}, {
    readonly key: "fighter";
    readonly label: "Guerrier";
    readonly description: "Combattant polyvalent, maître des armes et des tactiques de champ de bataille.";
    readonly hitdice: "d10";
    readonly primaryAbility: "Force";
    readonly archetypes: readonly ["Maître d’Armes", "Champion", "Vétéran de Fer"];
}, {
    readonly key: "hunter";
    readonly label: "Chasseur";
    readonly description: "Domestiqueur de monstres, dresseur de bêtes et expert en terrains sauvages.";
    readonly hitdice: "d10";
    readonly primaryAbility: "Dextérité";
    readonly archetypes: readonly ["Traqueur de Piste", "Maître des Bêtes", "Œil du Frelon"];
}, {
    readonly key: "inquisitor";
    readonly label: "Inquisiteur";
    readonly description: "Chasseur implacable d’hérétiques, démonistes et hérétiques. Mélange foi, armes bénies et magie interdite.";
    readonly hitdice: "d10";
    readonly primaryAbility: "Force ou Sagesse";
    readonly archetypes: readonly ["Flamme du Saint", "Ordre des Justiciers", "Œil Sacré"];
}, {
    readonly key: "knight";
    readonly label: "Chevalier";
    readonly description: "Soldat en armure lourde, lié par un code d’honneur et des serments de loyauté.";
    readonly hitdice: "d10";
    readonly primaryAbility: "Force";
    readonly archetypes: readonly ["Ordre du Lion", "Garde Rose", "Sentinelle du Sanctuaire"];
}, {
    readonly key: "mage";
    readonly label: "Mage";
    readonly description: "Maître absolu de la magie. Capable de manipuler les forces arcaniques les plus dangereuses.";
    readonly hitdice: "d6";
    readonly primaryAbility: "Intelligence";
    readonly archetypes: readonly ["Savant Arcaniste", "Maître des Énergies Primordiales", "Chronomancien"];
}, {
    readonly key: "monk";
    readonly label: "Moine";
    readonly description: "Artiste martial discipliné utilisant son énergie intérieure pour des frappes rapides.";
    readonly hitdice: "d8";
    readonly primaryAbility: "Dextérité";
    readonly archetypes: readonly ["Voie du Poing Silencieux", "Voie de la Lame Filante", "Voie du Fer"];
}, {
    readonly key: "mystic";
    readonly label: "Mystique";
    readonly description: "Canalisation d’énergie intérieure et pouvoirs spirituels subtils.";
    readonly hitdice: "d8";
    readonly primaryAbility: "Sagesse ou Charisme";
    readonly archetypes: readonly ["Ascète", "Prophète du Souffle", "Marcheur du Rêve"];
}, {
    readonly key: "necromancer";
    readonly label: "Nécromancien";
    readonly description: "Domteur des morts, des esprits et de la désolation.";
    readonly hitdice: "d6";
    readonly primaryAbility: "Intelligence";
    readonly archetypes: readonly ["Signeur des Ossements", "Voie du Liche", "Alchimiste de la Purification"];
}, {
    readonly key: "paladin";
    readonly label: "Paladin";
    readonly description: "Champion sacré lié à un serment. Protecteur, magie divine et aura de vertu.";
    readonly hitdice: "d10";
    readonly primaryAbility: "Force ou Charisme";
    readonly archetypes: readonly ["Serment du Soleil", "Serment des Brumes", "Serment du Jugement"];
}, {
    readonly key: "psion";
    readonly label: "Psion";
    readonly description: "Maître des pouvoirs mentaux : télépathie, télékinésie et domination psychique.";
    readonly hitdice: "d6";
    readonly primaryAbility: "Intelligence ou Sagesse";
    readonly archetypes: readonly ["Voie de l’Esprit", "Sondeur d’Ames", "Vision Psychique"];
}, {
    readonly key: "ranger";
    readonly label: "Rôdeur";
    readonly description: "Explorateur aguerri, tireur d’élite et pisteur expert. Polyvalent en nature sauvage.";
    readonly hitdice: "d10";
    readonly primaryAbility: "Dextérité";
    readonly archetypes: readonly ["Traqueur d’Ombre", "Guerrier du Vent", "Sentinelle Forestière"];
}, {
    readonly key: "rogue";
    readonly label: "Roublard";
    readonly description: "Expert de discrétion, pièges, opportunités et frappes précises.";
    readonly hitdice: "d8";
    readonly primaryAbility: "Dextérité";
    readonly archetypes: readonly ["Voleur de Guilde", "Brise-Serrures", "Lame des Ténèbres"];
}, {
    readonly key: "runeguard";
    readonly label: "Runegarde";
    readonly description: "Spécialiste des glyphes de protection et de renforcement.";
    readonly hitdice: "d10";
    readonly primaryAbility: "Sagesse";
    readonly archetypes: readonly ["Gardien Runique", "Sentinelle Gravée", "Bouclier des Pierres"];
}, {
    readonly key: "shaman";
    readonly label: "Chaman";
    readonly description: "Pont entre le monde des esprits et celui des mortels. Manipule totems, malédictions et bénédictions ancestrales.";
    readonly hitdice: "d8";
    readonly primaryAbility: "Sagesse";
    readonly archetypes: readonly ["Guide des Esprits", "Marcheur du Voile"];
}, {
    readonly key: "sorcerer";
    readonly label: "Ensorceleur";
    readonly description: "Magicien dont les sorts découlent d’un sang draconique, féerique ou abyssal.";
    readonly hitdice: "d6";
    readonly primaryAbility: "Charisme";
    readonly archetypes: readonly ["Lignée Draconique", "Lignée des Ombres", "Lignée Féerique"];
}, {
    readonly key: "spellsword";
    readonly label: "Sorcelame";
    readonly description: "Guerrier-mage canalisant ses sorts via ses armes.";
    readonly hitdice: "d8";
    readonly primaryAbility: "Intelligence ou Sagesse";
    readonly archetypes: readonly ["Lame de Foudre", "Marteau Runique", "Passeur d’Âmes"];
}, {
    readonly key: "warlock";
    readonly label: "Occultiste";
    readonly description: "Mage lié à des pactes mystiques. Malédictions, ombres et esprits interdits.";
    readonly hitdice: "d8";
    readonly primaryAbility: "Charisme";
    readonly archetypes: readonly ["Pacte de l’Abyme", "Pacte du Cœur Noir", "Pacte de l’Ancien"];
}, {
    readonly key: "warpriest";
    readonly label: "Prêtre de Guerre";
    readonly description: "Guerrier saint qui bénit ses alliés et frappe au nom de sa foi.";
    readonly hitdice: "d10";
    readonly primaryAbility: "Force";
    readonly archetypes: readonly ["Lame Sacrée", "Croisé Bénissant", "Main de Solaria"];
}, {
    readonly key: "witch_hunter";
    readonly label: "Chasseur de Sorcières";
    readonly description: "Traqueur de mages occultes et d’esprits corrupteurs. Mélange d’armes bénies et d’anti-magie.";
    readonly hitdice: "d10";
    readonly primaryAbility: "Force ou Sagesse";
    readonly archetypes: readonly ["Inquisiteur Sacré", "Brûleur du Péché", "Veilleur du Bûcher"];
}];
export type MQClass = (typeof ALL_CLASSES)[number];
