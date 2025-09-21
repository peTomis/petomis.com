// Hooks
import { useLanguage } from "@/hooks/useLanguage"
import { useTranslations } from "@/hooks/useTranslations"

// Molecules
import LanguageToggle from "@/ui/atoms/language-switch"

const LanguageSelector = () => {
  const [language, setLanguage, languages] = useLanguage()
  const { t } = useTranslations("common")

  return (
    <LanguageToggle
      language={language}
      setLanguage={setLanguage}
      languages={languages}
    />
  )
}

export default LanguageSelector
