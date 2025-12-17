import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** résolve propre pour Android / Termux */
const r = (...paths) => path.join(__dirname, ...paths);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // SWC arm64 issues on Android

  webpack(config) {
    config.resolve.alias = {
      // ─────────────────────────────
      // APP
      // ─────────────────────────────
      "@": r("."),
      "@app": r("app"),
      "@components": r("components"),
      "@hooks": r("hooks"),
      "@lib": r("lib"),
      "@utils": r("utils"),
      "@config": r("config"),

      // ─────────────────────────────
      // PUBLIC
      // ─────────────────────────────
      "@public": r("public"),
      "@images": r("public/images"),
      "@sounds": r("public/sounds"),
      "@assets": r("public/assets"),

      // ─────────────────────────────
      // ENGINE
      // ─────────────────────────────
      "@engine": r("../../packages/engine/src"),
      "@mithril": r("../../packages/engine/src/data/mithril-quest"),

      "@mq-worlds": r("../../packages/engine/src/data/mithril-quest/worlds"),
      "@mq-eras": r("../../packages/engine/src/data/mithril-quest/eras"),
      "@mq-bestiary": r("../../packages/engine/src/data/mithril-quest/bestiary"),
      "@mq-items": r("../../packages/engine/src/data/mithril-quest/items"),
      "@mq-spells": r("../../packages/engine/src/data/mithril-quest/spells"),

      // Legacy
      "@fantasy": r("../../packages/engine/src/data/mithril-quest"),
      "@worlds-content": r("../../packages/engine/src/data/mithril-quest/worlds"),
    };

    return config;
  },
};

export default nextConfig;
