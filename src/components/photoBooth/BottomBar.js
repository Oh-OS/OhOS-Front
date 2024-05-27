import React, { useState } from "react";
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/BottomBar.module.css'
import { Icon } from '@iconify/react';

import CaptureImage from './CaptureImage';

function Photobooth({ setMain, main, canvas, video, index, setImages, setSelectedImage, showImage, setShowImage }) {
    const [countdown, setCountdown] = useState(null);

    const handleClick = () => {
        setMain(!main);
    }

    const takePhoto = () => {
        if(showImage){
            setShowImage(false)
        }else{
            CaptureImage(canvas, video, index, setImages, setSelectedImage, setCountdown)
        }
    }

    return(
        <div className={style['bottom-bar']}>
            {main && 
            <div className={style['photo-btn']} onClick={takePhoto}>
                <Icon icon="f7:camera-fill" className={style['camera-icon']}/>
            </div>}
            <div className={style['filter-btn']} onClick={handleClick}>효과</div> 
            {countdown !== null && <div className={style['countdown']}>{countdown}</div>} 
        </div>
    )
}

export default Photobooth;