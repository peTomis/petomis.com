"use client"

// External libraries
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"

// Hooks
import { useTranslations } from "./useTranslations"
import { useLocalStorage } from "./useLocalStorage"

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
  (nextLanguage: SupportedLanguage) => void,
  SupportedLanguage[],
] {
  const [storageValue, setStorageValue] = useLocalStorage("lang", "en-US")
  const router = useRouter()

  const fallbackLanguage = languages[0]
  const routeLanguage = languages.find((lang) => lang.code === router.locale)
  const storedLanguage = languages.find((lang) => lang.code === storageValue)

  // State to keep track of the current language selection
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    return routeLanguage ?? storedLanguage ?? fallbackLanguage
  })

  // Use translations hook for i18n functionality
  const { i18n } = useTranslations("common")

  // Ensure an invalid stored value is corrected outside render.
  useEffect(() => {
    if (!storedLanguage) {
      setStorageValue(fallbackLanguage.code)
    }
  }, [storedLanguage, fallbackLanguage.code, setStorageValue])

  // Sync i18n and storage when language changes. Route navigation only happens for user actions.
  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (i18n.language !== language.code) {
      i18n.changeLanguage(language.code)
    }

    if (storageValue !== language.code) {
      setStorageValue(language.code)
    }

    if (router.locale !== language.code) {
      void router.replace(router.pathname, router.asPath, {
        scroll: false,
        locale: language.code,
      })
    }
  }, [
    i18n,
    language.code,
    router,
    router.isReady,
    router.locale,
    storageValue,
    setStorageValue,
  ])

  const handleSetLanguage = useCallback((nextLanguage: SupportedLanguage) => {
    setLanguageState(nextLanguage)
  }, [])

  // Return the current language, the setter function, and the list of supported languages
  return [language, handleSetLanguage, languages]
}
