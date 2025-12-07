/******************************************************************************************
 * MQ — ACCESSORY PROMPTS (Medium AAA Quality)
 * Génération d’items : anneaux, amulettes, ceintures, capes, talismans, reliques…
 * Style : medium → descriptions riches mais optimisées pour agents spécialisés.
 ******************************************************************************************/
/******************************************************************************************
 * MQ — OPTIONS ESTHÉTIQUES
 ******************************************************************************************/
export const MQStyleOptions = [
    "runic",
    "celestial",
    "abyssal",
    "primal",
    "arcane",
    "elemental",
    "astral",
    "nature",
];
export const MQThemeOptions = [
    "holy",
    "shadow",
    "mythic",
    "ancient",
    "forgeborn",
    "spirit",
    "void",
    "storm",
    "frost",
    "ember",
];
export const MQColorPalettes = [
    "obsidian",
    "golden",
    "emerald",
    "sunfire",
    "frost",
    "storm",
    "amethyst",
    "crimson",
];
/******************************************************************************************
 * PROMPTS PAR CATÉGORIE — VERSION MEDIUM AAA
 ******************************************************************************************/
// ---------------------------------------------------------------
// 🟣 ANNEAUX (RINGS)
// ---------------------------------------------------------------
const RING_PROMPT = `
Génère un accessoire MQ de type **anneau magique**.

Contraintes :
- Style : {style}
- Thème : {theme}
- Palette de couleurs : {palette}
- Catégorie : Anneau (Ring)
- Objet petit, finement détaillé, destiné à un aventurier MQ.

Contenu exigé :
1. Nom MQ unique (style mythic / arcane / heroic)
2. Description immersive (2–3 phrases)
3. Matériaux principaux (métaux rares, pierres, runes)
4. Visuels clés (textures, lueurs, symboles)
5. Type d'énergie ou magie interne
6. Utilisateur typique (classe / rôle MQ)
7. Une capacité spéciale (pouvoir équilibré MQ)
`;
// ---------------------------------------------------------------
// 🔵 AMULETTES (AMULETS)
// ---------------------------------------------------------------
const AMULET_PROMPT = `
Créer une **amulette magique MQ**, pendentif ou symbole ancien.

Contraintes :
- Style primordial : {style}
- Thème spirituel : {theme}
- Palette visuelle : {palette}

Inclure :
1. Nom MQ sacré ou ancien
2. Forme du talisman + matériaux
3. Rune ou symbole central + signification
4. Description artistique du pendentif
5. Type de magie véhiculée (éther, lumière, ombre…)
6. Utilisateur idéal (mage, prêtre, rôdeur…)
7. Pouvoir signature et effet secondaire narratif
`;
// ---------------------------------------------------------------
// 🟢 CAPES (CLOAKS)
// ---------------------------------------------------------------
const CLOAK_PROMPT = `
Génère une **cape MQ enchantée** (cloak).

Contraintes :
- Style dominant : {style}
- Thème magique : {theme}
- Palette visuelle : {palette}

Décrire :
1. Tissu, texture, coutures magiques
2. Motifs ou runes sur l’intérieur / extérieur
3. Mouvement du tissu (éthéré, ombre, vent…)
4. Aura ou effet visuel discret
5. Propriétés défensives ou utilitaires MQ
6. Classe recommandée pour l’item
`;
// ---------------------------------------------------------------
// 🟡 CEINTURES (BELTS)
// ---------------------------------------------------------------
const BELT_PROMPT = `
Créer une **ceinture magique MQ**.

Contraintes :
- Style : {style}
- Thème : {theme}
- Palette : {palette}

Inclure :
1. Matière principale (cuir ancien, écailles, métal sacré…)
2. Boucle emblématique (symbole, animal, glyphe)
3. Effets visuels (radiance, ombre, cristaux)
4. Bonus physiques ou magiques MQ
5. Utilisateur : guerrier, barbare, moine, etc.
`;
// ---------------------------------------------------------------
// 🟤 PETITS OBJETS (TRINKETS)
// ---------------------------------------------------------------
const TRINKET_PROMPT = `
Génère un **trinket MQ** (petit objet magique) destiné au roleplay ou aux bonus mineurs.

Contraintes :
- Style : {style}
- Thème : {theme}
- Palette : {palette}

Doit inclure :
1. Nature de l’objet (pierre, fétiche, fragment, os, rune…)
2. Origine MQ (ancienne, céleste, abyssale…)
3. Fines décorations ou inscriptions
4. Pouvoir léger mais unique
5. Histoire courte (1 phrase)
`;
// ---------------------------------------------------------------
// 🔥 RELIQUES (RELICS) — objets puissants
//---------------------------------------------------------------
const RELIC_PROMPT = `
Créer une **relique MQ ancienne**.

Contraintes :
- Style : {style}
- Thème : {theme}
- Palette : {palette}

Inclure :
1. Nom mythique / antique
2. Description du design (forme, matériaux, gravures)
3. Énergie ou magie centrale
4. Symptômes visuels (lumière, ombre, flux, vibrations)
5. Héritage MQ (ancienne civilisation, titan, dragon…)
6. Pouvoir majeur + coût / contrepartie
`;
/******************************************************************************************
 * MAPPING CATÉGORIE → PROMPT TEMPLATE
 ******************************************************************************************/
const PROMPT_MAP = {
    ring: RING_PROMPT,
    amulet: AMULET_PROMPT,
    cloak: CLOAK_PROMPT,
    belt: BELT_PROMPT,
    trinket: TRINKET_PROMPT,
    relic: RELIC_PROMPT,
};
/******************************************************************************************
 * FONCTION PRINCIPALE
 * Remplace {style}, {theme}, {palette}
 ******************************************************************************************/
export function getAccessoryPrompt(category, style, theme, palette) {
    const base = PROMPT_MAP[category];
    const finalPrompt = base
        .replaceAll("{style}", style)
        .replaceAll("{theme}", theme)
        .replaceAll("{palette}", palette);
    return {
        category,
        style,
        theme,
        palette,
        title: `MQ Accessory Generation — ${category.toUpperCase()}`,
        prompt: finalPrompt.trim(),
    };
}
