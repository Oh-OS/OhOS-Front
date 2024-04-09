import React, {useState, useContext} from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/bubble/BubbleBox.module.css'

import { BubbleContext } from './BubbleProvider';
import UserListBox from './UserListBox';
import Chat from './Chat';

function BubbleBox() {
    const { selectedName } = useContext(BubbleContext);
    return(
        <div className={style['box']}>
            <UserListBox/>
            {selectedName && <Chat name={selectedName} />}
        </div>
    )
}

export default BubbleBox;