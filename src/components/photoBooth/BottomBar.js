import React from "react";
import '../../styles/common/Style.css'
import style from '../../styles/photoBooth/BottomBar.module.css'
import { Icon } from '@iconify/react';

function Photobooth({ setMain, main }) {

    const handleClick = () => {
        setMain(!main);
    }

    return(
        <div className={style['bottom-bar']}>
            <div className={style['photo-btn']}>
                <Icon icon="f7:camera-fill" className={style['camera-icon']}/>
            </div>
            <div className={style['filter-btn']} onClick={handleClick}>효과</div>
        </div>
    )
}

export default Photobooth;