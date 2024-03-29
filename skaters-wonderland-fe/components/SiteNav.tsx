'use client';
import Link from 'next/link'
import React from 'react'
import { IoHome } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { TiInfo } from "react-icons/ti";

import { usePathname } from 'next/navigation'
import clsx from 'clsx';
import ToggleMenu from './ToggleMenu';

import { MenuContext } from "@/context/MenuContex";
import { useContext } from "react";


const SiteNav = () => {

    const pathname = usePathname

    const { menuDisplay } = useContext(MenuContext);


  return (
    <nav className='flex basis-3/4'>
      {/* ToggleMenu is hidden by default, visible on small screens */}
        <ToggleMenu />
        <ul className={clsx( 
          'lg:flex',  // Always show on large screens
          {
            'sm: hidden': !menuDisplay, // Hide on small screens if menuDisplay is false
            'sm:flex': menuDisplay, // Show on small screens if menuDisplay is true
          },
          'gap-3',
          'text-[14px]',
          'ml-4'
        )}>
            <li key= "home" className='flex mr-8 items-center'>
                <IoHome />
                <Link href={"/"} className={clsx(
              'flex items-center text-sm font-medium ml-2 hover:bg-sky-100 hover:text-blue-600 ',
              {
                ' text-blue-600': pathname() === '/',
              },
            )}>Home</Link>
            </li>
            <li key= "Woderlands" className={clsx('flex mr-8 items-center justify-start hover:text-blue-600',{' text-blue-600': pathname() === "/lands",},)}>
                <Link href={"/lands"}>Woderlands</Link>
            </li>
            <li key= "PT" className={clsx('flex mr-8 items-center  hover:text-blue-600',{' text-blue-600': pathname() === "",},)}>
                <Link href={""}>Personal Trainers</Link>
            </li>
            <li key= "Shoping" className={clsx('flex mr-8 items-center  hover:text-blue-600',{' text-blue-600': pathname() === "",},)}>
                <Link href={""}>Shoping</Link>
            </li>
            <li key= "Contact" className={clsx('flex mr-8 items-center  hover:text-blue-600',{' text-blue-600': pathname() === "",},)}>
                <MdCall />
                <Link href={""}>Contact us</Link>
            </li>
            <li key= "about" className={clsx('flex mr-8 items-center  hover:text-blue-600',{' text-blue-600': pathname() === "/about",},)}>
                <TiInfo />
                <Link href={"/about"}>About us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default SiteNav