import { useScene } from "./SceneController";
/**
 * ⚡ LightningArcs — rendu canvas des arcs d’éclairs
 * - Couleur dynamique selon lumière ambiante
 * - Intensité liée à la météo
 * - Flash + fade-out cinématique
 */
declare class LightningArcs {
    static canvas: HTMLCanvasElement | null;
    static ctx: CanvasRenderingContext2D | null;
    /** Couleur dynamique selon luminosité (nuit → bleu) */
    private static computeColor;
    /** Initialise le canvas dans un parent donné */
    static init(parent: HTMLElement, lightLevel?: number): void;
    /** Resize dynamique */
    static resize: () => void;
    /** Spawn d’un arc directionnel */
    static spawn(direction: "left" | "center" | "right", scene: ReturnType<typeof useScene>): void;
    /** Spawn aléatoire (helper) */
    static spawnRandom(scene: ReturnType<typeof useScene>): void;
    private static drawArc;
    /** Flash blanc global très bref */
    private static flash;
    /** Fade-out progressif du canvas */
    private static fadeOut;
}
export default LightningArcs;
