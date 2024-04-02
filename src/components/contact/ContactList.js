import { useState } from "react";
import "../../styles/common/Style.css"
import styles from '../../styles/contact/ContactList.module.css';

import FilteredContactList from "./FilteredContactList";
import DefaultContactList from "./DefaultContactList"

function ContactList(){
    const [inputValue, setInputValue] = useState('');

    return(
        <>
            <div className={styles['contact-list-container']}>
                <input placeholder="검색어를 입력하세요" className={styles['contact-filter']} value={inputValue}
                    onChange={e => {setInputValue(e.target.value)}}/>
                { inputValue ? <FilteredContactList inputValue={inputValue}/> : <DefaultContactList/>}
            </div>
        </>     
    )
}

export default ContactList;