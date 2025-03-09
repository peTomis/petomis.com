import Typography from "@/ui/atoms/typography"
import ChevronIcon from "@/ui/icons/chevron"
import { useState } from "react"

interface AccordionProps {
  text: string
  children: React.ReactNode
}

const Accordion = ({ text, children }: AccordionProps) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="z-10 flex flex-col space-y-4">
      <div
        className="flex flex-row items-center space-x-2 cursor-pointer select-none"
        onClick={() => setOpen(!open)}
      >
        <Typography extrabold size="h6" light text={text} />
        <div
          className={`transform transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronIcon />
        </div>
      </div>
      {open && <div>{children}</div>}
    </div>
  )
}

export default Accordion
