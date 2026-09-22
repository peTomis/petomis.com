// External libraries
import React, { useReducer, useState } from "react"
import { useForm } from "@formspree/react"

// Contact components
import FormSucceeded from "@/ui/molecules/form-succeeded"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Molecules
import FormInput from "@/ui/molecules/form-input"
import FormContainer from "@/ui/molecules/form-container"
import FormButton from "./components/FormButton"

// Atoms
import Typography from "@/ui/atoms/typography"

type State = {
  name: string
  email: string
  message: string
  errors: {
    name: boolean
    email: boolean
    message: boolean
  }
}

type Action =
  | { type: "setName"; payload: string }
  | { type: "setEmail"; payload: string }
  | { type: "setMessage"; payload: string }
  | {
      type: "setErrors"
      payload: { name: boolean; email: boolean; message: boolean }
    }

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
// Unicode-aware so accented/international names (e.g. "Giosuè", "O'Brien") validate.
const nameRegex = /^[\p{L}\s'-]*$/u

const isValidEmail = (value: string) =>
  emailRegex.test(value) && value.length > 0
const isValidName = (value: string) => nameRegex.test(value) && value.length > 0
const isValidMessage = (value: string) => value.length > 0

const initialState = {
  name: "",
  email: "",
  message: "",
  errors: { name: false, email: false, message: false },
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload }
    case "setEmail":
      return { ...state, email: action.payload }
    case "setMessage":
      return { ...state, message: action.payload }
    case "setErrors":
      return { ...state, errors: action.payload }
    default:
      return state
  }
}

const GetInTouch = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { name, email, message, errors } = state
  const { t } = useTranslations("home")
  const [formState, submitEmail] = useForm("mnqkqwja")
  const [honeypot, setHoneypot] = useState("")
  const [submitError, setSubmitError] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Honeypot: real users never fill this hidden field, bots often do.
    if (honeypot) {
      return
    }

    const newErrors = {
      name: !isValidName(name),
      email: !isValidEmail(email),
      message: !isValidMessage(message),
    }
    dispatch({ type: "setErrors", payload: newErrors })
    if (newErrors.name || newErrors.email || newErrors.message) {
      return
    }

    setSubmitError(false)
    try {
      await submitEmail({ email, message: "[" + name + "]" + message })
    } catch {
      setSubmitError(true)
    }
  }

  return (
    <section
      id="contact-container"
      aria-labelledby="contact-title"
      className={`relative flex flex-col items-center pt-16 lg:pb-8 justify-center w-full lg:px-0 mx-auto space-y-8 scroll-mt-24`}
    >
      <div className="absolute bottom-0 w-full h-[200px] bg-[#111111]"></div>
      <div className="z-10 flex flex-col items-center justify-center w-full space-y-8">
        <Typography
          as="h2"
          id="contact-title"
          extrabold
          size="h1"
          font="montserrat"
          text={t("contact.title").toUpperCase()}
          color="PRIMARY100"
        />
      </div>
      <div className="z-10 flex items-center justify-center w-full px-4 lg:px-0">
        <FormContainer onSubmit={handleSubmit}>
          <div className="relative">
            <div className="flex flex-col space-y-4">
              <input
                id="contact-company"
                name="company"
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute h-px w-px overflow-hidden -left-[9999px]"
              />
              <FormInput
                name="name"
                error={errors.name}
                errorMessage={t("contact.errors.name") as string}
                label={t("contact.name")}
                onChange={(s) => dispatch({ type: "setName", payload: s })}
                placeholder={t("contact.namePlaceholder") as string}
                autoComplete="name"
                maxLength={100}
                hidden={formState.succeeded}
              />
              <FormInput
                name="email"
                error={errors.email}
                errorMessage={t("contact.errors.email") as string}
                label={t("contact.email")}
                onChange={(s) => dispatch({ type: "setEmail", payload: s })}
                placeholder={t("contact.emailPlaceholder") as string}
                type="email"
                autoComplete="email"
                maxLength={254}
                hidden={formState.succeeded}
              />
              <FormInput
                name="message"
                error={errors.message}
                errorMessage={t("contact.errors.message") as string}
                label={t("contact.message")}
                onChange={(s) => dispatch({ type: "setMessage", payload: s })}
                placeholder={t("contact.messagePlaceholder") as string}
                type="area"
                maxLength={2000}
                hidden={formState.succeeded}
              />
              <FormButton
                hidden={formState.succeeded}
                submitting={formState.submitting}
                hasError={formState.errors.length > 0 || submitError}
              />
            </div>
            {formState.succeeded && <FormSucceeded />}
          </div>
        </FormContainer>
      </div>
    </section>
  )
}

export default GetInTouch
