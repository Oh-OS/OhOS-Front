import '../../styles/common/Style.css';
import styles from '../../styles/contact/FilteredContactList.module.css'

const showContactList = filteredContactList => {
    let contactList = filteredContactList.map((contact, index) => {
        return <div className={styles['contact']} key={index}>{contact}</div>
    })

    return contactList;
}

function FilteredContactList({ filteredContactList }) {
    return(
        <div className={styles['filtered-contact-list']}>
            <div className={styles['filter-title']}>이름 일치 상위 항목</div>
            <div className={styles['contact-list']}>
            { filteredContactList.length ? showContactList(filteredContactList) : 
                <div className={styles['contact-notification']}>일치하는 항목이 없습니다.</div>}
            </div>
        </div>
    )
}

export default FilteredContactList;