// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer component - Bottom of every page
 * 
 * Common footer elements:
 * - Copyright notice
 * - Quick links
 * - Social media icons
 * - Contact info
 * 
 * @returns {JSX.Element}
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-white dark:bg-gray-800 shadow-lg mt-auto border-t border-gray-200 dark:border-gray-700">
            {/* 
                mt-auto = margin-top: auto (pushes footer to bottom)
                border-t = border-top (subtle line separating from content)
            */}
            
            <div className="max-w-7xl mx-auto py-4 px-4">
                {/* 
                    py-8 = more vertical padding than before (looks spacious)
                */}
                
                {/* Footer content - 2 columns on desktop, stacked on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    {/* 
                        Grid pattern:
                        Mobile (default): 1 column (stacked)
                        md: and up: 2 columns (side by side)
                    */}
                    
                    {/* Column 1: About */}
                    {/* <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                            📝 PLP Task Manager
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            A modern React application for managing your daily tasks efficiently. 
                            Built with React, Tailwind CSS, and lots of ❤️.
                        </p>
                    </div> */}
                    
                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {/* 
                                space-y-2 = vertical spacing between list items
                                In CSS: margin-bottom on all children except last
                            */}
                            <li>
                                <Link 
                                    to="/" 
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/tasks" 
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                                >
                                    Tasks
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/api-data" 
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                                >
                                    API Data
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Copyright - Centered at bottom */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    {/* 
                        border-t = top border (separates from content above)
                        pt-6 = padding-top (space after border)
                    */}
                    <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
                        &copy; {currentYear} PLP Task Manager. All rights reserved. Made with React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;