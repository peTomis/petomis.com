import { useTranslations } from "@/modules/translations/use"
import Button from "@/ui/atoms/Button"

interface Props {
  children: React.ReactNode
  onSubmit: () => void
}

const FormContainer = ({ children, onSubmit }: Props) => {
  const { t } = useTranslations("home")

  return (
    <div
      id="contact-form"
      className="w-full lg:max-w-[800px] space-y-4 p-8 rounded-lg bg-primary-500"
    >
      {children}
      <div className="flex items-center justify-center w-full my-4">
        <Button label={t("contact.submit")} onClick={onSubmit} />
      </div>
    </div>
  )
}

export default FormContainer
