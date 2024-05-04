import React, { useRef, useEffect, useState } from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/MainCam.module.css'
import Webcam from "react-webcam";

function MainCam() {
    const [ width, setWidth ] = useState(1766.390625);
    const [ height, setHeight ] = useState(788);

    const camAreaRef = useRef(null);
    let camArea;

    function handleResize() {
        let width = camArea.getBoundingClientRect().width;
        let height = camArea.getBoundingClientRect().height;
        setWidth(width);
        setHeight(height);
    }

    useEffect(() => {
        camArea = camAreaRef.current;
        let width = camArea.getBoundingClientRect().width;
        let height = camArea.getBoundingClientRect().height;
        setWidth(width);
        setHeight(height);
        window.addEventListener('resize', handleResize)
        videoConstraints.width = width;
        videoConstraints.height = height;
        console.log(videoConstraints.width, videoConstraints.height);
    }, [])

    const videoConstraints = {
        width: width,
        height: height,
        facingMode: "user"
    };

    return(
        <div className={style['cam-area']} ref={camAreaRef}>
            <Webcam mirrored audio={false}
                width={width} height={height}
                videoConstraints={videoConstraints}
                className={style['main-cam']}/>   
        </div>
    )
}

export default MainCam;