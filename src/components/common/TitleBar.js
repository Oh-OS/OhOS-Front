import "../../styles/common/Style.css"
import styles from '../../styles/common/TitleBar.module.css'
import { useNavigate } from "react-router-dom";

function TitleBar() {
    const navigate = useNavigate();
    const closeScreen = () => navigate('/')

    return(
        <div className={styles['title-bar']}>
            <div className={styles['close']} onClick={closeScreen}></div>
            <div className={styles['minimize']} onClick={closeScreen}></div>
            <div className={styles['full-screen']} onClick={closeScreen}></div>
        </div>
    )
}

export default TitleBar;