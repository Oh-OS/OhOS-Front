import React, { useRef, useEffect, useState } from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/FilterCam.module.css'
import Webcam from 'react-webcam';

import XRay from './filters/XRay';
import StretchH from './filters/StretchH';
import Zombie from './filters/Zombie';
import Circle from './filters/Circle';
import Basic from './filters/Basic';
import Comic from './filters/Comic';
import StretchV from './filters/StretchV';
import Flip from './filters/Flip'
import Swirl from './filters/Swirl'

function FilterCam({ width, height }) {
    const camAreaRef = useRef();
    const canvasRefs = Array.from({ length: 9 }, () => React.createRef());
    const videoClass = ['invert', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const videoRef = useRef();
    const videoFunction = [XRay, StretchH, Zombie, Circle, Basic, Comic, Flip, StretchV, Swirl];

    const videoConstraints = {
      width: width,
      height: height,
      facingMode: "user"
    };

    function drawImge() {
      const video = videoRef.current;
      if(video && canvasRefs[0].current){
        canvasRefs.forEach((canvasRef, index) => {
          const canvas = canvasRef.current;
          var ctx = canvas.getContext('2d');

          canvas.width = width;
          canvas.height = height;

          videoFunction[index](ctx, video, canvas, width, height, drawImge);
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
        <svg>
            {/* <defs> */}
            <filter id="swirlFilter" width="100%" height="100%" x="0%" y="0%">
                <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="2" result="turbulence"/>  
                <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="40" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
            <filter id="erode">
                <feMorphology operator="erode" radius="2"></feMorphology>
            </filter>
            <rect width="200" height="200" style={{fill: 'green'}} filter='url(#swirlFilter)'/> 
            {/* </defs> */}
        </svg>
      </>
    )
}

export default FilterCam;
