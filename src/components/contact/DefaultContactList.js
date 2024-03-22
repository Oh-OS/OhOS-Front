import "../../styles/common/Style.css"
import styles from "../../styles/contact/DefaultContactList.module.css"

function DefaultContactList({ selectContact, getContactClassName }) {
    return(
        <div className={styles['contact-list']}>
            <div className={styles['contact-box']}>
                <div className={styles['contact-title']}>ㄱ</div>
                <div className={styles['currect-contacts']}>
                    <div className={getContactClassName(0)} onClick={selectContact}>김하은</div>
                </div>
            </div>

            <div className={styles['contact-box']}>
                <div className={styles['contact-title']}>ㅇ</div>
                <div className={styles['currect-contacts']}>
                    <div className={styles['contact-name']} onClick={selectContact}>양가윤</div>
                    <div className={styles['contact-name']} onClick={selectContact}>이서영</div>
                    <div className={styles['contact-name']} onClick={selectContact}>이해원</div>
                </div>
            </div>

            <div className={styles['contact-box']}>
                <div className={styles['contact-title']}>ㅈ</div>
                <div className={styles['currect-contacts']}>
                    <div className={styles['contact-name']}>조서현</div>
                </div>
            </div>

            <div className={styles['contact-box']}>
                <div className={styles['contact-title']}>ㅊ</div>
                <div className={styles['currect-contacts']}>
                    <div className={styles['contact-name']}>최보람</div>
                </div>
            </div>

            <div className={styles['contact-box']}>
                <div className={styles['contact-title']}>ㅎ</div>
                <div className={styles['currect-contacts']}>
                    <div className={styles['contact-name']}>황혜경</div>
                </div>
            </div>
        </div>
    )
}

export default DefaultContactList;