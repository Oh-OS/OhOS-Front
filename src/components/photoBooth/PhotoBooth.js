import React, { useState, useEffect, useRef } from "react";
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/PhotoBooth.module.css'

import MainCam from "./MainCam";
import FilterCam from "./FilterCam";

function Photobooth() {
    const [ main, setMain ] = useState(true);
    const [ index, setIndex ] = useState(4);

    const camRef = useRef(null);

    // 전시노트북에 맞춰 사이즈 조절 (16:9)
    const size = {
        width: 1600,
        height: 950
    };

    const filterSize = {
        width : size.width / 3,
        height: size.height / 3
    }

    const mainReq = {
        index: index,
        main: main,
        setMain: setMain
    }

    const filterReq = {
        setIndex: setIndex,
        main: main,
        setMain: setMain
    }
    
    return(
        <div className={style['background']}>
            { main ? <MainCam {...size} {...mainReq}/> : <FilterCam {...filterSize} {...filterReq}/>}
            
        </div>
    )
}

export default Photobooth;