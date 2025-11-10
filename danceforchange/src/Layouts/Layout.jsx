// import React from 'react'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">

            <nav className="bg-white dark:bg-gray-800 shadow">
                <div className="max-w-7xl mx-auto px-4 py-4 dark:text-white">
                    <h1 className="text-2xl font-bold ">PLP Task Manager</h1>
                    <div className="flex gap-4 ">
                        
                        <Link 
                        to="/" 
                        className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                        
                        Home
                        </Link>
                        
                        <Link 
                        to="/tasks" 
                        className="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                        Tasks
                        </Link>
                    </div>
                </div>

            </nav>

            <main className="flex-1">
                {/* Main content will go here */}
                <Outlet />
            </main>

            
            <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} PLP Task Manager. All rights reserved.
                    </p>
                </div>

            </footer>
        </div>
    );
};

export default Layout