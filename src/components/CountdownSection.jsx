import React from 'react';
import '../styles/CountdownSection.css';

const CountdownSection = () => {
  return (
    <div className="countdown-container" data-aos="fade-up">
      <div className="ticker-tape">
        <div className="ticker-content">
          IT'S TIME FOR REVIVAL • IT'S TIME FOR REVIVAL • IT'S TIME FOR REVIVAL • 
        </div>
      </div>
      <div className="timer-box">
        <h2>The Event Has Ended</h2>
        <p>Thank you for participating!</p>
      </div>
    </div>
  );
};

export default CountdownSection;