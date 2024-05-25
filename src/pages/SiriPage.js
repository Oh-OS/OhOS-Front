// import React, { useEffect } from 'react';
// import styles from '../styles/siri/Siri.module.css';
// import AudioVisualizer from '../components/siri/AudioVisualizer';
// import TitleBar from '../components/common/TitleBar';
// import DesktopPage from './DesktopPage';

// function SiriPage() {

//     return (
//         <>
//             <TitleBar/>
//             <div className={styles["container"]}>
//                 <p className={styles["SiriText"]}>무엇을 도와드릴까요?</p>
//                 <canvas className={styles["canvas"]}></canvas>
//                 <AudioVisualizer/>
//             </div>
//             <DesktopPage/>
//         </>
        
//     );
// }


// export default SiriPage;

import React, { useState, useEffect } from 'react';
import styles from '../styles/siri/Siri.module.css';
import AudioVisualizer from '../components/siri/AudioVisualizer';
import TitleBar from '../components/common/TitleBar';
import DesktopPage from './DesktopPage';

function SiriPage() {
    const [siriText, setSiriText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/data'); // 서버 주소에 맞게 변경 필요
            if (!response.ok) {
                throw new Error('서버 요청 실패');
            }
            const data = await response.text();
            setSiriText(data);
        } catch (error) {
            console.error('데이터 요청 에러:', error.message);
        }
    };

    return (
        <>
            <TitleBar />
            <div className={styles["container"]}>
                <p className={styles["SiriText"]}>{siriText}</p>
                <canvas className={styles["canvas"]}></canvas>
                <AudioVisualizer />
            </div>
            <DesktopPage />
        </>
    );
}

export default SiriPage;
