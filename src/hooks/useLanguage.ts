import { Dispatch, SetStateAction, useState } from "react"

export enum Language {
  IT = "it",
  EN = "en",
}

export function useLanguage(): [
  Language,
  Dispatch<SetStateAction<Language>>,
  boolean,
  Dispatch<SetStateAction<boolean>>
] {
  const [language, setLanguage] = useState<Language>(Language.EN)
  const [toggle, setToggle] = useState<boolean>(false)

  return [language, setLanguage, toggle, setToggle]
}
