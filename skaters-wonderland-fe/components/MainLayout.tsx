'use client';

import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemContext';


import Header from './Header';
import Footer from './Footer';



interface MainProp{
    children: React.ReactNode;
}

const MainLayout = ({children}:MainProp) => {

    const { theme } = useContext(ThemeContext)
  return (
    <main data-theme={theme} className='p-3'>
        <Header/> 
        {children}
        <Footer/>
    </main>
  )
}

export default MainLayout