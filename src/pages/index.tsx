import { fetchTranslations } from "@modules/translations/fetch"
import type { NextPage } from "next"
import Head from "next/head"
import { useTranslations } from "@/hooks/useTranslations"
import HomeContainer from "@/containers/home"

const Home: NextPage = () => {
  const { t } = useTranslations("home")
  const title = t("title")
  const description = t("description")
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://www.petomis.com" />
        {/* Open Graph metadata */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://www.petomis.com/" />
        <meta property="og:site_name" content="Petomis" />
        <meta
          property="og:image"
          content="https://www.petomis.com/images/sample.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Petomis" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        {/* Twitter metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Petomis" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://www.petomis.com/images/sample.png"
        />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:image:alt" content="Petomis" />
        {/* Icons */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="peTomis" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <HomeContainer />
    </div>
  )
}

export default Home

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await fetchTranslations(locale, ["common", "home", "jobs"])),
    },
  }
}
