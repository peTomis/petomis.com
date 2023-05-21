import HomeContainer from "@containers/home"
import { fetchTranslations } from "@modules/translations/fetch"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <>
      <HomeContainer />
    </>
  )
}

export default Home

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await fetchTranslations(locale, ["common", "home", "onboarding"])),
    },
  }
}
