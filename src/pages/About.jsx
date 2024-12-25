import React from 'react';
import '../index.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        <h2 className="about-title">About SoccerScope</h2>
        <p className="about-description">
          SoccerScope is a React-based web application that provides live tracking and detailed 
          information about football matches from all over the world. Using the Football Data API, 
          users can browse ongoing and upcoming matches, save their favorites, and view detailed match stats.
        </p>
        <p className="about-description">
          The project is built with <strong>Vite</strong>, <strong>React</strong>, and other modern web tools to ensure 
          a fast and seamless user experience. Stay up-to-date with your favorite teams and matches easily with SoccerScope!
        </p>
      </div>
    </div>
  );
};

export default About;