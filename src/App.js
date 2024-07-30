// src/App.js
import React, { useState } from 'react';
import LandingPage from './LandingPage';
import FlowerAnimation from './FlowerAnimation';
// import './App.scss';

const App = () => {
    const [showLandingPage, setShowLandingPage] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    const handleFadeOut = () => {
        setFadeOut(true);
        setTimeout(() => {
            setShowLandingPage(false);
        }, 1000); // Ensure this matches the fade-out duration
    };

    return (
        <div className="App">
            {showLandingPage ? (
                <div className={`landing-page ${fadeOut ? 'fade-out' : ''}`}>
                    <LandingPage onFadeOut={handleFadeOut} />
                </div>
            ) : (
                <div className="flower-animation fade-in">
                    <FlowerAnimation />
                </div>
            )}
        </div>
    );
};

export default App;
