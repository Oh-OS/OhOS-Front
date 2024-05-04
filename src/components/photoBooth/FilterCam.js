import React, { useRef, useEffect, useState } from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/FilterCam.module.css'
import Webcam from 'react-webcam';

function FilterCam() {
    const [ height, setHeight ] = useState(254.66666666666669);
    const [ width, setWidth ] = useState(580.796875);

    const videos = Array.from({ length: 9 });

    const videoConstraints = {
      width: width,
      height: height,
      facingMode: "user"
    };

    function handleResize() {
      let width = camArea.getBoundingClientRect().width / 3 - 8;
      let height = camArea.getBoundingClientRect().height / 3 - 8;
      setHeight(height);
      setWidth(width);
    }

    const camAreaRef = useRef(null);
    let camArea;

    useEffect(() => {
      camArea = camAreaRef.current;
      let width = camArea.getBoundingClientRect().width / 3 - 8;
      let height = camArea.getBoundingClientRect().height / 3 - 8;
      setHeight(height);
      setWidth(width);
      window.addEventListener('resize', handleResize)
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
