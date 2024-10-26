import React, { useState } from 'react';
import axios from 'axios';
import '../styles/MentalHealthAssessment.css'; // Ensure to import the CSS file

const MentalHealthAssessment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [answers, setAnswers] = useState(Array(20).fill(''));
    const [loading, setLoading] = useState(false);

    const questions = [
        "How often do you feel stressed?", "Do you have trouble sleeping?",
        "Do you often feel anxious?", "How often do you feel sad?",
        "Do you have someone to talk to?", "How often do you feel overwhelmed?",
        "Do you find it difficult to concentrate?", "How often do you feel tired?",
        "Do you enjoy activities you once liked?", "How often do you feel hopeless?",
        "Do you feel irritable or angry?", "Do you often feel lonely?",
        "How often do you worry about your health?", "Do you have any physical symptoms (like headaches)?",
        "How often do you take time for yourself?", "Do you have a support system?",
        "How often do you feel your emotions are out of control?", "Do you find it difficult to relax?",
        "How often do you experience mood swings?", "Do you feel you are under pressure to succeed?",
    ];

    const handleChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { name, email, answers };

        // Validate the email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        setLoading(true);
        try {
            // Match the backend route
            const response = await axios.post('http://localhost:5000/assess', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data); // Handle the response as needed
            alert('Thank you for your submission! Your results are being processed.');
        } catch (error) {
            console.error(error);
            alert('There was an error processing your submission.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="assessment-container">
            <div className="assessment-content">
                <h2 className="assessment-title">Let's do Your Quick Mental Health Assessment</h2>
                <form onSubmit={handleSubmit} className="assessment-form">
                    <div className="form-group">
                        <label className="form-label">Name:</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            className="form-input"
                        />
                    </div>
                    <h3 className="questions-header">Please answer the following questions:</h3>
                    <div className="questions-grid">
                        {questions.map((question, index) => (
                            <div key={index} className="question-item">
                                <label className="question-label">{question}</label>
                                <select 
                                    value={answers[index]} 
                                    onChange={(e) => handleChange(index, e.target.value)} 
                                    required
                                    className="question-select"
                                >
                                    <option value="">Select</option>
                                    <option value="Never">Never</option>
                                    <option value="Sometimes">Sometimes</option>
                                    <option value="Often">Often</option>
                                    <option value="Always">Always</option>
                                </select>
                            </div>
                        ))}
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MentalHealthAssessment;
