import { useContext } from 'react';
import '../../styles/common/Style.css';
import styles from '../../styles/contact/ContactBox.module.css'
import { ContactContext } from './ContactProvider';

function CurrectContact({ name }) {
    const { getContactClassName, selectContact } = useContext(ContactContext);
    const userList = ['김하은', '양가윤', '이서영', '이해원', '조서현', '최보람', '황혜경'];
    const index = userList.indexOf(name);
    return(
        <>
            <div className={getContactClassName(index)} onClick={() => selectContact(index)} key={index}>{name}</div>             
        </>
    )
}

export default CurrectContact;