import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import UserListBox from './UserListBox';
import '../../styles/common/Style.css';
import style from '../../styles/bubble/BubbleBox.module.css';
import { io } from 'socket.io-client';
import Chat from './Chat';
import { BubbleContext } from './BubbleProvider';

function BubbleBox() {
    const [rooms, setRooms] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const { selectedName } = useContext(BubbleContext);

    const socket = io(process.env.REACT_APP_BUBBLEHOST);
    socket.on("connect", () => {
        console.log("Connected to server");
        socket.emit("hello", "world");
    });
    socket.on("howdy", (arg) => {
        console.log("arg", arg);
    });

    useEffect(() => {
        async function fetchRoomsAndUsers() {
            try {
                const roomsRes = await axios.get(`${process.env.REACT_APP_BUBBLEHOST}/rooms`);
                setRooms(roomsRes.data);
                console.log(roomsRes.data);

                const usersRes = await axios.get(`${process.env.REACT_APP_BUBBLEHOST}/getUserInfo/8`);
                setUsers(usersRes.data);
                console.log("유저", usersRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchRoomsAndUsers();
    }, []);

    const handleRoomClick = async (roomId) => {
        console.log(`Room clicked: ${roomId}`);
        setSelectedRoom(roomId);
    };

    return (
        <div className={style['box']}>
            <UserListBox rooms={rooms} users={users} handleRoomClick={handleRoomClick} />
            {selectedName && <Chat name={selectedName} room={selectedRoom} socket={socket} />}
        </div>
    );
}

export default BubbleBox;