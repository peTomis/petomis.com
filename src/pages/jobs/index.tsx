import TopBar from "@/features/TopBar"
import { fetchTranslations } from "@modules/translations/fetch"
import type { NextPage } from "next"

const Jobs: NextPage = () => {
  return (
    <>
      <TopBar />
    </>
  )
}

export default Jobs

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await fetchTranslations(locale, ["common", "jobs"])),
    },
  }
}
