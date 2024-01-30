'use client';

import React, { useState, useContext, createContext  } from 'react'






export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState('bumblebee');
  
  const toggleTheme = () => {
    setTheme((currTheme) => {
      return currTheme === 'bumblebee' ? 'dark' : 'bumblebee';
    });
  };
    
  return ( 
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>

  )
  
}

