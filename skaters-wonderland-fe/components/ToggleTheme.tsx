'use client';

import { ThemeContext } from '@/context/ThemContext';
import { useContext } from 'react';

import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";


const ToggleTheme = () => {
const {theme, toggleTheme } = useContext(ThemeContext)

  

  return (
    <button
            className={`btn`}
            onClick={toggleTheme} >
            <div className="flex items-center"> 
            {theme === 'bumblebee' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </div>
  </button>
  );
};

export default ToggleTheme;


