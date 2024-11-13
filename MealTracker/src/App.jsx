import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DayMealPlan from './components/DayMealPlan';
import WeekMealPlan from './components/WeekMealPlan';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<DayMealPlan />} /> {/* Default route opens Day Meal Plan page */}
        <Route path="/day-planner" element={<DayMealPlan />} /> {/* Day Meal Plan page */}
        <Route path="/week-planner" element={<WeekMealPlan />} /> {/* Weekly Meal Plan page */}
      </Routes>
    </Router>
  );
}

export default App;
