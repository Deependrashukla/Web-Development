import React, { useState, useEffect } from 'react';
import './styles/DayMealPlan.css';

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








const DayMealPlan = () => {
  const [selectedMealType, setSelectedMealType] = useState('breakfast'); // Track which meal type is selected
  const [selectedMeals, setSelectedMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });
  const [savedStatus, setSavedStatus] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
  }); // Track save status for each meal type

  // Predefined calorie limits
  const calorieLimits = {
    breakfast: 400,
    lunch: 600,
    dinner: 700,
  };

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
    const savedMeals = localStorage.getItem('dayMealPlan');
    if (savedMeals) {
      setSelectedMeals(JSON.parse(savedMeals));
      const savedStatus = JSON.parse(savedMeals);
      setSavedStatus({
        breakfast: savedStatus.breakfast.length > 0,
        lunch: savedStatus.lunch.length > 0,
        dinner: savedStatus.dinner.length > 0,
      });
    }
  }, []);

  // Handle selecting a meal type
  const handleMealTypeSelect = (mealType) => {
    setSelectedMealType(mealType);
  };

  // Handle selecting a food item for the selected meal type
  const handleMealSelect = (mealType, item) => {
    const isSelected = selectedMeals[mealType].find((mealItem) => mealItem.name === item.name);

    if (isSelected) {
      // Remove the item if it's already selected
      const updatedMeals = selectedMeals[mealType].filter((mealItem) => mealItem.name !== item.name);
      setSelectedMeals({ ...selectedMeals, [mealType]: updatedMeals });
    } else {
      // Add the item if it's not selected
      setSelectedMeals({ ...selectedMeals, [mealType]: [...selectedMeals[mealType], item] });
    }
    setSavedStatus((prevState) => ({ ...prevState, [mealType]: false })); // Reset save status when meal plan changes
  };

  // Handle saving the meal plan to local storage for a specific meal type
  const handleSaveMeals = (mealType) => {
    const updatedMeals = {
      ...selectedMeals,
      [mealType]: selectedMeals[mealType],
    };
    localStorage.setItem('dayMealPlan', JSON.stringify(updatedMeals));
    setSavedStatus((prevState) => ({ ...prevState, [mealType]: true })); // Set save status to true to indicate saved
  };

  // Calculate the total calories for the day
  const calculateTotalCalories = () => {
    let totalCalories = 0;
    Object.values(selectedMeals).forEach((meal) => {
      meal.forEach((item) => {
        totalCalories += item.calories;
      });
    });
    return totalCalories;
  };

  return (
    <div className="day-plan-container">
      {/* Header Section */}
      <div className="header">
        <h1>Day Meal Plan</h1>
        <div className="avatar">
          {/* <img src="src/assets/avtar.webp" alt="Avatar" /> */}
        </div>
        <div className="date-info">
          <p>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</p>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
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
            className={`meal-item ${selectedMeals[selectedMealType].find((mealItem) => mealItem.name === item.name) ? 'selected' : ''}`}
            onClick={() => handleMealSelect(selectedMealType, item)}
          >
            <img src={item.image} alt={item.name} />
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
          disabled={savedStatus[selectedMealType]}
        >
          {savedStatus[selectedMealType] ? 'Saved' : `Save ${selectedMealType.charAt(0).toUpperCase() + selectedMealType.slice(1)} Meals`}
        </button>
      </div>

      {/* Selected Meals and Total Calories */}
      <div className="selected-meals">
        <h3>Selected Meals for Today:</h3>
        {['breakfast', 'lunch', 'dinner'].map((mealType) => (
          <div key={mealType} className="meal-summary">
            <h4>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}: </h4>
            <div className="meal-summary-items">
              {selectedMeals[mealType].map((item, idx) => (
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

export default DayMealPlan;
