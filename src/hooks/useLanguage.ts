import ItalyFlag from "@/ui/icons/ItalyFlag"
import USFlag from "@/ui/icons/USFlag"
import { Dispatch, SetStateAction, useState } from "react"

enum Flag {
  USFlag = "USFlag",
  ItalyFlag = "ItalyFlag",
}

type SupportedLanguage = {
  code: string
  name: string
  flag: () => JSX.Element
}

const languages: SupportedLanguage[] = [
  {
    code: "en",
    name: "English",
    flag: USFlag,
  },
  {
    code: "it",
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
  return [language, setLanguage, languages]
}
