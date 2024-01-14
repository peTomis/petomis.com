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
        <meta property="og:site_name" content={"Giuseppe Tomis"} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://petomis.com/images/sample.jpg"
        />
        <link rel="canonical" href="https://www.petomis.com/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/favicon.svg" color="#009BD6" />
      </Head>

      <HomeContainer />
    </div>
  )
}

export default Home

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await fetchTranslations(locale, ["common", "home"])),
    },
  }
}
