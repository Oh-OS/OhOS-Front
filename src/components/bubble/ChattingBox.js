import '../../styles/common/Style.css'
import style from '../../styles/bubble/ChattingBox.module.css'

import MyChat from './MyChat';
import YourChat from './YourChat';

function ChattingBox({ date }) {
    return(
        <div className={style['chatting-box']}>
            <div className={style['date-box']}>{date}</div>
            <div className={style['chatting']}>
                <MyChat text='안녕하세용'/>
                <YourChat text='똥머그세여'/>
                <MyChat text='아 배가 너무 아파요 저 내일 민증 찌거요 응원해주세욤 아아 배아파 ㅜ'/>
            </div>
        </div>
    )
}

export default ChattingBox;