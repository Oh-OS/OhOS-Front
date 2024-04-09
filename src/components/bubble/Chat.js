import React from 'react';
import '../../styles/common/Style.css'
import style from '../../styles/bubble/Chat.module.css'
import { Icon } from '@iconify/react';

import ChattingBox from './ChattingBox';

function Chat({ name }) {

    const fileInput = React.useRef(null);

    const handleButtonClick = (e) => {
        fileInput.current.click();
    };

    const handleChange = (e) => {
        const correctForm = /(.*?)\.(jpg|jpeg|gif|bmp|png)$/;
        if (!e.target.files[0].name.match(correctForm)) {
            return alert("이미지 파일만 업로드 가능합니다.");
        }
        console.log(e.target.files[0]);
    };

    return(
            <div className={style['chat-box']}>
                <div className={style['chat-title']}>
                    <div className={style['sub-title']}>받는사람 :</div>
                    <div className={style['user-name']}>{name}</div>
                </div>
                <div className={style['chatting-box']}>
                    <ChattingBox date='2024년 3월 12일 (화) 17:09'/>
                    <ChattingBox date='2024년 3월 12일 (화) 17:09'/>
                    <ChattingBox date='2024년 3월 12일 (화) 17:09'/>
                    <ChattingBox date='2024년 3월 12일 (화) 17:09'/>
                    <ChattingBox date='2024년 3월 12일 (화) 17:09'/>
                </div>
                <div className={style['add-chat']}>
                    <input type='text' className={style['chat-input']}/>
                    <Icon icon="carbon:image" className={style['send-img']} onClick={handleButtonClick} />
                    <Icon icon="mingcute:send-line" className={style['send-message']}/>

                    <input type="file" ref={fileInput} onChange={handleChange} style={{ display: "none" }} accept='image/*' />
                </div>
            </div>
    )
}

export default Chat;