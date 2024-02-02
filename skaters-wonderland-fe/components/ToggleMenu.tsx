"use client";

import { MenuContext } from "@/context/MenuContex";
import { useContext } from "react";

import { IoMenu } from "react-icons/io5";

const ToggleTheme = () => {
  const { menuDisplay, toggleMenu } = useContext(MenuContext);

  return (
    <button onClick={toggleMenu} className=" hidden lg:flex">
      <IoMenu />
    </button>
  );
};

export default ToggleTheme;
