import Welcome from "@/features/home/Welcome"
import ButtonContact from "@/ui/molecules/ButtonContact"
import style from "./style.module.css"
import AboutMe from "@/features/home/AboutMe"
import Quality from "@/features/home/Quality"
import Stack from "@/features/home/Stack"
import Experience from "@/features/home/Experience"
import Contact from "@/features/home/Contact"
import TopBar from "@/features/TopBar"
import { useEffect, useState } from "react"

const HomeContainer = () => {
  const [buttonVisible, setButtonVisible] = useState(true)
  const scrollToSelectedDiv = (id: string) => {
    if (id === `home`) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    if (id === `contact`) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      })
      return
    }

    const selectedDiv = document.getElementById(id)
    if (selectedDiv) selectedDiv.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
    const handleScroll = () => {
      const targetDiv = document.getElementById("contactContainer")
      if (!targetDiv) return
      const targetDivPosition = targetDiv.getBoundingClientRect()
      const screenHeight = window.innerHeight

      if (targetDivPosition.top <= screenHeight) {
        setButtonVisible(false)
      } else {
        setButtonVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    console.log(buttonVisible)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <TopBar onClick={scrollToSelectedDiv} />
      <div className={style.container}>
        <Welcome />
        <AboutMe />
        <Experience id="experience" />
        <Stack />
        <Quality />
        <Contact />
        {buttonVisible && (
          <ButtonContact
            onClick={() => {
              scrollToSelectedDiv(`contact`)
            }}
          />
        )}
      </div>
    </>
  )
}

export default HomeContainer
