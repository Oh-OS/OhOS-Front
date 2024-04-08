import React, {useContext} from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/bubble/UserBox.module.css'

import { BubbleContext } from './BubbleProvider';
import userInfoList from'./UserInfoList';


function UserBox({ name }) {
    const { getBubbleClassName, setSelectedName, getUserline } = useContext(BubbleContext);
    console.log(getBubbleClassName);
    return(
        <>
            <div className={getBubbleClassName(name)} onClick={() => setSelectedName(name)}>
                <img src={userInfoList[name]} className={style['profile-img']}/>
                <div className={style['chat-info']}>
                    <div className={style['user-info']}>
                        <div className={style['user-name']}>{name}</div>
                        <div className={style['recent-date']}>2024/3/11</div>
                    </div>
                    <div className={style['chat-detail']}>
                        안영랗세요ㅗㅇ 안녀아헷ㅇ 아니에ㅑ노라ㅓㄴ라도절더ㅏㅗ
                    </div>
                </div>
            </div>
            <div className={getUserline(name)} name={name}></div>
        </>

    )
}

export default UserBox;