// External Imports
import { useRef } from "react"

// Hooks
import useSwipeHandler from "@/hooks/useSwipeHandler"

interface Props {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}

const SidebarContainer = ({ children, open, onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useSwipeHandler(
    ref,
    () => {},
    () => {
      onClose()
    },
    true
  )

  return (
    <>
      {open && (
        <div
          className="fixed top-0 left-0 z-30 w-screen h-screen cursor-pointer "
          onClick={onClose}
        />
      )}
      <div
        id="sidebar-container"
        ref={ref}
        className={`fixed z-40 bg-primary-500 h-screen w-[80vw] lg:w-[40vw] xl:w-[20vw] top-0 right-0 transform ${
          open ? " translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        {children}
      </div>
    </>
  )
}

export default SidebarContainer
