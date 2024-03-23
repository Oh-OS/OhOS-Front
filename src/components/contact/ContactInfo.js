import React, { useContext } from 'react';
import '../../styles/common/Style.css'
import styles from '../../styles/contact/ContactInfo.module.css'

import { ContactContext } from './ContactProvider';

const userInfoList = [
    {
        profileImg: '/images/Contact/ProfileImg/haeun-profile-img.jpg',
        name: '김하은',
        phoneNumber: '010-5790-0633',
        email: 'w2203@e-mirim.hs.kr',
        address: '경북 구미시 도량동',
        memo: '안녕하세요! 저는 프론트엔드 개발자 김하은입니다. 저희가 만든 작품이 즐거우셨다면 좋겠어요. 감상해주셔서 감사합니다!'
    },
    {
        profileImg: '/images/Contact/ProfileImg/gayoon-profile-img.jpg',
        name: '양가윤',
        phoneNumber: '010-5046-8478',
        email: 'w2207@e-mirim.hs.kr',
        address: '광주광역시 북구',
        memo: '안녕하세요. 오은영체제 프론트 개발자 양가윤입니다. 좋은 관람 하세요:)'
    },
    {
        profileImg: '/images/Contact/ProfileImg/haeun-profile-img.jpg',
        name: '이서영',
        phoneNumber: '010-5046-8478',
        email: 'w2210@e-mirim.hs.kr',
        address: '광주광역시 북구',
        memo: '안녕하세요. 오은영체제 프론트 개발자 양가윤입니다. 좋은 관람 하세요:)'
    },
    {
        profileImg: '/images/Contact/ProfileImg/haeun-profile-img.jpg',
        name: '이해원',
        phoneNumber: '010-5046-8478',
        email: 'w2214@e-mirim.hs.kr',
        address: '광주광역시 북구',
        memo: '안녕하세요. 오은영체제 프론트 개발자 양가윤입니다. 좋은 관람 하세요:)'
    },
    {
        profileImg: '/images/Contact/ProfileImg/seohyun-profile-img.jpg',
        name: '조서현',
        phoneNumber: '010-6220-1784',
        email: 'w2215@e-mirim.hs.kr',
        address: '서울특별시 관악구',
        memo: '안녕하세요. 오은영체제 프론트엔드 개발자 조서현입니다! IT Show에 와주셔서 감사합니다. 즐거운 관람 되세요~!'
    },
    {
        profileImg: '/images/Contact/ProfileImg/boram-profile-img.png',
        name: '최보람',
        phoneNumber: '010-9690-4784',
        email: 'w2216@e-mirim.hs.kr',
        address: '서울특별시 강서구',
        memo: '안녕하세요. 여러분 저는 오은영체제 프론트엔드 개발을 맡은 최보람입니다. 재밌게 관람하시고 조심히 가세요~^^'
    },
    {
        profileImg: '/images/Contact/ProfileImg/hyekyung-profile-img.png',
        name: '황혜경',
        phoneNumber: '010-5355-5711',
        email: 'w2218@e-mirim.hs.kr',
        address: '서울특별시 영등포구',
        memo: '안녕하세요 여러분 저는 오은영체제의 백엔드 개발을 맡은 황혜경입니다. 즐거운 ITSHOW 관람 되시길^0^'
    }
    
]

function ContactInfo() {
    const { selectedName } = useContext(ContactContext);

    return(
        <>
            {selectedName !== null && <UserContact userInfo={userInfoList[selectedName]}/>}
        </>
    )
}

function UserContact({ userInfo }) {
    return(
        <div className={styles['user-profile']}>
            <div className={styles['user-title']}>
                <div className={styles['user-profile-img']}>
                    <img src={`${userInfo.profileImg}`}/>
                </div>
                <div className={styles['user-name']}>{userInfo.name}</div>
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
                    <div className={styles['info-detail']}>{userInfo.phoneNumber}</div>
                </div>
                <div className={styles['user-info']}>
                    <div className={styles['info-title']}>메일</div>
                    <div className={styles['info-detail']}>{userInfo.email}</div>
                </div>
                <div className={styles['user-info']}>
                    <div className={styles['info-title']}>주소</div>
                    <div className={styles['info-detail']}>{userInfo.address}</div>
                </div>
                <div className={styles['user-info']}>
                    <div className={styles['info-title']}>메모</div>
                    <div className={styles['info-detail']}>{userInfo.memo}</div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;