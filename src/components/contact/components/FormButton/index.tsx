// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Atoms
import Button from "@/ui/atoms/button"

// Icons
import Mail from "@/ui/icons/mail"

interface Props {
  onSubmit: () => void
  hidden?: boolean
}

const FormButton = ({ hidden, onSubmit }: Props) => {
  const { t } = useTranslations("home")

  return (
    <div
      className={`flex flex-col items-center justify-between w-full pr-2 my-4 space-y-8 md:space-y-0 md:items-end md:flex-row
    ${hidden ? "opacity-0 select-none" : ""}
    `}
    >
      <div className="flex flex-col justify-center w-full sm:flex-row sm:space-x-2 md:pl-2 md:justify-start flex-2">
        <div className="flex items-center justify-center">
          <Mail className="w-6 h-6 fill-primary-100" />
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 font-montserrat text-small md:text-base">
          <div>{t("contact.mailMe")}</div>
          <a
            title="mailto"
            className="font-bold text-primary-100"
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
  )
}

export default FormButton
