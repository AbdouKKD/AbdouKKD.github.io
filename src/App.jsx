import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"; 
import MatchDetails from "./pages/MatchDetails";
import FavoritesPage from "./pages/FavoritesPage"; 
import StickyNav from "./components/StickyNav";
import '../src/index.css';



const App = () => {
  return (
    <div className="app-container">
      <StickyNav />  
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