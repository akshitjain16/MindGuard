// src/pages/Community.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead
import Navbar from '../components/Navbar'; // Include Navbar component
import '../styles/Community.css'; // Import styles

const Community = () => {
    const [posts, setPosts] = useState([]);
    const [newPostContent, setNewPostContent] = useState('');
    const [username, setUsername] = useState(''); // State for username
    const navigate = useNavigate(); // Hook for navigation

    // Fetch posts from the backend
    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:6000/api/community/posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts(); // Fetch posts when the component mounts
    }, []);

    // Handle new post submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPostContent && username) {
            try {
                const response = await fetch('http://localhost:5000/api/community/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ content: newPostContent, username }), // Include username
                });
                if (response.ok) {
                    const newPost = await response.json();
                    setPosts((prevPosts) => [...prevPosts, newPost]); // Update local state
                    setNewPostContent(''); // Clear input field
                } else {
                    console.error('Failed to create post');
                }
            } catch (error) {
                console.error('Error creating post:', error);
            }
        }
    };

    // Navigate to chat, video, or global chat
    const handleNavigation = (route) => {
        navigate(route); // Use navigate for routing
    };

    return (
        <div className="community-container">
            <Navbar /> {/* Navbar for navigation */}
            <div className="main-content">
                <div className="posts-header">
                    <h2>Community Posts</h2>
                </div>
                <form onSubmit={handleSubmit} className="new-post-form">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                        className="username-input"
                    />
                    <textarea
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        placeholder="Write your post..."
                        required
                        rows="4"
                        className="post-input"
                    />
                    <button type="submit">Submit Post</button>
                </form>
                <div className="posts-list">
                    {posts.map((post) => (
                        <div key={post.id} className="post-item">
                            <p className="username">{post.username}:</p>
                            <p>{post.content}</p>
                        </div>
                    ))}
                </div>
                <div className="community-buttons">
                <button onClick={() => handleNavigation('/community')} className="community-button">Global</button>
                    <button onClick={() => handleNavigation('/community/chat')} className="community-button">Chat</button>
                    <button onClick={() => handleNavigation('/community/voice')} className="community-button">Audio</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Community;
