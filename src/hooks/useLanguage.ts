"use client"

import { useTranslations } from "@/hooks/useTranslations"
import ItalyFlag from "@/ui/icons/ItalyFlag"
import USFlag from "@/ui/icons/USFlag"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useLocalStorage } from "./useLocalStorage"
import { useRouter } from "next/router"

type SupportedLanguage = {
  code: string
  name: string
  flag: () => JSX.Element
}

const languages: SupportedLanguage[] = [
  {
    code: "en-US",
    name: "English",
    flag: USFlag,
  },
  {
    code: "it-IT",
    name: "Italiano",
    flag: ItalyFlag,
  },
]

export function useLanguage(): [
  SupportedLanguage,
  Dispatch<SetStateAction<SupportedLanguage>>,
  SupportedLanguage[]
] {
  const [storageValue, setStorageValue] = useLocalStorage("lang", "en-US")
  const router = useRouter()

  const l = languages.find((l) => l.code === storageValue)

  if (!l) {
    setStorageValue("en-US")
    languages[0]
  }

  const [language, setLanguage] = useState<SupportedLanguage>(l ?? languages[0])

  const { i18n } = useTranslations("common")

  useEffect(() => {
    router.push(router.pathname, router.asPath, { locale: language.code })
    i18n.changeLanguage(language.code)
    setStorageValue(language.code)
  }, [language])

  return [language, setLanguage, languages]
}
