import { useTranslations } from "@/modules/translations/use"
import { useEffect, useState } from "react"
import RedirectIcon from "@/ui/icons/Redirect"
import ActivityCard from "@/ui/molecules/ActivityCard"
import AnubidigitalIcon from "@/ui/icons/Anubidigital"
import mobileDeveloperImage from "@public/images/work/md.png"
import Image from "next/image"

interface Props {
  id: string
}

const startDate = new Date("2022-03-01")

const Work = ({ id }: Props) => {
  const [daysPassed, setDaysPassed] = useState(0)

  const openAnubiHomepage = () => window.open(process.env.ANUBI, "_blank")

  useEffect(() => {
    const today = new Date()
    const timeDiff = Math.abs(today.getTime() - startDate.getTime())
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24))

    setDaysPassed(days)
  }, [])

  const { t } = useTranslations("home")

  return (
    <div className="flex flex-col w-full py-8 mx-auto" id={id}>
      <div className="flex mx-auto font-extrabold text-center text-h2 font-bacasimeAntique text-primary-300">
        {t("experience.title")}
      </div>
      <div className="grid gap-4 p-4 mx-auto md:grid-cols-2">
        <ActivityCard
          imageBackgroundColor="black"
          textBackgroundColor="primary-300"
          days={daysPassed.toString()}
          onClick={openAnubiHomepage}
          daysTextColor="white"
          image={
            <div className="h-[300px] items-center flex fill-white mx-auto w-full justify-center">
              <AnubidigitalIcon />
            </div>
          }
          description={
            <div className="flex flex-col space-y-2 text-defaultTextColor-dark font-roboto">
              <div className="text-h4">Fullstack Developer</div>
              <div className="font-light text-h5">2022- today</div>
              <div>
                <div>Programming Languages</div>
                <div className="font-extralight">Swift, Kotlin, Flutter</div>
              </div>

              <div>
                <div>Tools</div>
                <div className="font-extralight">
                  XCode, Android Studio, IntelliJ
                </div>
              </div>
            </div>
          }
        ></ActivityCard>
        <ActivityCard
          imageBackgroundColor="[#d8f3ff]"
          textBackgroundColor="primary-400"
          image={
            <Image
              src={mobileDeveloperImage}
              alt="Main image"
              placeholder="blur"
              loading="eager"
              priority={true}
              width={500}
              height={500}
            />
          }
          description={
            <div className="flex flex-col space-y-2 text-defaultTextColor-dark font-roboto">
              <div className="text-h4">Mobile Developer</div>
              <div className="font-light text-h5">2020-2022</div>
              <div>
                <div>Programming Languages</div>
                <div className="font-extralight">Swift, Kotlin, Flutter</div>
              </div>

              <div>
                <div>Tools</div>
                <div className="font-extralight">
                  XCode, Android Studio, IntelliJ
                </div>
              </div>
            </div>
          }
        ></ActivityCard>
      </div>
    </div>
  )
}

export default Work
