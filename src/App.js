// src/App.js
import React from 'react';
import './App.css';
import Header from './Header';
import { Downloads, Rewards } from './Rewards';

function App() {
  return (
    <div className="App">
      <Header />
      <Rewards />
      <Downloads />
    </div>
  );
}

export default App;
