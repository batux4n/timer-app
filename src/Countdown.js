import React, { useState, useEffect } from 'react';
import './Countdown.css';

function Countdown() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    let interval;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startTimer = () => {
    const h = parseInt(hours) || 0;
    const m = parseInt(minutes) || 0;
    const s = parseInt(seconds) || 0;

    setTimeLeft(h * 3600 + m * 60 + s);
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(null);
    setHours("");
    setMinutes("");
    setSeconds("");
  };

  const formatTime = (time) => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    return `${hrs < 10 ? `0${hrs}` : hrs}:${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <div className="column">
      <h1>Countdown Timer</h1>
      <div>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder="hrs"
          min="0"
        />
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          placeholder="min"
          min="0"
        />
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          placeholder="sec"
          min="0"
        />
      </div>
      <div>
        {isActive ? (
          <div className="timer-display">
            {formatTime(timeLeft)}
          </div>
        ) : (
          <div className="timer-display">00:00:00</div>
        )}
      </div>
      <div className="buttons">
        <div className="start-stop-buttons">
          <button className="start-btn" onClick={startTimer}>Start</button>
          <button className="stop-btn" onClick={stopTimer}>Stop</button>
        </div>
        <div className="reset-buttons">
          <button className="reset-btn" onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
