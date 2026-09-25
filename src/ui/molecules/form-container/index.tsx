interface Props {
  children: React.ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const FormContainer = ({ children, onSubmit }: Props) => {
  return (
    <form
      id="contact-form"
      onSubmit={onSubmit}
      noValidate
      className="w-full p-8 max-w-[800px] space-y-4 bg-primary-500"
    >
      {children}
    </form>
  )
}

export default FormContainer
