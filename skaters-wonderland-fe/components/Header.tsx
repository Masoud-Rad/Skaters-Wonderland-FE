import React from 'react'
import SiteNav from './SiteNav'
import ToggleTheme from './ToggleTheme'


const Header = () => {
  return (
    <>
      
        <div className='flex border-2 rounded-xl justify-between shadow-lg bg-gray-50 p-9 border-t-0'>
          <SiteNav />
          <button className='border-2 border-blue-600 rounded-2xl text-blue-600 shadow-sm p-1 px-2 m-2'>Log in</button>
          <ToggleTheme />
        </div>
      
    </>
  )
}

export default Header