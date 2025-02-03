// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Atoms
import Typography from "@/ui/atoms/typograph"
import Medal from "@/ui/icons/Medal"

const Certifications = () => {
  const { t } = useTranslations("home")
  return (
    <div
      id="about-me-container"
      className={
        "relative py-24 overflow-hidden flex flex-col bg-gradient-to-bl from-primary-100 via-primary-100 to-primary-200 px-8 lg:mx-auto w-full justify-center items-center lg:items-center lg:justify-start"
      }
    >
      <div className="absolute -right-10 md:right-0 w-72 md:w-96 h-72 md:h-96 -top-[70px] md:-top-[90px] opacity-50 md:opacity-100 fill-primary-200">
        <Medal />
      </div>
      <div className="z-10">
        <Typography
          extrabold={true}
          size="h1"
          text={t("certifications.title").toUpperCase()}
          color={"PRIMARY400"}
        />
      </div>
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
    </div>
  )
}

export default Certifications
