import React, { useState, useContext } from "react";
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/BottomBar.module.css'
import { Icon } from '@iconify/react';

import { PhotoContext } from "./PhotoProvider";
import CaptureImage from './CaptureImage';

function BottomBar({ setMain, main, canvas, video, index, showImage, setShowImage }) {
    const [countdown, setCountdown] = useState(null);
    const { setImages } = useContext(PhotoContext);

    const handleClick = () => {
        setMain(!main);
    }

    const takePhoto = () => {
        if(showImage){
            setShowImage(false)
        }else{
            CaptureImage(canvas, video, index, setCountdown, setImages)
        }
    }

    return(
        <div className={style['bottom-bar']}>
            {main && 
                <div className={style['photo-btn']} onClick={takePhoto}>
                    <Icon icon="f7:camera-fill" className={style['camera-icon']}/>
                </div>
            }
            <div className={style['filter-btn']} onClick={handleClick}>효과</div> 
            {countdown !== null && <div className={style['countdown']}>{countdown}</div>} 
        </div>
    )
}

export default BottomBar;