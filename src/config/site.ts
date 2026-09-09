/**
 * Static, public configuration for the site.
 *
 * These values used to live in the `env` block of `next.config.js`, which was a
 * misuse of env vars: they are not secrets and never change per environment.
 * Keeping them here as typed constants gives autocomplete and type-safety.
 */

export const externalLinks = {
  github: "https://github.com/peTomis",
  credly: "https://www.credly.com/users/petomis",
  linkedin: "https://www.linkedin.com/in/petomis",
  twitter: "https://twitter.com/peTomis",
  materialIcons: "https://fonts.google.com/icons",
} as const

export const projectWebsites = {
  anubidigital: "https://www.anubidigital.com",
  metch: "https://app.metch.gg",
  collectionManager: "https://collection-manager-lac.vercel.app",
  pienissimo: "https://pienissimo.com",
} as const
