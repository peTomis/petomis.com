// Utils
import { cn } from "@/utils/cn"

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
}

/** Labelled glass text field (or textarea) with an inline error message. */
const FormInput = ({
  name,
  error,
  errorMessage,
  label,
  onChange,
  placeholder,
  type,
  autoComplete,
  maxLength,
}: Props) => {
  const id = `contact-${name}`
  const errorId = `${id}-error`
  const fieldProps = {
    id,
    name,
    placeholder,
    maxLength,
    required: true,
    "aria-invalid": error || undefined,
    "aria-describedby": error ? errorId : undefined,
    className: cn(
      "w-full px-[15px] py-[13px] rounded-xl bg-white/[.045] border text-[15px] text-ink placeholder:text-ink-faint shadow-[inset_0_1px_2px_rgba(0,0,0,.25)] outline-none transition-colors duration-[250ms] focus:border-electric/60",
      error ? "border-red-400/70" : "border-white/[.12]"
    ),
  }

  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={id}
        className="block mb-2 font-mono text-[11px] tracking-[.5px] uppercase text-ink-label"
      >
        {label}
      </label>
      {type === "area" ? (
        <textarea
          {...fieldProps}
          rows={4}
          className={cn(fieldProps.className, "resize-y")}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          {...fieldProps}
          type={type ?? "text"}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {error && errorMessage && (
        <p
          id={errorId}
          role="alert"
          className="mt-1.5 text-[13px] text-red-400"
        >
          {errorMessage}
        </p>
      )}
    </div>
  )
}

export default FormInput
