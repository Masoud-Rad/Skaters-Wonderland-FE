'use client';

import React, { useState,  createContext  } from 'react'

type MenuProviderProb ={
    children: React.ReactNode;
}

type MenuContextValue = {
  menuDisplay: boolean;
  toggleMenu: () => void;
}

type MenuContextInitialValue = {
    menuDisplay: true | false ,
  toggleMenu: () => void;
}

export const MenuContext = createContext<MenuContextValue | MenuContextInitialValue>({ menuDisplay: true,
toggleMenu: () => {}});


export const MenuProvider = ({children}: MenuProviderProb) => {

  const [menuDisplay, setMenuDisplay] = useState(false);
  
  const toggleMenu = () => {
    setMenuDisplay((currMenu) => {
      return currMenu === true ? false : true;
    });
  };
   
  return ( 

      <MenuContext.Provider value={{ menuDisplay, toggleMenu }}>
        {children}
      </MenuContext.Provider>
  )
  
}

