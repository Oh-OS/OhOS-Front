import { useState } from 'react'
import '../../styles/common/Style.css'
import style from '../../styles/bubble/UserListBox.module.css'
import InputBox from './InputBox'

import DefaultUserList from './DefaultUserList'
import FilteredUserList from './FilteredUserList'


function UserBox() {
    const [ searhValue, setSearchValue ] = useState('');
    return(
        <div className={style['box']}>
            <InputBox value={searhValue} setValue={setSearchValue}/>
            {searhValue ? <FilteredUserList searhValue={searhValue}/> : <DefaultUserList/>}
        </div>
    )
}

export default UserBox;