// Hooks
import { useTranslations } from "./useTranslations"
import Image from "next/image"
import anubiLogo from "@public/images/anubidigital-logo.svg"
// Molecules
import ExperienceDescriptionContainer from "@/ui/molecules/ExperienceDescriptionContainer"

// Atoms
import Typography, { TypographyColor } from "@/ui/atoms/Typography"

// Icons
import AnubidigitalIcon from "@/ui/icons/companies/Anubidigital"
import MobileDeveloperIcon from "@/ui/icons/companies/MobileDeveloper"
import WorkExperience from "@/ui/organisms/WorkExperience"

export interface WorkExperience {
  job: string
  variant?: "darkAndBlue" | "lightAndBlue" | "anubidigital"
  date: string
  programmingLanguages: string[]
  tools: string[]
  image: () => React.ReactNode
  description: () => React.ReactNode
  details: () => React.ReactNode
  color: TypographyColor
  mainColor: TypographyColor
}

export function useJobExperiences(): WorkExperience[] {
  const { t } = useTranslations("jobs")

  const next: WorkExperience = {
    job: "Fullstack Developer",
    date: "2024 - today",
    programmingLanguages: ["Typescript", "Node,js", "React"],
    tools: ["VSCode", "AWS"],
    variant: "anubidigital",
    color: "defaultTextColor-dark",
    mainColor: "anubidigital",
    image: () => (
      <div className="h-[300px] items-center flex fill-white mx-auto w-full justify-center">
        {/* <Image
          src={anubiLogo}
          className="object-cover -z-10"
          alt=""
          width={200}
          height={300}
        /> */}
        SOON
      </div>
    ),
    description: () => (
      <ExperienceDescriptionContainer
        job={next.job}
        date={next.date}
        programmingLanguages={next.programmingLanguages}
        tools={next.tools}
        color={next.color}
      />
    ),
    details: () => (
      <WorkExperience
        mainColor={next.mainColor}
        color={next.color}
        title={
          <div
            className="h-[260px] items-center flex mx-auto w-full justify-center cursor-pointer"
            onClick={() => window.open(process.env.NEXT, "_blank")}
          >
            <div className="flex lg:hidden">NEXT</div>
            <div className="hidden lg:flex">NEXT</div>
          </div>
        }
        tasks={[
          {
            title: t("next.tasks.project.title"),
            description: t("next.tasks.project.description"),
            titleColor: next.mainColor,
            textColor: next.color,
          },
          {
            title: t("next.tasks.onboarding.title"),
            description: t("next.tasks.onboarding.description"),
            titleColor: next.mainColor,
            textColor: next.color,
          },
          {
            title: t("next.tasks.datawarehouse.title"),
            description: t("next.tasks.datawarehouse.description"),
            titleColor: next.mainColor,
            textColor: next.color,
          },
          {
            title: t("next.tasks.backoffice.title"),
            description: t("next.tasks.backoffice.description"),
            titleColor: next.mainColor,
            textColor: next.color,
          },
          {
            title: t("next.tasks.rnd.title"),
            description: t("next.tasks.rnd.description"),
            titleColor: next.mainColor,
            textColor: next.color,
          },
        ]}
        sentences={[t("next.sentences.first"), t("next.sentences.second")]}
        tools={[
          {
            list: t("next.tools.other.list"),
          },
          {
            category: t("next.tools.backend.title") ?? "",
            list: t("next.tools.backend.list"),
          },
          {
            category: t("next.tools.frontend.title") ?? "",
            list: t("next.tools.frontend.list"),
          },
        ]}
      />
    ),
  }

  const anubidigital: WorkExperience = {
    job: "Fullstack Developer",
    date: "2022 - 2024",
    programmingLanguages: ["Typescript", "Node,js", "React"],
    tools: ["VSCode", "AWS"],
    variant: "anubidigital",
    color: "defaultTextColor-dark",
    mainColor: "anubidigital",
    image: () => (
      <div className="h-[300px] items-center flex fill-white mx-auto w-full justify-center">
        <Image
          src={anubiLogo}
          className="object-cover -z-10"
          alt=""
          width={200}
          height={300}
        />
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
    details: () => (
      <WorkExperience
        mainColor={anubidigital.mainColor}
        color={anubidigital.color}
        title={
          <div
            className="h-[260px] items-center flex mx-auto w-full justify-center cursor-pointer"
            onClick={() => window.open(process.env.ANUBI, "_blank")}
          >
            <div className="flex lg:hidden">
              <AnubidigitalIcon height={80} />
            </div>
            <div className="hidden lg:flex">
              <AnubidigitalIcon height={100} />
            </div>
          </div>
        }
        tasks={[
          {
            title: t("anubidigital.tasks.project.title"),
            description: t("anubidigital.tasks.project.description"),
            titleColor: anubidigital.mainColor,
            textColor: anubidigital.color,
          },
          {
            title: t("anubidigital.tasks.onboarding.title"),
            description: t("anubidigital.tasks.onboarding.description"),
            titleColor: anubidigital.mainColor,
            textColor: anubidigital.color,
          },
          {
            title: t("anubidigital.tasks.datawarehouse.title"),
            description: t("anubidigital.tasks.datawarehouse.description"),
            titleColor: anubidigital.mainColor,
            textColor: anubidigital.color,
          },
          {
            title: t("anubidigital.tasks.backoffice.title"),
            description: t("anubidigital.tasks.backoffice.description"),
            titleColor: anubidigital.mainColor,
            textColor: anubidigital.color,
          },
          {
            title: t("anubidigital.tasks.rnd.title"),
            description: t("anubidigital.tasks.rnd.description"),
            titleColor: anubidigital.mainColor,
            textColor: anubidigital.color,
          },
        ]}
        sentences={[
          t("anubidigital.sentences.first"),
          t("anubidigital.sentences.second"),
        ]}
        tools={[
          {
            list: t("anubidigital.tools.other.list"),
          },
          {
            category: t("anubidigital.tools.backend.title") ?? "",
            list: t("anubidigital.tools.backend.list"),
          },
          {
            category: t("anubidigital.tools.frontend.title") ?? "",
            list: t("anubidigital.tools.frontend.list"),
          },
        ]}
      />
    ),
  }

  const freelanceMobileDeveloper: WorkExperience = {
    job: "Mobile Developer",
    date: "2020 - 2022",
    programmingLanguages: ["Swift", "Kotlin", "Flutter"],
    tools: ["XCode", "Android Studio", "IntelliJ"],
    variant: "lightAndBlue",
    color: "defaultTextColor",
    mainColor: "primary-300",
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
    details: () => (
      <WorkExperience
        title={
          <div className="h-[260px] items-center flex flex-col fill-defaultTextColor mx-auto w-full justify-center">
            <div>
              <MobileDeveloperIcon />
            </div>
            <div>
              <Typography
                text={t("mobile.title")}
                size="h4"
                xl="h1"
                color={freelanceMobileDeveloper.color}
                darkColor={freelanceMobileDeveloper.color}
              />
            </div>
          </div>
        }
        tasks={[
          {
            title: t("mobile.tasks.management.title"),
            description: t("mobile.tasks.management.description"),
            titleColor: freelanceMobileDeveloper.mainColor,
            textColor: freelanceMobileDeveloper.color,
          },
          {
            title: t("mobile.tasks.design.title"),
            description: t("mobile.tasks.design.description"),
            titleColor: freelanceMobileDeveloper.mainColor,
            textColor: freelanceMobileDeveloper.color,
          },
          {
            title: t("mobile.tasks.integration.title"),
            description: t("mobile.tasks.integration.description"),
            titleColor: freelanceMobileDeveloper.mainColor,
            textColor: freelanceMobileDeveloper.color,
          },
          {
            title: t("mobile.tasks.implementation.title"),
            description: t("mobile.tasks.implementation.description"),
            titleColor: freelanceMobileDeveloper.mainColor,
            textColor: freelanceMobileDeveloper.color,
          },
        ]}
        sentences={[t("mobile.sentences.first"), t("mobile.sentences.second")]}
        mainColor={freelanceMobileDeveloper.mainColor}
        color={freelanceMobileDeveloper.color}
        tools={[
          {
            list: t("mobile.tools.cross.list"),
          },
          {
            category: t("mobile.tools.android.title") ?? "",
            list: t("mobile.tools.android.list"),
          },
          {
            category: t("mobile.tools.ios.title") ?? "",
            list: t("mobile.tools.ios.list"),
          },
        ]}
      />
    ),
  }

  return [next, anubidigital, freelanceMobileDeveloper]
}
