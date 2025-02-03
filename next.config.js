/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config")

const env = {
  GITHUB: "https://github.com/peTomis",
  LINKEDIN: "https://www.linkedin.com/in/petomis",
  TWITTER: "https://twitter.com/peTomis",
  ANUBI: "https://www.anubidigital.com",
  HEROPATTERNS: "https://www.heropatterns.com",
  HEROICONS: "https://www.heroicons.com",
  METCH_GG: "https://app.metch.gg",
  PIENISSIMO: "https://pienissimo.com",
}

const nextConfig = {
  i18n,
  env,
}

module.exports = nextConfig
