const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,

      "@": r("app"),
      "@config": r("config"),
      "@hooks": r("hooks"),
      "@components": r("components"),
      "@types": r("types"),
      "@lib": r("lib"),

      "@engine": r("../../packages/engine/src"),
      "@engineTypes": r("../../packages/engine/src/types"),
      "@engineContent": r("../../packages/engine/src/content"),

      "@fantasy": r("lib/s2s/fantasy"),
      "@bestiary": r("lib/s2s/fantasy/bestiary"),
      "@rpg": r("lib/s2s"),

      "@supabase": r("lib/supabase"),

      "@mithril": r("lib/mithril"),
      "@mithrilHooks": r("lib/mithril/hooks"),

      "@grimoire": r("lib/grimoire"),
    };

    return config;
  },
};

export default nextConfig;
