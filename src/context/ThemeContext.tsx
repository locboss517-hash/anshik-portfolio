import React, { createContext, useContext, useEffect } from 'react';
import type { ThemeMode } from '../types/portfolio';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    root.classList.remove('light');
    try {
      localStorage.setItem('ag_theme', 'dark');
    } catch {
      // ignore
    }
  }, []);

  const toggleTheme = () => {
    // Locked to OLED dark theme
  };

  const setTheme = () => {
    // Locked to OLED dark theme
  };

  return (
    <ThemeContext.Provider value={{ theme: 'dark', toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
