export declare const PROFESSIONS: readonly [{
    readonly key: "blacksmith";
    readonly label: "Forgeron";
    readonly category: "artisan";
    readonly skills: readonly ["Forge", "Métallurgie"];
    readonly tools_required: readonly ["smith_tools"];
    readonly perks: readonly ["+10% qualité armes/armures fabriquées", "Réparation gratuite des équipements", "Accès aux recettes métalliques rares"];
    readonly loot_bonus: readonly ["minerai", "ingots", "armes brisées"];
    readonly crafts: readonly ["armes", "armures", "outils en métal"];
    readonly description: "Maître du métal, créateur de lames et d’armures, essentiel dans toute communauté.";
}, {
    readonly key: "leatherworker";
    readonly label: "Tanneur";
    readonly category: "artisan";
    readonly skills: readonly ["Travail du cuir"];
    readonly tools_required: readonly ["leatherworker_tools"];
    readonly perks: readonly ["Création d’armures légères améliorées", "Réparation rapide du cuir", "Bonus de discrétion sur équipements moddés"];
    readonly loot_bonus: readonly ["peaux", "cuir traité"];
    readonly crafts: readonly ["armures légères"];
    readonly description: "Spécialiste du cuir, créateur de vêtements renforcés et d’armures discrètes.";
}, {
    readonly key: "alchemist";
    readonly label: "Alchimiste";
    readonly category: "artisan";
    readonly skills: readonly ["Alchimie", "Chimie arcane"];
    readonly tools_required: readonly ["alchemist_supplies"];
    readonly perks: readonly ["Création de potions rares", "Explosifs alchimiques", "+20% efficacité soins"];
    readonly loot_bonus: readonly ["essences", "réactifs", "fioles"];
    readonly crafts: readonly ["potions", "bombes", "huiles"];
    readonly description: "Manipulateur de substances étranges, capable de miracles… ou de catastrophes.";
}, {
    readonly key: "thief";
    readonly label: "Voleur";
    readonly category: "criminal";
    readonly skills: readonly ["Discrétion", "Crochetage"];
    readonly tools_required: readonly ["thieves_tools"];
    readonly perks: readonly ["Dégâts +20% en attaque surprise", "Ouverture de serrures complexe", "Bonus de loot dans zones urbaines"];
    readonly loot_bonus: readonly ["objets précieux", "papiers secrets"];
    readonly crafts: readonly ["crochets", "outils modifiés"];
    readonly description: "Expert de l’ombre, agile et rusé, maître des serrures et de la discrétion.";
}, {
    readonly key: "assassin";
    readonly label: "Assassin";
    readonly category: "criminal";
    readonly skills: readonly ["Discrétion", "Poisons", "Perception"];
    readonly tools_required: readonly ["poison_kit"];
    readonly perks: readonly ["+50% dégâts avec poison", "Attaque critique facilitée", "Infiltration renforcée"];
    readonly loot_bonus: readonly ["toxines", "armes légères"];
    readonly crafts: readonly ["poisons"];
    readonly description: "Tueur silencieux maîtrisant les poisons et les frappes mortelles.";
}, {
    readonly key: "druid";
    readonly label: "Druide";
    readonly category: "nature";
    readonly skills: readonly ["Nature", "Médecine", "Survie"];
    readonly tools_required: readonly ["druid_seedpouch"];
    readonly perks: readonly ["Accès aux rituels naturels", "Amélioration de soins naturels", "Compagnon animal amélioré"];
    readonly loot_bonus: readonly ["plantes", "essences naturelles"];
    readonly crafts: readonly ["baumes", "potions naturelles"];
    readonly description: "Gardien des forces naturelles, guérisseur et protecteur des terres sauvages.";
}, {
    readonly key: "herbalist";
    readonly label: "Herboriste";
    readonly category: "nature";
    readonly skills: readonly ["Botanique", "Médecine"];
    readonly tools_required: readonly ["herbalism_kit"];
    readonly perks: readonly ["Création accélérée d’antidotes", "Bonus de guérison naturelle", "Détection automatique plantes rares"];
    readonly loot_bonus: readonly ["herbes rares", "racines"];
    readonly crafts: readonly ["antidotes", "onguents"];
    readonly description: "Expert en plantes, capable de concocter remèdes et antidotes.";
}, {
    readonly key: "artificer";
    readonly label: "Artificier";
    readonly category: "tech";
    readonly skills: readonly ["Ingénierie", "Arcanotech"];
    readonly tools_required: readonly ["gnome_toolkit"];
    readonly perks: readonly ["Création gadgets", "Tirs améliorés avec armes technomagiques", "Réparation rapide appareils"];
    readonly loot_bonus: readonly ["engrenages", "cristaux tech"];
    readonly crafts: readonly ["golems miniatures", "pièges mécaniques"];
    readonly description: "Un ingénieur magitech capable de créer gadgets et machines arcaniques.";
}];
