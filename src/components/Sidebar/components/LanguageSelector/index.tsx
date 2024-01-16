import { useLanguage } from "@/hooks/useLanguage"
import LanguageSelectorItem from "@/ui/molecules/LanguageSelectorItem"
import { useState, useEffect } from "react"

const LanguageSelector = () => {
  const [language, setLanguage, languages] = useLanguage()
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setToggle(false)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="relative flex flex-col space-y-2">
      <LanguageSelectorItem
        label={language.name}
        onClick={() => {
          setToggle(!toggle)
        }}
        main={true}
      />
      {toggle && (
        <>
          {languages.map((language, key) => {
            return (
              <LanguageSelectorItem
                key={key}
                label={language.name}
                main={false}
                onClick={() => {
                  setLanguage(language)
                  setToggle(!toggle)
                }}
              />
            )
          })}
        </>
      )}
    </div>
  )
}

export default LanguageSelector
