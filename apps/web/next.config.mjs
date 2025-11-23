import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function r(p) {
  return path.resolve(__dirname, p);
}

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["@engine", "@grimoire", "@mithril"],
  },
  webpack(config) {
    config.resolve.alias = {
      "@": r("./app"),
      "@lib": r("./lib"),
      "@lib/getUserId": r("./lib/getUserId.ts"),
      "@lib/mithril": r("./lib/mithril"),
      "@mithril": r("../../packages/engine/src/mithril"),
      "@lib/supabase": r("./lib/supabase"),
      "@components": r("./components"),
      "@hooks": r("./hooks"),
      "@utils": r("./utils"),
      "@config": r("./config"),

      // ENGINE
      "@engine": r("../../packages/engine/src"),
      "@engine/content": r("../../packages/engine/src/content"),
      "@engine/types": r("../../packages/engine/src/types"),
      "@engine/ambient": r("../../packages/engine/src/ambient.config.ts"),

      // GRIMOIRE
      "@grimoire": r("../../packages/engine/src/content/grimoire"),

      // FANTASY
      "@fantasy": r("../../packages/engine/src/content/fantasy"),
      "@bestiary": r("../../packages/engine/src/content/fantasy/bestiary"),
      "@spells": r("../../packages/engine/src/content/fantasy/spells"),
      "@eras": r("../../packages/engine/src/content/fantasy/eras"),
      "@worlds-content": r("../../packages/engine/src/content/fantasy/worlds"),
    };
    return config;
  },
};

export default nextConfig;
