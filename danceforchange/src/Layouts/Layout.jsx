// import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
            
            <NavBar />

            <main className="flex-1">
                {/* Main content will go here */}
                <Outlet />
            </main>

            
            <Footer />
        </div>
    );
};

export default Layout