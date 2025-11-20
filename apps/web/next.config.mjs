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

      // --- App ---
      "@": r("app"),
      "@config": r("config"),
      "@hooks": r("hooks"),
      "@components": r("components"),
      "@utils": r("utils"),
      "@types": r("types"),

      // --- Sheet2Scene Engine ---
      "@engine": r("../../packages/engine/src"),
      "@typesEngine": r("../../packages/engine/src/types"),
      "@content": r("../../packages/engine/src/content"),

      // --- RPG system ---
      "@fantasy": r("lib/s2s/fantasy"),
      "@bestiary": r("lib/s2s/fantasy/bestiary"),

      // --- Mithril ---
      "@mithril": r("lib/mithril"),
      "@mithrilHooks": r("lib/mithril/hooks"),

      // --- Grimoire ---
      "@grimoire": r("lib/grimoire"),

      // --- Global shared ---
      "@lib": r("lib"),
    };

    return config;
  },
};

export default nextConfig;

// Debug optionnel
console.log("🔧 Building commit:", process.env.VERCEL_GIT_COMMIT_SHA || "local");
