import React, { useState, useEffect } from 'react';
import './styles/WeekMealPlan.css';

// Import food images
import appleImage from '../assets/apple.webp';
import salad from '../assets/salad.webp';
import bacon_eggs from '../assets/ba.webp';
import burritos from '../assets/burritos.webp';
import butter_paneer from '../assets/paneer-butter-masala.webp';
import oatmeal from '../assets/oatmeal.webp';
import poha from '../assets/poha.png';
import milk from '../assets/milk.webp';
import Pancake from '../assets/Pancake.webp';
import doughnuts from '../assets/doughnuts.webp';
import burgers from '../assets/burger.webp';
import chicken_pasta from '../assets/chicken_pasta.webp';
import Sushi from '../assets/Sushi.webp';
import pizza from '../assets/pizza.webp';
import daal from '../assets/Daal.webp';
import chole_bhature from '../assets/chole-bhature.webp';
import meatloaf from '../assets/meatloaf.webp';




const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const WeekMealPlan = () => {
  const [selectedDay, setSelectedDay] = useState(daysOfWeek[0]); // Track the selected day
  const [selectedDate, setSelectedDate] = useState(''); // Track the selected date
  const [selectedMealType, setSelectedMealType] = useState('breakfast'); // Track which meal type is selected for the selected day
  const [weeklyMeals, setWeeklyMeals] = useState(() => {
    // Load from local storage or initialize the meal plan
    const savedMeals = localStorage.getItem('weekMealPlan');
    if (savedMeals) {
      try {
        return JSON.parse(savedMeals);
      } catch (error) {
        console.error('Error parsing week meal plan from localStorage:', error);
      }
    }
    return daysOfWeek.reduce((acc, day) => {
      acc[day] = { breakfast: [], lunch: [], dinner: [] };
      return acc;
    }, {});
  });
  const [savedStatus, setSavedStatus] = useState(() => {
    // Load saved status from local storage
    const savedStatus = localStorage.getItem('weekMealPlanStatus');
    return savedStatus ? JSON.parse(savedStatus) : {
      breakfast: false,
      lunch: false,
      dinner: false,
    };
  }); // Track save status for each meal type

  // Categorized food items with calories
  const foodItems = {
    breakfast: [
        { name: 'Apple', image: appleImage, calories: 95 },
        { name: 'Poha', image: poha, calories: 100 },
        { name: 'Oatmeal', image: oatmeal, calories: 150 },
        { name: 'Milk', image: milk, calories:122},
        { name: 'Pancakes', image: Pancake, calories:150},
        { name: 'Doughnuts', image: doughnuts, calories:100}
      ],
      lunch: [
        { name: 'Salad', image: salad, calories: 250 },
        { name: 'Burritos', image: burritos, calories: 400 },
        { name: 'Pizza', image: pizza, calories:122},
        { name: 'Sushi', image: Sushi, calories:150},
        { name: 'Chicken_pasta', image: chicken_pasta, calories:100},
        { name: 'Burger', image: burgers, calories:130}
      ],
      dinner: [
        { name: 'Butter Paneer', image: butter_paneer, calories: 500 },
        { name: 'Salad', image: salad, calories: 250 },
        { name: 'Bacon & Eggs', image: bacon_eggs, calories: 300 },
        { name: 'Daal', image: daal, calories: 80 },
        { name: 'Chole-Bhature', image: chole_bhature, calories: 250 },
        { name: 'Meatloaf', image: meatloaf, calories: 200 }
  
      ],
    };
  // Load saved meals from localStorage on component mount
  useEffect(() => {
    const savedMeals = localStorage.getItem('weekMealPlan');
    if (savedMeals) {
      setWeeklyMeals(JSON.parse(savedMeals));
    }
    const savedStatus = localStorage.getItem('weekMealPlanStatus');
    if (savedStatus) {
      setSavedStatus(JSON.parse(savedStatus));
    }
  }, []);

  // Handle selecting a meal type
  const handleMealTypeSelect = (mealType) => {
    setSelectedMealType(mealType);
  };

  // Handle selecting a day
  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  // Handle selecting a food item for the selected meal type of the selected day
  const handleMealSelect = (mealType, item) => {
    const isSelected = weeklyMeals[selectedDay][mealType].find((mealItem) => mealItem.name === item.name);

    if (isSelected) {
      // Remove the item if it's already selected
      const updatedMeals = weeklyMeals[selectedDay][mealType].filter((mealItem) => mealItem.name !== item.name);
      setWeeklyMeals({ ...weeklyMeals, [selectedDay]: { ...weeklyMeals[selectedDay], [mealType]: updatedMeals } });
    } else {
      // Add the item if it's not selected
      setWeeklyMeals({ ...weeklyMeals, [selectedDay]: { ...weeklyMeals[selectedDay], [mealType]: [...weeklyMeals[selectedDay][mealType], item] } });
    }
    setSavedStatus((prevState) => ({ ...prevState, [mealType]: false })); // Reset save status when meal plan changes
  };

  // Handle saving the meal plan to local storage for a specific meal type
  const handleSaveMeals = (mealType) => {
    localStorage.setItem('weekMealPlan', JSON.stringify(weeklyMeals));
    setSavedStatus((prevState) => ({ ...prevState, [mealType]: true })); // Set save status to true to indicate saved
    localStorage.setItem('weekMealPlanStatus', JSON.stringify({ ...savedStatus, [mealType]: true }));
  };

  // Calculate the total calories for the selected day
  const calculateTotalCalories = () => {
    let totalCalories = 0;
    Object.values(weeklyMeals[selectedDay]).forEach((meal) => {
      meal.forEach((item) => {
        totalCalories += item.calories;
      });
    });
    return totalCalories;
  };

  // Handle date selection and update day dropdown based on the selected date
  const handleDateChange = (e) => {
    const selectedDateValue = e.target.value;
    setSelectedDate(selectedDateValue);

    // Parse the day of the week from the selected date
    if (selectedDateValue) {
      const dateObj = new Date(selectedDateValue);
      if (!isNaN(dateObj)) {
        const dayOfWeek = dateObj.getDay(); // Returns 0 for Sunday, 1 for Monday, etc.
        setSelectedDay(daysOfWeek[dayOfWeek]);
      }
    }
  };

  return (
    <div className="week-plan-container">
      {/* Header Section */}
      <div className="header">
        <h1>Weekly Meal Plan</h1>
      </div>

      {/* Date Picker */}
      <div className="date-picker">
        <label>Select Date for Meal Plan: </label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>

      {/* Day Selection Buttons */}
      <div className="day-selection">
        {daysOfWeek.map((day, idx) => (
          <button
            key={idx}
            className={`day-btn ${selectedDay === day ? 'active' : ''}`}
            onClick={() => handleDaySelect(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Meal Selection Buttons */}
      <div className="meal-buttons">
        <button className={`meal-btn ${selectedMealType === 'breakfast' ? 'active' : ''}`} onClick={() => handleMealTypeSelect('breakfast')}>Breakfast</button>
        <button className={`meal-btn ${selectedMealType === 'lunch' ? 'active' : ''}`} onClick={() => handleMealTypeSelect('lunch')}>Lunch</button>
        <button className={`meal-btn ${selectedMealType === 'dinner' ? 'active' : ''}`} onClick={() => handleMealTypeSelect('dinner')}>Dinner</button>
      </div>

      {/* Food Item Selection Grid */}
      <div className="meal-grid">
        {foodItems[selectedMealType].map((item, idx) => (
          <div
            key={idx}
            className={`meal-item ${weeklyMeals[selectedDay][selectedMealType].find((mealItem) => mealItem.name === item.name) ? 'selected' : ''}`}
            onClick={() => handleMealSelect(selectedMealType, item)}
          >
            <img src={item.image} alt={item.name} onError={(e) => e.target.style.display = 'none'} />
            <p>{item.name}</p>
            <p className="calories">Calories: {item.calories}</p>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="save-button-container">
        <button
          className={`save-btn ${savedStatus[selectedMealType] ? 'saved' : ''}`}
          onClick={() => handleSaveMeals(selectedMealType)}
        >
          {savedStatus[selectedMealType] ? 'Saved' : `Save ${selectedMealType.charAt(0).toUpperCase() + selectedMealType.slice(1)} Meals`}
        </button>
      </div>

      {/* Selected Meals and Total Calories */}
      <div className="selected-meals">
        <h3>Selected Meals for {selectedDay}:</h3>
        {['breakfast', 'lunch', 'dinner'].map((mealType) => (
          <div key={mealType} className="meal-summary">
            <h4>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}: </h4>
            <div className="meal-summary-items">
              {weeklyMeals[selectedDay][mealType].map((item, idx) => (
                <div key={idx} className="meal-summary-item">
                  <p>{item.name}</p>
                  <p className="calories">{item.calories} cal</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Total Calories */}
        <h3>Total Calories: {calculateTotalCalories()} cal</h3>
      </div>
    </div>
      );
    };
    

export default WeekMealPlan;
