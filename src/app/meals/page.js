'use client'

import MealsList from "./MealsList";
import Counter from "./Counter";
import { MealsProvider } from "./MealsContext";

function MealsPage() {
  return (
    <MealsProvider>
      <h1>Bugunku yemek plani</h1>
      <MealsList />
      <Counter />
    </MealsProvider>
  );
}

export default MealsPage;
