import "../../styles/common/Style.css"
import styles from '../../styles/contact/UserInfo.module.css';

function UserInfo({ title, detail }){
    return(
        <div className={styles['user-info']}>
            <div className={styles['info-title']}>{title}</div>
            <div className={styles['info-detail']}>{detail}</div>
        </div> 
    )
}

export default UserInfo;