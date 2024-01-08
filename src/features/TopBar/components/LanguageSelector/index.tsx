import { useLanguage, Language } from "@/hooks/useLanguage"
import ItalyFlag from "@/ui/icons/ItalyFlag"
import USFlag from "@/ui/icons/USFlag"
import { useState } from "react"

const DivWithBorder = ({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) => {
  return (
    <div
      className="cursor-pointer border-[3px] rounded-full border-defaultTextColor dark:border-defaultTextColor-dark w-9 h-9"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

const LanguageSelector = () => {
  const [language, setLanguage, toggle, setToggle] = useLanguage()
  return (
    <div className="relative">
      <DivWithBorder
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        <div className={toggle ? " grayscale opacity-50" : ""}>
          {language === Language.IT && <ItalyFlag />}
          {language === Language.EN && <USFlag />}
        </div>
      </DivWithBorder>
      {toggle && (
        <>
          <div className="absolute left-0 flex flex-col space-y-2 top-12 ">
            <DivWithBorder
              onClick={() => {
                setLanguage(Language.EN)
                setToggle(!toggle)
              }}
            >
              <USFlag />
            </DivWithBorder>
            <DivWithBorder
              onClick={() => {
                setLanguage(Language.IT)
                setToggle(!toggle)
              }}
            >
              <ItalyFlag />
            </DivWithBorder>
          </div>
          <div className="fixed top-0 left-0 w-screen h-screen bg-[#ffffff] dark:bg-background-dark -z-20 opacity-80 lg:hidden" />
        </>
      )}
    </div>
  )
}

export default LanguageSelector
