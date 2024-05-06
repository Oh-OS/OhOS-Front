import React, { useState, useEffect, useRef } from "react";
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/PhotoBooth.module.css'

import MainCam from "./MainCam";
import FilterCam from "./FilterCam";
import BottomBar from './BottomBar';

function Photobooth() {
    const [ main, setMain ] = useState(true);

    const camRef = useRef(null);

    // 전시노트북에 맞춰 사이즈 조절 (16:9)
    const size = {
        width: 1400,
        height: 788
    };

    const filterSize = {
        width : size.width / 3,
        height: size.height / 3
    }
    
    return(
        <div className={style['background']}>
            <div className={style['cam-area']} ref={camRef} style={{width: size.width}}>
                { main ? <MainCam {...size}/> : <FilterCam {...filterSize}/>}
            </div>
            <BottomBar setMain={setMain} main={main}/>
        </div>
    )
}

export default Photobooth;