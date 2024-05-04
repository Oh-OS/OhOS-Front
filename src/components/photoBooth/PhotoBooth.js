import React, { useState } from "react";
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/PhotoBooth.module.css'

import MainCam from "./MainCam";
import FilterCam from "./FilterCam";
import BottomBar from './BottomBar';

function Photobooth() {
    const [ main, setMain ] = useState(true);
    return(
        <div className={style['background']}>
            <div className={style['cam-area']}>
                { main ? <MainCam/> : <FilterCam/>}
            </div>
            <BottomBar setMain={setMain} main={main}/>
        </div>
    )
}

export default Photobooth;