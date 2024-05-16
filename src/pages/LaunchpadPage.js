import React from 'react';
import Desktop from '../components/desktop/Desktop';
import Dock from '../components/desktop/Dock'
import SearchBar from '../components/launchpad/SearchBar';
import styles from '../styles/launchpad/LaunchpadPage.module.css'
import { useNavigate } from "react-router-dom";
import IconContainer from '../components/launchpad/Icon';

function LaunchpadPage() {

    const navigate = useNavigate();
    const IconClick = (path) => {
      navigate(path);
    };

    return (
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <SearchBar/>
                <Dock />
                <div onClick={() => IconClick('/')} className={styles.backgroundBlur}></div>
                <div className={styles['iconContainer']}>
                    <IconContainer/>
                </div>
                <Desktop />
            </div>
        </div>
    )
}

export default LaunchpadPage;