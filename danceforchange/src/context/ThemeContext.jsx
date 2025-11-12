
import {  useState, useEffect } from 'react';
import { ThemeContext } from '../hooks/useTheme';

/**
 * ThemeProvider - Wraps the app and provides theme state
 */
export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to 'light'
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });

    // Update localStorage and HTML class on theme change
    useEffect(() => {
        localStorage.setItem('theme', theme);
        
        // Tailwind's dark mode works by adding 'dark' class to <html>
        if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    // Toggle between light and dark
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Value provided to all consuming components
    const value = {
        theme,
        toggleTheme,
        isDark: theme === 'dark',
    };

    return (
        <ThemeContext.Provider value={value}>
        {children}
        </ThemeContext.Provider>
    );
    };

