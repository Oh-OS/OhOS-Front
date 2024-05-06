import React, { useRef, useEffect, useState } from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/FilterCam.module.css'
import Webcam from 'react-webcam';

function FilterCam({ width, height }) {
    const camAreaRef = useRef();
    const canvasRefs = Array.from({ length: 9 }, () => React.createRef());
    const videoClass = ['invert', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const videoRef = useRef();

    const videoConstraints = {
      width: width,
      height: height,
      facingMode: "user"
    };

    function drawImge() {
      const video = videoRef.current;
      if(video && canvasRefs[0].current){
        canvasRefs.forEach((canvasRef) => {
          const canvas = canvasRef.current;
          var ctx = canvas.getContext('2d');

          canvas.width = width;
          canvas.height = height;

          ctx.translate(canvas.width, 0);
          ctx.scale(-1, 1);
          ctx.drawImage(video.video, 0, 0, width, height);
          setTimeout(drawImge, 33);
        })
      }
    }

    setTimeout(drawImge, 33);
    return (
      <>
        <Webcam mirrored audio={false}
          height={height} width={width}
          videoConstraints={videoConstraints} className={style['video']}
          ref={videoRef}/>
        <div className={style['grid-cam']} ref={camAreaRef} >

          {
            canvasRefs.map((canvasRef, index) => 
                <canvas width={width} height={height} ref={canvasRef} className={style[videoClass[index]]} key={index}></canvas>
            )
          }

        </div>
      </>
    )
}

export default FilterCam;
