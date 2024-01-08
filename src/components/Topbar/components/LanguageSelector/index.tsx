import { useLanguage } from "@/hooks/useLanguage"
import RoundedButton from "@/ui/atoms/RoundedButton"
import LanguageSelectorItem from "@/ui/molecules/LanguageSelectorItem"
import LanguageSelectorList from "@/ui/molecules/LanguageSelectorList"
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
    <div className="relative">
      <RoundedButton
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        <div className={toggle ? " grayscale opacity-50" : ""}>
          {language.flag()}
        </div>
      </RoundedButton>
      {toggle && (
        <>
          <LanguageSelectorList>
            {languages.map((language, key) => {
              return (
                <LanguageSelectorItem
                  key={key}
                  flag={language.flag()}
                  label={language.name}
                  onClick={() => {
                    setLanguage(language)
                    setToggle(!toggle)
                  }}
                />
              )
            })}
          </LanguageSelectorList>
        </>
      )}
    </div>
  )
}

export default LanguageSelector
