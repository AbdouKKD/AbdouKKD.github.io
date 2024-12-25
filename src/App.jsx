import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"; 
import MatchDetails from "./pages/MatchDetails";
import FavoritesPage from "./pages/FavoritesPage"; 
import '../src/index.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Navbar />  
      <h1>Welcome to the Soccer App</h1> {/* Temporary*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/match/:id" element={<MatchDetails />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
};

export default App;