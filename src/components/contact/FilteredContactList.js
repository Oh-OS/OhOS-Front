import { useState, useEffect, useContext } from 'react';
import '../../styles/common/Style.css';
import styles from '../../styles/contact/FilteredContactList.module.css'
import { ContactContext } from './ContactProvider';

const userNameList = ['김하은', '양가윤', '이서영', '이해원', '조서현', '최보람', '황혜경'];

function FilteredContactList({ inputValue }) {
    const [ filteredContacts, setFilteredContacts ] = useState([]);
    const { selectedName, setSelectedName } = useContext(ContactContext);

    useEffect(() => {
        let filteredContactList = userNameList.map((contact, index) => {
            if(contact.includes(inputValue)){
                return <div className={getContactClassName(index)} onClick={() => selectContact(index)} key={index}>{contact}</div>
            }
        });
        setFilteredContacts(filteredContactList);
    }, [inputValue, selectedName])

    const getContactClassName = nameId => {
        return selectedName === nameId ? `${styles['contact-name']} ${styles['select-contact']}` : `${styles['contact-name']}`;
    }

    const selectContact = nameId => {
        setSelectedName(nameId);
    }

    return(
        <div className={styles['filtered-contact-list']}>
            <div className={styles['filter-title']}>이름 일치 상위 항목</div>
            <div className={styles['contact-list']}>
            { filteredContacts.length ? filteredContacts : 
                <div className={styles['contact-notification']}>일치하는 항목이 없습니다.</div>}
            </div>
        </div>
    )
}

export default FilteredContactList;