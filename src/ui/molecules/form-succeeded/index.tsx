import { useTranslations } from "@/hooks/useTranslations"

const FormSucceeded = () => {
  const { t } = useTranslations("home")

  return (
    <div
      id="contact-form"
      className="w-full h-[563.5px] lg:max-w-[800px] space-y-4 md:pt-16 pb-12"
    >
      <div
        id="letter-container"
        className={
          "flex justify-center items-center h-[350] scale-75 md:scale-100"
        }
      >
        <div
          id="wrapper"
          className="mt-[228px]  md:mt-[128px] lg:mt-[160px] mb-24 relative flex justify-center items-center h-[200px] w-[300px] bg-primary-400 z-0"
        >
          <div
            id="lid"
            className="absolute left-0 top-[-100px] border-r-[150px] border-r-transparent border-b-[100px] border-b-primary-400 border-l-[150px] border-l-transparent z-10"
          />
          <div
            id="envelope"
            className="absolute h-[100%] w-[100%] top-0 left-0 border-t-[100px] border-t-transparent border-r-[150px] border-r-primary-300 border-b-[100px] border-primary-400 border-l-[150px] border-l-primary-300 z-30"
          />
          <div
            id="letter"
            className="absolute top-[-50px] w-[80%] h-[80%] text-center pt-[1.5rem] font-bacasimeAntique bg-primary-50 text-black rounded-[15px] z-20"
          >
            <div id="thx-message" className="font-bold text-h4">
              {t("contact.thankMailTitle")}
            </div>
            <div id="brb-message" className="text-h5 font-extralight">
              {t("contact.thankMailText")}
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  )
}

export default FormSucceeded
