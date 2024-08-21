// Hooks
import { useTranslations } from "./useTranslations"
import Image from "next/image"

// Organisms
import WorkExperience from "@/ui/organisms/WorkExperience"

// Molecules
import ExperienceDescriptionContainer from "@/ui/molecules/ExperienceDescriptionContainer"

// Atoms
import Typography, { TypographyColor } from "@/ui/atoms/Typography"

// Icons
import MobileDeveloperIcon from "@/ui/icons/companies/MobileDeveloper"

export interface WorkExperience {
  job: string
  variant?: "darkAndBlue" | "lightAndBlue" | "anubidigital" | "pienissimo"
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

  const pienissimo: WorkExperience = {
    job: "Software Developer",
    date: "2024 - today",
    programmingLanguages: ["Node,js", "Angular", "Swift"],
    tools: ["VSCode", "XCode", "AWS"],
    variant: "pienissimo",
    color: "defaultTextColor",
    mainColor: "pienissimo",
    image: () => (
      <div className="h-[300px] items-center flex fill-white mx-auto w-full justify-center">
        <Image
          src={
            "https://www.pienissimo.com/wp-content/uploads/2019/08/pienissimo-black-con-payoff.png"
          }
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
      />
    ),
    details: () => (
      <WorkExperience
        mainColor={pienissimo.mainColor}
        color={pienissimo.color}
        title={
          <div
            className="h-[260px] items-center flex mx-auto w-full justify-center cursor-pointer"
            onClick={() => window.open(process.env.PIENISSIMO, "_blank")}
          >
            <div className="flex lg:hidden">
              <Image
                src={
                  "https://www.pienissimo.com/wp-content/uploads/2019/08/pienissimo-black-con-payoff.png"
                }
                className="object-cover -z-10"
                alt=""
                width={400}
                height={80}
              />
            </div>
            <div className="hidden lg:flex">
              <Image
                src={
                  "https://www.pienissimo.com/wp-content/uploads/2019/08/pienissimo-black-con-payoff.png"
                }
                className="object-cover -z-10"
                alt=""
                width={400}
                height={100}
              />
            </div>
          </div>
        }
        tasks={
          [
            // {
            //   title: t("pienissimo.tasks.project.title"),
            //   description: t("pienissimo.tasks.project.description"),
            //   titleColor: pienissimo.mainColor,
            //   textColor: pienissimo.color,
            // },
            // {
            //   title: t("pienissimo.tasks.onboarding.title"),
            //   description: t("pienissimo.tasks.onboarding.description"),
            //   titleColor: pienissimo.mainColor,
            //   textColor: pienissimo.color,
            // },
            // {
            //   title: t("pienissimo.tasks.datawarehouse.title"),
            //   description: t("pienissimo.tasks.datawarehouse.description"),
            //   titleColor: pienissimo.mainColor,
            //   textColor: pienissimo.color,
            // },
            // {
            //   title: t("pienissimo.tasks.backoffice.title"),
            //   description: t("pienissimo.tasks.backoffice.description"),
            //   titleColor: pienissimo.mainColor,
            //   textColor: pienissimo.color,
            // },
            // {
            //   title: t("pienissimo.tasks.rnd.title"),
            //   description: t("pienissimo.tasks.rnd.description"),
            //   titleColor: pienissimo.mainColor,
            //   textColor: pienissimo.color,
            // },
          ]
        }
        sentences={[
          t("pienissimo.sentences.first"),
          // t("pienissimo.sentences.second"),
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
            category: t("pienissimo.tools.frontend.title") ?? "",
            list: t("pienissimo.tools.frontend.list"),
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
    variant: "anubidigital",
    color: "defaultTextColor-dark",
    mainColor: "anubidigital",
    image: () => (
      <div className="h-[300px] items-center flex fill-white mx-auto w-full justify-center">
        <Image
          src={
            "https://images.squarespace-cdn.com/content/v1/6660826e20032a00cf58cccd/903a11ac-ec8f-444b-86a7-981c582299d2/Anubi+Digital+Logo+White.png"
          }
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
              <Image
                src={
                  "https://images.squarespace-cdn.com/content/v1/6660826e20032a00cf58cccd/903a11ac-ec8f-444b-86a7-981c582299d2/Anubi+Digital+Logo+White.png"
                }
                className="object-cover -z-10"
                alt=""
                width={400}
                height={80}
              />
            </div>
            <div className="hidden lg:flex">
              <Image
                src={
                  "https://images.squarespace-cdn.com/content/v1/6660826e20032a00cf58cccd/903a11ac-ec8f-444b-86a7-981c582299d2/Anubi+Digital+Logo+White.png"
                }
                className="object-cover -z-10"
                alt=""
                width={400}
                height={100}
              />
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

  return [pienissimo, anubidigital, freelanceMobileDeveloper]
}
