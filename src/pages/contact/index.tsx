import TopBar from "@/features/TopBar"
import { fetchTranslations } from "@modules/translations/fetch"
import type { NextPage } from "next"

const Contact: NextPage = () => {
  return (
    <>
      <TopBar />
    </>
  )
}

export default Contact

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await fetchTranslations(locale, ["common", "contact"])),
    },
  }
}
