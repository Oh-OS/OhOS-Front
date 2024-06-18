import React, {useContext} from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/bubble/UserBox.module.css'
import axios from 'axios';

import { BubbleContext } from './BubbleProvider';
import userInfoList from'./UserInfoList';

function UserBox({ name, onClick, handleRoomClick, room, lastChat, createdAt }) {
    const { getBubbleClassName, setSelectedName, getUserline } = useContext(BubbleContext);

    const handleClick = () => {
        handleRoomClick(room);
        setSelectedName(name);
    };

    const formatDate = (date) => {
        if (date) {
            const formattedDate = new Date(date).toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/-/g, '/');
            return formattedDate;
        } else {
            return '';
        }
    }

    return(
        <>
            <div className={getBubbleClassName(name)} onClick={handleClick}>
                <img src={userInfoList[name]} className={style['profile-img']}/>
                <div className={style['chat-info']}>
                    <div className={style['user-info']}>
                        <div className={style['user-name']}>{name}</div>
                        <div className={style['recent-date']}>{formatDate(createdAt)}</div>
                    </div>
                    <div className={style['chat-detail']}>
                        {lastChat}
                    </div>
                </div>
            </div>
            <div className={getUserline(name)} name={name}></div>
        </>

    )
}

export default UserBox;