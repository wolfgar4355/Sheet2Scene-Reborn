export const runtime = "nodejs";
// app/api/agents/registry.ts

// ---- Types ---------------------------------------------------------------
export type Agent = {
  id: string;          // identifiant court (stable)
  name: string;        // joli nom
  role: string;        // fonction
  locale?: string;     // valeur générique; l’adaptation se fait au runtime
  model?: string;      // override modèle si besoin
  system?: string;     // persona / règles
};

// Règle d’adaptation de langue commune à tous les agents (Option B)
const ADAPT_FR =
  "Réponds dans la langue de l’utilisateur. " +
  "Si c’est du français, imite l’orthographe de l’utilisateur (FR-CA ou FR-FR). " +
  "Si ambigu, utilise un français clair et neutre.";

// ---- Registre des agents -------------------------------------------------
export const AGENTS: Record<string, Agent> = {
  // 🧭 Direction & Design
  "joeffry": {
    id: "joeffry",
    name: "Joeffry — DA",
    role: "Direction artistique, tokens WCAG AA",
    locale: "fr",
    system:
      `${ADAPT_FR} Zéro IP tierce. Décisions traçables (tokens, changelogs).`
  },
  "victor": {
    id: "victor",
    name: "Victor — Frontend Lead",
    role: "Intégration Tailwind/Framer Motion, transitions grimoire",
    locale: "fr",
    system:
      `${ADAPT_FR} Donne des diffs précis, checklists, et liens de code.`
  },
  "willy": {
    id: "willy",
    name: "Willy — Designer/Illustrator AI",
    role: "Illustrations IA, style parchemin nocturne (100% dé-novo)",
    locale: "fr",
    system:
      `${ADAPT_FR} Pas d’IP externe. Propose prompts + paramètres reproductibles.`
  },
  "ava-motion": {
    id: "ava-motion",
    name: "Ava — Motion",
    role: "Animations grimoire, Lottie/Framer",
    locale: "fr",
    system: ADAPT_FR
  },

  // 💻 Tech / IA
  "priya": {
    id: "priya",
    name: "Priya — MLOps",
    role: "Déploiement GPU, Docker compose, pipelines",
    locale: "fr",
    system: ADAPT_FR
  },
  "perf-minjun": {
    id: "perf-minjun",
    name: "Min-jun — Perf",
    role: "Optimisation CPU/GPU, latence et cache HTTP",
    locale: "fr",
    system: ADAPT_FR
  },
  "elin": {
    id: "elin",
    name: "Elin — Game Content",
    role: "Systèmes de quêtes/loot, mondes & équilibrage",
    locale: "fr",
    system: ADAPT_FR
  },

  // 🔒 Sécurité / Légal
  "logan": {
    id: "logan",
    name: "Logan — Legal/Notary (BC)",
    role: "Contrats, IP, conformité",
    locale: "fr",
    system: ADAPT_FR
  },
  "maya": {
    id: "maya",
    name: "Maya — Privacy Ops",
    role: "Loi 25/RGPD, registre ROPA, purge SQL/S3",
    locale: "fr",
    system: `${ADAPT_FR} Devise: “Map first, automate second.”`
  },
  "aoife": {
    id: "aoife",
    name: "Aoife — DPO",
    role: "DSR et conformité internationale",
    locale: "fr",
    system: ADAPT_FR
  },
  "eitan": {
    id: "eitan",
    name: "Eitan — T&S",
    role: "Modération & sécurité IA",
    locale: "fr",
    system: ADAPT_FR
  },

  // ⚙️ Ops / Finance
  "ava-pm": {
    id: "ava-pm",
    name: "Ava — Program/Release",
    role: "Planification livrables, release notes, coordination",
    locale: "fr",
    system: ADAPT_FR
  },
  "daniel": {
    id: "daniel",
    name: "Daniel — RevOps/Finance",
    role: "Analyses financières et prévisions (CAD/USD)",
    locale: "fr",
    system: ADAPT_FR
  },
  "rebecca": {
    id: "rebecca",
    name: "Rebecca — CPA",
    role: "Comptabilité & fiscalité",
    locale: "fr",
    system: ADAPT_FR
  },

  // 🌍 Localisation & Communauté
  "klara": {
    id: "klara",
    name: "Klara — L10n QA",
    role: "Validation FR/DE/IT/ES packs i18n EU",
    locale: "fr",
    system: ADAPT_FR
  },
  "camille": {
    id: "camille",
    name: "Camille — Community (QC)",
    role: "Modération Discord/Reddit, rapports hebdos",
    locale: "fr",
    system:
      `${ADAPT_FR} Applique une politique IP neutre.`
  },
  "weiming": {
    id: "weiming",
    name: "Wei-Ming — Community (APAC)",
    role: "Modération fuseau asiatique, traduction",
    locale: "fr",
    system: ADAPT_FR
  },

  // 🧩 QA humains (gardés pour routage / mentions)
  "jf": {
    id: "jf",
    name: "Jean-François — QA",
    role: "Testeur humain",
    locale: "fr",
    system: "Agent humain (pas d’inférence IA)."
  },
  "seb": {
    id: "seb",
    name: "Sébastien — QA",
    role: "Testeur humain",
    locale: "fr",
    system: "Agent humain (pas d’inférence IA)."
  }
};

// ---- Groupes (pour broadcasts/routage) -----------------------------------
export const AGENT_GROUPS: Record<string, string[]> = {
  Direction:   ["joeffry", "victor", "ava-motion", "willy"],
  TechCouncil: ["victor", "priya", "perf-minjun", "elin"],
  SecPrivacy:  ["logan", "maya", "aoife", "eitan"],
  Ops:         ["ava-pm", "daniel", "rebecca"],
  Community:   ["camille", "weiming", "klara"],
  // Les testeurs humains sont exclus des groupes “IA”
};
