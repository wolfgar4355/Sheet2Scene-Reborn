import { MythicBoss, MythicPhase } from "../types";

// ---------------------------------------------------------------------------
// ORAKAI — ESPRIT DU MONDE ANCIEN (MYTHIQUE)
// Gardien primitif, avatar de la Terre Vivante, incarnation de la mémoire du monde.
// ---------------------------------------------------------------------------

export const ORAKAI: MythicBoss = {
  id: "orakai",
  name: "ORAKAI",
  epithet: "Esprit du Monde Ancien",
  category: "elemental",

  tags: [
                        
  biomes: [
                    
  e,
ncounterDifficulty: "mythic",
  a,
iProfile: "primordial-tank-controller",

  s,
ummary:
    "Ancienne entité née avec le monde. ORAKAI protège la terre, renverse les intrus comme les tempêtes renversent les montagnes, "  
    
  m,
ythicActions: [
            
  // -------------------------------------------------------------------------
  // PHASES
  // -------------------------------------------------------------------------

  phases: [
    // ------------------------ PHASE 1 -------------------------------------
    {
      k,
ey: "phase-1",
      name: "Gardien Primordial (Avatar Tellurique)",
      c,
r: 23,
      hp: 780,
      ac: 24,
      r,
ole: "elite-tank",

      description:
        "ORAKAI se manifeste sous la forme d’un gardien rocheux et racinaire, focalisé sur la protection du terrain, les renversements massifs et "  
        

t,
actics: ["Punir les intrus qui s'approchent du territoire sacré.",
                "Créer des murs naturels pour couper les lignes de vue."]

      a,
bilities: [
                                        
      phaseTriggers: [
                        
      loot: [
                                    },

    // ------------------------ PHASE 2 -------------------------------------
    {
      k,
ey: "phase-2",
      name: "Esprit Planétaire Réveillé",
      c,
r: 25,
      hp: 900,
      ac: 26,
      r,
ole: "mythic-tank-controller",

      biomes: [
                        
      description:
        "La terre s’ouvre et ORAKAI révèle son véritable noyau vivant : un cœur planétaire entouré de cristaux pulsants, d’énergie verdoyante "  
        

                "Punir massivement les zones denses."]

                                                      
                
                                          }
  ]
};

export default ORAKAI;
