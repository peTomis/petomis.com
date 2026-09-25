// External libraries
import { useEffect, useRef, useState } from "react"

/**
 * - `static`: shown as-is, no animation (server render, reduced motion, or
 *   already on screen at mount, so there's nothing to reveal).
 * - `waiting`: mounted below the fold; hidden until it scrolls into view.
 * - `revealed`: scrolled into view; play the entrance animation.
 */
export type RevealState = "static" | "waiting" | "revealed"

/**
 * Tracks when an element first scrolls into view, for scroll-triggered
 * entrance animations. Starts `static` so server-rendered markup (and
 * no-JS visitors) always see the content.
 */
const useRevealOnScroll = <T extends HTMLElement>() => {
  const ref = useRef<T>(null)
  const [state, setState] = useState<RevealState>("static")

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (element.getBoundingClientRect().top < window.innerHeight) return

    setState("waiting")
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setState("revealed")
        observer.disconnect()
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, state }
}

export default useRevealOnScroll
