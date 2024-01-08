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
  const inputClass = "bg-background-dark bg-opacity-20 ".concat(
    error ? style.inputError : style.input
  )
  const areaClass = "bg-background-dark bg-opacity-20 ".concat(
    error ? style.areaError : style.area
  )

  return (
    <div className="flex flex-col w-full font-normal font-roboto">
      <div className="mx-4 font-light ">{label}</div>

      {isArea ? (
        <textarea
          className={areaClass}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
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
