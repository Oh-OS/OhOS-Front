import styles from '../../styles/desktop/DesktopPage.module.css';

function Desktop() {
    return (
        <>
            <div className={styles['style']}>
                <div className={styles['topStyle']}>
                    <div className={styles['backgroundStyle']}>
                        <img src={process.env.PUBLIC_URL + '/images/background.png'} className={styles['backgroundImgStyle']} />
                    </div>
                    <div className={styles['containerStyle']}>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Desktop;