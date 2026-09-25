"use client"

import { SupportedLanguage } from "@/hooks/useLanguage"
import { cn } from "@/utils/cn"

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
    <div className="inline-flex items-center gap-0.5 p-1 rounded-full glass">
      {languages.map((current) => {
        const isActive = current.code === language.code
        return (
          <button
            type="button"
            key={current.code}
            onClick={() => setLanguage(current)}
            aria-pressed={isActive}
            className={cn(
              "inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full font-manrope text-[13px] transition-colors duration-[250ms]",
              isActive
                ? "glass-accent text-electric-ink font-semibold"
                : "border border-transparent text-ink-muted hover:text-ink hover:bg-white/[.06]"
            )}
          >
            {current.name}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageToggle
