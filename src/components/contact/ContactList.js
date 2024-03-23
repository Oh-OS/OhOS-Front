import { useState, useContext } from "react";
import "../../styles/common/Style.css"
import styles from '../../styles/contact/ContactList.module.css';

import FilteredContactList from "./FilteredContactList";
import DefaultContactList from "./DefaultContactList"
import { ContactContext } from './ContactProvider';

function ContactList(){
    const [inputValue, setInputValue] = useState('');
    const { selectedName, setSelectedName } = useContext(ContactContext);

    const getContactClassName = nameId => {
        return selectedName === nameId ? `${styles['contact-name']} ${styles['select-contact']}` : `${styles['contact-name']}`;
    }

    const selectContact = nameId => {
        setSelectedName(nameId);
    }

    return(
        <>
            <div className={styles['contact-list-container']}>
                <input placeholder="검색어를 입력하세요" className={styles['contact-filter']} value={inputValue}
                    onChange={e => {setInputValue(e.target.value)}}/>
                { inputValue ? <FilteredContactList inputValue={inputValue}/> : <DefaultContactList selectContact={selectContact} getContactClassName={getContactClassName}/>}
            </div>
        </>
    )
}

export default ContactList;