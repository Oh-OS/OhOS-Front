
import React, { createContext, useState } from 'react';
export const ContactContext = createContext();

function ContactProvider({ children }) {
    const [selectedName, setSelectedName] = useState(null);
    return (
        <ContactContext.Provider value={{ selectedName, setSelectedName }}>
          {children}
        </ContactContext.Provider>
    );
}

export default ContactProvider;
