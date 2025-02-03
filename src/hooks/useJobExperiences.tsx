// External Libraries
import Image from "next/image"

// Hooks
import { useTranslations } from "./useTranslations"

// Images
import anubiLogo from "@public/images/anubidigital-logo.svg"
import pienissimoLogo from "@public/images/pienissimo-logo.webp"

// Molecules
import ExperienceDescriptionContainer from "@/ui/molecules/experience-description-container"

// Atoms
import Typography, { TypographyColor } from "@/ui/atoms/Typography"

// Icons
import AnubidigitalIcon from "@/ui/icons/companies/Anubidigital"
import MobileDeveloperIcon from "@/ui/icons/companies/MobileDeveloper"
import WorkExperience from "@/ui/organisms/work-experience"
import { ActivityColorText, ActivityColorVariant } from "@/utils"

export interface WorkExperience {
  job: string
  variant: ActivityColorVariant
  date: string
  programmingLanguages: string[]
  tools: string[]
  image: () => React.ReactNode
  description: () => React.ReactNode
  details: () => React.ReactNode
}

export function useJobExperiences(): WorkExperience[] {
  const { t } = useTranslations("jobs")

  const pienissimo: WorkExperience = {
    job: "Software Developer",
    date: "2024 - today",
    programmingLanguages: ["Node,js", "Angular", "Swift", "Flutter"],
    tools: ["VSCode", "XCode", "AWS"],
    variant: ActivityColorVariant.PIENISSIMO,
    image: () => (
      <div className="h-[300px] items-center flex fill-white mx-auto w-full justify-center">
        <Image
          src={pienissimoLogo}
          className="object-cover -z-10"
          alt=""
          width={200}
          height={300}
        />
      </div>
    ),
    description: () => (
      <ExperienceDescriptionContainer
        job={pienissimo.job}
        date={pienissimo.date}
        programmingLanguages={pienissimo.programmingLanguages}
        tools={pienissimo.tools}
        variant={pienissimo.variant}
      />
    ),
    details: () => (
      <WorkExperience
        variant={pienissimo.variant}
        title={
          <div
            className="h-[260px] items-center flex mx-auto w-full justify-center cursor-pointer"
            onClick={() => window.open(process.env.PIENISSIMO, "_blank")}
          >
            <div className="flex lg:hidden">
              <Image
                src={pienissimoLogo}
                className="object-cover"
                alt=""
                width={200}
                height={300}
              />
            </div>
            <div className="hidden lg:flex">
              <Image
                src={pienissimoLogo}
                className="object-cover"
                alt=""
                width={400}
                height={300}
              />
            </div>
          </div>
        }
        tasks={[]}
        sentences={[
          t("pienissimo.sentences.first"),
          t("pienissimo.sentences.second"),
        ]}
        tools={[
          {
            list: t("pienissimo.tools.other.list"),
          },
          {
            category: t("pienissimo.tools.backend.title") ?? "",
            list: t("pienissimo.tools.backend.list"),
          },
          {
            category: t("pienissimo.tools.frontend-mobile.title") ?? "",
            list: t("pienissimo.tools.frontend-mobile.list"),
          },
        ]}
      />
    ),
  }

  const anubidigital: WorkExperience = {
    job: "Fullstack Developer",
    date: "2022 - 2024",
    programmingLanguages: ["Node,js", "React"],
    tools: ["VSCode", "AWS"],
    variant: ActivityColorVariant.ANUBIDIGITAL,
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
        variant={anubidigital.variant}
      />
    ),
    details: () => (
      <WorkExperience
        variant={anubidigital.variant}
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
          },
          {
            title: t("anubidigital.tasks.onboarding.title"),
            description: t("anubidigital.tasks.onboarding.description"),
          },
          {
            title: t("anubidigital.tasks.datawarehouse.title"),
            description: t("anubidigital.tasks.datawarehouse.description"),
          },
          {
            title: t("anubidigital.tasks.backoffice.title"),
            description: t("anubidigital.tasks.backoffice.description"),
          },
          {
            title: t("anubidigital.tasks.rnd.title"),
            description: t("anubidigital.tasks.rnd.description"),
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
    variant: ActivityColorVariant.MOBILE,
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
        variant={freelanceMobileDeveloper.variant}
        title={
          <div className="h-[260px] items-center flex flex-col mx-auto w-full justify-center">
            <div>
              <MobileDeveloperIcon />
            </div>
            <div>
              <Typography
                text={t("mobile.title")}
                color={ActivityColorText[freelanceMobileDeveloper.variant]}
                size="h4"
                xl="h1"
              />
            </div>
          </div>
        }
        tasks={[
          {
            title: t("mobile.tasks.management.title"),
            description: t("mobile.tasks.management.description"),
          },
          {
            title: t("mobile.tasks.design.title"),
            description: t("mobile.tasks.design.description"),
          },
          {
            title: t("mobile.tasks.integration.title"),
            description: t("mobile.tasks.integration.description"),
          },
          {
            title: t("mobile.tasks.implementation.title"),
            description: t("mobile.tasks.implementation.description"),
          },
        ]}
        sentences={[t("mobile.sentences.first"), t("mobile.sentences.second")]}
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

  return [pienissimo, anubidigital, freelanceMobileDeveloper]
}
