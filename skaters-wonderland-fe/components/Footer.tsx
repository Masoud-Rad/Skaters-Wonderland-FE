import React from 'react'


import { useRouter} from 'next/navigation'
import { IoHome } from "react-icons/io5";
import { IoChevronBackCircleSharp } from "react-icons/io5";

const Footer = () => {
  const router = useRouter();
  return (
    
    <div className=' glass flex border-2 rounded-xl justify-evenly p-1 '>
      <button
          className="btn"
          onClick={() => router.back()}
        >
          <IoChevronBackCircleSharp />
        </button>
         <h2 className='border-2border-color: transparent;
    border-color: oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity)); rounded-2xl shadow-md p-1 px-2 m-2'>
      Happy skating
      </h2>
         <button
          className="btn"
          onClick={() => router.replace(`/`)}
        >
          <IoHome />
        </button>
         <div className="mt-8 flex justify-between">
        
        
      </div>
        </div>
  )
}

export default Footer