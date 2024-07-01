import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext({
  themeMode: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children, initialMode = 'light' }) => {
  const [themeMode, setThemeMode] = useState(initialMode);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <div className={`${themeMode === 'light' ? 'bg-light-bg' : 'bg-dark-bg'} text-white`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
