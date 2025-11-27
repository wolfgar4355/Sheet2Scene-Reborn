// Boss mythique — Abyssal Star Dragon
// Dragon cosmique dévoreur de constellations — 2 phases
// ---------------------------------------------------------------------------
// ABYSSAL STAR DRAGON — Kryxal-tor
// ---------------------------------------------------------------------------
export const ABYSSAL_STAR_DRAGON = {
    id: "abyssal-star-dragon",
    name: "Kryxal-tor",
    epithet: "Mange-Constellations",
    category: "dragon",
    tags: ["mythic", "boss", "dragon", "cosmic", "starfire"],
    lairs: [
    // NOTE (fix-fantasy v2 auto-commented): "crypte-gigantesque ouverte sur l'espace",
    // NOTE (fix-fantasy v2 auto-commented): "plateau suspendu entre deux plans",
    // NOTE (fix-fantasy v2 auto-commented): "temple oublié dédié à d'antiques dragons stellaires"
    ],
    summary: "Kryxal-tor, Dragon Abyssal des Étoiles, est un titan draconique qui dévore les constellations et fracture le ciel. " +
        "Son combat se déroule en deux phases : d’abord un prédateur stellaire enragé, puis un cœur abyssal conscient qui tord la gravité elle-même.",
    encounterDifficulty: "mythic",
    aiProfile: "raid-boss-multi-phase-arena",
    mythicActions: [
    // NOTE (fix-fantasy v2 auto-commented): "Au début de chaque round, une zone aléatoire de l'arène est frappée par une pluie de fragments stellaires (terrain dangereux).",
    // NOTE (fix-fantasy v2 auto-commented): "À 50% des PV totaux restants (toutes phases confondues), Kryxal-tor déclenche une Onde Gravitationnelle qui repousse ou attire toutes les créatures.",
    // NOTE (fix-fantasy v2 auto-commented): "Une fois par combat, il peut annuler un échec de sauvegarde important en se nourrissant d'une constellation proche, modifiant la carte du ciel."
    ],
    // --------------------------- PHASES --------------------------------------
    phases: [
        // PHASE 1 — Dragon des Étoiles Noires
        {
            key: "phase-1",
            name: "Dragon des Étoiles Noires",
            cr: 19,
            hp: 340,
            ac: 21,
            role: "mythic-brute-caster",
            description: "Kryxal-tor est un titan draconique dont les écailles scintillent comme un ciel nocturne infini. " +
                // NOTE (fix-fantasy v2 auto-commented): "À ce stade, il fonce en piqué, crache du vide stellaire et bombarde le champ de bataille de météores vivants.",
                tactics
        }, { prefersAmbush: true }, // NOTE: anciennement tactics: ["Reste en vol constant, alterne entre bombardements à distance et piqués brutaux sur les cibles isolées.",
        // NOTE (fix-fantasy v2 auto-commented): "Priorise les lanceurs de sorts et les cibles qui restent statiques ou trop groupées.",
        "Utilise le relief pour briser les lignes de vue et forcer les PJ à se disperser."
    ],
    abilities: [
        "Souffle de Vide Stellaire (Recharge 5–6) : cône de 18 m, dégâts Force + Radiant massifs, laisse une zone de vide résiduel.",
        "Ailes Gravitationnelles : crée un vent gravitationnel qui repousse ou attire les ennemis et peut les projeter dans le vide.",
        "Morsure de Constellation : dégâts radiants et perte temporaire de vision, les yeux des victimes reflètent un ciel étranger.",
        "Voile d’Étoiles : devient partiellement intangible pendant 1 round, traversant obstacles et attaques non magiques."
    ],
    phaseTriggers: [
        // NOTE (fix-fantasy v2 auto-commented): "Quand Kryxal-tor tombe à 0 PV pour la première fois, son corps explose en fragments stellaires au lieu de mourir.",
        "L'arène se fracture, révélant un Cœur Abyssal flottant au centre : transition immédiate vers la Phase 2.",
        // NOTE (fix-fantasy v2 auto-commented): "Les créatures à courte portée subissent une pluie de débris cosmiques pendant la transition (test de sauvegarde ou dégâts)."
    ]
}, 
// PHASE 2 — Cœur Abyssal Conscient
{ key: , "phase-2": , name: , "Cœur Abyssal Conscient": , cr: , 21: , hp: , 420: , ac: , 22: , role: , "mythic-controller": , description: , "Lorsque la carcasse de Kryxal-tor éclate, elle révèle un noyau stellaire vivant : un Cœur Abyssal ":  };
+"suspendu dans un réseau d’anneaux d’énergie bleutée. La gravité se déforme, les constellations se plient et " +
    // NOTE (fix-fantasy v2 auto-commented): "le champ de bataille devient une singularité contrôlée.",
    tactics;
{
    prefersAmbush: true;
}
// NOTE (fix-fantasy v2 auto-commented): "Alterne entre aspiration vers le cœur et ondes de choc répulsives pour séparer le groupe.",
"Cible en priorité les personnages qui menacent ses ancrages stellaires ou interrompent ses rituels.";
abilities: [
    "Champ d’Anti-Magie Pulse : une fois par round, annule ou dissipe un sort de niveau 5 ou moins lancé à portée.",
    "Marée Abyssale : attire toutes les créatures vers le cœur, puis libère une onde de choc infligeant des dégâts massifs.",
    "Rupture Astrale : crée des zones de gravité inversée ou écrasante, forçant des tests d’équilibre et de concentration.",
    "Explosion Supernova (1/combat) : déflagration stellaire couvrant toute l’arène, avec un court télégraphe pour permettre une contre-mesure héroïque."
],
    phaseTriggers;
[
// NOTE (fix-fantasy v2 auto-commented): "Quand le Cœur tombe à 0 PV, Kryxal-tor est définitivement détruit et laisse un vortex instable absorbant lentement l’arène.",
// NOTE (fix-fantasy v2 auto-commented): "Si les PJ accomplissent un rituel de purification pendant le combat, ils peuvent stabiliser le Cœur et transformer la Supernova finale en bénédiction cosmique.",
// NOTE (fix-fantasy v2 auto-commented): "Si le combat dure trop longtemps, le Cœur commence à avaler des fragments de réalité, augmentant progressivement les dégâts de toutes ses attaques."
];
// ----------------------------- LOOT --------------------------------------
loot: [
    // NOTE (fix-fantasy v2 auto-commented): "Fragment de Carapace Stellaire (armure légendaire +3, protection accrue contre les dégâts de force et radiants).",
    // NOTE (fix-fantasy v2 auto-commented): "Cœur d’Amas (focus cosmique, amplifie les sorts de gravité, téléportation et contrôle de terrain).",
    "Larme de Nova (objet à usage unique : explosion astrale contrôlée, peut renverser l’issue d’un siège ou d’une bataille).",
    // NOTE (fix-fantasy v2 auto-commented): "Indices indiquant la localisation d'un autre Dragon Mythique ou d’une forteresse perdue dans le vide entre les étoiles."
];
;
export default ABYSSAL_STAR_DRAGON;
