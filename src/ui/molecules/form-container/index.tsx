import { useTranslations } from "@/hooks/useTranslations"

interface Props {
  children: React.ReactNode
}

const FormContainer = ({ children }: Props) => {
  const { t } = useTranslations("home")

  return (
    <div
      id="contact-form"
      className="w-full p-8 max-w-[800px] space-y-4 bg-primary-500"
    >
      <div className="py-2 text-center font-orbitron text-h3 md:h1 text-primary-100">
        {t("contact.title").toUpperCase()}
      </div>
      {children}
    </div>
  )
}

export default FormContainer
