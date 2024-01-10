import Button from "@/ui/atoms/Button"
import { Props } from "."

export const FormContainer = ({ children, onSubmit }: Props) => {
  const { t } = useTranslations("contact")

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
