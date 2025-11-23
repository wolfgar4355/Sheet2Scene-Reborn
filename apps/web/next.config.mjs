import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const r = (p) => path.resolve(__dirname, p);

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },

  webpack: (config) => {
    config.resolve.alias = {
      // ===== App =====
      "@": r("app"),
      "@config": r("config"),
      "@components": r("components"),
      "@utils": r("utils"),

      // ===== Mithril Engine (AAA) =====
      "@engine": r("../packages/engine/src"),
      "@engine/content": r("../packages/engine/src/content"),
      "@engine/types": r("../packages/engine/src/types"),
      "@engine/ambient": r("../packages/engine/src/ambient.config.ts"),

      // ===== RPG (AAA Content) =====
      "@fantasy": r("../packages/engine/src/content/fantasy"),
      "@bestiary": r("../packages/engine/src/content/fantasy/bestiary"),
      "@spells": r("../packages/engine/src/content/fantasy/spells"),
      "@eras": r("../packages/engine/src/content/fantasy/eras"),
      "@worlds-content": r("../packages/engine/src/content/fantasy/worlds"),

      // ===== Grimoire Engine =====
      "@grimoire": r("../packages/engine/src/content/grimoire"),

      // ===== Shared =====
      "@lib": r("lib"),

      // ===== Mithril Framework (local) =====
      "@mithril": r("lib/mithril"),

      // ===== Config world keys =====
      "@config/worlds": r("config/worlds.ts"),
    };

    return config;
  },
};

export default nextConfig;

console.log("🔨 Building commit:", process.env.VERCEL_GIT_COMMIT_SHA || "local");
