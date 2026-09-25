// External libraries
import Image from "next/image"
import { useEffect, useId, useRef } from "react"

// Hooks
import type { Project } from "@/hooks/useProjects"
import { useTranslations } from "@/hooks/useTranslations"

// Utils
import { cn } from "@/utils/cn"
import useLockScroll from "@/utils/lockScroll"

interface Props {
  experience: Project
  onClose: () => void
}

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

// Small mono section label ("what I did", "stack").
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-4 font-mono text-[12px] tracking-[1px] text-electric">
    {children}
  </h3>
)

/**
 * Job details as a macOS-style glass window (like the hero terminal): the
 * traffic-light group closes it on mobile; the red light closes it on desktop. Modal dialog: focus is trapped inside and
 * restored on close; Escape or a click on the backdrop closes it; the page
 * behind doesn't scroll.
 */
const EmployeeDetails = ({ onClose, experience }: Props) => {
  useLockScroll()
  const { t } = useTranslations("home")
  const { t: tJobs } = useTranslations("jobs")
  const dialogRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const {
    name,
    title,
    logo,
    color,
    background,
    website,
    sentences,
    tasks = [],
    tools = [],
  } = experience

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
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
      previouslyFocused?.focus()
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-2 min-[561px]:p-6 bg-night/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="flex flex-col w-full max-w-[1100px] max-h-full overflow-hidden rounded-[20px] glass bg-[rgba(8,14,24,.82)] font-manrope outline-none animate-window-in"
      >
        {/* Title bar */}
        <div className="flex items-center flex-none gap-2 px-2 py-1 min-[561px]:px-4 min-[561px]:py-[13px] bg-white/[.035] border-b border-white/[.08]">
          <button
            type="button"
            onClick={onClose}
            aria-label={t("work.close") as string}
            className="group/close flex h-11 flex-none items-center justify-center gap-2 rounded-lg px-2 active:bg-white/10 focus-visible:outline-offset-2 min-[561px]:hidden"
          >
            <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ff5f57]">
              <svg
                aria-hidden="true"
                width="7"
                height="7"
                viewBox="0 0 10 10"
                stroke="#4d0000"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="transition-opacity opacity-0 group-hover/close:opacity-100 group-focus-visible/close:opacity-100"
              >
                <path d="M2 2l6 6M8 2 2 8" />
              </svg>
            </span>
            <span aria-hidden="true" className="h-3.5 w-3.5 rounded-full bg-[#febc2e]" />
            <span aria-hidden="true" className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />
          </button>
          <div className="hidden items-center gap-2 min-[561px]:flex">
            <button
              type="button"
              onClick={onClose}
              aria-label={t("work.close") as string}
              className="group/close relative flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57] focus-visible:outline-offset-2"
            >
              <svg
                aria-hidden="true"
                width="7"
                height="7"
                viewBox="0 0 10 10"
                stroke="#4d0000"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="transition-opacity opacity-0 group-hover/close:opacity-100 group-focus-visible/close:opacity-100"
              >
                <path d="M2 2l6 6M8 2 2 8" />
              </svg>
            </button>
            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span
            aria-hidden="true"
            className="flex-1 font-mono text-[11px] tracking-[.5px] text-center truncate text-ink-faint"
          >
            giuseppe@petomis — ~/work/{name.toLowerCase().replace(/\s+/g, "-")}
          </span>
          <span aria-hidden="true" className="w-[74px] flex-none min-[561px]:w-[52px]" />
        </div>

        {/* Content */}
        <div className="grid flex-1 min-h-0 grid-cols-1 overflow-y-auto gap-8 p-5 min-[561px]:p-8 min-[901px]:grid-cols-[1fr_1.15fr] min-[901px]:gap-10">
          <div className="flex flex-col">
            <div
              className={cn(
                "relative flex items-center justify-center h-[180px] mb-6 overflow-hidden rounded-[14px] border border-white/[.08]",
                color
              )}
            >
              <Image
                src={background}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 500px"
                className="object-cover opacity-25"
              />
              <div className="relative px-8">{logo ?? title}</div>
            </div>

            <p className="mb-2 font-mono text-[11px] tracking-[.5px] uppercase text-ink-label">
              {tJobs("projects.employeeTag")}
            </p>
            <h2
              id={titleId}
              className="mb-4 font-grotesk font-semibold text-[length:clamp(24px,3vw,32px)] leading-[1.15] tracking-[-.5px] text-ink"
            >
              {name}
            </h2>
            {experience.role && (
              <p className="mb-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[13px] leading-relaxed text-ink-label">
                <span className="font-semibold">{experience.role}</span>
                {experience.period && (
                  <span><span aria-hidden="true">· </span>{experience.period}</span>
                )}
              </p>
            )}
            <div className="flex flex-col gap-4 mb-6 text-[15px] leading-[1.75] text-ink-muted">
              {sentences.map((sentence, index) => (
                <p key={index}>{sentence}</p>
              ))}
            </div>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center self-start gap-[7px] mt-auto text-[13px] font-semibold text-ink transition-colors duration-[250ms] hover:text-electric"
            >
              {t("projects.visit")}
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col gap-8">
            {tasks.length > 0 && (
              <section>
                <Eyebrow>{t("work.tasks")}</Eyebrow>
                <ul className="flex flex-col gap-5">
                  {tasks.map((task) => (
                    <li key={task.title} className="flex gap-3.5">
                      <span
                        aria-hidden="true"
                        className="flex-none w-2 h-2 mt-2 rounded-full bg-electric shadow-[0_0_10px_rgba(30,167,255,.7)]"
                      />
                      <div>
                        <h4 className="mb-1 font-grotesk font-semibold text-[16px] text-ink">
                          {task.title}
                        </h4>
                        <p className="text-[14px] leading-[1.65] text-ink-muted">
                          {task.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {tools.length > 0 && (
              <section>
                <Eyebrow>{t("work.stack")}</Eyebrow>
                <ul className="grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-2.5">
                  {tools.map((tool) => (
                    <li key={tool.name}>
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center h-full gap-2.5 px-2 py-3.5 rounded-xl glass glass-interactive"
                      >
                        {tool.icon && (
                          <span
                            aria-hidden="true"
                            className="flex items-center justify-center w-full h-9 fill-white [&_svg]:max-h-9 [&_svg]:max-w-[64px]"
                          >
                            {tool.icon}
                          </span>
                        )}
                        <span className="font-mono text-[11px] text-center text-ink-label">
                          {tool.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetails
