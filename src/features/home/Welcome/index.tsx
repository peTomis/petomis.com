import style from "./style.module.css"
import WelcomeImage from "./components/WelcomeImage"
import WelcomeText from "./components/WelcomeText"
import ScrollSuggest from "./components/ScrollSuggest"

const Welcome = () => {
  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <WelcomeText />
        <WelcomeImage />
      </div>
      <ScrollSuggest />
    </div>
  )
}
export default Welcome
