import styles from '../../styles/desktop/DesktopPage.module.css';
import Dock from './Dock';

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