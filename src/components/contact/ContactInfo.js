import React, { useContext } from 'react';
import '../../styles/common/Style.css'
import styles from '../../styles/contact/ContactInfo.module.css'

import { ContactContext } from './ContactProvider';
import ContactBtn from './ContactBtn';
import UserInfo from './UserInfo';
import userInfoList from'./UserInfoList';

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
                <ContactBtn img="message" name="메세지"/>
                <ContactBtn img="call" name="통화"/>
                <ContactBtn img="video" name="비디오"/>
                <ContactBtn img="email" name="메일"/>
            </div>
            <div className={styles['user-info-container']}>
                <UserInfo title="휴대전화" detail={userInfo.phoneNumber}/>
                <UserInfo title="메일" detail={userInfo.email}/>
                <UserInfo title="주소" detail={userInfo.address}/>
                <UserInfo title="메모" detail={userInfo.memo}/>
            </div>
        </div>
    )
}

export default ContactInfo;