"use client";

import { MenuContext } from "@/context/MenuContex";
import { useContext } from "react";

import { IoMenu } from "react-icons/io5";

const ToggleTheme = () => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <button onClick={toggleMenu} className='flex Icone items-center lg:hidden'>
      <IoMenu />
    </button>
  );
};

export default ToggleTheme;
