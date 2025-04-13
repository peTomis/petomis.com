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
import FormButton from "./components/FormButton"

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
      className={`relative flex flex-col items-center pt-16 lg:pb-8 justify-center w-full lg:px-0 mx-auto space-y-8`}
    >
      <div className="absolute bottom-0 w-full h-[200px] bg-[#111111]"></div>
      <div className="z-10 flex items-center justify-center w-full px-4 lg:px-0">
        <FormContainer>
          <div className="relative">
            <div className="flex flex-col space-y-4">
              <FormInput
                error={errors.name}
                label={t("contact.name")}
                onChange={(s) => dispatch({ type: "setName", payload: s })}
                placeholder={t("contact.namePlaceholder") as string}
                hidden={formState.succeeded}
              />
              <FormInput
                error={errors.email}
                label={t("contact.email")}
                onChange={(s) => dispatch({ type: "setEmail", payload: s })}
                placeholder={t("contact.emailPlaceholder") as string}
                hidden={formState.succeeded}
              />
              <FormInput
                error={errors.message}
                label={t("contact.message")}
                onChange={(s) => dispatch({ type: "setMessage", payload: s })}
                placeholder={t("contact.messagePlaceholder") as string}
                type="area"
                hidden={formState.succeeded}
              />
              <FormButton
                hidden={formState.succeeded}
                onSubmit={handleSubmit}
              />
            </div>
            {formState.succeeded && <FormSucceeded />}
          </div>
        </FormContainer>
      </div>
    </div>
  )
}

export default GetInTouch
