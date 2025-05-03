'use client'

import { useMeals } from './MealsContext';

export default function Counter() {
    const { meals } = useMeals();
    const remaining = meals.filter(meal => !meal.eaten).length;

    return (
        <p>Kalan Ogun: {remaining}</p>
    );
}