import React, { useRef, useEffect, useState } from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/FilterCam.module.css'
import Webcam from 'react-webcam';

import XRay from './filters/XRay';
import StretchH from './filters/StretchH';
import Zombie from './filters/Zombie';
import Sunglass from './filters/Sunglass';
import Basic from './filters/Basic';
import Faded from './filters/Faded';
import StretchV from './filters/StretchV';
import Flip from './filters/Flip'
import Swirl from './filters/Swirl'

import BottomBar from './BottomBar';

function FilterCam({ width, height, setIndex, main, setMain}) {
    const camAreaRef = useRef();
    const canvasRefs = Array.from({ length: 9 }, () => React.createRef());
    const videoRef = useRef();
    const videoFunction = [XRay, StretchH, Zombie, Sunglass, Basic, Faded, Flip, StretchV, Swirl];

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

    const setData = (index) => {
      setIndex(index);
      setMain(true);
    }

    return (
      <>
        <div className={style['cam-area']}>
          <Webcam mirrored audio={false}
            height={height} width={width}
            videoConstraints={videoConstraints} className={style['video']}
            ref={videoRef}/>
          <div className={style['grid-cam']} ref={camAreaRef} style={{width: width * 3 + 8, height: height * 3 + 8}}>

            {
              canvasRefs.map((canvasRef, index) => 
                  <div className={style['video-box']} style={{height: height, position: 'relative'}}>
                    <canvas width={width} height={height}
                      ref={canvasRef} key={index} onClick={() => setData(index)}></canvas>
                    { index === 3 && 
                      <>
                        <img src="/images/PhotoBooth/sunglasses.png" className={style['sunglass-img1']}></img>  
                        <img src="/images/PhotoBooth/sunglasses.png" className={style['sunglass-img2']}></img>  
                      </>
                    }
                  </div>
                  
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
        </div>
        <BottomBar setMain={setMain} main={main}/>
      </>
    )
}

export default FilterCam;
