import MainPage from "./pages/mainPages";
import style from "./global.module.scss"
import PlayBar from "./components/Playbar/Playbar";

const AppTwo = () => (
<div className={style.wrapper}>
    <MainPage />
    <PlayBar />
</div>
)

export default AppTwo
