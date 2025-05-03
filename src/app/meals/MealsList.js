"use client";

import { useMeals } from "./MealsContext";

export default function MealsList() {
  const { meals, setMeals } = useMeals();

  const toggleEaten = (index) => {
    const updatedMeals = meals.map((meal, i) =>
      i === index ? { ...meal, eaten: !meal.eaten } : meal
    );
    setMeals(updatedMeals);
  };
  
  return (
    <ul>

      {meals.map((meal, index) => 
        <li key={index}>
          <label>
            <input
              type="checkbox"
              checked={meal.eaten}
              onChange={ () => toggleEaten(index)}
            />
            {meal.name}
          </label>
        </li>
      )}
      
    </ul>
  );
}
