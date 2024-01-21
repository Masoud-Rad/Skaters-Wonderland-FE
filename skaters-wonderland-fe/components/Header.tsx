import React from 'react'
import SiteNav from './SiteNav'
import { TbSkateboarding } from "react-icons/tb"; 

const Header = () => {
  return (
    <>
      <TbSkateboarding />
      <div className='flex justify-between rounded-3xl bg-gray-50 p-9'>
        <SiteNav />
        <button className=''>Log in</button>
      </div>
    </>
  )
}

export default Header