import React, { useRef, useState } from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/MainCam.module.css'
import Webcam from "react-webcam";

import XRay from './filters/XRay';
import StretchH from './filters/StretchH';
import Zombie from './filters/Zombie';
import Sunglass from './mainFilter/Sunglass';
import Basic from './filters/Basic';
import Comic from './filters/Faded';
import StretchV from './filters/StretchV';
import Flip from './filters/Flip'
import Swirl from './filters/Swirl'

import BottomBar from './BottomBar';
import MyPhoto from "./MyPhoto";

function MainCam({ width, height, index, main, setMain }) {
    const [ captureCanvas, setCaptureCanvas ] = useState();
    const [ captureVideo, setCaptureVideo ] = useState();
    
    const [ selectedImage, setSelectedImage ] = useState();
    const [ showImage, setShowImage ] = useState(false);
    const [ selectedPhoto, setSelectedPhoto ] = useState(null);

    const videoFunction = [XRay, StretchH, Zombie, Sunglass, Basic, Comic, Flip, StretchV, Swirl];

    const camAreaRef = useRef();
    const videoRef = useRef();
    const canvasRef = useRef();

    function drawImge() {
        const canvas = canvasRef.current;
        const video = videoRef.current;

        setCaptureCanvas(canvas);
        setCaptureVideo(video);

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
        <>
            <div className={style['cam-area']} ref={camAreaRef}>
                <Webcam
                    mirrored
                    audio={false}
                    height={height}
                    width={width}
                    videoConstraints={videoConstraints}
                    className={style['main-cam']}
                    ref={videoRef}
                />
                <canvas ref={canvasRef} className={style['canvas']} width={width} height={height}></canvas>  
            </div>
            <MyPhoto
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                showImage={showImage}
                setShowImage={setShowImage}
                selectedPhoto={selectedPhoto}
                setSelectedPhoto={setSelectedPhoto}
            />
            <BottomBar
                setMain={setMain}
                main={main}
                canvas={captureCanvas}
                video={captureVideo}
                index={index}
                showImage={showImage}
                setShowImage={setShowImage}
                setSelectedPhoto={setSelectedPhoto}
            />
        </>
    )
}

export default MainCam;