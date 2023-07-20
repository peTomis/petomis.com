import { useTranslations } from "@/modules/translations/use"
import style from "./style.module.css"
import FormInput from "@/ui/molecules/FormInput"
import { useReducer, useState } from "react"
import { useForm } from "@formspree/react"
import Button from "@/ui/atoms/Button"

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

  if (formState.succeeded)
    return (
      <div className={style.container} id="contactContainer">
        <div className={style.title}>{t("contact.title")}</div>
        <div className={style.letterContainer}>
          <div className={style.wrapper}>
            <div className={style.lid} />
            <div className={style.envelope} />
            <div className={style.letter}>
              <div className={style.thanks}>{t("contact.thankMailTitle")}</div>
              <div className={style.brb}>{t("contact.thankMailText")}</div>
            </div>
          </div>
        </div>
      </div>
    )

  return (
    <div className={style.container} id="contactContainer">
      <div className={style.title}>{t("contact.title")}</div>
      <div className={style.form}>
        <div className={style.inputs}>
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
        </div>
        <div className={"w-full"}>
          <FormInput
            error={errors.message}
            label={t("contact.message")}
            onChange={(s) => dispatch({ type: "setMessage", payload: s })}
            placeholder={t("contact.messagePlaceholder") as string}
            type="area"
          />
        </div>
        <div className={style.buttonContainer}>
          <Button label={t("contact.submit")} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default Contact
