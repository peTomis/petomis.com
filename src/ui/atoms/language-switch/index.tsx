"use client"

import { SupportedLanguage } from "@/hooks/useLanguage"

interface LanguageToggleProps {
  languages: SupportedLanguage[]
  language: SupportedLanguage
  setLanguage: any
}

const LanguageToggle = ({
  languages,
  language,
  setLanguage,
}: LanguageToggleProps) => {
  return (
    <div
      className="inline-flex items-center p-1 bg-black bg-opacity-50 border rounded-md shadow-sm border-primary-400"
      onClick={() => {
        setLanguage(
          languages.find((current) => current.code !== language.code) ||
            language
        )
      }}
    >
      {languages.map((current) => (
        <button
          key={current.code}
          className={`inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
            current.code === language.code
              ? "bg-primary-400 text-primary-foreground shadow"
              : "text-muted-foreground hover:bg-muted"
          }`}
        >
          {current.name}
        </button>
      ))}
    </div>
  )
}

export default LanguageToggle
