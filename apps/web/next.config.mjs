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
      // ==== App ====
      "@": r("./app"),
      "@components": r("./components"),
      "@hooks": r("./hooks"),
      "@utils": r("./utils"),
      "@config": r("./config"),
      "@lib": r("./lib"),

      // ==== ENGINE ROOT ====
      "@engine": r("../../packages/engine/src"),

      // ==== ENGINE CONTENT ====
      "@engine/content": r("../../packages/engine/src/content"),
      "@engine/types": r("../../packages/engine/src/types"),
      "@engine/ambient": r("../../packages/engine/src/ambient.config.ts"),

      // ==== GRIMOIRE ====
      "@engine/content/grimoire": r("../../packages/engine/src/content/grimoire"),

      // ==== FANTASY ====
      "@engine/content/fantasy": r("../../packages/engine/src/content/fantasy"),

      "@engine/content/fantasy/bestiary": r("../../packages/engine/src/content/fantasy/bestiary"),
      "@engine/content/fantasy/spells": r("../../packages/engine/src/content/fantasy/spells"),
      "@engine/content/fantasy/eras": r("../../packages/engine/src/content/fantasy/eras"),
      "@engine/content/fantasy/worlds": r("../../packages/engine/src/content/fantasy/worlds"),

      // ==== WORLD KEYS ====
      "@engine/getWorlds": r("../../packages/engine/src/getWorlds.ts"),
    };

    return config;
  },
};

export default nextConfig;
