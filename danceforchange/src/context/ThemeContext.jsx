
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
        console.log('Theme changed to:', theme);
        localStorage.setItem('theme', theme);

        // Check current HTML class
    console.log('HTML classes before:', document.documentElement.classList);
        
        // Tailwind's dark mode works by adding 'dark' class to <html>
        if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }

        // Check after modification
    console.log('HTML classes after:', document.documentElement.classList);
    console.log('Has dark class?', document.documentElement.classList.contains('dark'));
    }, [theme]);

    // Toggle between light and dark
    const toggleTheme = () => {
        console.log('Toggling theme from:', theme);
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

