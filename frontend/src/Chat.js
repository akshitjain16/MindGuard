// src/pages/Chat.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './styles/Chat.css'

const socket = io();

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState(localStorage.getItem('username') || 'Guest');

    // Handle joining a room
    const joinRoom = () => {
        if (room) {
            socket.emit('join room', { room, username });
        }
    };

    useEffect(() => {
        socket.on('user joined', (user) => {
            setUsers((prevUsers) => [...prevUsers, user]);
        });

        socket.on('user left', (user) => {
            setUsers((prevUsers) => prevUsers.filter(u => u !== user));
        });

        return () => {
            socket.off('user joined');
            socket.off('user left');
        };
    }, []);

    useEffect(() => {
        socket.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.off('chat message');
        };
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if (input) {
            socket.emit('chat message', { room, username, content: input });
            setInput('');
        }
    };

    return (
        <div className="chat-container">
            <h2>Chat Room</h2>
            <div>
                <input
                    type="text"
                    placeholder="Room ID"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                />
                <button onClick={joinRoom}>Join Room</button>
            </div>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message"
                />
                <button type="submit">Send</button>
            </form>
            <div className="messages">
                <ul>
                    {messages.map((msg, index) => (
                        <li key={index}><strong>{msg.username}:</strong> {msg.content}</li>
                    ))}
                </ul>
            </div>
            <div className="users">
                <h3>Users in Room:</h3>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>{user}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Chat;
