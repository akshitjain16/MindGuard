// src/pages/ProfilePage.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Include Navbar component
import './ProfilePage.css'; // Create a CSS file for styling

const ProfilePage = () => {
    const [name, setName] = useState('Akshit Jain');
    const [email, setEmail] = useState('gang.akshitjain@gmail.com');
    const [status, setStatus] = useState('Online'); // Example user status

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle profile update logic here
        alert(`Profile updated: ${name}, ${email}`);
    };

    return (
        <div className="profile-page">
            <Navbar /> {/* Navbar for navigation */}
            <div className="profile-container flex">
                {/* Sidebar */}
                <div className="sidebar w-1/4 p-4 bg-gray-800 text-white">
                    <h3 className="text-xl font-bold mb-4">Profile Settings</h3>
                    <ul>
                        <li className="mb-2"><strong>Name:</strong> {name}</li>
                        <li className="mb-2"><strong>Email:</strong> {email}</li>
                        <li className="mb-2"><strong>Status:</strong> {status}</li>
                    </ul>
                    <button 
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-blue-600"
                        onClick={() => alert("Feature coming soon!")}>
                        Update Avatar
                    </button>
                </div>

                {/* Main Content Area */}
                <div className="content-area w-3/4 p-6">
                    <h2 className="text-4xl font-bold mb-6">Your Profile</h2>
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label className="block text-lg font-medium mb-2">Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-medium mb-2">Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                        >
                            Update Profile
                        </button>
                    </form>

                    {/* Dashboard Analytics Section */}
                    <div className="analytics mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Mental Health Dashboard</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-green-100 rounded-lg">
                                <h3 className="font-bold text-lg">Last Prediction:</h3>
                                <p>Feeling Optimistic</p>
                                <p className="text-sm">Based on your recent assessment.</p>
                            </div>
                            <div className="p-4 bg-yellow-100 rounded-lg">
                                <h3 className="font-bold text-lg">Stress Level:</h3>
                                <p>Moderate</p>
                                <p className="text-sm">Based on recent analysis of your activities.</p>
                            </div>
                            <div className="p-4 bg-blue-100 rounded-lg">
                                <h3 className="font-bold text-lg">Average Mood:</h3>
                                <p>Positive</p>
                                <p className="text-sm">Overall sentiment from last week.</p>
                            </div>
                            <div className="p-4 bg-red-100 rounded-lg">
                                <h3 className="font-bold text-lg">Anxiety Level:</h3>
                                <p>High</p>
                                <p className="text-sm">Identified from recent text analysis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
