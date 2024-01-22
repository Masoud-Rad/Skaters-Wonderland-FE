import React from 'react'
import SiteNav from './SiteNav'
import { TbSkateboarding } from "react-icons/tb"; 

const Header = () => {
  return (
    <>
      <div className = "border-2 shadow-lg rounded-xl items-center mx-auto" >
        <TbSkateboarding />
        <div className='flex justify-between rounded-3xl bg-gray-50 p-9'>
          <SiteNav />
          <button className='border-2 border-blue-600 rounded-2xl text-blue-600 shadow-sm p-1 px-2 m-2'>Log in</button>
        </div>
      </div>
    </>
  )
}

export default Header