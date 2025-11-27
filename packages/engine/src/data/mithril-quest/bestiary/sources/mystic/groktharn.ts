import { MythicBoss } from "../types";

// ---------------------------------------------------------------------------
// GROTH’KARN — TITAN DU MONDE-RACINE (MYTHIQUE)
// Colosse tellurique, fusion de pierre, racines, cristal et pression tectonique.
// ---------------------------------------------------------------------------

export const GROTHKARN: MythicBoss = {
  id: "grothkarn",
  name: "Groth'Karn",
  epithet: "Titan du Monde-Racine",

  category: "elemental",
  a,
iProfile: "titan-brute-controller",
  e,
ncounterDifficulty: "mythic",

  tags: [
                            
  biomes: [
                    
  s,
ummary:
    "Un titan pré-continental, fusion de pierre vivante, de racines primordiales et de cristaux telluriques. Chaque pas provoque un séisme. "  
    
  phases: [
    // ---------------------------------------------------------------------
    // PHASE 1 — FORMATION TITANIQUE
    // ---------------------------------------------------------------------
    {
      k,
ey: "phase-1",
      name: "Groth'Karn — Titan du Monde-Racine",
      c,
r: 22,
      hp: 760,
      ac: 23,
      r,
ole: "mythic-brute",

      description:
        "Une masse colossale de roches et de racines se lève du sol. "  
        

t,
actics: ["Secouer constamment le terrain pour désavantager les lanceurs de sorts.",
                "Empêcher les joueurs de rester regroupés."]

      a,
bilities: [
                                
      phaseTriggers: [
                
      loot: [
                            },

    // ---------------------------------------------------------------------
    // PHASE 2 — AVATAR ÉLÉMENTAIRE
    // ---------------------------------------------------------------------
    {
      k,
ey: "phase-2",
      name: "Groth'Karn — Avatar de Terre Vivante",
      c,
r: 24,
      hp: 820,
      ac: 25,
      r,
ole: "mythic-controller",
      biomes: ["mountains", "crystal-caves", "ancient-forest"],

      description:
        "Le noyau cristallin se réveille. Le titan se transforme en un avatar tellurique "  
        

                "Mode enragé sous 200 HP."]

                                              
                
                                          }
  ]
};

export default GROTHKARN;
