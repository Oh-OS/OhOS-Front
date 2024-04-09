import styles from '../../styles/desktop/DesktopPage.module.css';

function Desktop() {
    return (
        <>
            <div className={styles['topStyle']}>
                <div className={styles['backgroundStyle']}>
                    <img src={process.env.PUBLIC_URL + '/images/Desktop/background.png'}/>
                </div>
            </div>
        </>
    )
}

export default Desktop;