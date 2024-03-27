import React from 'react';
import Desktop from '../components/desktop/Desktop';
import Dock from '../components/desktop/Dock'
import SearchBar from '../components/launchpad/SearchBar';
import styles from '../styles/launchpad/LaunchpadPage.module.css'

function LaunchpadPage() {
    return (
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <SearchBar/>
                <Dock />
                <div className={styles.backgroundBlur}></div>
                <Desktop />
            </div>
        </div>
    )
}

export default LaunchpadPage;