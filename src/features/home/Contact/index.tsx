import { useTranslations } from "@/modules/translations/use"
import style from "./style.module.css"
import FormInput from "@/ui/molecules/FormInput"
import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"

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

  console.log(nameError)

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
      <div className={style.container}>
        <div className={style.title}>{t("contactTitle")}</div>
        <div className={style.letterContainer}>
          <div className={style.wrapper}>
            <div className={style.lid} />
            <div className={style.envelope} />
            <div className={style.letter}>
              <div className={style.thanks}>Thank you!</div>
              <div className={style.brb}>Will reply soon</div>
            </div>
          </div>
        </div>
      </div>
    )

  return (
    <div className={style.container}>
      <div className={style.title}>{t("contactTitle")}</div>
      <div className={style.form}>
        <div className={style.inputs}>
          <FormInput
            error={nameError}
            label={t("contactName")}
            onChange={(s) => {
              if (nameError) setNameError(false)
              setName(s)
            }}
            placeholder={t("contactNamePlaceholder") as string}
          />
          <FormInput
            error={emailError}
            label={t("contactEmail")}
            onChange={(s) => {
              if (emailError) setEmailError(false)
              setEmail(s)
            }}
            placeholder={t("contactEmailPlaceholder") as string}
          />
        </div>
        <div className={"w-full"}>
          <FormInput
            error={messageError}
            label={t("contactMessage")}
            onChange={(s) => {
              if (messageError) setMessageError(false)
              setMessage(s)
            }}
            placeholder={t("contactMessagePlaceholder") as string}
            type="area"
          />
        </div>
        <div className={style.buttonContainer}>
          <div className={style.buttonClickable} onClick={handleSubmit}>
            Submit
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
