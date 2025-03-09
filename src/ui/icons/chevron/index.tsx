interface ChevronIconProps {
  black?: boolean
}

const ChevronIcon = ({ black = false }: ChevronIconProps) => {
  return (
    <svg
      viewBox="0 0 407.437 407.437"
      fill={black ? "#000000" : "#ffffff"}
      className="w-4 h-4"
    >
      <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 " />
    </svg>
  )
}

export default ChevronIcon
