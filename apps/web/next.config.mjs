import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Resolve helper (safe for Termux / Vercel / Linux)
 */
const r = (...paths) => path.resolve(__dirname, ...paths);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
   * SWC issues on some ARM / Android envs
   */
  swcMinify: false,

  webpack(config) {
    config.resolve.alias = {
      /**
       * ─────────────────────────────
       * APP (WEB UI)
       * ─────────────────────────────
       */
      "@": r("."), // apps/web
      "@app": r("app"),
      "@components": r("components"),
      "@hooks": r("hooks"),
      "@lib": r("lib"),
      "@utils": r("utils"),
      "@config": r("config"),
      "@types": r("types"),

      /**
       * ─────────────────────────────
       * PUBLIC ASSETS
       * ─────────────────────────────
       */
      "@public": r("public"),
      "@images": r("public/images"),
      "@sounds": r("public/sounds"),
      "@assets": r("public/assets"),

      /**
       * ─────────────────────────────
       * ENGINE (LOGIC / DATA ONLY)
       * ⚠️ PAS d’UI React ici
       * ─────────────────────────────
       */
      "@engine": r("../../packages/engine/src"),

      /**
       * Mithril-Quest DATA (safe)
       */
      "@mithril": r("../../packages/engine/src/data/mithril-quest"),
      "@mq-worlds": r("../../packages/engine/src/data/mithril-quest/worlds"),
      "@mq-eras": r("../../packages/engine/src/data/mithril-quest/eras"),
      "@mq-bestiary": r("../../packages/engine/src/data/mithril-quest/bestiary"),
      "@mq-items": r("../../packages/engine/src/data/mithril-quest/items"),
      "@mq-spells": r("../../packages/engine/src/data/mithril-quest/spells"),
    };

    return config;
  },
};

export default nextConfig;
