import React, { useState } from 'react';

const MealSelection = ({ day, onSaveMeal }) => {
  const [meals, setMeals] = useState({
    breakfast: '',
    lunch: '',
    dinner: ''
  });

  const handleMealChange = (mealType, value) => {
    setMeals({ ...meals, [mealType]: value });
  };

  const handleSave = () => {
    onSaveMeal(day, meals);
  };

  return (
    <div className="meal-selection">
      <h3>{day ? day : "Today's Plan"}</h3>
      <label>
        Breakfast:
        <input
          type="text"
          value={meals.breakfast}
          onChange={(e) => handleMealChange('breakfast', e.target.value)}
        />
      </label>
      <label>
        Lunch:
        <input
          type="text"
          value={meals.lunch}
          onChange={(e) => handleMealChange('lunch', e.target.value)}
        />
      </label>
      <label>
        Dinner:
        <input
          type="text"
          value={meals.dinner}
          onChange={(e) => handleMealChange('dinner', e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Save Plan</button>
    </div>
  );
};

export default MealSelection;
