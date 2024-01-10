import Image from "next/image"
import AnubidigitalIcon from "@/ui/icons/Anubidigital"
import mobileDeveloperImage from "@public/images/work/md.png"
import ExperienceDescriptionContainer from "@/ui/molecules/ExperienceDescriptionContainer"

export interface Experience {
  job: string
  variant?: "darkAndBlue" | "lightAndBlue"
  date: string
  programmingLanguages: string[]
  tools: string[]
  image: () => React.ReactNode
  description: () => React.ReactNode
  fullDescription: () => React.ReactNode
}

const anubidigital: Experience = {
  job: "Fullstack Developer",
  date: "2022- today",
  programmingLanguages: ["Swift", "Kotlin", "Flutter"],
  tools: ["XCode", "Android Studio", "IntelliJ"],
  variant: "darkAndBlue",
  image: () => (
    <div className="h-[300px] items-center flex fill-white mx-auto w-full justify-center">
      <AnubidigitalIcon />
    </div>
  ),
  description: () => (
    <ExperienceDescriptionContainer
      detailed={false}
      job={anubidigital.job}
      date={anubidigital.date}
      programmingLanguages={anubidigital.programmingLanguages}
      tools={anubidigital.tools}
    />
  ),
  fullDescription: () => (
    <ExperienceDescriptionContainer
      detailed={true}
      job={anubidigital.job}
      date={anubidigital.date}
      programmingLanguages={anubidigital.programmingLanguages}
      tools={anubidigital.tools}
    />
  ),
}

const freelanceMobileDeveloper: Experience = {
  job: "Mobile Developer",
  date: "2020 - 2022",
  programmingLanguages: ["Swift", "Kotlin", "Flutter"],
  tools: ["XCode", "Android Studio", "IntelliJ"],
  variant: "lightAndBlue",
  image: () => (
    <Image
      src={mobileDeveloperImage}
      alt="Main image"
      placeholder="blur"
      loading="eager"
      priority={true}
      width={500}
      height={500}
    />
  ),
  description: () => (
    <ExperienceDescriptionContainer
      detailed={false}
      job={freelanceMobileDeveloper.job}
      date={freelanceMobileDeveloper.date}
      programmingLanguages={freelanceMobileDeveloper.programmingLanguages}
      tools={freelanceMobileDeveloper.tools}
    />
  ),
  fullDescription: () => (
    <ExperienceDescriptionContainer
      detailed={true}
      job={freelanceMobileDeveloper.job}
      date={freelanceMobileDeveloper.date}
      programmingLanguages={freelanceMobileDeveloper.programmingLanguages}
      tools={freelanceMobileDeveloper.tools}
    />
  ),
}

const experiences: Experience[] = [anubidigital, freelanceMobileDeveloper]

export default experiences
