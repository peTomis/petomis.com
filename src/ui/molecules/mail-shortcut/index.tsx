// Hooks
import { useTranslations } from "@/hooks/useTranslations"

// Utils
import { cn } from "@/utils/cn"

interface Props {
  visible: boolean
  onClick: () => void
}

// Stays mounted so it can fade in/out; `inert` keeps it out of tab order and
// the accessibility tree while hidden.
const MailShortcut = ({ visible, onClick }: Props) => {
  const { t } = useTranslations("home")

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={t("redirects.contact")}
      aria-hidden={!visible}
      inert={!visible}
      className={cn(
        "fixed z-[55] bottom-[18px] right-[18px] min-[561px]:bottom-[26px] min-[561px]:right-[26px] inline-flex items-center justify-center w-14 h-14 rounded-full glass-bubble text-electric-ink transition-[opacity,transform] duration-300",
        visible
          ? "opacity-100 hover:-translate-y-[3px] hover:scale-[1.04]"
          : "opacity-0 translate-y-3 scale-90 pointer-events-none"
      )}
    >
      <svg
        aria-hidden="true"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    </button>
  )
}

export default MailShortcut
