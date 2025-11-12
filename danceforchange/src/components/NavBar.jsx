// import React from 'react'

import NavLinks from "../util/NavLinks"
import { Link } from "react-router-dom"
import { FaGlobe, FaHome, FaMoon, FaTasks, FaSun } from "react-icons/fa"
import { useTheme } from "../hooks/useTheme"

const NavBar = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
                <Link 
                to="/"
                className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    📝 PLP Task Manager
                </Link>

                <div className="flex gap-4">
                    <NavLinks to="/" icon={<FaHome />}>Home</NavLinks>
                    <NavLinks to="/tasks" icon={<FaTasks />}>Tasks</NavLinks>
                    <NavLinks to="/api-data" icon={<FaGlobe />}>API Data</NavLinks>

                    <button 
                        onClick={toggleTheme}
                        className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle Theme"
                        >
                        {theme === 'light' ? (
                            <FaMoon className="w-5 h-5" />
                        ):(
                            <FaSun className="w-5 h-5" />
                        )}
                        </button>
                </div>

            </div>
            
        </div>
        </nav>
    )
}

export default NavBar