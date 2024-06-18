import React, { useState, useRef, useEffect } from 'react';
import style from '../../styles/bubble/Chat.module.css';
import { Icon } from '@iconify/react';
import ChattingBox from './ChattingBox';

function Chat({ name, room, socket }) {
    const fileInput = useRef(null);
    const [inputMessage, setInputMessage] = useState('');
    const [receivedMessages, setReceivedMessages] = useState([]);

    useEffect(() => {
        if (room) {
            console.log(`Joining room: ${room}`);
            socket.emit('join room', room);
        }

        socket.on('room history', function(chats) {
            setReceivedMessages(chats);
            console.log("챗", chats);
        });

        socket.on('chat message', function(chat) {
            setReceivedMessages((prevMessages) => [...prevMessages, chat]);
        });

        socket.on('error', function(errorMessage) {
            alert(errorMessage);
        });

        return () => {
            socket.off('room history');
            socket.off('chat message');
            socket.off('error');
        };
    }, [room, socket]);

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            try {
                console.log(`Sending message: ${inputMessage} to room: ${room}`);
                const userId = 8;
                socket.emit('chat message', { roomId: room, userId, message: inputMessage });
                setInputMessage('');
            } catch (error) {
                console.error('Error sending message:', error);
            }
        } else {
            console.log("No message to send");
        }
    };


    return (
        <div className={style['chat-box']}>
            <div className={style['chat-title']}>
                <div className={style['sub-title']}>받는사람 :</div>
                <div className={style['user-name']}>{name}</div>
            </div>
            <div className={style['chatting-box']}>
                {receivedMessages.map((message, index) => (
                    <ChattingBox key={index} message={message} />
                ))}
            </div>
            <div className={style['add-chat']}>
                <input
                    type='text'
                    className={style['chat-input']}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <Icon icon="mingcute:send-line" className={style['send-message']} onClick={handleSendMessage} />
            </div>
        </div>
    );
}

export default Chat;