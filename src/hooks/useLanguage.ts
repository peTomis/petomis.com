"use client"

// External libraries
import { useRouter } from "next/router"
import { useCallback, useEffect, useRef } from "react"

// Hooks
import { useLocalStorage } from "./useLocalStorage"

// Type definition for supported languages
export type SupportedLanguage = {
  code: string
  flag: string
  /** Language name in its own language ("English", "Italiano"). */
  name: string
}

// Array of supported languages
const languages: SupportedLanguage[] = [
  {
    code: "en-US",
    flag: "🇬🇧",
    name: "English",
  },
  {
    code: "it-IT",
    flag: "🇮🇹",
    name: "Italiano",
  },
]

/** Restore the saved preference once; thereafter the route owns the locale. */
export function useLanguage(): [
  SupportedLanguage,
  (_nextLanguage: SupportedLanguage) => void,
  SupportedLanguage[],
] {
  const [storageValue, setStorageValue] = useLocalStorage("lang", "en-US")
  const router = useRouter()
  const restored = useRef(false)
  const language = languages.find((item) => item.code === router.locale) ?? languages[0]

  useEffect(() => {
    if (!router.isReady || restored.current) return
    restored.current = true

    const saved = languages.find((item) => item.code === storageValue)
    // An explicit Italian URL wins over storage. An unprefixed entry restores
    // the visitor's choice without changing the server-rendered initial state.
    if (router.locale === router.defaultLocale && saved && saved.code !== router.locale) {
      void router.replace(router.pathname, router.asPath, {
        scroll: false,
        locale: saved.code,
      }).catch((error: unknown) => console.error("Could not restore language", error))
    } else {
      setStorageValue(language.code)
    }
  }, [router, storageValue, setStorageValue, language.code])

  const handleSetLanguage = useCallback((nextLanguage: SupportedLanguage) => {
    if (!languages.some((item) => item.code === nextLanguage.code)) return
    // Persist only after successful navigation; failed navigation must not
    // leave the picker, translated content and URL in different languages.
    void router.replace(router.pathname, router.asPath, {
      scroll: false,
      locale: nextLanguage.code,
    }).then((changed) => {
      if (changed) setStorageValue(nextLanguage.code)
    }).catch((error: unknown) => console.error("Could not change language", error))
  }, [router, setStorageValue])

  return [language, handleSetLanguage, languages]
}
