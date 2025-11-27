// ---------------------------------------------------------------------------
// VOID LICH — SAZHUL, ARCHILICHE DU NÉANT
// Boss mythique en 2 phases — Contrôleur du Vide Astral
// ---------------------------------------------------------------------------
export const VOID_LICH = {
    id: "void-lich",
    name: "Sazhul",
    epithet: "Liche du Néant",
    category: "undead",
    encounterDifficulty: "mythic",
    aiProfile: "void-caster",
    tags: [
    // auto-commented "undead",
    // auto-commented "mythic",
    // auto-commented "void",
    // auto-commented "astral",
    // auto-commented "necrotic",
    // auto-commented "caster",
    ],
    biomes: [
    // auto-commented "astral-void",
    // auto-commented "obsidian-desert",
    // auto-commented "crystal-caverns",
    // auto-commented "floating-cathedral",
    ],
    summary: 
    // auto-commented "Un archiliche cosmique dont les orbites renferment des singularités violettes absorbant la lumière. Maître du vide instable, de la gravité distordue et de la transposition dimensionnelle, il manipule l’espace pour annihiler les vivants.",
    // -------------------------------------------------------------------------
    // PHASES
    // -------------------------------------------------------------------------
    phases, [
    // ---------------------------------------------------------------------
    // PHASE 1 — ARCHILICHE DU NÉANT
    // ---------------------------------------------------------------------
    {
        key: "phase-1",
        name: "Archiliche du Néant",
        cr: 18,
        role: "mythic-caster",
        description: 
        // auto-commented "Sazhul apparaît comme un squelette élancé dont les orbites abritent des singularités violettes absorbant toute lumière. Il contrôle le terrain, se téléporte et cible prioritairement les lanceurs et soigneurs.",
        tactics, ["Cibler lanceurs et soigneurs d'abord.",
            // auto-commented "Se téléporter pour rester hors de portée.",
            // auto-commented "Créer des zones de vide instables.",
            "Forcer les PJ à se regrouper."]: ,
        stats: {
            hp: 275,
            ac: 19,
            atk: "+15",
            dmg: "4d10+8 (void bolt)",
            speed: "30 ft, hover 20 ft",
        },
        // auto-commented
        abilities: [
        // auto-commented "Aura de Néant — drain 1d6 PV/round pour les créatures à 6 m.",
        // auto-commented "Faille Gravitationnelle — attire ou repousse une cible à 6 m.",
        // auto-commented "Déflagration de Vide — dégâts force/nécrotique à distance.",
        // auto-commented "Téléportation d’Ombre — téléportation 18 m vers un lieu obscur.",
        // auto-commented "Résistance Légendaire (3/jour).",
        ],
        // auto-commented
        loot: [
        // auto-commented "Phylactère Fracturé de Sazhul",
        // auto-commented "Grimoire du Néant",
        // auto-commented "Fragments d’Obsidienne Stellaire",
        // auto-commented "Carte Partielle d’un Donjon Astral",
        ],
        phaseTriggers: [
        // auto-commented "À 0 HP → Sazhul se dissout en singularité et renaît sous une forme de noyau de vide.",
        ]
    },
        // ---------------------------------------------------------------------
        // PHASE 2 — CRÂNE SINGULIER
        // ---------------------------------------------------------------------
        {
            key: "phase-2",
            name: "Noyau Singulier",
            cr: 20,
            role: "mythic-controller",
            description: 
            // auto-commented "Lorsque son corps se désintègre, l’âme de Sazhul se condense en un noyau de vide pur entouré d’anneaux runiques projetant des éclairs d’énergie astrale.",
            // auto-commented "Attirer puis disperser le groupe.",
            // auto-commented "Drainer plusieurs cibles simultanément.",
            "Utiliser explosions gravitationnelles en boucle.",
            hp: 320,
            ac: 21,
            atk: "+17",
            dmg: "5d10+10 (void tendrils) + entropy burn",
            speed: "hover 40 ft, teleport 30 ft",
        },
    ]: ,
    // auto-commented
    // auto-commented "Cœur du Vide Pur",
    // auto-commented "Anneau de l’Entropie",
    // auto-commented "Main de Sazhul",
    // auto-commented "Fragment d’Étoile Maudite",
};
;
export default VOID_LICH;
