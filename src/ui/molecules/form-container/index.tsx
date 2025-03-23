import { useTranslations } from "@/hooks/useTranslations"
import Button from "@/ui/atoms/button"
import Typography from "@/ui/atoms/typography"
import Mail from "@/ui/icons/mail"

interface Props {
  children: React.ReactNode
  onSubmit: () => void
}

const FormContainer = ({ children, onSubmit }: Props) => {
  const { t } = useTranslations("home")

  return (
    <div
      id="contact-form"
      className="w-full p-8 max-w-[800px] space-y-4 bg-white"
    >
      {children}
      <div className="flex flex-col items-center justify-between w-full pr-2 my-4 space-y-8 md:space-y-0 md:items-end md:flex-row">
        <div className="flex flex-col justify-center w-full sm:flex-row sm:space-x-2 md:pl-2 md:justify-start flex-2">
          <div className="flex items-center justify-center">
            <Mail className="w-6 h-6 fill-primary-300" />
          </div>
          <div className="flex flex-row items-center justify-center space-x-2 text-small md:text-base">
            <Typography text={t("contact.mailMe")} color="BLACK" />
            <a
              title="mailto"
              className="font-bold text-primary-300"
              href="mailto:giuseppe.tomis@protonmail.com"
            >
              giuseppe.tomis@protonmail.com
            </a>
          </div>
        </div>
        <div className="flex justify-end flex-1 w-full">
          <Button label={t("contact.submit")} onClick={onSubmit} />
        </div>
      </div>
    </div>
  )
}

export default FormContainer
