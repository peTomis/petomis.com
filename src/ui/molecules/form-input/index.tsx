import Typography from "@/ui/atoms/typography"
import style from "./style.module.css"

interface Props {
  error?: boolean
  label: string
  onChange: (value: string) => void
  placeholder?: string
  type?: "text" | "area"
}

const FormInput = ({ error, label, onChange, placeholder, type }: Props) => {
  const isArea = type === "area"
  const inputClass = "bg-primary-200 bg-opacity-10 text-black ".concat(
    error ? style.inputError : style.input
  )
  const areaClass = "bg-primary-200 bg-opacity-10 text-black ".concat(
    error ? style.areaError : style.area
  )

  return (
    <div id="form-input-container" className="flex flex-col w-full">
      <div id="form-input-label" className="mx-4">
        <Typography text={label} light color="BLACK" />
      </div>

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
    </div>
  )
}

export default FormInput
