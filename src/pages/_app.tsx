import "../../styles/globals.css"
import "../../styles/tailwind.css"
import type { AppProps } from "next/app"
import { appWithTranslation } from "next-i18next"

function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(CustomApp as any)
