import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const r = (...paths) => path.resolve(__dirname, ...paths);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // OK à garder
  swcMinify: false,

  // ⚠️ SUPPRIMÉ : App Router / Server Components ONLY
  // experimental: {
  //   serverComponentsExternalPackages: ["@supabase/supabase-js"],
  // },

  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack(config) {
    // 🔑 TRÈS IMPORTANT : MERGE, ne pas écraser
    config.resolve.alias = {
      ...(config.resolve.alias || {}),

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
    };

    return config;
  },
};

export default nextConfig;
