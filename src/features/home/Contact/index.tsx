import { useTranslations } from "@/modules/translations/use"
import style from "./style.module.css"
import FormInput from "@/ui/molecules/FormInput"
import { useState } from "react"
import { useForm } from "@formspree/react"
import Button from "@/ui/atoms/Button"

const Contact = () => {
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState(false)
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [message, setMessage] = useState("")
  const [messageError, setMessageError] = useState(false)
  const [state, submitEmail] = useForm("mnqkqwja")
  const { t } = useTranslations("home")

  const handleSubmit = async () => {
    if (!isValidName(name)) setNameError(true)
    if (!isValidEmail(email)) setEmailError(true)
    if (!isValidMessage(message)) setMessageError(true)
    if (!isValidName(name) || !isValidEmail(email) || !isValidMessage(message))
      return
    submitEmail({ email, message })
  }

  const isValidEmail = (value: string) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    return emailRegex.test(value) && value.length > 0
  }

  const isValidMessage = (value: string) => {
    return value.length > 0
  }

  const isValidName = (value: string) => {
    const nameRegex = /^[a-zA-Z\s]*$/
    return nameRegex.test(value) && value.length > 0
  }

  if (!!state.succeeded)
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
            error={nameError}
            label={t("contact.name")}
            onChange={(s) => {
              if (nameError) setNameError(false)
              setName(s)
            }}
            placeholder={t("contact.namePlaceholder") as string}
          />
          <FormInput
            error={emailError}
            label={t("contact.email")}
            onChange={(s) => {
              if (emailError) setEmailError(false)
              setEmail(s)
            }}
            placeholder={t("contact.emailPlaceholder") as string}
          />
        </div>
        <div className={"w-full"}>
          <FormInput
            error={messageError}
            label={t("contact.message")}
            onChange={(s) => {
              if (messageError) setMessageError(false)
              setMessage(s)
            }}
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
