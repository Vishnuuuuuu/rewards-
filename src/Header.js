// src/Header.js
import React from 'react';
import logo from './assets/logo4.png'; // Ensure this path is correct

function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
      <img src={logo} alt="Otaku|Weekly Logo" style={{ height: '50px' }} />
      <h1 style={{ marginLeft: '10px' }}>Otaku|Weekly</h1>
    </header>
  );
}

export default Header;
