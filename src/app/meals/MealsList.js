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
    <div style={{ padding: "1rem", backgroundColor: "#333", borderRadius: "8px", color: "#f0f0f0" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem", color: "#ffffff" }}>
        Heutiger Essensplan
      </h1>
      {meals.map((meal, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
            padding: "0.5rem",
            backgroundColor: "#444",
            color: "#f0f0f0",
            borderRadius: "4px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",
          }}
        >
          <span>{meal.name}</span>
          <button
            onClick={() => toggleEaten(index)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: meal.eaten ? "#4caf50" : "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {meal.eaten ? "Gegessen!" : "Essen"}
          </button>
        </div>
      ))}
    </div>
  );
}
