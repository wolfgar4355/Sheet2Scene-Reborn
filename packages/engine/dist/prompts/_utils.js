// src/agents/prompts/_utils.ts
// Fonctions utilitaires pour construire des prompts MQ cohérents.
// Négatif global par défaut (réutilisable dans tous les générateurs)
export const MQ_DEFAULT_NEGATIVE_PROMPT = [
    "low resolution",
    "blurry",
    "pixelated",
    "cropped",
    "text",
    "UI",
    "watermark",
    "logo",
    "extra limbs",
    "deformed anatomy",
    "background scene clutter",
    "multiple objects if only one is needed"
].join(", ");
/**
 * Description textuelle d’un style d’image.
 * Cette chaîne est ajoutée au prompt final pour guider le modèle.
 */
export function describeStyle(style) {
    switch (style) {
        case "realistic_cinematic":
            return "ultra-detailed cinematic fantasy render, physically based materials, dramatic lighting, 4k, game concept art";
        case "realistic_dark_fantasy":
            return "gritty dark fantasy illustration, moody lighting, worn surfaces, scratches, soulslike aesthetic";
        case "anime_shonen":
            return "anime shonen style, bold outlines, saturated colors, dynamic cel shading";
        case "anime_seinen":
            return "seinen anime style, detailed rendering, mature tone, nuanced shading, subtle lighting";
        case "manga_classic_bw":
            return "black and white manga lineart, screentones, expressive inking, high contrast, no colors";
        case "cartoon_us_modern":
            return "modern western cartoon style, clean shapes, smooth shading, expressive but simplified design";
        case "cartoon_minimalist":
            return "minimalist flat cartoon style, very simple shapes, few details, pastel colors";
        case "three_d_print_ready":
            return "3d-print ready model preview, monochrome clay render, no textures, clear silhouette, orthographic, high contrast edges";
        case "lineart_blueprint":
            return "technical blueprint lineart, isometric, clean thin lines, construction lines, annotation feel, no shading";
        case "pixelart_16bit":
            return "16-bit pixel art, RPG inventory icon style, limited color palette, crisp pixels, SNES-era look";
        default:
            return "";
    }
}
/**
 * Description textuelle de la variante de cadrage.
 */
export function describeVariant(variant) {
    switch (variant) {
        case "front":
            return "centered front view, neutral angle, full object visible, no cropping";
        case "isometric":
            return "three-quarter isometric view, slight top-down angle, clear thickness and depth";
        case "battle_pose":
            return "in the context of battle, held or used in a dynamic action pose, motion implied";
        case "turnaround":
            return "turnaround sheet, four angles side by side: front, side, back, angled view, neutral lighting";
        case "item_card":
            return "RPG item card style, centered object, subtle vignette background, ready for UI inventory slot";
        case "engraving":
            return "old grimoire engraving style, monochrome etching, parchment background implied, medieval illustration";
        default:
            return "";
    }
}
/**
 * Construit un MQGeneratedPrompt à partir d’une config + options.
 * Utilisé par tous les générateurs spécialisés (shields, weapons, races, etc.).
 */
export function buildMQPrompt(options) {
    const { key, label, style, category, rarity, basePrompt, config, extraParts, tags, loreTags, negativeOverride } = options;
    const variant = options.variant ?? "front";
    const mainBase = (config && config.basePrompt) ||
        basePrompt ||
        `fantasy object called "${label ?? key}", detailed design, clear silhouette`;
    const parts = [mainBase];
    // Hints config
    if (config?.materialHints?.length) {
        parts.push(`materials: ${config.materialHints.join(", ")}`);
    }
    if (config?.colorPalette?.length) {
        parts.push(`color palette: ${config.colorPalette.join(", ")}`);
    }
    if (config?.cameraHints?.length) {
        parts.push(`camera hints: ${config.cameraHints.join(", ")}`);
    }
    // Style & variante
    const styleText = describeStyle(style);
    const variantText = describeVariant(variant);
    if (styleText)
        parts.push(styleText);
    if (variantText)
        parts.push(variantText);
    // Extra custom parts
    if (extraParts && extraParts.length) {
        parts.push(...extraParts);
    }
    const prompt = parts.filter(Boolean).join(", ");
    // Négatif final
    let negativePrompt;
    if (negativeOverride) {
        negativePrompt = negativeOverride;
    }
    else {
        const extraNeg = config?.negativePrompt?.trim();
        negativePrompt = extraNeg
            ? `${MQ_DEFAULT_NEGATIVE_PROMPT}, ${extraNeg}`
            : MQ_DEFAULT_NEGATIVE_PROMPT;
    }
    // Meta
    const combinedLoreTags = [
        ...(config?.loreTags ?? []),
        ...(loreTags ?? [])
    ];
    const metaTags = [
        ...(tags ?? []),
        ...(combinedLoreTags ?? [])
    ];
    return {
        prompt,
        negativePrompt,
        meta: {
            key,
            label,
            category,
            style,
            variant,
            rarity,
            tags: metaTags.length ? metaTags : undefined,
            loreTags: combinedLoreTags.length ? combinedLoreTags : undefined
        }
    };
}
