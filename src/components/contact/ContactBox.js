import '../../styles/common/Style.css';
import styles from '../../styles/contact/ContactBox.module.css'

import CurrectContact from './CurrectContact';

function Contact({ title, name }) {
    return(
        <div className={styles['contact-box']}>
            <div className={styles['contact-title']}>{title}</div>
            <div className={styles['currect-contacts']}>
                {
                    name.map(element => {
                        return <CurrectContact name={element}/>
                    })
                }
            </div>
        </div>
    )
}

export default Contact;