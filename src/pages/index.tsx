import TopBar from "@/ui/organisms/TopBar"
import HomeContainer from "@containers/home"
import { fetchTranslations } from "@modules/translations/fetch"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <>
      <TopBar />
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
