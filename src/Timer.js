import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [savedTimes, setSavedTimes] = useState([]);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleSaveTime = () => {
    setSavedTimes([...savedTimes, time]);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="column">
      <h1>Timer</h1>
      <div className="timer-display">{time}s</div>
      
      {/* Start ve Stop Butonları */}
      <div className="button-group">
        <button onClick={() => setIsRunning(true)} className="start-btn">Start</button>
        <button onClick={() => setIsRunning(false)} className="stop-btn">Stop</button>
      </div>
      
      {/* Reset Butonu */}
      <div className="reset-button">
        <button onClick={handleReset} className="reset-btn">Reset</button>
      </div>
      
      {/* Save Time Butonu */}
      <div className="save-button">
        <button onClick={handleSaveTime} className="save-btn">Save Time</button>
      </div>
      
      <div className="saved-times">
        <h3>Saved Times</h3>
        <ul>
          {savedTimes.map((savedTime, index) => (
            <li key={index}>{savedTime}s</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Timer;
