// src/pages/Home.js
import React from 'react';
import './Home.css'; // Create or update the CSS file for styling
import SentimentAnalysis from '../components/SentimentAnalysis';
import MentalHealthAssessment from '../components/MentalHealthAssessment';
import Navbar from '../components/Navbar'; // Import the sidebar navbar

const Home = () => {
    return (
        <div className="home-container">
            <Navbar className='navbar'/> 
            <div className="home-content">
                <header className="header">
                    <h2 className="title">Welcome to MindGuard</h2>
                    <p className="subtitle">Your companion for mental well-being.</p>
                </header>
                <section className="intro">
                    <p>Explore our features to help you manage stress and connect with others.</p>
                </section>
                <section className="features">
                <SentimentAnalysis />
                    <MentalHealthAssessment />
                    
                </section>
            </div>
        </div>
    );
};

export default Home;
