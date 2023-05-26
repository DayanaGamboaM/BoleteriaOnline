import React, { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(true);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <button className={`btn toggle-button ${isOn ? 'on' : 'off'}`} onClick={handleClick}>
      <div className="toggle-container">
        <div className={`circle ${isOn ? 'circle-on' : 'circle-off'}`}></div>
      </div>
      <span className="label">{isOn ? 'On' : 'Off'}</span>
    </button>
  );
};

export default ToggleButton;
