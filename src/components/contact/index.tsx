// External libraries
import React, { useReducer, useState } from "react"
import { useForm } from "@formspree/react"

// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Config
import { contactEmail, externalLinks } from "@/config/site"

// Utils
import { WebsiteSection, sectionContainer, sectionNumber } from "@/utils"

// Atoms
import Button from "@/ui/atoms/button"
import Reveal from "@/ui/atoms/reveal"

// Icons
import GitHub from "@/ui/icons/social/github"
import Linkedin from "@/ui/icons/social/linkedin"

// Molecules
import SectionHeader from "@/ui/molecules/section-header"
import FormInput from "@/ui/molecules/form-input"

// Shows a URL without its scheme ("github.com/peTomis").
const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "")

const contactLinks = [
  {
    href: `mailto:${contactEmail}`,
    label: contactEmail,
    external: false,
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    href: externalLinks.github,
    label: displayUrl(externalLinks.github),
    external: true,
    icon: <GitHub />,
  },
  {
    href: externalLinks.linkedin,
    label: displayUrl(externalLinks.linkedin),
    external: true,
    icon: <Linkedin />,
  },
]

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
const isValidName = (value: string) => nameRegex.test(value.trim()) && value.trim().length > 0
const isValidMessage = (value: string) => value.trim().length > 0

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
      id={WebsiteSection.CONTACT}
      aria-labelledby="contact-title"
      className="relative w-full py-16 min-[561px]:py-[90px] font-manrope scroll-mt-24"
    >
      <div className={sectionContainer}>
        <SectionHeader
          index={sectionNumber(WebsiteSection.CONTACT)}
          label={t("sections.contact")}
        />
        <div className="grid items-start grid-cols-1 gap-11 min-[901px]:grid-cols-2 min-[901px]:gap-[60px]">
          <Reveal delay={0.08}>
            <h2
              id="contact-title"
              className="mb-5 font-grotesk font-semibold text-ink text-[length:clamp(30px,4vw,52px)] leading-[1.1] tracking-[-1.5px]"
            >
              {t("contact.title")}{" "}
              <span className="text-electric">{t("contact.titleAccent")}</span>.
            </h2>
            <p className="max-w-[380px] mb-[34px] text-[16px] leading-[1.7] text-ink-muted">
              {t("contact.subtitle")}
            </p>
            <ul
              aria-label={t("contact.linksLabel") as string}
              className="flex flex-col gap-4"
            >
              {contactLinks.map(({ href, label, icon, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-3.5 text-[16px] text-ink transition-colors duration-[250ms] hover:text-electric"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center justify-center w-[42px] h-[42px] rounded-[13px] glass text-electric"
                    >
                      <span className="w-[18px] h-[18px]">{icon}</span>
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16}>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              noValidate
              className="relative p-8 rounded-[26px] glass"
            >
              {formState.succeeded ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex flex-col items-center justify-center gap-4 min-h-[300px] text-center"
                >
                  <span className="inline-flex items-center justify-center w-[60px] h-[60px] rounded-full bg-electric/[.12] text-electric">
                    <svg
                      aria-hidden="true"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <h3 className="font-grotesk font-semibold text-[22px] text-ink">
                    {t("contact.thankMailTitle")}
                  </h3>
                  <p className="max-w-[240px] text-[14px] leading-[1.6] text-ink-muted">
                    {t("contact.thankMailText")}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-[18px]">
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
                  />
                  <FormInput
                    name="message"
                    error={errors.message}
                    errorMessage={t("contact.errors.message") as string}
                    label={t("contact.message")}
                    onChange={(s) =>
                      dispatch({ type: "setMessage", payload: s })
                    }
                    placeholder={t("contact.messagePlaceholder") as string}
                    type="area"
                    maxLength={2000}
                  />
                  <Button
                    type="submit"
                    disabled={formState.submitting}
                    size="sm"
                    className="self-end mt-2"
                  >
                    {t("contact.submit")}
                  </Button>
                  <p
                    role="status"
                    aria-live="polite"
                    className="empty:hidden -mt-1 text-right text-[13px] text-ink-muted"
                  >
                    {formState.submitting
                      ? t("contact.sending")
                      : formState.errors.length > 0 || submitError
                        ? t("contact.submitError")
                        : ""}
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
