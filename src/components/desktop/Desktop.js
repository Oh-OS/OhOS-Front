import styles from '../../styles/desktop/Desktop-screen.module.css';
import Dock from '../dock/Dock';

function Desktop() {
    return (
        <>
            <div className={styles['style']}>
                <div className={styles['topStyle']}>
                    <div className={styles['backgroundStyle']}>
                        <img src={process.env.PUBLIC_URL + '/images/background.png'} className={styles['backgroundImgStyle']} />
                    </div>
                    <div className={styles['containerStyle']}>
                        <Dock />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Desktop;