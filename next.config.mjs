import nextI18nextConfig from "./next-i18next.config.js"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: nextI18nextConfig.i18n,
  images: {
    // Optimized images come from content-hashed static imports, so a new
    // image always gets a new URL and can be cached for a year.
    minimumCacheTTL: 31536000,
  },
}

export default nextConfig
