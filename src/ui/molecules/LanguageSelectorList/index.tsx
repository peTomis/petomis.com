interface Props {
  children?: React.ReactNode
}

const LanguageSelectorList = ({ children }: Props) => {
  return (
    <div className="absolute left-[-48px] flex flex-col rounded-md bg-background dark:bg-background-dark top-12">
      <div className="p-2 space-y-2 rounded-md bg-background-dark bg-opacity-20 dark:bg-background dark:bg-opacity-10">
        {children}
      </div>
    </div>
  )
}

export default LanguageSelectorList
