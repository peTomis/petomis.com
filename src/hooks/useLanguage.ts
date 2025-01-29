"use client"

// External libraries
import React from "react"

// Hooks
import { useTranslations } from "./useTranslations"
import { useLocalStorage } from "./useLocalStorage"
import { useRouter } from "next/router"

// Type definition for supported languages
export type SupportedLanguage = {
  code: string
  name: string
}

// Array of supported languages
const languages: SupportedLanguage[] = [
  {
    code: "en-US",
    name: "🇬🇧 EN",
  },
  {
    code: "it-IT",
    name: "🇮🇹 IT",
  },
]

/**
 * Custom hook to manage the application's language state.
 *
 * This hook reads the initial language setting from local storage or defaults to English.
 * It provides functionality to change the language, which updates the local storage,
 * Next.js router locale, and internal state to reflect the new language choice.
 *
 * @returns A tuple containing the current language, a setter function for the language,
 *          and the list of supported languages.
 */
export function useLanguage(): [
  SupportedLanguage,
  React.Dispatch<React.SetStateAction<SupportedLanguage>>,
  SupportedLanguage[]
] {
  const [storageValue, setStorageValue] = useLocalStorage("lang", "en-US")
  const router = useRouter()

  // Find the language object that matches the stored or default language code
  const l = languages.find((l) => l.code === storageValue)

  // If the stored language is not found in the supported languages list, reset to default
  if (!l) {
    setStorageValue("en-US")
    languages[0]
  }

  // State to keep track of the current language selection
  const [language, setLanguage] = React.useState<SupportedLanguage>(
    l ?? languages[0]
  )

  // Use translations hook for i18n functionality
  const { i18n } = useTranslations("common")

  // Effect hook to update the locale in Next.js router and i18n when language changes
  React.useEffect(() => {
    router.push(router.pathname, router.asPath, { locale: language.code })
    i18n.changeLanguage(language.code)
    setStorageValue(language.code)
  }, [language])

  // Return the current language, the setter function, and the list of supported languages
  return [language, setLanguage, languages]
}
