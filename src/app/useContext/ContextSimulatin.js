'use client';
import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function MyProvider ({children}) {
    const [ value, setValue ] = useState("Hello World!");

    return (
        <MyContext.Provider value={ { value, setValue } }>
            {children}
        </MyContext.Provider>
    )
}

export function useMyContext() {

    return useContext(MyContext);
}