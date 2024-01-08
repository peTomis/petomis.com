import SocialButtons from "@/ui/organisms/SocialButtons"

const Bottombar = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="flex items-center justify-center w-full p-8 bg-black">
      <div className="flex flex-col w-full my-4 text-background xl:max-w-[1000px] font-roboto">
        <div className="flex flex-col items-start space-y-4 xl:space-y-0 xl:flex-row">
          <div className="flex flex-col items-center justify-start flex-1 w-full space-y-4 ">
            <div className="flex flex-col w-full">
              <div className="w-full font-bold text-h5 xl:text-h3">
                GIUSEPPE TOMIS
              </div>
              <div className="w-full italic xl:text-h5">@peTomis</div>
            </div>
            <div className="w-full text-base font-light font-bacasimeAntique xl:text-h5">
              Fullstack Developer, Software Engineer
            </div>
          </div>
          <div className="flex flex-row items-start justify-start flex-1 w-full h-full py-2 space-x-2 pb-auto xl:justify-end fill-defaultTextColor-dark">
            <SocialButtons dark={true} />
          </div>
        </div>
        <div className="flex flex-col my-8 items-center justify-between h-[1px] bg-background bg-opacity-20" />

        <div className="flex items-center justify-center w-full pt-4">
          <div className="text-base">
            {currentYear} © Giuseppe Tomis. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bottombar
