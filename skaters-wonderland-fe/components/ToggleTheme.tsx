'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemContext'

const ToggleTheme = () => {
const {theme, toggleTheme } = useContext(ThemeContext)

  

  return (
        <button
        className={`border-2 border-${theme === "bumblebee" ? 'white' : 'blue-600'} rounded-2xl text-${theme === "bumblebee" ? 'white' : 'blue-600'} shadow-sm p-1 px-2 m-2`}
        onClick={toggleTheme}
        ></button>
  );
};

export default ToggleTheme;
