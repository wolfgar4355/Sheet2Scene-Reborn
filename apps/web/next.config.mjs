import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const r = (p) => path.resolve(__dirname, p);

export default {
  reactStrictMode: true,

  // SWC ne fonctionne pas sur Android (ARM64)
  swcMinify: false,

  webpack(config) {
    config.resolve.alias = {
      // ─────────────────────────────────────────────
      // APP (apps/web)
      // ─────────────────────────────────────────────
      "@": r("."),                     // racine apps/web
      "@app": r("./app"),
      "@components": r("./components"),
      "@hooks": r("./hooks"),
      "@lib": r("./lib"),
      "@utils": r("./utils"),
      "@config": r("./config"),        // worlds.ts etc.

      // ─────────────────────────────────────────────
      // PUBLIC ASSETS
      // ─────────────────────────────────────────────
      "@public": r("./public"),
      "@images": r("./public/images"),
      "@sounds": r("./public/sounds"),
      "@assets": r("./public/assets"),

      // ─────────────────────────────────────────────
      // ENGINE (packages/engine/src)
      // ─────────────────────────────────────────────
      "@engine": r("../../packages/engine/src"),

      // Mithril-Quest (nouveau moteur)
      "@mithril": r("../../packages/engine/src/data/mithril-quest"),

      // Contenu MQ
      "@mq-worlds": r("../../packages/engine/src/data/mithril-quest/worlds"),
      "@mq-eras": r("../../packages/engine/src/data/mithril-quest/eras"),
      "@mq-bestiary": r("../../packages/engine/src/data/mithril-quest/bestiary"),
      "@mq-items": r("../../packages/engine/src/data/mithril-quest/items"),
      "@mq-spells": r("../../packages/engine/src/data/mithril-quest/spells"),

      // ─────────────────────────────────────────────
      // Legacy (si besoin)
      // ─────────────────────────────────────────────
      "@fantasy": r("../../packages/engine/src/data/mithril-quest"),
      "@worlds-content": r("../../packages/engine/src/data/mithril-quest/worlds"),
    };

    return config;
  },
};
