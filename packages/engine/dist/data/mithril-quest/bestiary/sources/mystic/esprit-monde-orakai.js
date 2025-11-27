// ---------------------------------------------------------------------------
// ORAKAI — ESPRIT DU MONDE ANCIEN (MYTHIQUE)
// Gardien primitif, avatar de la Terre Vivante, incarnation de la mémoire du monde.
// ---------------------------------------------------------------------------
export const ORAKAI = {
    id: "orakai",
    name: "ORAKAI",
    epithet: "Esprit du Monde Ancien",
    category: "elemental",
    tags: [
    // auto-commented "mythic",
    // auto-commented "primordial",
    // auto-commented "earth-spirit",
    // auto-commented "guardian",
    // auto-commented "nature-god",
    // auto-commented "world-soul",
    ],
    biomes: [
    // auto-commented "ancient-forests",
    // auto-commented "sacred-groves",
    // auto-commented "crystal-meadows",
    // auto-commented "verdant-mountains",
    // auto-commented "primordial-shrines",
    ],
    encounterDifficulty: "mythic",
    aiProfile: "primordial-tank-controller",
    summary: "Ancienne entité née avec le monde. ORAKAI protège la terre, renverse les intrus comme les tempêtes renversent les montagnes, "
    // auto-commented "et invoque les racines, pierres et cristaux vivants pour défendre le Cœur du Monde.",
    ,
    // auto-commented "et invoque les racines, pierres et cristaux vivants pour défendre le Cœur du Monde.",
    mythicActions: [
    // auto-commented "Onde Tellurique — secoue toute la map, renverse les créatures à 12 m.",
    // auto-commented "Mur de Racines — crée un mur naturel qui bloque la ligne de vue.",
    // auto-commented "Appel du Monde — invoque 1d3 élémentaires mineurs.",
    ],
    // -------------------------------------------------------------------------
    // PHASES
    // -------------------------------------------------------------------------
    phases: [
        // ------------------------ PHASE 1 -------------------------------------
        {
            key: "phase-1",
            name: "Gardien Primordial (Avatar Tellurique)",
            cr: 23,
            hp: 780,
            ac: 24,
            role: "elite-tank",
            description: "ORAKAI se manifeste sous la forme d’un gardien rocheux et racinaire, focalisé sur la protection du terrain, les renversements massifs et "
            // auto-commented "la création de boucliers naturels.",
            ,
            // auto-commented "la création de boucliers naturels.",
            tactics: ["Punir les intrus qui s'approchent du territoire sacré.",
                // auto-commented "Utiliser les racines pour diviser le groupe.",
                "Créer des murs naturels pour couper les lignes de vue."]
            // auto-commented
            ,
            // auto-commented
            abilities: [
            // auto-commented "Étreinte de Racines — entrave les ennemis, dégâts de constriction.",
            // auto-commented "Bastion Vivant — réduit 50% des dégâts perforants/tranchants.",
            // auto-commented "Onde Tellurique — brise les boucliers et renverse tout à 9 m.",
            // auto-commented "Souffle de Pollen Ancien — affaiblit et ralentit plusieurs cibles.",
            // auto-commented "Peau de Golem Naturel — résistance aux sorts faibles.",
            ],
            phaseTriggers: [
            // auto-commented "À 0 PV → ORAKAI s’effondre en poussière… puis le sol s’ouvre.",
            // auto-commented "Montée de puissance tellurique.",
            // auto-commented "Transition vers sa forme planétaire.",
            ],
            // auto-commented
            loot: [
            // auto-commented "Graine de l’Arbre-Monde",
            // auto-commented "Écorce Millénaire",
            // auto-commented "Cœur de Racines",
            // auto-commented "Poussière Primordiale",
            ]
        },
        // ------------------------ PHASE 2 -------------------------------------
        {
            key: "phase-2",
            name: "Esprit Planétaire Réveillé",
            cr: 25,
            hp: 900,
            ac: 26,
            role: "mythic-tank-controller",
            biomes: [
            // auto-commented "world-heart",
            // auto-commented "primordial-core",
            // auto-commented "earth-soul-zones",
            ],
            description: "La terre s’ouvre et ORAKAI révèle son véritable noyau vivant : un cœur planétaire entouré de cristaux pulsants, d’énergie verdoyante "
            // auto-commented "et de forces tectoniques incontrôlées.",
            // auto-commented "Empêcher tout soin grâce aux toxines naturelles.",
            ,
            // auto-commented "et de forces tectoniques incontrôlées.",
            // auto-commented "Empêcher tout soin grâce aux toxines naturelles.",
            "Punir massivement les zones denses.": 
        }
    ]
};
;
export default ORAKAI;
