import '../../styles/common/Style.css'
import style from '../../styles/bubble/MyChat.module.css'

function MyChat({ text }){
    return(
        <div className={style['chat-box']}>
            <div className={style['my-chat']}>{text}</div>
        </div>
        
    )
}

export default MyChat;