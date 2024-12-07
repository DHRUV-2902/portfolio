'use client'

import { useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add logic to apply theme to the body or root element
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 z-20"
      >
        {isDarkMode ? <FiSun className="text-2xl" /> : <FiMoon className="text-2xl" />}
      </button>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-2 relative z-10">
        Tanishka Deep
      </h1>

      <p className="text-xl md:text-2xl text-neutral-400 mb-4 relative z-10">
        Full Stack Developer
      </p>
      <div className="flex justify-center items-center gap-4 relative z-10">
        <a href="https://github.com/tanishkadeep" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/tanishkadeep/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-2xl" />
        </a>
        <a href="mailto:tanishkadeep09@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdEmail className="text-2xl" />
        </a>
      </div>
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
    </div>
  );
}