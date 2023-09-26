import React, { useState } from 'react';
import '../styles.css'; // Make sure to specify the correct path to your CSS file

export const Lightbulb = () => {
  const [lightOn, setLightOn] = useState(false); // Initialize the state for on/off

  const toggleLight = () => {
    // Toggle the on/off state
    setLightOn(!lightOn);
  };

  // Define the CSS class based on the lightOn state
  const bulbClass = `lightbulb ${lightOn ? 'on' : 'off'}`;


  return (
    <React.Fragment>
      <div className="lightbulb-container">
        <div className={bulbClass} onClick={toggleLight}>
          <div className="bulb"></div>
        </div>
      </div>
    </React.Fragment>
  );
};



