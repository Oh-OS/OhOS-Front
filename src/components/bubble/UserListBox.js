import React, { useState } from 'react';
import '../../styles/common/Style.css';
import style from '../../styles/bubble/UserListBox.module.css';
import InputBox from './InputBox';
import DefaultUserList from './DefaultUserList';
import FilteredUserList from './FilteredUserList';

function UserListBox({ rooms, users, handleRoomClick }) {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (value) => {
        setSearchValue(value);
    };

    return (
        <div className={style['box']}>
            <InputBox value={searchValue} setValue={handleInputChange} />
            {searchValue ? (
                <FilteredUserList searchValue={searchValue} rooms={rooms} handleRoomClick={handleRoomClick} />
            ) : (
                <DefaultUserList rooms={rooms} handleRoomClick={handleRoomClick} />
            )}
        </div>
    );
}

export default UserListBox;
