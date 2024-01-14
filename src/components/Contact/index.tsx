import { useTranslations } from "@/hooks/useTranslations"
import FormInput from "@/ui/molecules/FormInput"
import { useReducer, useState } from "react"
import { useForm } from "@formspree/react"
import FormSucceeded from "./components/FormSucceeded"
import overlappingCirclesPatternStyle from "@/ui/patterns/overlapping-circles"
import SectionTitle, {
  SectionTitleColor,
  SectionTitleFont,
} from "@/ui/atoms/SectionTitle"
import SectionDescription, {
  SectionDescriptionFontSize,
} from "@/ui/atoms/SectionDescription"
import FormContainer from "@/ui/molecules/FormContainer"

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
const nameRegex = /^[a-zA-Z\s]*$/

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

const Contact = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { name, email, message, errors } = state
  const { t } = useTranslations("home")
  const [formState, submitEmail] = useForm("mnqkqwja")

  const handleSubmit = async () => {
    const newErrors = {
      name: !isValidName(name),
      email: !isValidEmail(email),
      message: !isValidMessage(message),
    }
    dispatch({ type: "setErrors", payload: newErrors })
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      submitEmail({ email, message })
    }
  }

  if (formState.succeeded) return <FormSucceeded />

  return (
    <div
      className="flex flex-col items-center justify-center w-full px-4 py-16 bg-primary-400 text-defaultTextColor-dark"
      id="contact-container"
      style={overlappingCirclesPatternStyle}
    >
      <SectionTitle
        id="contact-title"
        label={t("contact.title").toUpperCase()}
        color={SectionTitleColor.PRIMARY100}
        font={SectionTitleFont.BACASIME_ANTIQUE}
      />
      <SectionDescription
        fontSize={SectionDescriptionFontSize.EXTRALIGHT}
        rows={[
          t("contact.description.phrase1"),
          t("contact.description.phrase2"),
        ]}
      />
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          error={errors.name}
          label={t("contact.name")}
          onChange={(s) => dispatch({ type: "setName", payload: s })}
          placeholder={t("contact.namePlaceholder") as string}
        />
        <FormInput
          error={errors.email}
          label={t("contact.email")}
          onChange={(s) => dispatch({ type: "setEmail", payload: s })}
          placeholder={t("contact.emailPlaceholder") as string}
        />

        <FormInput
          error={errors.message}
          label={t("contact.message")}
          onChange={(s) => dispatch({ type: "setMessage", payload: s })}
          placeholder={t("contact.messagePlaceholder") as string}
          type="area"
        />
      </FormContainer>
    </div>
  )
}

export default Contact
