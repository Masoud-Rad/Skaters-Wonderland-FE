'use client';

import React, { useState,  createContext  } from 'react'

type ThemeProviderProb ={
    children: React.ReactNode;
}

type ThemeContextValue = {
  theme: string;
  toggleTheme: () => void;
};

type ThemContextInitialValue = {
  theme: 'bumblebee' | 'night' ,
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | ThemContextInitialValue>({theme: 'bumblebee',
toggleTheme: () => {}});


export const ThemeProvider = ({children}: ThemeProviderProb) => {

  const [theme, setTheme] = useState('bumblebee');
  
  const toggleTheme = () => {
    setTheme((currTheme) => {
      console.log({currTheme})
      return currTheme === 'bumblebee' ? 'dark' : 'bumblebee';
    });
  };
   
  return ( 
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>

  )
  
}

