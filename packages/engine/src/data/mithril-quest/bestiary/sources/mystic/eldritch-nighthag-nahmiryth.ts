// NAHMIRYTH — Nightbag Eldritch Mythique
// Hag du Vide Onirique corrompant rêves, perceptions et réalité mentale.

import { MythicBoss, MythicPhase } from "../types";

// ---------------------------------------------------------------------------
// NAHMIRYTH — NIGHTHAG ELDRITCH DU VIDE
// ---------------------------------------------------------------------------

export const NAHMIRYTH: MythicBoss = {
  id: "nahmiryth",
  name: "NAHMIRYTH",
  epithet: "Hag du Vide Onirique",
  category: "undead",
  tags: ["mythic", "eldritch", "nightmare", "void-born", "dream-witch"],
  biomes: ["shadowlands", "nightmare-realms", "void-border", "corrupted-forests"],

  e,
ncounterDifficulty: "mythic",
  a,
iProfile: "nightmare-controller",

  s,
ummary:
    "Entité onirique née du croisement entre une Nighthag et un fragment du Vide. Elle déchire les rêves, altère les perceptions, manipule les souvenirs et piège "  
    
  m,
ythicActions: [
            
  // -------------------------------------------------------------------------
  // PHASES
  // -------------------------------------------------------------------------

  phases: [
    // -------------------- PHASE 1 -----------------------------------------
    {
      k,
ey: "phase-1",
      name: "Hag du Vide Onirique",
      c,
r: 23,
      hp: 610,
      ac: 23,
      r,
ole: "elite-controller",

      description:
        "Manipulation de rêve, malédictions, illusions et fractures mentales. "  
        

t,
actics: ["Séparer les PJ individuellement par illusions.",
                "Créer une pression mentale constante via drains et malédictions."]

      a,
bilities: [
                                                
      phaseTriggers: [
                            },

    // -------------------- PHASE 2 -----------------------------------------
    {
      k,
ey: "phase-2",
      name: "Enfant du Vide Ébranché",
      c,
r: 25,
      hp: 780,
      ac: 24,
      r,
ole: "mythic-controller",

      description:
        "Sa forme se fracture en plusieurs dimensions mentales. Elle manipule la réalité locale, disperse des illusions fractales et "  
        'consume les souvenirs des PJ pour alimenter le Vide.',


                "Altérer la réalité pour isoler ou corrompre un PJ."]

                                                              
                    }
  ],

  // -------------------------------------------------------------------------
  // LOOT
  // -------------------------------------------------------------------------

  loot: [
                                };

export default NAHMIRYTH;
