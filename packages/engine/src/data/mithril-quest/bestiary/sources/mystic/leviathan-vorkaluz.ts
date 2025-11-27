import { MythicBoss } from "../types";

// ---------------------------------------------------------------------------
// VORKALUZ — LEVIATHAN DES ABYSSES (MYTHIQUE)
// Un titan océanique capable de remodeler la mer entière et créer des tsunamis cosmiques.
// ---------------------------------------------------------------------------

export const VORKALUZ: MythicBoss = {
  id: "vorkaluz",
  name: "Vor’Kaluz",
  epithet: "Leviathan des Abysses",

  category: "aberration",
  e,
ncounterDifficulty: "mythic",
  a,
iProfile: "titan-brute",
  tags: [
                        
  biomes: [
                    
  s,
ummary:
    "Un serpent abyssal colossal, maître des pressions océaniques, capable "  
    
  // -------------------------------------------------------------------------
  // PHASES
  // -------------------------------------------------------------------------
  phases: [
    // ---------------------------------------------------------------------
    // PHASE 1 — LEVIATHAN ABYSSAL
    // ---------------------------------------------------------------------
    {
      k,
ey: "phase-1",
      name: "Vor’Kaluz — Leviathan Abyssal",
      c,
r: 21,
      r,
ole: "mythic-brute",

      description:
        "Le titan émerge des abysses, créant des vagues monstrueuses. "  
        

t,
actics: ["Empêche les joueurs de rester à distance.",
                "Crée des tsunamis pour briser la formation du groupe."],
s,
tats: {
      hp: 750,
        ac: 22,
        atk: "+19",
        dmg: "4d10+12 (bite) + tidal impact",
        s,
peed: "60 ft swim"},

      a,
bilities: [
                                        
      loot: [
                                
      phaseTriggers: [
                    },

    // ---------------------------------------------------------------------
    // PHASE 2 — AVATAR TIDAL COSMIQUE
    // ---------------------------------------------------------------------
    {
      k,
ey: "phase-2",
      name: "Vor’Kaluz — Avatar Tidal Cosmique",
      c,
r: 24,
      r,
ole: "mythic-controller",

      biomes: ["ocean", "abyss", "storm-sea", "cosmic-tide"],

      description:
        "Le titan devient luminescent, la mer se soulève. Les marées "  
        

                "Génère des typhons pour segmenter la zone."],
      hp: 900,
        ac: 24,
        atk: "+21",
        dmg: "5d12+14 (cosmic tidal bite) + gravitational tide",
        s,
peed: "80 ft swim, 20 ft hover (water form)"},

                                              
                                      
                    }
  ]
};

export default VORKALUZ;
