// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Molecules
import SectionHeader from "@/ui/molecules/section-header"

// Utils
import { WebsiteSection, sectionContainer, sectionNumber } from "@/utils"

// Icons
import Medal from "@/ui/icons/medal"
import WorkInProgressIcon from "@/ui/icons/work-in-progress"

const Certifications = () => {
  const { t } = useTranslations("home")
  return (
    <section
      id={WebsiteSection.EXPERIENCE}
      aria-labelledby="experience-title"
      className={
        "relative py-24 overflow-hidden flex flex-col bg-gradient-to-bl from-primary-100 via-primary-100 to-primary-200 lg:mx-auto w-full justify-center items-center lg:items-center lg:justify-start scroll-mt-24"
      }
    >
      <div className="absolute flex items-end justify-end -right-10 -top-[70px] w-full">
        <div className="flex items-end justify-end w-full max-w-[1600px] mr-auto ">
          <div className=" w-72 h-72 fill-primary-200">
            <Medal />
          </div>
        </div>
      </div>
      <div className="absolute flex w-full">
        <div className="flex items-center justify-center w-full pt-40 md:pt-[100px]">
          <WorkInProgressIcon />
        </div>
      </div>
      <SectionHeader
        index={sectionNumber(WebsiteSection.EXPERIENCE)}
        label={t("sections.skills")}
        title={t("certifications.title")}
        titleId="experience-title"
        description={t("certifications.description")}
        tone="onAccent"
        className={`z-10 ${sectionContainer}`}
      />

      <div className="flex flex-row pt-16 space-x-4">
        <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-primary-200">
          <div className="flex justify-center items-center w-[94px] h-[94px] rounded-full bg-primary-100">
            <div className="flex justify-center items-center w-[90px] h-[90px] rounded-full bg-primary-200"></div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-primary-200">
          <div className="flex justify-center items-center w-[94px] h-[94px] rounded-full bg-primary-100">
            <div className="flex justify-center items-center w-[90px] h-[90px] rounded-full bg-primary-200"></div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-primary-200">
          <div className="flex justify-center items-center w-[94px] h-[94px] rounded-full bg-primary-100">
            <div className="flex justify-center items-center w-[90px] h-[90px] rounded-full bg-primary-200"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
