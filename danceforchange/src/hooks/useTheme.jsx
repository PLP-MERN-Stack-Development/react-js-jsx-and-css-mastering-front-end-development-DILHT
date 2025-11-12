import { createContext,useContext } from 'react';


/**
     * useTheme - Custom hook to use theme context
     * 
     * Usage in any component:
     * const { theme, toggleTheme, isDark } = useTheme();
     */

export const ThemeContext = createContext();

    export const useTheme = () => {
    const context = useContext(ThemeContext);
    
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    
    return context;
};