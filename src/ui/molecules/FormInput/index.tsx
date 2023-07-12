import style from "./style.module.css"

interface Props {
  error?: boolean
  label: string
  onChange: (value: string) => void
  placeholder?: string
  type?: "text" | "area"
}

const FormInput = ({ error, label, onChange, placeholder, type }: Props) => {
  if (type === "area")
    return (
      <div className={style.container}>
        <div className={style.label}>{label}</div>

        <textarea
          className={error ? style.areaError : style.area}
          onChange={(e) => {
            onChange(e.target.value)
          }}
          placeholder={placeholder}
        />
      </div>
    )

  return (
    <div className={style.container}>
      <div className={style.label}>{label}</div>

      <input
        className={error ? style.inputError : style.input}
        type={type ?? "text"}
        onChange={(e) => {
          onChange(e.target.value)
        }}
        placeholder={placeholder}
      />
    </div>
  )
}

export default FormInput
