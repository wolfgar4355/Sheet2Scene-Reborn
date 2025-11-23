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
      // ==== App directories ====
      "@": r("./app"),
      "@components": r("./components"),
      "@hooks": r("./hooks"),
      "@utils": r("./utils"),
      "@config": r("./config"),

      // ==== Engine root ====
      "@engine": r("../packages/engine/src"),
      "@engine/content": r("../packages/engine/src/content"),
      "@engine/types": r("../packages/engine/src/types"),
      "@engine/ambient": r("../packages/engine/src/ambient.config.ts"),

      // ==== RPG/D&D AAA content ====
      "@fantasy": r("../packages/engine/src/content/fantasy"),
      "@bestiary": r("../packages/engine/src/content/fantasy/bestiary"),
      "@spells": r("../packages/engine/src/content/fantasy/spells"),
      "@eras": r("../packages/engine/src/content/fantasy/eras"),
      "@worlds-content": r("../packages/engine/src/content/fantasy/worlds"),

      // ==== Grimoire ====
      "@grimoire": r("../packages/engine/src/content/grimoire"),

      // ==== Shared ====
      "@lib": r("./lib"),

      // ==== Mithril Framework ====
      "@mithril": r("../packages/engine/src/mithril"),
      "@mithril/hooks": r("../packages/engine/src/mithril/hooks"),

      // ==== Config world keys ====
      "@config/worlds": r("../packages/engine/src/getWorlds.ts"),
    };

    return config;
  },
};

export default nextConfig;

console.log("⚙️ Building commit:", process.env.VERCEL_GIT_COMMIT_SHA || "local");
