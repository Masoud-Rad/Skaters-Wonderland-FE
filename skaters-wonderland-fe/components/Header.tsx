import React from 'react'
import SiteNav from './SiteNav'
import ToggleTheme from './ToggleTheme'
import { MdAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <>
      
        <div className=' flex flex-row border-2 rounded-xl justify-between shadow-lg px-2 lg:p-9 border-t-0'>
          <SiteNav />
         
          <button className='btn m-1'><MdAccountCircle size={22} /></button>
          
          <ToggleTheme />
        </div>
      
    </>
  )
}

export default Header