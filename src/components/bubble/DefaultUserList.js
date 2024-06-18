import React, { useState, useEffect } from 'react';
import '../../styles/common/Style.css';
import style from '../../styles/bubble/DefaultUserList.module.css';
import UserBox from './UserBox';
import axios from 'axios';

function DefaultUserList({ rooms, handleRoomClick }) {
    const usernames = ['김하은', '양가윤', '이서영', '이해원', '조서현', '최보람', '황혜경'];

    const [lastMessages, setLastMessages] = useState([]);

    useEffect(() => {
        const getLastMessages = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BUBBLEHOST}/recent-messages`);
                setLastMessages(res.data); 
            } catch (error) {
                console.error('Error fetching recent messages:', error);
            }
        };

        getLastMessages();
    }, [lastMessages]);

    return (
        <div className={style['list']}>
            {usernames.map((name, index) => (
                <UserBox
                    key={index}
                    name={name}
                    room={rooms[index]?.id}
                    lastChat={lastMessages[index]?.chats[0]?.chat || ''}
                    createdAt={lastMessages[index]?.chats[0]?.createdAt || ''}
                    handleRoomClick={handleRoomClick}
                />
            ))}
        </div>
    );
}

export default DefaultUserList;