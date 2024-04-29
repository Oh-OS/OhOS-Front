import '../../styles/common/Style.css'
import style from '../../styles/bubble/ChattingBox.module.css'

import MyChat from './MyChat';
import YourChat from './YourChat';

function ChattingBox({ date }) {
    return(
        <div className={style['chatting-box']}>
            <div className={style['date-box']}>{date}</div>
            <div className={style['chatting']}>
                <MyChat text='안녕!'/>
                <YourChat text='안녕~!'/>
                <MyChat text='만나서 반가워'/>
            </div>
        </div>
    )
}

export default ChattingBox;