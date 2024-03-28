import styles from '../../styles/launchpad/LaunchpadPage.module.css'
import { Icon } from '@iconify/react';

function SearchBar() {
    return (
        <>
            <input type='text' placeholder='검색' className={styles['searchBar']}/>
        </>

    )
}

export default SearchBar;