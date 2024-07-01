import React from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import sun from '../Assests/sun.png';
import moon from '../Assests/moon.png';
import clouda from '../Assests/Cloud a.png'
import cloudb from '../Assests/Cloud b.png'
import cloudc from '../Assests/Cloud c.png'
import star from '../Assests/star.png'
import ground from '../Assests/Ground.png'

const ThemeSwitcher = () => {
  const { themeMode, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center justify-center h-full   ">
      <label className=" relative  w-375  h-130.24 overflow-hidden  ">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={themeMode === 'dark'}
          className="opacity-0 w-0 h-0"
        />
        <span
          className={`text-white slider block absolute cursor-pointer inset-0 rounded-full shadow-slate-700 shadow-inner transition duration-200 ${themeMode === 'light' ? 'gradient-sun' : 'gradient-moon'}`}
        ></span>
        <img
          src={themeMode === 'light' ? sun : moon}
          alt="Theme Switcher"
          className="dot absolute left-3 top-3 w-104 h-104  rounded-full transition transform duration-200"
        />
        {themeMode === 'light' && (
          <>
            <img src={clouda} alt="" className='relative  left-36 top-10 ' />
            <img src={cloudb} alt="" className='relative  left-32 -top-16  ' />
            <img src={cloudc} alt="" className='relative w-15 left-72 -top-20 ' />
          </>
        )}
        {themeMode === 'dark' && (
          <>
            <img src={ground} alt="Ground" className="relative top-16 left-2 border-b-curve-bottom-left" />
            <img src={star} alt="" className='relative left-16 -top-12 ' />
            <img src={star} alt="" className='relative left-24 -top-10 ' />
            <img src={star} alt="" className='relative left-10 -top-10 ' />
            <img src={star} alt="" className='relative left-36 top-3 ' />
            <img src={star} alt="" className='relative left-56 top-3 ' />
            <img src={star} alt="" className='relative left-52 -top-10 ' />
            <img src={star} alt="" className='relative left-64 -top-20 ' />
            <img src={star} alt="" className='relative left-40 -top-20 ' />
          </>
        )}

      </label>
      <div className={`mt-12 text-4xl sm:text-8xl font-normal font-sans ${themeMode === 'light' ? 'text-black' : 'text-white'}`}>
        {themeMode === 'light' ? 'Light mode' : 'Dark mode'}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
