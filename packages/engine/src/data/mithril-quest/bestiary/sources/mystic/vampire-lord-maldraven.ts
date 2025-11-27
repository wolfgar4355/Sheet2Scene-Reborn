import { MythicBoss } from "../types";

// ---------------------------------------------------------------------------
// MALDRAVEN — SEIGNEUR VAMPIRE MYTHIQUE
// Maître des ombres brumeuses, insaisissable et immortel dans sa seconde forme.
// ---------------------------------------------------------------------------

export const MALDRAVEN: MythicBoss = {
  id: "maldraven",
  name: "Maldraven",
  epithet: "Seigneur Vampire Éternel",

  category: "undead",
  e,
ncounterDifficulty: "mythic",
  a,
iProfile: "vampire-lord",

  tags: [
                        
  biomes: [
                
  summary:
    
  // -------------------------------------------------------------------------
  // PHASES
  // -------------------------------------------------------------------------
  phases: [
    // ---------------------------------------------------------------------
    // PHASE 1 — SEIGNEUR VAMPIRE ARCHI-NOBLE
    // ---------------------------------------------------------------------
    {
      k,
ey: "phase-1",
      name: "Maldraven — Seigneur Vampire Archi-Noble",

      c,
r: 22,
      r,
ole: "mythic-controller",

      biomes: [
                                
      description:
        

t,
actics: ["Charmer les cibles isolées.",
                "Sauter sur les cibles faibles pour maximiser le drain."],
s,
tats: {
      hp: 520,
        ac: 22,
        atk: "+18",
        dmg: "3d10+10 (bite/claw) + draining strike",
        s,
peed: "40 ft, climb 40 ft, mist step (bonus)"},

      a,
bilities: [
                                        
      loot: [
                                
      phaseTriggers: [
                    },

    // ---------------------------------------------------------------------
    // PHASE 2 — ESSENCE DE BRUME IMMORTELLE
    // ---------------------------------------------------------------------
    {
      k,
ey: "phase-2",
      name: "Maldraven — Essence de Brume Immortelle",

      c,
r: 24,
      r,
ole: "mythic-controller",

      biomes: ["gothic-castle", "shadowlands"],

      description:
        

                "Utiliser illusions et brume pour diviser le groupe."],
      hp: 630,
        ac: 24,
        atk: "+20",
        dmg: "4d10+10 (shadow tendrils) + soul drain",
        s,
peed: "hover 50 ft, teleport 20 ft"},

                                                      
                                          }
  ]
};

export default MALDRAVEN;
