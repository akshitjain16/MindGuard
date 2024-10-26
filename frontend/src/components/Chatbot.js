// src/components/Chatbot.js
import React from 'react';
import Navbar from './Navbar'; // Make sure you have a Navbar component
import '../styles/Chatbot.css'; // Make sure the CSS file exists

const Chatbot = () => {
    const handleChat = () => {
        alert("Chatbot feature coming soon!");
    };

    return (
        <div className="chatbot-page">
            <Navbar />
            <div className="chatbot-content">
                <div className="chatbot">
                    <h3>MindGuard Chatbot</h3>
                    <button onClick={handleChat}>Start Chat</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
