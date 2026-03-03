import { createContext, useState } from 'react';

export const ThemeContext = createContext();

// crear el Provider (lo q da acceso a la informacion, lo crea react al crear un Contexto) que envolverá a "App"
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Estado global

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // cualquier componente que esté dentro de ThemeContext, puede usar la "variable" (theme) y la funcion (toggleTheme)
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};