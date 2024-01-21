import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { TiInfo } from "react-icons/ti";

const SiteNav = () => {
    const pathname = usePathname


  return (
    <nav className='flex'>
        <ul className=' flex gap-x-5 text-[14px] ml-4'>
            <li className='flex mr-8 items-center'>
                <IoHome />
                <Link href={""} className='text-zinc-600 ml-2'>Home</Link>
            </li>
            <li className='flex mr-8 items-center'>
                <Link href={""}>nav2</Link>
                <IoIosArrowDown />
            </li>
            <li className='flex mr-8 items-center'>
                <Link href={""}>nav3</Link>
                <IoIosArrowDown />
            </li>
            <li className='flex mr-8 items-center'>
                <MdCall />
                <Link href={""}>Contact us</Link>
            </li>
            <li className='flex mr-8 items-center'>
                <TiInfo />
                <Link href={""}>About us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default SiteNav