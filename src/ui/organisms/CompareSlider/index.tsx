import { ReactCompareSlider } from "react-compare-slider"
import style from "./style.module.css"
import MonitorFrame from "../../molecules/MonitorFrame"
import { useTranslations } from "@/modules/translations/use"

const CompareSlider = () => {
  const { t } = useTranslations("common")
  return (
    <ReactCompareSlider
      itemOne={
        <div className={style.background}>
          <div className={style.leftTitle}>
            {t("monitorFrame.theCompetition")}
          </div>
          <MonitorFrame main={true}>
            <div className="flex flex-row space-x-4">
              <div className="text-vscodeblue">const</div>
              <div className="text-vscodelightyellow">foo</div>
              <div className="text-white">=</div>
              <div className="flex flex-row">
                <div className="text-vscodepurple">{"("}</div>
                <div className="text-vscodelightblue">n</div>
                <div className="text-vscodepurple">{")"}</div>
              </div>

              <div className="text-vscodeblue">{"=>"}</div>
              <div className="text-vscodepurple">{"{"}</div>
            </div>
            <div className="flex flex-row space-x-16">
              <div className="w-[2px] opacity-30 bg-white" />
              <div className="flex flex-col">
                <div className="flex flex-row space-x-2">
                  <div className="text-vscodepurple">{"if"}</div>
                  <div className="flex flex-row">
                    <div className="text-vscodeblue">{"("}</div>
                    <div className="flex flex-row space-x-2">
                      <div className="text-vscodelightblue">{`n`}</div>
                      <div className="text-white">{`>`}</div>
                      <div className="text-vscodelightgreen">{`0`}</div>
                    </div>
                    <div className="text-vscodeblue">{") {"}</div>
                  </div>
                </div>
                <div className="flex flex-row space-x-16">
                  <div className="w-[2px] opacity-30 bg-white" />
                  <div className="flex flex-col">
                    <div className="w-[2px] opacity-30 bg-white" />
                    <div>
                      <div className="flex flex-row space-x-2">
                        <div className="text-vscodepurple">{"if"}</div>
                        <div className="flex flex-row">
                          <div className="text-vscodeyellow">{"("}</div>
                          <div className="flex flex-row space-x-2">
                            <div className="text-vscodelightblue">{`n`}</div>
                            <div className="text-white">{`<`}</div>
                            <div className="text-vscodelightgreen">{`10`}</div>
                          </div>
                          <div className="text-vscodeyellow">{") {"}</div>
                        </div>
                      </div>
                      <div className="flex flex-row space-x-16">
                        <div className="w-[2px] opacity-30 bg-white" />
                        <div className="ml-16">
                          <div className="flex flex-row space-x-2">
                            <div className="text-vscodepurple">{`return`}</div>
                            <div className="text-vscodeblue">{`true`}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row space-x-2">
                        <div className="text-vscodeyellow">{`}`}</div>
                        <div className="text-vscodepurple">{`else`}</div>
                        <div className="text-vscodeyellow">{`{`}</div>
                      </div>
                      <div className="flex flex-row space-x-16">
                        <div className="w-[2px] opacity-30 bg-white" />
                        <div className="ml-16">
                          <div className="flex flex-row space-x-2">
                            <div className="text-vscodepurple">{`return`}</div>
                            <div className="text-vscodeblue">{`false`}</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-vscodeyellow">{"}"}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="text-vscodeblue">{`}`}</div>
                  <div className="text-vscodepurple">{`else`}</div>
                  <div className="text-vscodeblue">{`{`}</div>
                </div>
                <div className="flex flex-row space-x-16">
                  <div className="w-[2px] opacity-30 bg-white" />
                  <div className="flex flex-row space-x-2">
                    <div className="text-vscodepurple">{`return`}</div>
                    <div className="text-vscodeblue">{`false`}</div>
                  </div>
                </div>
                <div className="text-vscodeblue">{"}"}</div>
              </div>
            </div>
            <div className="text-vscodepurple">{"}"}</div>
          </MonitorFrame>
        </div>
      }
      itemTwo={
        <div className={style.background}>
          <div className={style.rightTitle}>{t("monitorFrame.me")}</div>
          <MonitorFrame main={false}>
            <div className="flex flex-row space-x-4">
              <div className="text-vscodeblue">const</div>
              <div className="text-vscodelightyellow">foo</div>
              <div className="text-white">=</div>
              <div className="flex flex-row space-x-2">
                <div className="text-vscodepurple">{"("}</div>
                <div className="text-vscodelightblue">n</div>
                <div className="text-white">:</div>
              </div>
              <div className="flex flex-row space-x-2">
                <div className="text-vscodegreen">number</div>
                <div className="text-vscodepurple">{")"}</div>
                <div className="text-white">:</div>
              </div>
              <div className="text-vscodegreen">boolean</div>
              <div className="text-vscodeblue">{"=>"}</div>
              <div className="text-vscodelightblue">{"n"}</div>
              <div className="text-white">{">"}</div>
              <div className="text-vscodelightgreen">{"0"}</div>
              <div className="text-white">{"&&"}</div>
              <div className="text-vscodelightblue">{"n"}</div>
              <div className="text-white">{"<"}</div>
              <div className="text-vscodelightgreen">{"10"}</div>
            </div>
          </MonitorFrame>
        </div>
      }
      className={style.container}
    />
  )
}

export default CompareSlider
