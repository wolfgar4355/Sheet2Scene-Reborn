/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  // PAS de basePath, PAS d'assetPrefix, PAS d'experimental.optimizeCss
};
export default nextConfig;
console.log('🧱 Building commit:', process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA || 'local');
