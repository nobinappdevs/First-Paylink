import React, { useState} from "react";
import {  FiMoon, FiSun} from "react-icons/fi";


const ThemeToggleSwitch = () => {
        const [darkMode, setDarkMode] = useState(false);
    return (
        <div className="relative flex items-center bg-white rounded-full p-1 shadow-lg h-10 w-28">
            <div
                className={`
                    absolute top-1 bottom-1 w-[50%] h-8 rounded-full 
                    transition-all duration-300 ease-in-out
                    ${darkMode
                        ? 'translate-x-0 bg-secondery'
                        : 'translate-x-[90%] bg-secondery'
                    }
                `}
            />
            <button
                onClick={() => setDarkMode(true)}
                className={`
                    relative w-[50%] cursor-pointer h-full flex items-center justify-center 
                    transition-colors duration-300
                    ${darkMode ? 'text-white' : 'text-gray-500 hover:text-gray-700'}
                `}
                aria-label="Activate Dark Mode"
            >
                <FiMoon size={20} className="z-10" />
            </button>
            <button
                onClick={() => setDarkMode(false)}
                className={`
                    relative w-[50%] cursor-pointer h-full flex items-center justify-center 
                    transition-colors duration-300
                    ${!darkMode ? 'text-white' : 'text-gray-500 hover:text-gray-700'}
                `}
                aria-label="Activate Light Mode"
            >
                <FiSun size={20} className="z-10" />
            </button>
        </div>
    );
};

export default ThemeToggleSwitch;