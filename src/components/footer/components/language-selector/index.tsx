// Hooks
import { useLanguage } from "@/hooks/useLanguage"

// Molecules
import LanguageToggle from "@/ui/atoms/language-switch"

const LanguageSelector = () => {
  const [language, setLanguage, languages] = useLanguage()

  return (
    <LanguageToggle
      language={language}
      setLanguage={setLanguage}
      languages={languages}
    />
  )
}

export default LanguageSelector
