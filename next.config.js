/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config")

const env = {
  GITHUB: "https://github.com/peTomis",
  LINKEDIN: "https://www.linkedin.com/in/petomis",
  TWITTER: "https://twitter.com/peTomis",
}

const nextConfig = { i18n, env }

module.exports = nextConfig
