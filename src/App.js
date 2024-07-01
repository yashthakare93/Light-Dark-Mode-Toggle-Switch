import React from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import './styles/tailwind.css';
import { ThemeProvider } from './Context/ThemeContext';
import { useTheme } from './Context/ThemeContext';

const Column = ({ initialMode }) => {
  const { themeMode } = useTheme();
  return (
    <div className={`lg:w-105 lg:h-100 h-94 w-100 flex items-center justify-center ${themeMode === 'light' ? 'bg-light-bg' : 'bg-dark-bg'}`}>
      <ThemeSwitcher />
    </div>
  );
};

const App = () => (
  <div className="w-full h-screen flex flex-col sm:flex-row justify-center items-center ">
    <ThemeProvider initialMode="light">
      <Column />
    </ThemeProvider>
    <ThemeProvider initialMode="dark">
      <Column />
    </ThemeProvider>
  </div>
);

export default App;