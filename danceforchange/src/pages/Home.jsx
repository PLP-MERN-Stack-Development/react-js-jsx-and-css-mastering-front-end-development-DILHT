import React from 'react';

/**
 * Home page - the landing page of the app
 * This will be shown when someone visits "/"
 */
const Home = () => {
    return (
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            
            
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Welcome to PLP Task Manager! 🎉
            </h1>
            
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Manage your tasks efficiently with our modern React application.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Feature 1 */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded border border-blue-200 dark:border-blue-700">
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
                ✅ Task Management
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-200">
                Create, complete, and delete tasks with ease
                </p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-4 bg-green-50 dark:bg-green-900 rounded border border-green-200 dark:border-green-700">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-2">
                💾 Local Storage
                </h3>
                <p className="text-sm text-green-700 dark:text-green-200">
                Your tasks persist across browser sessions
                </p>
            </div>
            
            {/* Feature 3 */}
            <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded border border-purple-200 dark:border-purple-700">
                <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
                🌓 Dark Mode
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-200">
                Switch between light and dark themes
                </p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Home;