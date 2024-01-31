import React from 'react'
import SiteNav from './SiteNav'
import ToggleTheme from './ToggleTheme'


const Header = () => {
  return (
    <>
      
        <div className='glass flex border-2 rounded-xl justify-between shadow-lg  p-9 border-t-0'>
          <SiteNav />
          <button className='btn'>Log in</button>
          <ToggleTheme />
        </div>
      
    </>
  )
}

export default Header