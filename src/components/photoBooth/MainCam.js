import React, { useRef, useEffect, useState } from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/MainCam.module.css'
import Webcam from "react-webcam";

function MainCam() {
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    const camAreaRef = useRef(null);
    let camArea;

    useEffect(() => {
        camArea = camAreaRef.current;
    }, [])

    return(
        <div className={style['cam-area']} ref={camAreaRef}>
            <Webcam mirrored audio={false} width={1280} height={720} videoConstraints={videoConstraints}/>   
        </div>
    )
}

export default MainCam;