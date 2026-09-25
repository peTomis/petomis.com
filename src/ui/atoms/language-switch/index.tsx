"use client"

import { useEffect, useId, useRef, useState } from "react"

// Hooks
import { SupportedLanguage } from "@/hooks/useLanguage"
import { useTranslations } from "@/hooks/useTranslations"

// Utils
import { cn } from "@/utils/cn"

interface LanguageToggleProps {
  languages: SupportedLanguage[]
  language: SupportedLanguage
  setLanguage: (_language: SupportedLanguage) => void
}

/**
 * Minimal language picker: the current flag + a chevron, opening a small
 * glass list above it (disclosure pattern). Closes on selection, outside
 * click, Escape, or when focus leaves it.
 */
const LanguageToggle = ({
  languages,
  language,
  setLanguage,
}: LanguageToggleProps) => {
  const { t } = useTranslations("common")
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const listId = useId()

  useEffect(() => {
    if (!open) return

    // Focus the current language so arrow-free Tab/Enter works right away.
    listRef.current
      ?.querySelector<HTMLButtonElement>("[aria-current='true']")
      ?.focus()

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      setOpen(false)
      buttonRef.current?.focus()
    }
    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [open])

  const select = (next: SupportedLanguage) => {
    setLanguage(next)
    setOpen(false)
    buttonRef.current?.focus()
  }

  return (
    <div
      ref={rootRef}
      className="relative"
      onBlur={(event) => {
        // Close when keyboard focus moves elsewhere. Ignore a null
        // `relatedTarget`: Safari doesn't focus clicked buttons, so clicking
        // an option blurs to "nothing" and closing here would swallow the
        // click. Outside clicks are handled by the pointerdown listener.
        const next = event.relatedTarget as Node | null
        if (next && !rootRef.current?.contains(next)) setOpen(false)
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label={
          t("language.current", {
            name: language.name,
            interpolation: { escapeValue: false },
          }) as string
        }
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-ink-muted transition-colors duration-[250ms] hover:text-ink hover:bg-white/[.06]"
      >
        <span aria-hidden="true" className="text-[16px] leading-none">
          {language.flag}
        </span>
        <svg
          aria-hidden="true"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={cn(
            "transition-transform duration-200",
            open && "rotate-180"
          )}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <ul
        ref={listRef}
        id={listId}
        hidden={!open}
        className="absolute right-0 bottom-full z-10 mb-2 min-w-[150px] p-1 rounded-xl glass bg-[rgba(8,14,24,.85)]"
      >
        {languages.map((current) => {
          const isCurrent = current.code === language.code
          return (
            <li key={current.code}>
              <button
                type="button"
                lang={current.code}
                aria-current={isCurrent}
                onClick={() => select(current)}
                className={cn(
                  "flex items-center w-full gap-2.5 px-3 py-2 rounded-lg font-manrope text-[13px] text-left transition-colors duration-[250ms] hover:bg-white/[.08]",
                  isCurrent
                    ? "text-ink font-semibold"
                    : "text-ink-muted hover:text-ink"
                )}
              >
                <span aria-hidden="true" className="text-[15px] leading-none">
                  {current.flag}
                </span>
                {current.name}
                {isCurrent && (
                  <svg
                    aria-hidden="true"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="ml-auto text-electric"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LanguageToggle
