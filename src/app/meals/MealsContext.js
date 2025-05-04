'use client';

import { createContext, useContext, useState } from 'react';

const MealsContext = createContext();

export function MealsProvider({ children }) {
  const [meals, setMeals] = useState([
    { name: 'Frühstück', eaten: false },
    { name: 'Mittagessen', eaten: false },
    { name: 'Abendessen', eaten: false }
  ]);

  return (
    <MealsContext.Provider value={{ meals, setMeals }}>
      {children}
    </MealsContext.Provider>
  );
}

export function useMeals() {
  return useContext(MealsContext);
}