// src/components/HomePage/HomePage.jsx
import React, { useState } from 'react';
import './HomePage.css';
import { assets } from '../../assets/assets'; // Make sure to import assets for the icons

const HomePage = () => {
  const [inputText, setInputText] = useState(''); // State to manage input text
  const [responses, setResponses] = useState([]); // State to manage the history of questions and responses

  const handleInputChange = (e) => {
    setInputText(e.target.value); // Update input text state
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submit
    // Here you would typically send the inputText to your API and get the response
    const newResponse = { question: inputText, answer: 'This is a mock response.' }; // Replace with actual API call
    setResponses((prevResponses) => [...prevResponses, newResponse]); // Add new response to history
    setInputText(''); // Clear input field after submission
  };

  const clearHistory = () => {
    setResponses([]); // Clear all history
  };

  return (
    <div className="home-page">
      <section className="welcome-section">
        <p className="gradient-text">I'm your AI BFF </p>
        <p className="gradient-text">Made with love by Govind :)</p>
      </section>

      <div className="responses-container">
        {responses.map((item, index) => (
          <div key={index} className="response-capsule">
            <strong>Q:</strong> {item.question} <br />
            <strong>A:</strong> {item.answer}
          </div>
        ))}
      </div>

      <form className="input-capsule" onSubmit={handleSubmit}>
        <input
          type="text"

          
          value={inputText}
          onChange={handleInputChange}
          placeholder="Let's chat"
          className="input-field"
        />
       
         <div className="chat-controls">
          
          <button type="button" className="mic-button">
            <img src={assets.mic_icon} alt="Microphone" className="mic-icon" /> {/* Ensure you have a microphone icon in your assets */}
          </button>
          <button type="button" className="upload-button">
            <img src={assets.gallery_icon} alt="Upload" className="upload-icon" /> {/* Ensure you have an upload icon in your assets */}
          </button>
        </div>
        <button type="submit" className="send-button">
             <img src={assets.send_icon} alt="Upload" className="upload-icon" /> 
            </button>
        <button type="button" className="clear-button" onClick={clearHistory}>New Chat</button> {/* Clear history button */}

        
      </form>
    </div>
  );
};

export default HomePage;
