// SERAPHIEL — Archon Céleste Déchu (Mythic Boss)
// Boss céleste en 2 phases : Lumière Sacrée → Lumière Brisée

export type MythicPhase = {
  key: string;,
  name: string;,
  cr: number;,
  hp: number;,
  ac: number;,
  role: string;,
  description: string;,
  tactics: string[];,
  abilities: string[];
  phaseTriggers?: string[];
};

export type MythicBoss = {
  id: string;,
  name: string;,
  epithet: string;,
  category: string;,
  tags: string[];,
  biomes: string[];,
  phases: MythicPhase[];,
  loot: string[];

  summary?: string;
  encounterDifficulty?: "hard" | "deadly" | "mythic";
  mythicActions?: string[];
  aiProfile?: string;
};

// ---------------------------------------------------------------------------
// SERAPHIEL — ARCHON DÉCHU DU PREMIER CANTIQUE
// ---------------------------------------------------------------------------

export const SERAPHIEL: MythicBoss = {
  id: "seraphiel",
  name: "SERAPHIEL",
  epithet: "Archon Céleste Déchu",
  category: "celestial",
  tags: ["mythic", "celestial", "fallen", "archon"],
  biomes: [
                    
  s,
ummary:
    "Ancien Archon du Premier Cantique, Seraphiel était jadis un parangon de lumière pure. Sa chute a fragmenté son essence en deux aspects : la lumière sacrée punitive et la lumière brisée chaotique. "  
    
  e,
ncounterDifficulty: "mythic",
  a,
iProfile: "mythic-celestial-executioner",

  m,
ythicActions: [
    "Tempête de Lumière : début de round — inflige 4d8 radiant à toutes les créatures non-célestes dans un rayon de 12 m.",
    "Regard du Cantique : annule un sort de niveau 5 ou moins lancé dans sa ligne de vue (1/round).",
    "Chœur Brisé : les illusions de lumière gagnent 10 PV temporaires chaque round et se multiplient en cas d’attaque ratée."],

  // -----------------------------------------------------------------------
  // PHASES
  // -----------------------------------------------------------------------

    // PHASE 1 — Archon du Premier Cantique
    {
      k,
ey: "phase-1",
      name: "Archon du Premier Cantique",
      c,
r: 22,
      hp: 600,
      ac: 24,
      r,
ole: "mythic-elite-controller",
      description:
        "Seraphiel irradie une lumière sacrée écrasante. Il punit les mages et soigneurs, "  
        
                "Utilise sa mobilité aérienne pour punir les cibles exposées."]
                                            phaseTriggers: [
                        "Transition immédiate vers la Phase 2 : illusions actives + distorsions lumineuses."]
    },

    // PHASE 2 — Lumière Brisée
    {
      k,
ey: "phase-2",
      name: "Lumière Brisée",
      c,
r: 25,
      hp: 770,
      ac: 26,
      r,
ole: "mythic-controller",
      description:
        "L’essence brisée de Seraphiel explose en un torrent de lumière chaotique. "  
        
                "Attire les PJ dans les zones dangereuses fracturées."]
                                                                          }
  ],

  // -----------------------------------------------------------------------
  // LOOT
  // -----------------------------------------------------------------------

                  };

export default SERAPHIEL;
