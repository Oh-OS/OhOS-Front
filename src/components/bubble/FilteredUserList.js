import React, { useState, useEffect } from 'react';
import '../../styles/common/Style.css';
import style from '../../styles/bubble/FilteredUserList.module.css';
import UserBox from './UserBox';

function FilteredUserList({ searchValue, rooms, handleRoomClick }) {
    const usernames = ['김하은', '양가윤', '이서영', '이해원', '조서현', '최보람', '황혜경'];
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const filteredUserList = usernames.map((name, index) => {
            if (name.includes(searchValue)) {
                return <UserBox key={index} name={name} room={rooms[index]?.id} handleRoomClick={handleRoomClick} />;
            }
            return null;
        }).filter(element => element !== null);
        
        setFilteredUsers(filteredUserList);
    }, [searchValue, rooms, handleRoomClick]);

    return (
        <div className={style['list-box']}>
            <div className={style['title']}>이름 일치 상위 항목</div>
            {filteredUsers.length ? filteredUsers : <div>일치하는 항목이 없습니다.</div>}
        </div>
    );
}

export default FilteredUserList;
