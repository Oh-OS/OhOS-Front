import React from 'react';
import '../../styles/common/Style.css';
import style from '../../styles/bubble/DefaultUserList.module.css';
import UserBox from './UserBox';

function DefaultUserList({ rooms, handleRoomClick }) {
    const usernames = ['김하은', '양가윤', '이서영', '이해원', '조서현', '최보람', '황혜경'];

    return (
        <div className={style['list']}>
            {usernames.map((name, index) => (
                <UserBox key={index} name={name} room={rooms[index]?.id} handleRoomClick={handleRoomClick}/>
            ))}
        </div>
    );
}

export default DefaultUserList;
