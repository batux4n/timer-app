import React from 'react';
import Counter from './Counter';
import Timer from './Timer';
import Countdown from './Countdown';
import './App.css';

function App() {
  return (
    <div className="container">
      <Counter />
      <Timer />
      <Countdown />
    </div>
  );
}

export default App;
