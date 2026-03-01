//-------------------------------------------------------------
// GM Engine – Core Encounter Engine (Mithril-Quest)
//-------------------------------------------------------------

import type {
  EncounterDifficulty,
  EncounterRequest,
  GeneratedEncounter,
  GmeMonster,
} from "./types";

/* -------------------------------------------------------
 * 1. Calcule le CR cible selon le niveau du groupe
 * ----------------------------------------------------- */
function targetCRForParty(
  partyLevel: number,
  partySize: number,
  difficulty: EncounterDifficulty
): number {
  // CR approximatif = niveau * nombre * facteur
  const base = partyLevel * (partySize * 0.75);

  switch (difficulty) {
    case "easy":
      return base * 0.6;
    case "medium":
      return base * 0.85;
    case "hard":
      return base * 1.15;
    case "deadly":
      return base * 1.4;
    default:
      return base;
  }
}

/* -------------------------------------------------------
 * 2. Filtrage global des monstres selon la requête
 * ----------------------------------------------------- */
function filterMonsters(
  all: GmeMonster[],
  req: EncounterRequest
): GmeMonster[] {
  return all.filter((m) => {
    // --- CR ---
    if (req.minCR !== undefined && m.cr < req.minCR) return false;
    if (req.maxCR !== undefined && m.cr > req.maxCR) return false;

    // --- biome ---
    if (req.biome && !(m.biomeTags ?? []).includes(req.biome)) return false;

    // --- habitat ---
    if (req.habitat && !(m.habitatTags ?? []).includes(req.habitat))
      return false;

    // --- tags ---
    if (req.tags && req.tags.length > 0) {
      const ok = req.tags.every((tag) =>
        [
          m.category,
          ...(m.biomeTags ?? []),
          ...(m.habitatTags ?? []),
        ].includes(tag)
      );
      if (!ok) return false;
    }

    return true;
  });
}

/* -------------------------------------------------------
 * 3. Moteur de sélection du meilleur ensemble
 * ----------------------------------------------------- */
export function runEncounterEngine(
  allMonsters: GmeMonster[],
  req: EncounterRequest
): GeneratedEncounter {
  const filtered = filterMonsters(allMonsters, req);

  if (filtered.length === 0) {
    throw new Error(
      `Aucun monstre ne correspond aux filtres : ${JSON.stringify(req)}`
    );
  }

  // CR cible
  const target = targetCRForParty(
    req.partyLevel,
    req.partySize,
    req.difficulty
  );

  const tolerance = Math.max(0.5, target * 0.25); // ± 25%
  const sorted = [...filtered].sort((a, b) => a.cr - b.cr);

  let best: GmeMonster[] = [];
  let bestDiff = Infinity;

  // 30 essais → sélection aléatoire contrôlée
  for (let i = 0; i < 30; i++) {
    let total = 0;
    const chosen: GmeMonster[] = [];

    // Génère un ensemble de 4 monstres max
    for (let j = 0; j < 4; j++) {
      const pick = sorted[Math.floor(Math.random() * sorted.length)];
      if (pick) {
        chosen.push(pick);
        total += pick.cr;
      }
    }

    const diff = Math.abs(total - target);

    if (diff < bestDiff) {
      best = chosen;
      bestDiff = diff;
    }

    if (diff <= tolerance) break; // ensemble validé
  }

  // Fallback si aucun essai valide
  if (best.length === 0) {
    best = [sorted[0]];
  }

  const totalCR = best.reduce((t, m) => t + m.cr, 0);

  return {
    monsters: best,
    totalCR,
    difficulty: req.difficulty,
    request: req,
  };
}
