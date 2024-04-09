import '../../styles/common/Style.css'
import style from '../../styles/bubble/YourChat.module.css'

function YourChat({ text }){
    return(
        <div className={style['your-chat']}>{text}</div>
        
    )
}

export default YourChat;