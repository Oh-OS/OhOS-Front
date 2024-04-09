import React, {useState} from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/bubble/BubbleBox.module.css'
import UserListBox from './UserListBox';

function BubbleBox() {
    return(
        <div className={style['box']}>
            <UserListBox/>
        </div>
    )
}

export default BubbleBox;