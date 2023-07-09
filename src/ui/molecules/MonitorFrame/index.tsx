import style from "./style.module.css"

interface Props {
  main: boolean
  children: React.ReactNode
}

const MonitorFrame = ({ children, main }: Props) => {
  const monitorColor = main ? "bg-competitionScreen" : "bg-mineScreen"
  return (
    <div className={style.background}>
      <div className={`${style.frame} ${monitorColor}`}>
        <div className={style.glass}>{children}</div>
      </div>
      <div className={`${style.monitorStand} ${monitorColor}`} />
      <div className={`${style.monitorBase} ${monitorColor}`} />
    </div>
  )
}

export default MonitorFrame
