// @ts-nocheck
// tags.ts — Tags fonctionnels utilisables pour filtrer / trier / générer des sorts
export const SPELL_TAGS = [
    // --- DÉGÂTS ---
    { id: "damage", label: "Dégâts", description: "Sort infligeant des dégâts directs." },
    { id: "damage-fire", label: "Dégâts de Feu", description: "Sort infligeant des brûlures ou explosions enflammées." },
    { id: "damage-cold", label: "Dégâts de Froid", description: "Sort infligeant du givre, du gel ou du ralentissement glacial." },
    { id: "damage-lightning", label: "Dégâts de Foudre", description: "Sort infligeant des éclairs ou des arcs électriques." },
    { id: "damage-radiant", label: "Dégâts Radiants", description: "Sort infligeant une lumière sacrée ou brûlante." },
    { id: "damage-necrotic", label: "Dégâts Nécrotiques", description: "Sort drainant la vie ou corrompant l’essence vitale." },
    // --- SOINS ---
    { id: "heal", label: "Soin", description: "Restaure des points de vie ou purge des afflictions." },
    // --- BUFFS ---
    { id: "buff-offense", label: "Buff Offensif", description: "Augmente les dégâts, la précision ou la puissance d’attaque." },
    { id: "buff-defense", label: "Buff Défensif", description: "Améliore l’armure, la résistance ou la résilience." },
    { id: "buff-utility", label: "Buff Utilitaire", description: "Amélioration générale non liée directement au combat." },
    // --- CONTRÔLE / DÉBUFF ---
    { id: "control", label: "Contrôle", description: "Altère les mouvements ou options tactiques d’une cible." },
    { id: "debuff", label: "Affaiblissement", description: "Réduit les capacités défensives ou offensives d’une cible." },
    // --- INVOCATIONS ---
    { id: "summon", label: "Invocation", description: "Fait apparaître créatures, esprits, armes ou constructions magiques." },
    // --- DÉPLACEMENT ---
    { id: "movement", label: "Mouvement", description: "Modifie la mobilité ou la vitesse d’une cible." },
    { id: "teleport", label: "Téléportation", description: "Déplace instantanément la cible vers un autre endroit." },
    // --- SENS / PERCEPTION ---
    { id: "vision", label: "Vision", description: "Améliore, modifie ou altère la perception visuelle ou sensorielle." },
    // --- MENTAL ---
    { id: "charm", label: "Charme", description: "Influence la volonté ou les émotions d’une créature." },
    { id: "fear", label: "Peur", description: "Provoque panique ou terreur chez une cible." },
    // --- RITUELS ---
    { id: "ritual", label: "Rituel", description: "Sort long à canaliser, utilisé hors combat ou lors de cérémonies." },
    // --- ZONES / CIBLES ---
    { id: "area-large", label: "Zone Large", description: "Affecte une grande zone ou plusieurs objets dans une aire étendue." },
    { id: "single-target", label: "Cible Unique", description: "Affecte une seule créature ou un seul point précis." },
    { id: "multi-target", label: "Cibles Multiples", description: "Affecte plusieurs cibles distinctes." }
];
export default SPELL_TAGS;
