// @ts-nocheck
// ============================================================================
// 🎭 MQ ALIGNMENT POSES — Presets IA par Écho
// ============================================================================
//
// Utilisable par Sheet2Scene / Mithril Engine pour générer une pose
// et une ambiance cohérente avec l’alignement.
//
// ============================================================================
export const MQ_ALIGNMENT_POSES = [
    {
        key: "aurion",
        posePrompt: "standing tall, slightly turned to the side, one hand extended as if protecting someone behind, calm but determined expression",
        cameraPrompt: "medium shot from slightly below, heroic framing, centered composition",
        lightingPrompt: "soft golden rim light, warm frontal light, faint rays of light behind the character",
        extraStyle: "subtle halo effect, runic glow around the chest or shoulders"
    },
    {
        key: "solvain",
        posePrompt: "dynamic forward-leaning stance, weapon or fist ready, cloak trailing behind as if in motion",
        cameraPrompt: "medium close-up with a slight diagonal angle, feeling of motion and momentum",
        lightingPrompt: "strong warm contrast, bright highlights on the front, darker background",
        extraStyle: "motion lines or blurred cloak edges to suggest action"
    },
    {
        key: "verdalis",
        posePrompt: "relaxed but vigilant stance, one hand touching the ground or a plant, gentle protective posture",
        cameraPrompt: "three-quarter view, medium shot showing some environment at the feet",
        lightingPrompt: "soft green-tinged light, dappled sunlight like through leaves, subtle glow from plants",
        extraStyle: "floating leaves or spores, light wind in hair or cloak"
    },
    {
        key: "aetheryn",
        posePrompt: "one hand raised tracing a sigil in the air, other holding a focus or book, gaze slightly upward as if reading invisible glyphs",
        cameraPrompt: "medium close-up, slight top-down angle emphasizing the magic circle",
        lightingPrompt: "cool purple and blue light from arcane symbols, subtle underlighting from spell effects",
        extraStyle: "floating runes, particles circling the head and hands"
    },
    {
        key: "nocthyr",
        posePrompt: "half-hidden in a shadow, body turned sideways, one shoulder toward the viewer, eyes glancing from the darkness",
        cameraPrompt: "medium shot, off-center composition, more negative space on the shadow side",
        lightingPrompt: "low-key lighting, strong contrast, one sharp side light and deep shadows",
        extraStyle: "soft fog at the feet, faint glowing eyes or reflective pupils"
    },
    {
        key: "emberfall",
        posePrompt: "tense, aggressive stance, shoulders forward, jaw clenched, one arm slightly raised as if ready to strike",
        cameraPrompt: "close or medium close-up, angled from slightly above to capture intensity",
        lightingPrompt: "fiery orange and red lighting from one side, sparks or embers in the air",
        extraStyle: "heat distortion around the character, faint flame-like aura"
    },
    {
        key: "gravemind",
        posePrompt: "upright but rigid posture, arms crossed or hands behind the back, emotionless gaze straight ahead",
        cameraPrompt: "straight-on medium shot, symmetrical framing, minimal tilt",
        lightingPrompt: "cold neutral lighting, soft but desaturated, faint vignetting around the edges",
        extraStyle: "subtle shadow shapes behind that suggest destiny or chains"
    },
    {
        key: "tempestris",
        posePrompt: "twisting pose, hair and cloak blown by strong wind, one foot on a rock or ledge, expression wild or amused",
        cameraPrompt: "dynamic low-angle shot, slight fisheye feeling, background suggesting clouds or storm",
        lightingPrompt: "cool blue and cyan flashes like distant lightning, strong directional windlight",
        extraStyle: "debris and small particles floating around, crackling energy arcs"
    },
    {
        key: "obsidian",
        posePrompt: "relaxed yet menacing posture, one hand holding a dark artifact or book, subtle smirk or unreadable expression",
        cameraPrompt: "medium shot with slight low angle, character off-center with darkness creeping in",
        lightingPrompt: "deep purple and black tones, light mostly from below or behind, leaving face partially in shadow",
        extraStyle: "shadow tendrils, faint cracks of violet light on the ground"
    }
];
// Helper : récupérer un preset par key
export function getAlignmentPosePreset(key) {
    return MQ_ALIGNMENT_POSES.find(p => p.key === key);
}
