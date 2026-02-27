import { createContext, useState } from 'react';

// 1. Creamos el contexto
export const ThemeContext = createContext();

// 2. Creamos el Provider que envolverá nuestra App
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Estado global

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};