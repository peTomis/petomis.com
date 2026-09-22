import { useEffect, useRef } from "react"
import {
  CarouselElementColor,
  type EmployeeColor,
} from "@/ui/atoms/carousel-element-text"
import EmployeeDetailsHint from "../employee-details-hint"

const employeeDetailsContainerBg: Record<EmployeeColor, string> = {
  "bg-anubidigital-dark": "bg-anubidigital-dark  text-primary-50",
  "bg-red-300": "bg-white text-defaultTextColor",
}

interface Props {
  color?: EmployeeColor
  label: string
  children: React.ReactNode
  onClose: () => void
}

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

const EmployeeDetailsContainer = ({
  children,
  onClose,
  color = CarouselElementColor.ANUBIDIGITAL,
  label,
}: Props) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null
    dialogRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
        return
      }

      if (event.key !== "Tab" || !dialogRef.current) return

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector)
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      previouslyFocused.current?.focus()
    }
  }, [onClose])

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      tabIndex={-1}
      id="activity-card-expanded-container"
      className={`relative flex w-full m-2 xl:m-4 overflow-x-hidden overflow-y-auto transition  animate-scaleUp ${employeeDetailsContainerBg[color]}`}
      onClick={(e) => {
        e.stopPropagation()
      }}
      style={{
        height: "-webkit-fill-available",
      }}
    >
      <div
        className={`flex w-full overflow-x-hidden overflow-y-auto transition`}
        onClick={(e) => {
          e.stopPropagation()
        }}
        style={{
          height: "-webkit-fill-available",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-0 right-0 z-30"
        >
          <EmployeeDetailsHint color={color} />
        </button>
        {children}
      </div>
    </div>
  )
}

export default EmployeeDetailsContainer
