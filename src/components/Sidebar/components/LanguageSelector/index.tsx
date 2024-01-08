import { useLanguage } from "@/hooks/useLanguage"
import RoundedButton from "@/ui/atoms/RoundedButton"
import ArrowIcon from "@/ui/icons/Arrow"
import USFlag from "@/ui/icons/USFlag"
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
    <div className="relative flex flex-col space-y-2">
      <LanguageSelectorItem
        flag={language.flag()}
        label={language.name}
        onClick={() => {
          console.log("ciao")
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
                flag={language.flag()}
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
