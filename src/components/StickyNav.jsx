import React from 'react';
import { Link } from 'react-router-dom';

const StickyNav = () => (
  <nav style={{ position: 'sticky', top: 0, background: '#0080C6', padding: '10px', zIndex: 1000 }}>
    <Link to="/" style={{ color: 'white', margin: '0 10px' }}>Home</Link>
    <Link to="/favorites" style={{ color: 'white', margin: '0 10px' }}>Favorites</Link>
    <Link to="/about" style={{ color: 'white', margin: '0 10px' }}>About</Link>
  </nav>
);

export default StickyNav;