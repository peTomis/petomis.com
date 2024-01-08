interface Props {
  children?: React.ReactNode
}

const LanguageSelectorList = ({ children }: Props) => {
  return (
    <div className="absolute z-10 flex flex-col w-full space-y-2 rounded-md top-12 bg-primary-200 dark:bg-primary-400">
      {children}
    </div>
  )
}

export default LanguageSelectorList
