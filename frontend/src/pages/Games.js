// src/pages/Games.js
import React from 'react';
import Navbar from '../components/Navbar'; // Include the Navbar component
import './Games.css'; // Make sure to style this CSS file accordingly
import matchpairImg from '../assets/match-pair-icon.png';
import breathingImg from '../assets/breathing-exercises-icon.png';

const Games = () => {
    const games = [
        { name: "Match Pair", description: "Find matching pairs to train your memory.", path: '/games/MatchPair/index.html', icon: matchpairImg },
        { name: "Stress Relief Puzzle", description: "Solve puzzles to clear your mind.", path: '/games/StressReliefPuzzle/index.html', icon: '/assets/stress-relief-puzzle-icon.png' },
        { name: "Breathing Exercises", description: "Follow breathing patterns to calm yourself.", path: '/games/BreathingExercises/index.html', icon: breathingImg },
    ];

    return (
        <div className="games-page">
            <Navbar />
            <div className="games-content">
                <h2 className="page-title">Games Hub</h2>
                <p className="page-description">Choose a game to relax and unwind</p>
                <div className="games-grid">
                    {games.map((game, index) => (
                        <div key={index} className="game-card">
                            <img src={game.icon} alt={`${game.name} icon`} className="game-icon" />
                            <h3 className="game-title">{game.name}</h3>
                            <p className="game-description">{game.description}</p>
                            <a href={game.path} rel="noopener noreferrer" className="play-button">
                                Play Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Games;
