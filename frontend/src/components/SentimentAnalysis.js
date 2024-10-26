import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SentimentAnalysis.css';

const SentimentAnalysis = () => {
    const [text, setText] = useState('');
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setPrediction(null);  // Clear previous prediction
        setError(null);       // Clear previous error

        try {
            const response = await axios.post('http://localhost:5000/predict', { text });
            console.log('Response:', response.data); // Debugging log
            setPrediction(response.data.prediction);
        } catch (err) {
            console.error('Error:', err.response ? err.response.data : err);
            setError(err.response ? err.response.data.error : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="sentiment-analysis-container">
            <div className="sentiment-content">
                <h1 className="sentiment-title">Sentiment Analysis</h1>
                <form onSubmit={handleSubmit} className="sentiment-form">
                    <textarea
                        rows="4"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text here..."
                        className="sentiment-textarea"
                        required
                    />
                    <button type="submit" className="analyze-button" disabled={loading}>
                        {loading ? 'Analyzing...' : 'Analyze'}
                    </button>
                </form>
                {prediction && (
                    <h2 className="prediction">
                        Prediction: <span>{prediction}</span>
                    </h2>
                )}
                {error && <h2 className="error">Error: {error}</h2>}
            </div>
        </div>
    );
};

export default SentimentAnalysis;
