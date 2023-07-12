import Welcome from "@/features/home/Welcome"
import ButtonContact from "@/ui/molecules/ButtonContact"
import { useTranslations } from "@modules/translations/use"
import style from "./style.module.css"
import AboutMe from "@/features/home/AboutMe"
import Quality from "@/features/home/Quality"
import Stack from "@/features/home/Stack"
import Experience from "@/features/home/Experience"
import Contact from "@/features/home/Contact"

const HomeContainer = () => {
  const { t } = useTranslations("home")
  return (
    <div className={style.container}>
      <Welcome />
      <AboutMe />
      <Experience />
      <Stack />
      <Quality />
      <Contact />
      <ButtonContact onClick={() => {}} />
    </div>
  )
}

export default HomeContainer
