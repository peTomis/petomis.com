// External libraries
import React from "react"

// Hooks
import { useLanguage } from "@/hooks/useLanguage"
import { useTranslations } from "@/hooks/useTranslations"

// Molecules
import LanguageToggle from "@/ui/atoms/language-switch"
import Typography from "@/ui/atoms/Typography"

const LanguageSelector = () => {
  const [language, setLanguage, languages] = useLanguage()
  const { t } = useTranslations("common")

  return (
    <div className="flex items-center justify-between">
      <Typography text={t("sidebar.language")} />
      <LanguageToggle
        language={language}
        setLanguage={setLanguage}
        languages={languages}
      />
    </div>
  )
}

export default LanguageSelector
