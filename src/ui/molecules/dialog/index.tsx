import { useEffect, useRef, type ReactNode } from "react"

interface Props {
  children: ReactNode
  labelledBy: string
  onClose: () => void
  className?: string
}

const focusableSelector =
  'a[href], button, input, select, textarea, [tabindex], [contenteditable="true"]'

/** Mount to open; unmount to close. Native modal semantics make the entire
 * background inert; explicit Tab cycling also avoids leaving for browser chrome. */
const Dialog = ({ children, labelledBy, onClose, className }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const pointerStartedOnBackdrop = useRef(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const previouslyFocused = document.activeElement
    const originalOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = "hidden"
    panelRef.current?.focus({ preventScroll: true })

    return () => {
      dialog.close()
      document.body.style.overflow = originalOverflow
      if (previouslyFocused instanceof HTMLElement && previouslyFocused.isConnected) {
        previouslyFocused.focus({ preventScroll: true })
      }
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={labelledBy}
      aria-modal="true"
      className="fixed inset-0 m-0 h-full w-full max-h-none max-w-none border-0 p-2 min-[561px]:p-6 bg-night/60 text-ink backdrop-blur-sm backdrop:bg-transparent open:flex items-center justify-center animate-fade-in"
      onCancel={(event) => {
        // The parent owns the open state; let it unmount us on Escape.
        event.preventDefault()
        onClose()
      }}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return
        const focusable = Array.from(
          event.currentTarget.querySelectorAll<HTMLElement>(focusableSelector)
        ).filter(element =>
          element.tabIndex >= 0 &&
          !element.matches(":disabled") &&
          !element.closest("[inert]") &&
          element.getClientRects().length > 0 &&
          window.getComputedStyle(element).visibility === "visible"
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        const active = document.activeElement
        if (!first) {
          event.preventDefault()
          panelRef.current?.focus()
        } else if (!focusable.includes(active as HTMLElement)) {
          event.preventDefault()
          const target = event.shiftKey ? last : first
          target.focus()
        } else if (event.shiftKey && active === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && active === last) {
          event.preventDefault()
          first.focus()
        }
      }}
      onPointerDown={(event) => {
        pointerStartedOnBackdrop.current = event.target === event.currentTarget
      }}
      onPointerCancel={() => { pointerStartedOnBackdrop.current = false }}
      onClick={(event) => {
        if (event.target === event.currentTarget && pointerStartedOnBackdrop.current) {
          onClose()
        }
        pointerStartedOnBackdrop.current = false
      }}
    >
      <div ref={panelRef} tabIndex={-1} className={className}>
        {children}
      </div>
    </dialog>
  )
}

export default Dialog
