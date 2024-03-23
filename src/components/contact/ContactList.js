import { useState, useEffect } from "react";
import "../../styles/common/Style.css"
import styles from '../../styles/contact/ContactList.module.css';

import FilteredContactList from "./FilteredContactList";
import DefaultContactList from "./DefaultContactList"

const userNameList = ['김하은', '양가윤', '이서영', '이해원', '조서현', '최보람', '황혜경'];
function ContactList(){
    const [inputValue, setInputValue] = useState('');
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [selectedName, setSelectedName] = useState(null);

    useEffect(() => {
        let filteredContactList = userNameList.filter(contact => contact.includes(inputValue));
        setFilteredContacts(filteredContactList);

    }, [inputValue])

    const getContactClassName = nameId => {
        return selectedName === nameId ? `${styles['contact-name']} ${styles['select-contact']}` :`${styles['contact-name']} ${styles['select-contact']}`;
    }

    const selectContact = nameId => {
        setSelectedName(nameId);
    }

    return(
        <>
            <div className={styles['contact-list-container']}>
                <input placeholder="검색어를 입력하세요" className={styles['contact-filter']} value={inputValue}
                    onChange={e => {setInputValue(e.target.value)}}/>
                { inputValue ? <FilteredContactList filteredContactList={filteredContacts}/> : <DefaultContactList selectContact={selectContact} getContactClassName={getContactClassName}/>}
            </div>
        </>
    )
}

export default ContactList;