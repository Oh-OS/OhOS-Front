
import React, { createContext, useState } from 'react';
import styles from '../../styles/bubble/BubbleProvider.module.css'
export const BubbleContext = createContext();

function BubbleProvider({ children }) {
    const [ selectedName, setSelectedName ] = useState('');

    const getBubbleClassName = name => {
      return selectedName === name ? `${styles['user-box']} ${styles['select-user-box']}` : `${styles['user-box']}`;
    }

    const getUserline = name => {
        return selectedName === name ? null : styles['line'];
    }

    return (
        <BubbleContext.Provider value={{ selectedName, setSelectedName, getBubbleClassName, getUserline }}>
          {children}
        </BubbleContext.Provider>
    );
}

export default BubbleProvider;
