import React from "react"

enum ContainerVariant {
  darkAndBlue = `border-freelanceIcon`,
  lightAndBlue = `border-defaultTextColor`,
}

enum LabelVariant {
  darkAndBlue = `bg-black`,
  lightAndBlue = `bg-freelanceIcon`,
}

interface Props {
  variant?: "darkAndBlue" | "lightAndBlue"
  children: React.ReactNode
  label: string
}

const BorderedDiv = ({ label, children, variant }: Props) => {
  return (
    <div
      id="task-container"
      className={`relative grid grid-cols-2 gap-4 p-4 border-2 ${
        variant ? ContainerVariant[variant] : ContainerVariant.darkAndBlue
      }`}
    >
      <div
        id="task-label"
        className={`absolute px-2 -top-3 left-2 ${
          variant ? LabelVariant[variant] : LabelVariant.darkAndBlue
        }`}
      >
        {label}
      </div>
      {children}
    </div>
  )
}

export default BorderedDiv
