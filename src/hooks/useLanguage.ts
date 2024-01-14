import { useTranslations } from "@/modules/translations/use"
import ItalyFlag from "@/ui/icons/ItalyFlag"
import USFlag from "@/ui/icons/USFlag"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

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
  const [language, setLanguage] = useState<SupportedLanguage>(languages[0])
  const { i18n } = useTranslations("")

  useEffect(() => {
    i18n.changeLanguage(language.code)
  }, [language])

  return [language, setLanguage, languages]
}
