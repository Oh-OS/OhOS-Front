import "../../styles/common/Style.css"
import styles from '../../styles/contact/ContactBtn.module.css';

function ContactBtn({ img, name }){
    return(
        <div className={styles['contact-btn']}>
            <img src={`/images/Contact/${img}-icon.png`} className={styles['contact-icon']}/>
            <div className={styles['btn-name']}>{name}</div>
        </div>  
    )
}

export default ContactBtn;