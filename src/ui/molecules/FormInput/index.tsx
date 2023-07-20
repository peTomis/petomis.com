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
  const inputClass = error ? style.inputError : style.input
  const areaClass = error ? style.areaError : style.area

  return (
    <div className={style.container}>
      <div className={style.label}>{label}</div>

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
