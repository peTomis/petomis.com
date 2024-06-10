import { fetchTranslations } from "@modules/translations/fetch"
import type { NextPage, Metadata } from "next"
import Head from "next/head"
import { useTranslations } from "@/hooks/useTranslations"
import dynamic from "next/dynamic"

const ClientSideHome = dynamic(
  () => import("@/containers/home"), // Replace with the actual path to your component
  { ssr: false }
)

export const metadata: Metadata = {
  openGraph: {
    title: "Giuseppe Tomis - Software Engineer",
    description: "Personal website of Giuseppe Tomis",
    url: "https://www.petomis.com/",
    siteName: "Petomis",
    images: [
      {
        url: "https://www.petomis.com/images/sample.png",
        width: 1200,
        height: 630,
        alt: "Petomis",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Petomis",
    title: "Giuseppe Tomis - Software Engineer",
    description: "Personal website of Giuseppe Tomis",
    images: [
      {
        url: "https://www.petomis.com/images/sample.png",
        width: 1200,
        height: 630,
        alt: "Petomis",
      },
    ],
  },
  icons: [
    {
      url: "/favicon.ico",
      rel: "icon",
    },
    {
      url: "/favicon.svg",
      rel: "mask-icon",
    },
  ],
}

const Home: NextPage = () => {
  const { t } = useTranslations("home")
  const title = t("title")
  const description = t("description")
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="mask-icon" href="/favicon.svg" color="#00719C" />
      </Head>

      <ClientSideHome />
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
