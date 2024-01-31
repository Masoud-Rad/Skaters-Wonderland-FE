"use client";

import { ThemeContext } from "@/context/ThemContext";
import { useContext } from "react";

import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={`btn m-1`} onClick={toggleTheme}>
      {theme === "bumblebee" ? (
        <MdOutlineLightMode size={21} />
      ) : (
        <MdOutlineDarkMode size={21} />
      )}
    </button>
  );
};

export default ToggleTheme;
