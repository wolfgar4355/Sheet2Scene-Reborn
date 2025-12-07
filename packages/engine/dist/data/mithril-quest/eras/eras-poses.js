// @ts-nocheck
// ============================================================================
// 🕰️ MQ ERA POSES — Auto-generator for AI Era Illustrations (Sheet2Scene)
// ============================================================================
//
// Génère automatiquement une pose IA pour chaque ère / époque MQ.
// Les styles IA finaux sont appliqués via MQ_AI_STYLES.
//
// ============================================================================
import { ALL_MQ_ERAS } from "../eras/ALL_ERAS";
// ============================================================================
// 🔥 AUTO-DETECTION DES ÈRES
// ============================================================================
function autoPoseForEra(eraKey) {
    const key = eraKey.toLowerCase();
    // ----------------------- 🏛️ HIGH FANTASY / HEROIC AGE -----------------------
    if (key.includes("legend") || key.includes("myth") || key.includes("hero") || key.includes("celes")) {
        return {
            key: `${eraKey}-mythic`,
            eraKey,
            label: "Vision mythique",
            camera: "landscape",
            mood: "epic",
            lighting: "divine sunlight",
            environment: "temples anciens, statues colossales, faisceaux de lumière",
            gesture: "silhouette d’un héros dressé sur un promontoire",
            expression: "grandeur et destin",
            style: "realistic-heroic"
        };
    }
    // ----------------------- 🩸 DARK AGE / SHADOW ERA -----------------------
    if (key.includes("dark") || key.includes("shadow") || key.includes("grim") || key.includes("void")) {
        return {
            key: `${eraKey}-dark`,
            eraKey,
            label: "Âge des ténèbres",
            camera: "landscape",
            mood: "ominous",
            lighting: "void shadows",
            environment: "ruines noircies, brume épaisse, silhouettes inquiétantes",
            gesture: "ombre humanoïde dans la brume",
            expression: "menace sourde",
            style: "dark-arcane"
        };
    }
    // ----------------------- ⚙️ STEAMPUNK / INDUSTRIAL -----------------------
    if (key.includes("steam") || key.includes("gear") || key.includes("clock") || key.includes("iron")) {
        return {
            key: `${eraKey}-industrial`,
            eraKey,
            label: "Révolution mécanique",
            camera: "landscape",
            mood: "energetic",
            lighting: "warm industrial light",
            environment: "machines massives, engrenages, vapeur",
            gesture: "silhouette devant une forge mécanique",
            expression: "progrès et danger",
            style: "tech-magical"
        };
    }
    // ----------------------- 🔮 ARCANE ERA — MAGIC SUPREME -----------------------
    if (key.includes("arcane") || key.includes("mage") || key.includes("rune") || key.includes("spell")) {
        return {
            key: `${eraKey}-arcane`,
            eraKey,
            label: "Royaume des Arcanes",
            camera: "landscape",
            mood: "mystical",
            lighting: "arcane glow",
            environment: "tour de mage, cercles runiques, vortex magique",
            gesture: "silhouette de mage encapuchonné",
            expression: "mystère profond",
            style: "mystic-arcane"
        };
    }
    // ----------------------- 🌿 AGE OF NATURE / DRUIDIC ERA -----------------------
    if (key.includes("nature") || key.includes("wild") || key.includes("forest") || key.includes("fae")) {
        return {
            key: `${eraKey}-nature`,
            eraKey,
            label: "Ère sylvestre",
            camera: "landscape",
            mood: "serene",
            lighting: "soft nature glow",
            environment: "grande forêt vivante, arbres titanesques",
            gesture: "silhouette druidique",
            expression: "harmonie",
            style: "mystic-nature"
        };
    }
    // ----------------------- 🛡️ MEDIEVAL ERA / CLASSIC --------------------------------
    if (key.includes("kingdom") || key.includes("empire") || key.includes("medieval") || key.includes("age")) {
        return {
            key: `${eraKey}-medieval`,
            eraKey,
            label: "Royaumes en Guerre",
            camera: "landscape",
            mood: "heroic",
            lighting: "warm sunlight + dust",
            environment: "châteaux, bannières, champs, armées",
            gesture: "chevalier sur une colline",
            expression: "noblesse et conflit",
            style: "realistic-heroic"
        };
    }
    // ----------------------- 🚀 FUTURISTIC / GALACTIC -----------------------
    if (key.includes("galactic") || key.includes("nova") || key.includes("future") || key.includes("astro")) {
        return {
            key: `${eraKey}-futuristic`,
            eraKey,
            label: "Ère galactique",
            camera: "landscape",
            mood: "cosmic",
            lighting: "neon + starfield",
            environment: "nébuleuses, stations orbitales, vaisseaux",
            gesture: "silhouette astronautique",
            expression: "exploration",
            style: "cosmic-future"
        };
    }
    // ----------------------- DEFAULT NEUTRAL FANTASY -----------------------
    return {
        key: `${eraKey}-default`,
        eraKey,
        label: "Ambiance d'époque",
        camera: "landscape",
        mood: "neutral",
        lighting: "natural",
        environment: "paysage emblématique",
        gesture: "silhouette générique",
        expression: "neutre",
        style: "realistic"
    };
}
// ============================================================================
// 📦 EXPORT — toutes les poses générées automatiquement
// ============================================================================
export const MQ_ERA_POSES = ALL_MQ_ERAS.map(era => autoPoseForEra(era.key));
