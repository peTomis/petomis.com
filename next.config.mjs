import nextI18nextConfig from "./next-i18next.config.js"

// Keep production values aligned with customHttp.yml (Amplify's CDN headers).
// Pages Router emits external scripts and inert JSON; inline styles are used
// by animations. Development needs eval for tooling and must not force HTTPS.
const isProduction = process.env.NODE_ENV === "production"
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self'${isProduction ? "" : " 'unsafe-eval' 'unsafe-inline'"}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data:",
  `connect-src 'self' https://formspree.io${isProduction ? "" : " ws: wss:"}`,
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'self' https://formspree.io",
  "frame-ancestors 'none'",
  ...(isProduction ? ["upgrade-insecure-requests"] : []),
].join("; ")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: nextI18nextConfig.i18n,
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "Content-Security-Policy", value: contentSecurityPolicy },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        ...(isProduction ? [{ key: "Strict-Transport-Security", value: "max-age=31536000" }] : []),
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    }]
  },
  images: {
    // Optimized images come from content-hashed static imports, so a new
    // image always gets a new URL and can be cached for a year.
    minimumCacheTTL: 31536000,
  },
}

export default nextConfig
