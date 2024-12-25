import React from 'react';
import { Link } from 'react-router-dom';


// Sticky Navbar Component
const StickyNav = () => {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        background: 'linear-gradient(90deg, #0073CF, #FFC20E)', // Blue to Gold gradient
        color: 'white',
        padding: '15px 25px',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)', // Adding a shadow for better visibility
        borderRadius: '8px', // Rounded corners
      }}
    >
      {/* Logo on the left */}
      <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
        SoccerScope
      </div>

      {/* Links in the navbar */}
      <div>
        <Link to="/" style={{ color: 'white', margin: '0 15px', fontSize: '16px' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', margin: '0 15px', fontSize: '16px' }}>About</Link>
        <Link to="/favorites" style={{ color: 'white', margin: '0 15px', fontSize: '16px' }}>Favorites</Link>
      </div>
    </nav>
  );
};

export default StickyNav;