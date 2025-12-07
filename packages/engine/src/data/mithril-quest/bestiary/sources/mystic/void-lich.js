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
        "undead",
        "mythic",
        "void",
        "astral",
        "necrotic",
        "caster"
    ],
    biomes: [
        "astral-void",
        "obsidian-desert",
        "crystal-caverns",
        "floating-cathedral"
    ],
    summary: "Un archiliche cosmique dont les orbites renferment des singularités violettes "
        + "absorbant la lumière. Maître du vide instable, de la gravité distordue et de "
        + "la transposition dimensionnelle, il manipule l’espace pour annihiler les vivants.",
    // -------------------------------------------------------------------------
    // PHASES
    // -------------------------------------------------------------------------
    phases: [
        // ---------------------------------------------------------------------
        // PHASE 1 — ARCHILICHE DU NÉANT
        // ---------------------------------------------------------------------
        {
            key: "phase-1",
            name: "Archiliche du Néant",
            cr: 18,
            role: "mythic-caster",
            description: "Sazhul apparaît comme un squelette élancé dont les orbites abritent des "
                + "singularités violettes absorbant toute lumière. Il contrôle le terrain, "
                + "se téléporte et cible prioritairement les lanceurs et soigneurs.",
            tactics: [
                "Cibler lanceurs et soigneurs d'abord.",
                "Se téléporter pour rester hors de portée.",
                "Créer des zones de vide instables.",
                "Forcer les PJ à se regrouper."
            ],
            stats: {
                hp: 275,
                ac: 19,
                atk: "+15",
                dmg: "4d10+8 (void bolt)",
                speed: "30 ft, hover 20 ft"
            },
            abilities: [
                "Aura de Néant — drain 1d6 PV/round pour les créatures à 6 m.",
                "Faille Gravitationnelle — attire ou repousse une cible à 6 m.",
                "Déflagration de Vide — dégâts force/nécrotique à distance.",
                "Téléportation d’Ombre — téléportation 18 m vers un lieu obscur.",
                "Résistance Légendaire (3/jour)."
            ],
            loot: [
                "Phylactère Fracturé de Sazhul",
                "Grimoire du Néant",
                "Fragments d’Obsidienne Stellaire",
                "Carte Partielle d’un Donjon Astral"
            ],
            phaseTriggers: [
                "À 0 HP → Sazhul se dissout en singularité et renaît sous une forme de noyau de vide."
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
            description: "Lorsque son corps se désintègre, l’âme de Sazhul se condense en un noyau "
                + "de vide pur entouré d’anneaux runiques projetant des éclairs d’énergie astrale.",
            tactics: [
                "Inonder la map de zones instables.",
                "Attirer puis disperser le groupe.",
                "Drainer plusieurs cibles simultanément.",
                "Utiliser explosions gravitationnelles en boucle."
            ],
            stats: {
                hp: 320,
                ac: 21,
                atk: "+17",
                dmg: "5d10+10 (void tendrils) + entropy burn",
                speed: "hover 40 ft, teleport 30 ft"
            },
            abilities: [
                "Gravité Inversée — zone 6 m, renverse, dégâts ++.",
                "Faille Gravitationnelle Suprême — zone 12 m, projet violent + étourdissement.",
                "Noyaux Entropiques — 3 orbes d’énergie orbitent autour du boss.",
                "Drain d’Essence — absorbe 10 PV à 3 cibles.",
                "Onde de Néant (Ultime) — explosion de zone détruisant les protections."
            ],
            loot: [
                "Cœur du Vide Pur",
                "Anneau de l’Entropie",
                "Main de Sazhul",
                "Fragment d’Étoile Maudite"
            ]
        }
    ]
};
export default VOID_LICH;
