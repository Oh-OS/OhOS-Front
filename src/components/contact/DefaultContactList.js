import "../../styles/common/Style.css"
import styles from "../../styles/contact/DefaultContactList.module.css"

import ContactBox from './ContactBox';

function DefaultContactList() {
    return(
        <div className={styles['contact-list']}>
            <ContactBox title="ㄱ" name={['김하은']}/>
            <ContactBox title="ㅇ" name={['양가윤', '이서영', '이해원']}/>
            <ContactBox title="ㅈ" name={['조서현']}/>
            <ContactBox title="ㅊ" name={['최보람']}/>
            <ContactBox title="ㅎ" name={['황혜경']}/>
        </div>
    )
}

export default DefaultContactList;