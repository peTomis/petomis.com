// External libraries
import { useReducer } from "react"
import { useForm } from "@formspree/react"

// Contact components
import FormSucceeded from "../../ui/molecules/form-succeeded"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Molecules
import FormInput from "@/ui/molecules/form-input"
import FormContainer from "@/ui/molecules/form-container"

// Atoms
import Typography from "@/ui/atoms/typograph"
import Touch from "@/ui/icons/Touch"

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

const GetInTouch = () => {
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
      submitEmail({ email, message: "[" + name + "]" + message })
    }
  }

  return (
    <div
      id="contact-container"
      className={`relative flex flex-col items-center justify-center w-full py-8 md:pb-32 mx-auto space-y-8 bg-primary-100 bg-circuit-pattern md:bg-opacity-0 md:bg-none`}
    >
      <div
        id="work-title"
        className={`w-full flex flex-col justify-center items-center py-8 text-center text-primary-500 md:text-white`}
      >
        <Typography
          extrabold={true}
          size="h1"
          text={t("contact.title").toUpperCase()}
        />
        <div className="w-24 h-24 pt-4 fill-primary-500 md:hidden">
          <Touch />
        </div>
      </div>
      <div className="flex items-center justify-center w-full px-4 md:px-0">
        {formState.succeeded ? (
          <FormSucceeded />
        ) : (
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
        )}
      </div>
    </div>
  )
}

export default GetInTouch
