import React, { useEffect, useState } from 'react';
import styles from '../styles/siri/Siri.module.css';
import AudioVisualizer from '../components/siri/AudioVisualizer';
import TitleBar from '../components/common/TitleBar';
import DesktopPage from './DesktopPage';
import axios from 'axios';

function SiriPage() {
    const [logContent, setLogContent] = useState('도움이 필요하시면 "시리야"를 불러주세요');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/logs');
                setLogContent(response.data || '도움이 필요하시면 "시리야"를 불러주세요');
            } catch (error) {
                console.error('로그 가져오기 오류:', error);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <TitleBar/>
            <div className={styles["container"]}>
                <p className={styles["SiriText"]}>{logContent}</p>
                <canvas className={styles["canvas"]}></canvas>
                <AudioVisualizer/>
            </div>
            <DesktopPage/>
        </>
    );
}

export default SiriPage;
