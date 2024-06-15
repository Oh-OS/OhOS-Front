import React from 'react';
import style from '../../styles/bubble/ChattingBox.module.css';
import MyChat from './MyChat';
import YourChat from './YourChat';

function ChattingBox({ message }) {
    // console.log("메시지",message)

    console.log("잘되나유")
    const renderChat = () => {
        if (message.userKey === 8) {
            return <MyChat text={message.chat} />;
        } else {
            return <YourChat text={message.chat} />;
        }
    };

    return (
        <div className={style['chatting-box']}>
            <div className={style['date-box']}>{message.date}</div>
            <div className={style['chatting']}>
                {renderChat()}
            </div>
        </div>
    );
}

export default ChattingBox;
