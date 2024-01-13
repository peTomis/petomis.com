import useIsSectionLoaded from "@/hooks/useIsSectionLoaded"
import QuoteMarksIcon from "@/ui/icons/QuoteMarks"

interface Props {
  children: React.ReactNode
  id: string
}

const PhraseContainer = ({ children, id }: Props) => {
  const isSectionLoaded = useIsSectionLoaded(id, 1)

  return (
    <div
      id={id}
      className={`relative bg-primary-100 dark:bg-primary-300 rounded-bl-3xl rounded-r-3xl text-h5 p-12 xl:py-24 xl:px-16 max-w-[700px] text-defaultTextColor dark:text-defaultTextColor-dark transform ${
        isSectionLoaded ? " translate-y-0" : "translate-y-full"
      } transition-transform duration-500 ease-in-out

      `}
    >
      <div className="absolute -top-12 right-12 w-[100px] xl:w-[150px] fill-defaultTextColor dark:fill-defaultTextColor-dark">
        <QuoteMarksIcon />
      </div>
      {children}
    </div>
  )
}

export default PhraseContainer
