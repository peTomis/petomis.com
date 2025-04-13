import Typography from "@/ui/atoms/typography"
import style from "./style.module.css"

interface Props {
  error?: boolean
  label: string
  onChange: (value: string) => void
  placeholder?: string
  type?: "text" | "area"
  hidden?: boolean
}

const FormInput = ({
  error,
  label,
  hidden,
  onChange,
  placeholder,
  type,
}: Props) => {
  const isArea = type === "area"
  const inputClass =
    "bg-primary-200 bg-opacity-10 placeholder-gray-600 ".concat(
      error ? style.inputError : style.input
    )
  const areaClass = "bg-primary-200 bg-opacity-10 placeholder-gray-600 ".concat(
    error ? style.areaError : style.area
  )

  return (
    <div
      id="form-input-container"
      className={`flex flex-col w-full ${
        hidden ? "opacity-0 select-none" : ""
      }`}
    >
      <div id="form-input-label">
        <Typography font="montserrat" text={label} light />
      </div>
      <div className="relative flex w-full w-100%">
        {isArea ? (
          <textarea
            id="form-input-textarea"
            className={areaClass}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
          />
        ) : (
          <input
            id="form-input-text"
            className={inputClass}
            type={type ?? "text"}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
          />
        )}
        <div className="absolute bottom-0 w-4 h-4 rotate-45 -left-2 bg-primary-500"></div>
        <div className="absolute top-0 w-4 h-4 rotate-45 -right-2 bg-primary-500"></div>
      </div>
    </div>
  )
}

export default FormInput
