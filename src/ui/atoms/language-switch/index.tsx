"use client"

import { SupportedLanguage } from "@/hooks/useLanguage"

interface LanguageToggleProps {
  languages: SupportedLanguage[]
  language: SupportedLanguage
  setLanguage: (language: SupportedLanguage) => void
}

const LanguageToggle = ({
  languages,
  language,
  setLanguage,
}: LanguageToggleProps) => {
  return (
    <div className="inline-flex items-center p-1 bg-black border rounded-md shadow-sm bg-opacity-20 border-primary-500">
      {languages.map((current) => (
        <button
          type="button"
          key={current.code}
          onClick={() => setLanguage(current)}
          className={`inline-flex items-center justify-center rounded-sm px-2 py-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
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
