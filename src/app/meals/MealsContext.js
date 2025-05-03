'use client';

import {createContext, useContext, useState} from 'react';

const MealsContext = createContext();

export function MealsProvider( {children} ) {
const [meals, setMeals] = useState([
    { name: 'Kahvaltı', eaten: false },
    { name: 'Öğle Yemeği', eaten: false },
    { name: 'Akşam Yemeği', eaten: false }
  ]);

    return (
        <MealsContext.Provider value={{meals, setMeals}} >
            { children }
        </MealsContext.Provider>
    )
}


export function useMeals() {
    return useContext(MealsContext);
}