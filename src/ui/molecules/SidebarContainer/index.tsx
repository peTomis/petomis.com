interface Props {
  children: React.ReactNode
  open: boolean
}

const SidebarContainer = ({ children, open }: Props) => {
  return (
    <div
      id="sidebar-container"
      className={`fixed z-40 h-screen w-[80vw] lg:w-[40vw] xl:w-[20vw] top-0 right-0 transform ${
        open
          ? "bg-primary-100 dark:bg-primary-400 translate-x-0"
          : "bg-background dark:bg-background-dark translate-x-full"
      } transition-transform duration-500 ease-in-out`}
    >
      {children}
    </div>
  )
}

export default SidebarContainer
