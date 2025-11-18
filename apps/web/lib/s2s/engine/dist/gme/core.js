/* -------------------------------------------------------
 * 1. Calcule le CR cible selon le niveau du groupe
 * ----------------------------------------------------- */
function targetCRForParty(partyLevel, partySize, difficulty) {
    // CR approximatif = niveau * nombre / facteur
    const base = partyLevel * (partySize * 0.75);
    switch (difficulty) {
        case "easy": return base * 0.6;
        case "medium": return base * 0.85;
        case "hard": return base * 1.15;
        case "deadly": return base * 1.4;
        default: return base;
    }
}
/* -------------------------------------------------------
 * 2. Filtrage global des monstres
 * ----------------------------------------------------- */
function filterMonsters(all, req) {
    return all.filter((m) => {
        // --- CR ---
        if (req.minCR !== undefined && m.cr < req.minCR)
            return false;
        if (req.maxCR !== undefined && m.cr > req.maxCR)
            return false;
        // --- biome ---
        if (req.biome && !(m.biomeTags ?? []).includes(req.biome))
            return false;
        // --- habitat ---
        if (req.habitat && !(m.habitatTags ?? []).includes(req.habitat))
            return false;
        // --- tags ---
        if (req.tags && req.tags.length > 0) {
            const ok = req.tags.every((tag) => [
                m.category,
                ...(m.biomeTags ?? []),
                ...(m.habitatTags ?? []),
            ].includes(tag));
            if (!ok)
                return false;
        }
        return true;
    });
}
/* -------------------------------------------------------
 * 3. Moteur de sélection du meilleur ensemble
 * ----------------------------------------------------- */
export function runEncounterEngine(allMonsters, req) {
    const filtered = filterMonsters(allMonsters, req);
    if (filtered.length === 0) {
        throw new Error(`Aucun monstre ne correspond aux filtres : ${JSON.stringify(req)}`);
    }
    // CR cible
    const target = targetCRForParty(req.partyLevel, req.partySize, req.difficulty);
    const tolerance = Math.max(0.5, target * 0.25); // ± 25%
    const sorted = [...filtered].sort((a, b) => a.cr - b.cr);
    let best = [];
    let bestDiff = Infinity;
    // 30 essais → optimisation randomisée légère
    for (let i = 0; i < 30; i++) {
        let total = 0;
        const chosen = [];
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
        if (diff <= tolerance)
            break; // validé
    }
    // --- fallback ---
    if (best.length === 0) {
        const fallback = sorted[0];
        best = [fallback];
    }
    const totalCR = best.reduce((t, m) => t + m.cr, 0);
    return {
        monsters: best,
        totalCR,
        difficulty: req.difficulty,
        request: req,
    };
}
