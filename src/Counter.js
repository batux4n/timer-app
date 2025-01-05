import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);

  const updateCounter = (newValue) => {
    setCounter(newValue);
    setHistory([...history, newValue]);
  };

  return (
    <div className="column">
      <h1>Counter Application</h1>
      <div className="counter">
        <button onClick={() => updateCounter(counter - 1)} className="counter-btn">-</button>
        <div className="counter-value">{counter}</div>
        <button onClick={() => updateCounter(counter + 1)} className="counter-btn">+</button>
      </div>
      <button onClick={() => updateCounter(0)} className="reset-btn">Reset</button>

      <h2>History</h2>
      <ul>
        {history.map((value, index) => (
          <li key={index}>Counter: {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
