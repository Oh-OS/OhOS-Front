import "../../styles/common/Style.css"
import styles from "../../styles/contact/DefaultContactList.module.css"

function DefaultContactList({ selectContact, getContactClassName }) {
    return(
        <div className={styles['contact-list']}>
            <div className={styles['contact-box']}>
                <div className={styles['contact-title']}>ㄱ</div>
                <div className={styles['currect-contacts']}>
                    <div className={getContactClassName(0)} onClick={() => selectContact(0)}>김하은</div>
                </div>
            </div>

            <div className={styles['contact-box']}>
                <div className={styles['contact-title']}>ㅇ</div>
                <div className={styles['currect-contacts']}>
                    <div className={getContactClassName(1)} onClick={() => selectContact(1)}>양가윤</div>
                    <div className={getContactClassName(2)} onClick={() => selectContact(2)}>이서영</div>
                    <div className={getContactClassName(3)} onClick={() => selectContact(3)}>이해원</div>
                </div>
            </div>

            <div className={styles['contact-box']}>
                <div className={styles['contact-title']}>ㅈ</div>
                <div className={styles['currect-contacts']}>
                    <div className={getContactClassName(4)} onClick={() => selectContact(4)}>조서현</div>
                </div>
            </div>

            <div className={styles['contact-box']}>
                <div className={styles['contact-title']}>ㅊ</div>
                <div className={styles['currect-contacts']}>
                    <div className={getContactClassName(5)} onClick={() => selectContact(5)}>최보람</div>
                </div>
            </div>

            <div className={styles['contact-box']}>
                <div className={styles['contact-title']}>ㅎ</div>
                <div className={styles['currect-contacts']}>
                    <div className={getContactClassName(6)} onClick={() => selectContact(6)}>황혜경</div>
                </div>
            </div>
        </div>
    )
}

export default DefaultContactList;