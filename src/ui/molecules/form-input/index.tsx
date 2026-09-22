import Typography from "@/ui/atoms/typography"
import style from "./style.module.css"

interface Props {
  name: string
  error?: boolean
  errorMessage?: string
  label: string
  onChange: (value: string) => void
  placeholder?: string
  type?: "text" | "email" | "area"
  autoComplete?: string
  maxLength?: number
  hidden?: boolean
}

const FormInput = ({
  name,
  error,
  errorMessage,
  label,
  hidden,
  onChange,
  placeholder,
  type,
  autoComplete,
  maxLength,
}: Props) => {
  const isArea = type === "area"
  const id = `contact-${name}`
  const errorId = `${id}-error`
  const inputClass =
    "bg-primary-200 bg-opacity-10 placeholder-gray-600  rounded-tr-lg rounded-bl-xl ".concat(
      error ? style.inputError : style.input
    )
  const areaClass =
    "bg-primary-200 bg-opacity-10 placeholder-gray-600  rounded-tr-lg rounded-bl-xl ".concat(
      error ? style.areaError : style.area
    )

  return (
    <div
      id={`form-input-container-${name}`}
      className={`flex flex-col w-full  ${
        hidden ? "opacity-0 select-none" : ""
      }`}
    >
      <label htmlFor={id} id={`form-input-label-${name}`}>
        <Typography font="montserrat" text={label} light />
      </label>
      <div className="relative flex w-full w-100%">
        {isArea ? (
          <textarea
            id={id}
            name={name}
            className={areaClass}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            required
            maxLength={maxLength}
            autoComplete={autoComplete}
            aria-invalid={error || undefined}
            aria-describedby={error ? errorId : undefined}
          />
        ) : (
          <input
            id={id}
            name={name}
            className={inputClass}
            type={type ?? "text"}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            required
            maxLength={maxLength}
            autoComplete={autoComplete}
            aria-invalid={error || undefined}
            aria-describedby={error ? errorId : undefined}
          />
        )}
      </div>
      {error && errorMessage && (
        <div id={errorId} role="alert" className="pt-1 text-small text-red-400">
          {errorMessage}
        </div>
      )}
    </div>
  )
}

export default FormInput
