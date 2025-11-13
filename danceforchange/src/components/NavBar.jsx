// src/components/NavBar.jsx
import { useState } from 'react';  
import NavLinks from "../util/NavLinks"
import { Link } from "react-router-dom"
import { FaGlobe, FaHome, FaMoon, FaTasks, FaSun, FaBars, FaTimes } from "react-icons/fa"  
import { useTheme } from "../hooks/useTheme"

const NavBar = () => {
    const { theme, toggleTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);  

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link 
                to="/"
                className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    📝 PLP Task Manager
                </Link>

                {/* Desktop Navigation - Hidden on mobile */}
                <div className="hidden md:flex gap-4 items-center">
                    
                    <NavLinks to="/" icon={<FaHome />}>Home</NavLinks>
                    <NavLinks to="/tasks" icon={<FaTasks />}>Tasks</NavLinks>
                    <NavLinks to="/api-data" icon={<FaGlobe />}>API Data</NavLinks>

                    {/* Theme Toggle Button */}
                    <button 
                        onClick={toggleTheme}
                        className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? (
                            <FaMoon className="w-5 h-5" />
                        ) : (
                            <FaSun className="w-5 h-5" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Button - Hidden on desktop */}
                <div className="md:hidden flex items-center gap-2">
                    
                    
                    {/* Theme Toggle (Mobile) */}
                    <button 
                        onClick={toggleTheme}
                        className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? (
                            <FaMoon className="w-5 h-5" />
                        ) : (
                            <FaSun className="w-5 h-5" />
                        )}
                    </button>

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <FaTimes className="w-6 h-6" />
                        ) : (
                            <FaBars className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Slides down when open */}
            {mobileMenuOpen && (
                <div className="md:hidden mt-4 pb-4 space-y-2">
                    
                    <div onClick={() => setMobileMenuOpen(false)}>
                        <NavLinks to="/" icon={<FaHome />}>Home</NavLinks>
                    </div>
                    <div onClick={() => setMobileMenuOpen(false)}>
                        <NavLinks to="/tasks" icon={<FaTasks />}>Tasks</NavLinks>
                    </div>
                    <div onClick={() => setMobileMenuOpen(false)}>
                        <NavLinks to="/api-data" icon={<FaGlobe />}>API Data</NavLinks>
                    </div>
                </div>
            )}
        </div>
        </nav>
    );
};

export default NavBar;