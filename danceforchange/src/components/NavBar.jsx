// import React from 'react'

import NavLinks from "../util/NavLinks"
import { Link } from "react-router-dom"
import { FaGlobe, FaHome, FaTasks } from "react-icons/fa"

const NavBar = () => {
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
                </div>

            </div>
            
        </div>
        </nav>
    )
}

export default NavBar