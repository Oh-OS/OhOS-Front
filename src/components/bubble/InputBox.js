import '../../styles/common/Style.css'
import style from '../../styles/bubble/InputBox.module.css'

function InputBox({ value, setValue }) {
    return(
        <>
            <input className={style['input-box']} placeholder='검색' value={value} onChange={e => setValue(e.target.value)}/>
        </>
    )
}   

export default InputBox;