import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  xml += `
      <url>
        <loc>${`https://www.petomis.com`}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>`

  xml += `
      <url>
        <loc>${`https://petomis.com`}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
      </url>`

  xml += `</urlset>`

  res.setHeader("Content-Type", "text/xml")
  res.write(xml)
  res.end()

  return {
    props: {},
  }
}

const Page = () => null

export default Page
