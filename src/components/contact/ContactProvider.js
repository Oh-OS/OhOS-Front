
import React, { createContext, useState } from 'react';
import styles from '../../styles/contact/Provide.module.css'
export const ContactContext = createContext();

function ContactProvider({ children }) {
    const [selectedName, setSelectedName] = useState(null);
    const getContactClassName = nameId => {
      return selectedName === nameId ? `${styles['contact-name']} ${styles['select-contact']}` : `${styles['contact-name']}`;
    }
    const selectContact = nameId => {
      setSelectedName(nameId);
    }
    return (
        <ContactContext.Provider value={{ selectedName, setSelectedName, getContactClassName, selectContact }}>
          {children}
        </ContactContext.Provider>
    );
}

export default ContactProvider;
