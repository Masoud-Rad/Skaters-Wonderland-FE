import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { IoHome } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { TiInfo } from "react-icons/ti";

const SiteNav = () => {
    const pathname = usePathname


  return (
    <nav className='flex '>
        <ul className=' grid lg:grid-cols-6 gap-3 text-[14px] ml-4'>
            <li className='flex mr-8 items-center'>
                <IoHome />
                <Link href={"/"} className='text-zinc-600 ml-2'>Home</Link>
            </li>
            <li className='flex mr-8 items-center'>
                <Link href={""}>Woderlands</Link>
            </li>
            <li className='flex mr-8 items-center'>
                <Link href={""}>Personal Trainers</Link>
            </li>
            <li className='flex mr-8 items-center'>
                <Link href={""}>Shoping</Link>
            </li>
            <li className='flex mr-8 items-center'>
                <MdCall />
                <Link href={""}>Contact us</Link>
            </li>
            <li className='flex mr-8 items-center'>
                <TiInfo />
                <Link href={"/about"}>About us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default SiteNav