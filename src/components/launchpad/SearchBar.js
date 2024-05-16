import React, { useState } from 'react';
import styles from '../../styles/launchpad/LaunchpadPage.module.css';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        onSearch(term);
    };

    return (
        <input 
            type='text' 
            placeholder='검색' 
            className={styles['searchBar']}
            value={searchTerm}
            onChange={handleSearchChange}
        />
    );
}

export default SearchBar;
