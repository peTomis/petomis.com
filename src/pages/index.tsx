import HomeContainer from "@containers/home"
import { fetchTranslations } from "@modules/translations/fetch"
import type { NextPage } from "next"
import Head from "next/head"
import { useTranslations } from "@/modules/translations/use"

const Home: NextPage = () => {
  const { t } = useTranslations("home")
  const title = t("title")
  const description = t("content")
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://petomis.com/images/sample.jpg"
        />
        <link rel="canonical" href="https://www.petomis.com/"></link>
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
