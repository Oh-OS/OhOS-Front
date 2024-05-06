import React, { useRef, useEffect, useState } from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/MainCam.module.css'
import Webcam from "react-webcam";

function MainCam({ width, height }) {
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

            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
            ctx.drawImage(video.video, 0, 0, width, height);
            setTimeout(drawImge, 33);
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