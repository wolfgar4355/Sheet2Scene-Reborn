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

  /**
   * ✅ CRITICAL FIX (Supabase / undici / Next 14)
   * Empêche Next.js de bundler @supabase/supabase-js
   * sinon crash: createContextKey is not a function
   */
  experimental: {
    serverComponentsExternalPackages: ["@supabase/supabase-js"],
  },

  /**
   * ESLint Flat Config issue during build
   */
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack(config) {
    /**
     * ⚠️ IMPORTANT
     * On NE doit PAS exposer packages/engine à Webpack.
     * Le moteur passe UNIQUEMENT via lib/ (engine bridge).
     */
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
    };

    return config;
  },
};

export default nextConfig;
