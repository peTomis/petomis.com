export default function LoreCircles({
  children,
}: {
  children?: React.ReactNode
}) {
  const size = 320
  const center = size / 2
  const radius = 156
  const strokeWidth = 6

  const totalSegments = 8
  const segmentAngle = 360 / totalSegments // 45°
  const gapAngle = 8 // spazio tra un segmento e l'altro

  function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
    const rad = ((angle - 90) * Math.PI) / 180
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    }
  }

  function describeArc(
    cx: number,
    cy: number,
    r: number,
    startAngle: number,
    endAngle: number
  ) {
    const start = polarToCartesian(cx, cy, r, endAngle)
    const end = polarToCartesian(cx, cy, r, startAngle)
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1

    return [
      `M ${start.x} ${start.y}`,
      `A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
    ].join(" ")
  }

  const segments = Array.from({ length: totalSegments }, (_, i) => {
    const slotStart = i * segmentAngle - segmentAngle / 2
    const slotEnd = slotStart + segmentAngle

    const start = slotStart + gapAngle / 2
    const end = slotEnd - gapAngle / 2

    return {
      d: describeArc(center, center, radius, start, end),
      isSolid: i % 2 === 0,
    }
  })

  return (
    <div className="relative flex h-[320px] w-[320px] items-center justify-center d:h-[360px] d:w-[360px] lg:h-[500px] lg:w-[500px] xxl:h-[760px] xxl:w-[760px]">
      {/* Full circle */}
      <div className="absolute inset-0 z-0 m-auto flex h-[290px] w-[290px] items-center justify-center rounded-full overflow-hidden d:h-[330px] d:w-[330px] lg:h-[470px] lg:w-[470px] xxl:h-[620px] xxl:w-[620px]">
        {children}
      </div>

      {/* Rotating outer ring */}
      <div className="absolute inset-0 z-10 m-auto h-[320px] w-[320px] animate-spin-slow rounded-full d:h-[360px] d:w-[360px] lg:h-[500px] lg:w-[500px] xxl:h-[760px] xxl:w-[760px]">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0 w-full h-full"
          fill="none"
        >
          {segments.map((segment, index) => (
            <path
              key={index}
              d={segment.d}
              stroke="#00B8FF"
              strokeWidth={strokeWidth}
              strokeLinecap="butt"
              strokeDasharray={segment.isSolid ? undefined : "0.4 20.064"}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}
