import AnubidigitalIcon from "@/ui/icons/companies/Anubidigital"
import ExperienceDescriptionContainer from "@/ui/molecules/ExperienceDescriptionContainer"
import BorderedDiv from "@/ui/atoms/BorderedDiv"
import MobileDeveloperIcon from "@/ui/icons/companies/MobileDeveloper"

export interface Experience {
  job: string
  variant?: "darkAndBlue" | "lightAndBlue"
  date: string
  programmingLanguages: string[]
  tools: string[]
  image: () => React.ReactNode
  description: () => React.ReactNode
  fullDescription: () => React.ReactNode
  techGraph: () => React.ReactNode
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
  techGraph: () => (
    <div className="flex items-center justify-center w-full space-x-4">
      <BorderedDiv label="FRONTEND">
        <div className="bg-red-500">Test</div>
        <div className="bg-red-500">Test</div>
        <div className="bg-red-500">Test</div>
        <BorderedDiv label="CIAO">
          <div className="bg-red-500">Test</div>
          <div className="bg-red-500">Test</div>
          <div className="bg-red-500">Test</div>
          <div className="bg-red-500">Test</div>
        </BorderedDiv>
      </BorderedDiv>
      <BorderedDiv label="BACKEND">
        <div className="bg-red-500">Test</div>
        <div className="bg-red-500">Test</div>
        <div className="bg-red-500">Test</div>
        <BorderedDiv label="CIAO">
          <div className="bg-red-500">Test</div>
          <div className="bg-red-500">Test</div>
          <div className="bg-red-500">Test</div>
          <div className="bg-red-500">Test</div>
        </BorderedDiv>
      </BorderedDiv>
    </div>
  ),
  fullDescription: () => (
    <ExperienceDescriptionContainer
      detailed={true}
      job={anubidigital.job}
      date={anubidigital.date}
      programmingLanguages={anubidigital.programmingLanguages}
      tools={anubidigital.tools}
      techGraph={anubidigital.techGraph()}
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
    <div className="h-[300px] items-center flex fill-defaultTextColor mx-auto w-full justify-center">
      <MobileDeveloperIcon />
    </div>
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
  techGraph: () => <></>,
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
