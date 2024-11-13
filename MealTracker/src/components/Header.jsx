import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <nav className="navbar-links">
            
          <Link to="/day-planner" className="nav-link">Day Planner</Link>
          <Link to="/week-planner" className="nav-link">Week Planner</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
