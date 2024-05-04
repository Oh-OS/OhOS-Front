import React, { useRef, useEffect, useState } from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/FilterCam.module.css'
import Webcam from 'react-webcam';

function FilterCam() {
    const [ height, setHeight ] = useState(0);
    const [ width, setWidth ] = useState(0);
    const [ ratio, setRadio ] = useState(0);
    const videos = Array.from({ length: 9 });

    const videoConstraints = {
      facingMode: "user",
      aspectRatio: ratio
    };

    function handlrResize() {
      let width = camArea.getBoundingClientRect().width / 3 - 8;
      let height = camArea.getBoundingClientRect().height / 3 - 8;
      setHeight(height);
      setWidth(width);
      setRadio(width / height);
    }

    const camAreaRef = useRef(null);
    let camArea;
    useEffect(() => {
      camArea = camAreaRef.current;
      let width = camArea.getBoundingClientRect().width / 3 - 8;
      let height = camArea.getBoundingClientRect().height / 3 - 8;
      setHeight(height);
      setWidth(width);
      setRadio(width / height);
      window.addEventListener('resize', handlrResize)
    }, []);


    return (
        <div className={style['grid-cam']} ref={camAreaRef} >
          {
            videos.map((s, index) => 
                <Webcam mirrored audio={false}
                  height={height} width={width}
                  videoConstraints={videoConstraints}
                  className={style['cam']} key={index}/>
            )
          }

        </div>
    )
}

export default FilterCam;
