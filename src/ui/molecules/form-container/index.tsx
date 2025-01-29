import { useTranslations } from "@/hooks/useTranslations"
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
      className="w-full rounded-2xl lg:max-w-[800px] space-y-4 p-8 bg-primary-500"
    >
      {children}
      <div className="flex items-center justify-end w-full pr-2 my-4">
        <Button label={t("contact.submit")} onClick={onSubmit} />
      </div>
    </div>
  )
}

export default FormContainer
