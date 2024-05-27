import React, { useState } from "react";
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/BottomBar.module.css'
import { Icon } from '@iconify/react';

import CaptureImage from './CaptureImage';

function Photobooth({ setMain, main, canvas, video, index }) {
    const [countdown, setCountdown] = useState(null);

    const handleClick = () => {
        setMain(!main);
    }

    return(
        <div className={style['bottom-bar']}>
            {main && 
            <div className={style['photo-btn']} onClick={() => CaptureImage(canvas, video, index, setCountdown)}>
                <Icon icon="f7:camera-fill" className={style['camera-icon']}/>
            </div>}
            <div className={style['filter-btn']} onClick={handleClick}>효과</div> 
            {countdown !== null && <div className={style['countdown']}>{countdown}</div>} 
        </div>
    )
}

export default Photobooth;