import '../../styles/common/Style.css'
import styles from '../../styles/contact/ContactInfo.module.css'

function ContactInfo() {
    return(
        <div className={styles['user-profile']}>
            <div className={styles['user-title']}>
                <div className={styles['user-profile-img']}>
                    <img src="/images/MapIcon.png"/>
                </div>
                <div className={styles['user-name']}>이해원</div>
            </div>
            <div className={styles['line']}></div>
            <div className={styles['contact-btns']}>
                <div className={styles['contact-btn']}>
                    <img src="/images/Contact/message-icon.png" className={styles['contact-icon']}/>
                    <div className={styles['btn-name']}>메세지</div>
                </div>
                <div className={styles['contact-btn']}>
                    <img src="/images/Contact/call-icon.png" className={styles['contact-icon']}/>
                    <div className={styles['btn-name']}>통화</div>
                </div>
                <div className={styles['contact-btn']}>
                    <img src="/images/Contact/video-icon.png" className={styles['contact-icon']}/>
                    <div className={styles['btn-name']}>비디오</div>
                </div>
                <div className={styles['contact-btn']}>
                    <img src="/images/Contact/email-icon.png" className={styles['contact-icon']}/>
                    <div className={styles['btn-name']}>메일</div>
                </div>
            </div>
            <div className={styles['user-info-container']}>
                <div className={styles['user-info']}>
                    <div className={styles['info-title']}>휴대전화</div>
                    <div className={styles['info-detail']}>010-1234-8889</div>
                </div>
                <div className={styles['user-info']}>
                    <div className={styles['info-title']}>메일</div>
                    <div className={styles['info-detail']}>w2218@e-mirim.hs.kr</div>
                </div>
                <div className={styles['user-info']}>
                    <div className={styles['info-title']}>주소</div>
                    <div className={styles['info-detail']}>서울특별시 영등포구</div>
                </div>
                <div className={styles['user-info']}>
                    <div className={styles['info-title']}>메모</div>
                    <div className={styles['info-detail']}>
                        안녕하세요 여러분 저는 오은영체제의 백엔드 개발을 맡은 황혜경입니다. 즐거운 ITSHOW 관람 되시길^0^
                    </div>
                </div>
            </div>
    
        </div>
    )
}

export default ContactInfo;