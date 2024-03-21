import "../../styles/common/Style.css"
import styles from '../../styles/contact/ContactList.module.css';

function ContactList(){
    return(
        <>
            <div className={styles['contact-list-container']}>
                <input placeholder="검색어를 입력하세요" className={styles['contact-filter']}/>
                <div className={styles['contact-list']}>
                    <div className={styles['contact-box']}>
                        <div className={styles['contact-title']}>ㄱ</div>
                        <div className={styles['currect-contacts']}>
                            <div className={styles['contact-name']}>김하은</div>
                        </div>
                    </div>

                    <div className={styles['contact-box']}>
                        <div className={styles['contact-title']}>ㅇ</div>
                        <div className={styles['currect-contacts']}>
                            <div className={styles['contact-name']}>양가윤</div>
                            <div className={styles['contact-name']}>이서영</div>
                            <div className={styles['contact-name']}>이해원</div>
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
            </div>
        </>
    )
}

export default ContactList;