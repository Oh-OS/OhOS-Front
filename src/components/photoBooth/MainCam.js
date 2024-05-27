import React, { useRef, useEffect, useState } from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/MainCam.module.css'
import Webcam from "react-webcam";

import XRay from './filters/XRay';
import StretchH from './filters/StretchH';
import Zombie from './filters/Zombie';
import Circle from './filters/Circle';
import Basic from './filters/Basic';
import Comic from './filters/Comic';
import StretchV from './filters/StretchV';
import Flip from './filters/Flip'
import Swirl from './filters/Swirl'

function MainCam({ width, height, index, setIndex }) {
    const videoFunction = [XRay, StretchH, Zombie, Circle, Basic, Comic, Flip, StretchV, Swirl];

    const camAreaRef = useRef();
    const videoRef = useRef();
    const canvasRef = useRef();

    function drawImge() {
        const canvas = canvasRef.current;
        const video = videoRef.current;

        if (video && canvas) {
            var ctx = canvas.getContext('2d');

            canvas.width = width;
            canvas.height = height;

            videoFunction[index](ctx, video, canvas, width, height, drawImge);
        }
    }

    setTimeout(drawImge, 33);

    const videoConstraints = {
        height: height,
        width: width,
        facingMode: "user"
    };

    return(
        <div className={style['cam-area']} ref={camAreaRef}>
            <Webcam mirrored audio={false}
                height={height} width={width}
                videoConstraints={videoConstraints}
                className={style['main-cam']}
                ref={videoRef}/>
            <canvas ref={canvasRef} className={style['canvas']} width={width} height={height}></canvas>     
        </div>
    )
}

export default MainCam;