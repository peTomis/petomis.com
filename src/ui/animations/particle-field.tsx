import { useEffect, useRef } from "react"

// Cursor influence radius (px): squares inside it are pushed away and linked
// to the pointer with a faint line.
const CURSOR_RADIUS = 150

interface Square {
  x: number
  y: number
  size: number
  vx: number
  vy: number
  alpha: number
  twinkle: number
}

/**
 * Full-viewport canvas of drifting, twinkling electric-blue squares (the
 * brand motif). Squares are repelled by the cursor. With
 * `prefers-reduced-motion` a single static frame is painted instead.
 */
const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    const mouse = { x: -999, y: -999, active: false }
    let width = 0
    let height = 0
    let squares: Square[] = []
    let raf = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(28, Math.floor((width * height) / 26000))
      squares = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 2 + Math.random() * 7,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        alpha: 0.05 + Math.random() * 0.28,
        twinkle: Math.random() * Math.PI * 2,
      }))
    }

    const paint = (animate: boolean) => {
      ctx.clearRect(0, 0, width, height)
      const near: Array<[number, number, number]> = []

      for (const p of squares) {
        if (animate) {
          if (mouse.active) {
            const dx = p.x - mouse.x
            const dy = p.y - mouse.y
            const d2 = dx * dx + dy * dy
            if (d2 < CURSOR_RADIUS * CURSOR_RADIUS) {
              const d = Math.sqrt(d2) || 1
              const force = (1 - d / CURSOR_RADIUS) * 1.6
              p.vx += (dx / d) * force * 0.12
              p.vy += (dy / d) * force * 0.12
              near.push([p.x + p.size / 2, p.y + p.size / 2, 1 - d / CURSOR_RADIUS])
            }
          }
          p.x += p.vx
          p.y += p.vy
          p.twinkle += 0.01
          // Friction back toward a calm drift
          p.vx *= 0.96
          p.vy *= 0.96
          if (Math.abs(p.vx) < 0.04) p.vx += (Math.random() - 0.5) * 0.02
          if (Math.abs(p.vy) < 0.04) p.vy += (Math.random() - 0.5) * 0.02
          if (p.x < -10) p.x = width + 10
          if (p.x > width + 10) p.x = -10
          if (p.y < -10) p.y = height + 10
          if (p.y > height + 10) p.y = -10
        }
        const flicker = p.alpha * (0.6 + 0.4 * Math.sin(p.twinkle))
        ctx.fillStyle = `rgba(30,167,255,${flicker.toFixed(3)})`
        ctx.fillRect(p.x, p.y, p.size, p.size)
      }

      for (const [nx, ny, strength] of near) {
        ctx.strokeStyle = `rgba(30,167,255,${(strength * 0.22).toFixed(3)})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(mouse.x, mouse.y)
        ctx.lineTo(nx, ny)
        ctx.stroke()
      }
    }

    const loop = () => {
      paint(true)
      raf = requestAnimationFrame(loop)
    }

    const handleResize = () => {
      resize()
      if (reducedMotion) paint(false)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }

    resize()
    window.addEventListener("resize", handleResize)
    if (reducedMotion) {
      paint(false)
    } else {
      window.addEventListener("mousemove", handleMouseMove, { passive: true })
      loop()
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none"
    />
  )
}

export default ParticleField
