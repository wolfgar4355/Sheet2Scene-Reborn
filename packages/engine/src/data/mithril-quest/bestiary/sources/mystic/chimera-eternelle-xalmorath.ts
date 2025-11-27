
// XAL’MORATH — Chimère Éternelle (Mythic Boss)
// Fusion instable de bêtes primordiales, mutation continue, chaos organique.

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
// XAL’MORATH — CHIMÈRE ÉTERNELLE
// ---------------------------------------------------------------------------

export const XALMORATH: MythicBoss = {
  id: "xalmorath",
  name: "XAL'MORATH",
  epithet: "Chimère Éternelle",
  category: "monstrosity",
  tags: ["mythic", "chimera", "beast-fusion", "aberrant"],
  biomes: [
                        
  s,
ummary:
    "Créature expérimentale née d’une fusion bestiale impossible, Xal’morath mute continuellement et change de forme selon les lois du chaos organique. Il passe d’un état primitif brutal à une forme instable imprévisible capable "  
    
  e,
ncounterDifficulty: "mythic",
  a,
iProfile: "feral-chaos-behemoth",

  m,
ythicActions: [
    "Mutation Instable (début de round) : gagne une mutation aléatoire parmi 8 options.",
    "Déferlement Chaotique : rallonge de 3 m toutes ses zones organiques ce round.",
    "Détonation Viscérale : en mourant dans une phase, explose en 6d10 nécrotique + infection."],

  // -----------------------------------------------------------------------
  // PHASES
  // -----------------------------------------------------------------------

    // PHASE 1 — Chimère Primordiale Indomptée
    {
      k,
ey: "phase-1",
      name: "Chimère Primordiale Indomptée",
      c,
r: 21,
      hp: 640,
      ac: 23,
      r,
ole: "mythic-brute",
      description:
        "Xal’morath bondit, mord, frappe, percute et souffle des toxines primordiales. "  
        
                "Utilise les mutations pour combler les distances."]
                                                    phaseTriggers: [
                "Le sol devient instable : zones organiques mouvantes.",
            },

    // PHASE 2 — Forme Instable Suprême
    {
      k,
ey: "phase-2",
      name: "Forme Instable Suprême",
      c,
r: 24,
      hp: 780,
      ac: 24,
      r,
ole: "mythic-brute-controller",
      description:
        "La mutation chaotique s’emballe : Xal’morath devient une abomination instable "  
        
                "Projette des éclats et piège les PJ dans les zones infectées."]
                                                              "À 100 PV restants : instabilité totale → mutation en chaîne."]
    }
  ],

  // -----------------------------------------------------------------------
  // LOOT
  // -----------------------------------------------------------------------

                              };

export default XALMORATH;
