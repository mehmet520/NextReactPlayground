"use client";

import { useMeals } from "./MealsContext";

export default function Counter() {
  const { meals } = useMeals();
  const remaining = meals.filter((meal) => !meal.eaten).length;

  return (
    <div
      style={{
        marginTop: "1rem",
        padding: "1rem",
        backgroundColor: "#333", // Dark background
        borderRadius: "8px",
        textAlign: "center",
        color: "#ffffff", // Light text color
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)", // Subtle shadow for depth
      }}
    >
      <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        Meals remaining: <span style={{ color: "#4caf50" }}>{remaining}</span> {/* Green for emphasis */}
      </p>
    </div>
  );
}