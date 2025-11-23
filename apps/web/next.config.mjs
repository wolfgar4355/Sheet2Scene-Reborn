import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const r = (p) => path.resolve(__dirname, p);

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["@engine", "@grimoire", "@mithril"],
7    outputFileTracingRoot: path.join(__dirname, "../../")
  },
  webpack(config) {
 ï9   config.resolve.alias = {
      /* UI */
      "@/": r("./app"),
      "@lib": r("./lib"),
      "@lib/supabase": r("./lib/supabase"),
      "@lib/getUserId": r("./lib/getUserId.ts"),
      "@components": r("./components"),
      "@hooks": r("./hooks"),
      "@utils": r("./utils"),
      "@config": r("./config"),

      /* ENGINE ROOT */
      "@engine": r("../../packages/engine/src"),

      /* ENGINE CONTENT */
      "@engine/content": r("../../packages/engine/src/content"),
      "@engine/types": r("../../packages/engine/src/types"),
      "@engine/ambient": r("../../packages/engine/src/ambient.config.ts"),

      /* GRIMOIRE */
      "@grimoire": r("../../packages/engine/src/content/grimoire"),
    /* MITHRIL */
    "@mithril": r("../../packages/engine/src/mithril"),
    "@lib/mithril": r("../../packages/engine/src/mithril"),
    "@mithril/engine": r("../../packages/engine/src/mithril/engine.ts"),
  };

      /* FANTASY */
      "@fantasy": r("../../packages/engine/src/content/fantasy"),
      "@bestiary": r("../../packages/engine/src/content/fantasy/bestiary"),
      "@spells": r("../../packages/engine/src/content/fantasy/spells"),
      "@eras": r("../../packages/engine/src/content/fantasy/eras"),
      "@worlds-content": r("../../packages/engine/src/content/fantasy/worlds")
    };

    return config;
  }
};

export default nextConfig;
