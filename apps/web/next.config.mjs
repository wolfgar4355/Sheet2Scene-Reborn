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
      ...config.resolve.alias,

      // --- Core app ---
      "@": r("app"),
      "@config": r("config"),
      "@hooks": r("hooks"),
      "@components": r("components"),
      "@utils": r("utils"),
      "@types": r("types"),

      // --- Engine ---
      "@engine": r("../packages/engine/src"),
      "@engineTypes": r("../packages/engine/src/types"),
      "@content": r("../packages/engine/src/content"),
      "@ambient": r("../packages/engine/src/ambient.config.ts"),

      // --- RPG system ---
      "@fantasy": r("lib/s2s/fantasy"),
      "@bestiary": r("lib/s2s/fantasy/bestiary"),

      // Mithril
      "@mithril": r("lib/mithril"),
      "@mithrilHooks": r("lib/mithril/hooks"),

      // Grimoire
      "@grimoire": r("lib/grimoire"),

      "@lib": r("lib"),
    };

    return config;
  },
};

export default nextConfig;
