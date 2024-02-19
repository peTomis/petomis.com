// Molecules
import ExperienceDescriptionContainer from "@/ui/molecules/ExperienceDescriptionContainer"

// Atoms
import { TypographyColor } from "@/ui/atoms/Typography"

// Icons
import AnubidigitalIcon from "@/ui/icons/companies/Anubidigital"
import MobileDeveloperIcon from "@/ui/icons/companies/MobileDeveloper"

export interface WorkExperience {
  job: string
  variant?: "darkAndBlue" | "lightAndBlue"
  date: string
  programmingLanguages: string[]
  tools: string[]
  image: () => React.ReactNode
  description: () => React.ReactNode
  color?: TypographyColor
}

const anubidigital: WorkExperience = {
  job: "Fullstack Developer",
  date: "2022- today",
  programmingLanguages: ["Swift", "Kotlin", "Flutter"],
  tools: ["XCode", "Android Studio", "IntelliJ"],
  variant: "darkAndBlue",
  color: "defaultTextColor-dark",
  image: () => (
    <div className="h-[300px] items-center flex fill-white mx-auto w-full justify-center">
      <AnubidigitalIcon />
    </div>
  ),
  description: () => (
    <ExperienceDescriptionContainer
      job={anubidigital.job}
      date={anubidigital.date}
      programmingLanguages={anubidigital.programmingLanguages}
      tools={anubidigital.tools}
      color={anubidigital.color}
    />
  ),
}

const freelanceMobileDeveloper: WorkExperience = {
  job: "Mobile Developer",
  date: "2020 - 2022",
  programmingLanguages: ["Swift", "Kotlin", "Flutter"],
  tools: ["XCode", "Android Studio", "IntelliJ"],
  variant: "lightAndBlue",
  image: () => (
    <div className="h-[300px] items-center flex fill-defaultTextColor mx-auto w-full justify-center">
      <MobileDeveloperIcon />
    </div>
  ),
  description: () => (
    <ExperienceDescriptionContainer
      job={freelanceMobileDeveloper.job}
      date={freelanceMobileDeveloper.date}
      programmingLanguages={freelanceMobileDeveloper.programmingLanguages}
      tools={freelanceMobileDeveloper.tools}
    />
  ),
}

const experiences: WorkExperience[] = [anubidigital, freelanceMobileDeveloper]

export default experiences
