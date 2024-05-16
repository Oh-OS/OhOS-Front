import React, { useEffect } from 'react';
import styles from '../styles/siri/Siri.module.css';
import AudioVisualizer from '../components/siri/AudioVisualizer';
import TitleBar from '../components/common/TitleBar';
import DesktopPage from './DesktopPage';

function SiriPage() {

    return (
        <>
            <TitleBar/>
            <div className={styles["container"]}>
                <p className={styles["SiriText"]}>무엇을 도와드릴까요?</p>
                <canvas className={styles["canvas"]}></canvas>
                <AudioVisualizer/>
            </div>
            <DesktopPage/>
        </>
        
    );
}

export default SiriPage;
