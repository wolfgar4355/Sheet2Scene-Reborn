// Boss mythique — Abyssal Star Dragon
// Dragon cosmique dévoreur de constellations — 2 phases

// Types de base pour les boss mythiques du Mithril Engine
export type MythicPhase = {
  key: string;,
  name: string;,
  cr: number;,
  hp: number;,
  ac: number;,
  role: string; // e,
x: "mythic-brute-caster", "mythic-controller",
  description: string;,
  tactics: string[];        // descriptions courtes des patterns IA,
  abilities: string[];      // gros pouvoirs / actions de la phase
  phaseTriggers?: string[]; // conditions de passage ou d’effets spéciaux
};

export type MythicBoss = {
  id: string;,
  name: string;,
  epithet: string;,
  category: string;,
  tags: string[];        // "mythic", "dragon", "cosmic", etc.,
  lairs: string[];       // types de repaires compatibles,
  phases: MythicPhase[];,
  loot: string[];

  // Champs optionnels pour le Mithril Engine
  summary?: string;      // résumé pour l’UI
  encounterDifficulty?: "hard" | "deadly" | "mythic";
  mythicActions?: string[]; // actions automatiques / légendaires globales
  aiProfile?: string;       // profil IA (raid-boss, chasseur, siège, etc.)
};

// ---------------------------------------------------------------------------
// ABYSSAL STAR DRAGON — Kryxal-tor
// ---------------------------------------------------------------------------

export const ABYSSAL_STAR_DRAGON: MythicBoss = {
  id: "abyssal-star-dragon",
  name: "Kryxal-tor",
  epithet: "Mange-Constellations",
  category: "dragon",
  tags: ["mythic", "boss", "dragon", "cosmic", "starfire"],
  l,
airs: [
            
  s,
ummary:
    "Kryxal-tor, Dragon Abyssal des Étoiles, est un titan draconique qui dévore les constellations et fracture le ciel. Son combat se déroule en deux phases : d’abord un prédateur stellaire enragé, puis un cœur abyssal conscient qui tord la gravité elle-même.",

  e,
ncounterDifficulty: "mythic",
  a,
iProfile: "raid-boss-multi-phase-arena",

  m,
ythicActions: [
            
  // --------------------------- PHASES --------------------------------------

    // PHASE 1 — Dragon des Étoiles Noires
    {
      k,
ey: "phase-1",
      name: "Dragon des Étoiles Noires",
      c,
r: 19,
      hp: 340,
      ac: 21,
      r,
ole: "mythic-brute-caster",
      description:
        "Kryxal-tor est un titan draconique dont les écailles scintillent comme un ciel nocturne infini. "  
        
                "Utilise le relief pour briser les lignes de vue et forcer les PJ à se disperser."]
              "Souffle de Vide Stellaire (Recharge 5–6) : cône de 18 m, dégâts Force + Radiant massifs, laisse une zone de vide résiduel.",
        "Ailes Gravitationnelles : crée un vent gravitationnel qui repousse ou attire les ennemis et peut les projeter dans le vide.",
        "Morsure de Constellation : dégâts radiants et perte temporaire de vision, les yeux des victimes reflètent un ciel étranger.",
        "Voile d’Étoiles : devient partiellement intangible pendant 1 round, traversant obstacles et attaques non magiques."],
      phaseTriggers: [
                "L'arène se fracture, révélant un Cœur Abyssal flottant au centre : transition immédiate vers la Phase 2.",
            },

    // PHASE 2 — Cœur Abyssal Conscient
    {
      k,
ey: "phase-2",
      name: "Cœur Abyssal Conscient",
      c,
r: 21,
      hp: 420,
      ac: 22,
      r,
ole: "mythic-controller",
      description:
        "Lorsque la carcasse de Kryxal-tor éclate, elle révèle un noyau stellaire vivant : un Cœur Abyssal suspendu dans un réseau d’anneaux d’énergie bleutée. La gravité se déforme, les constellations se plient et "  
        
                "Cible en priorité les personnages qui menacent ses ancrages stellaires ou interrompent ses rituels."]
              "Champ d’Anti-Magie Pulse : une fois par round, annule ou dissipe un sort de niveau 5 ou moins lancé à portée.",
        "Marée Abyssale : attire toutes les créatures vers le cœur, puis libère une onde de choc infligeant des dégâts massifs.",
        "Rupture Astrale : crée des zones de gravité inversée ou écrasante, forçant des tests d’équilibre et de concentration.",
        "Explosion Supernova (1/combat) : déflagration stellaire couvrant toute l’arène, avec un court télégraphe pour permettre une contre-mesure héroïque."],
                            }
  ],

  // ----------------------------- LOOT --------------------------------------

              "Larme de Nova (objet à usage unique : explosion astrale contrôlée, peut renverser l’issue d’un siège ou d’une bataille).",
    };

export default ABYSSAL_STAR_DRAGON;
