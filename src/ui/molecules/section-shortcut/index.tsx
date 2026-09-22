import React, { useState } from "react"
import Typography from "@/ui/atoms/typography"

interface Props {
  icon: React.ReactNode
  label: string
  href: string
  initialRotation: number
  onNavigate: () => void
}

const SectionShortcut = ({
  icon,
  label,
  href,
  initialRotation,
  onNavigate,
}: Props) => {
  // Starts from a deterministic value (same on server and client) so hydration
  // never mismatches; only re-randomizes client-side, after mount, on hover.
  const [rotation, setRotation] = useState(initialRotation)

  // Update the rotation value every time the user hovers.
  const handleMouseEnter = () => {
    setRotation(Math.floor(Math.random() * 364) + 1)
  }

  // The href lets the link work without JS; when JS is available we
  // intercept the click to keep the existing smooth-scroll behaviour.
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onNavigate()
  }

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      className="relative flex flex-col items-center flex-1 rounded-lg select-none group"
    >
      <SectionShortcutBackground rotation={rotation} />

      <div className="z-10 flex flex-col items-center md:text-h5 xxl:text-h4 lg:hover:text-primary-50 lg:hover:fill-primary-50">
        <div className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] xxl:w-[92px] xxl:h-[92px]">
          {icon}
        </div>
        <Typography
          text={label.toUpperCase()}
          font="montserrat"
          bold
          md="h5"
          xxl="h4"
        />
      </div>
    </a>
  )
}

interface BackgroundProps {
  rotation: number
}

const SectionShortcutBackground = ({ rotation }: BackgroundProps) => {
  return (
    <div className="absolute inset-0 items-center justify-center hidden pointer-events-none lg:flex">
      <div
        style={{ transform: `rotate(${rotation}deg)` }}
        className="w-[48px] h-[48px] lg:w-[92px] lg:h-[92px] xxl:w-[128px] xxl:h-[128px] bg-primary-300 rounded-tr-3xl rounded-bl-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      />
    </div>
  )
}

export default SectionShortcut
