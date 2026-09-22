import { useTranslations } from "@/hooks/useTranslations"

interface Props {
  children: React.ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const FormContainer = ({ children, onSubmit }: Props) => {
  const { t } = useTranslations("home")

  return (
    <form
      id="contact-form"
      onSubmit={onSubmit}
      noValidate
      className="w-full p-8 max-w-[800px] space-y-4 bg-primary-500"
    >
      <div className="py-2 text-center font-orbitron text-h3 md:h1 text-primary-100">
        {t("contact.title").toUpperCase()}
      </div>
      {children}
    </form>
  )
}

export default FormContainer
