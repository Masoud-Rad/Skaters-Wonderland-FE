'use client';

import { ThemeContext } from '@/context/ThemContext';
import { useContext } from 'react';

import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";


const ToggleTheme = () => {
const {theme, toggleTheme } = useContext(ThemeContext)

  

  return (
<>
<div  className='bg-black w-6 h-6 cursor-pointer'>
<div onClick={toggleTheme}></div>
    </div></>
    
//     <button
//             className={`border-2 border-${theme === 'bumblebee' ? 'blue-600' : 'white'} rounded-2xl  shadow-sm p-1 px-2 m-2`}
//             onClick={toggleTheme} >
//             <div className="flex items-center">
//             {/* {theme === 'bumblebee' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />} */}
//             </div>
//   </button>
  );
};

export default ToggleTheme;
