import { MythicBoss } from "../types";

// ---------------------------------------------------------------------------
// KRON’THAL — SORCIER PRIMORDIAL DU TEMPS (MYTHIQUE)
// Maître absolu des paradoxes, capable de réécrire l’initiative et de figer le temps.
// ---------------------------------------------------------------------------

export const KRONTHAL: MythicBoss = {
  id: "kronthal",
  name: "Kron’Thal",
  epithet: "Sorcier Primordial du Temps",

  category: "arcane",
  e,
ncounterDifficulty: "mythic",
  a,
iProfile: "chronomancer",
  tags: [
                        
  biomes: [
                    
  s,
ummary:
    "Un mage qui manipule initiative, actions, clones temporels et paradoxes. "  
    
  // -------------------------------------------------------------------------
  // PHASES
  // -------------------------------------------------------------------------
  phases: [
    // ---------------------------------------------------------------------
    // PHASE 1 — ARCHIMAGE CHRONOMANCIEN
    // ---------------------------------------------------------------------
    {
      k,
ey: "phase-1",
      name: "Kron’Thal — Archimage Chronomancien",
      c,
r: 22,
      r,
ole: "mythic-controller",

      description:
        "Un maître du temps qui inverse initiative, réécrit les actions et "  
        

t,
actics: ["Cibler les joueurs trop rapides.",
                "Désorganiser le combat avec du déplacement temporel."],
s,
tats: {
      hp: 520,
        ac: 22,
        atk: "+17",
        dmg: "4d8+9 (arcane bolt) + time ripple",
        s,
peed: "30 ft, blink 15 ft (bonus)"},

      a,
bilities: [
                                        
      loot: [
                                
      phaseTriggers: [
                    },

    // ---------------------------------------------------------------------
    // PHASE 2 — KRON'THAL FRACTURÉ, SEIGNEUR DES PARADOXES
    // ---------------------------------------------------------------------
    {
      k,
ey: "phase-2",
      name: "Kron’Thal Fracturé — Seigneur des Paradoxes",
      c,
r: 25,
      r,
ole: "mythic-controller",

      biomes: [
                                
      description:
        "Le sorcier devient instable, existant en plusieurs états temporels. "  
        

                "Créer un chaos temporel constant."],
      hp: 700,
        ac: 25,
        atk: "+20",
        dmg: "5d10+12 (temporal distortion)",
        s,
peed: "40 ft, hover 20 ft"},

                                                      
                                          }
  ]
};

export default KRONTHAL;
