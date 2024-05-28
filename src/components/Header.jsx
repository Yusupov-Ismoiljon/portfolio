import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import tun from '../img/tun-chirogi.png';
import kun from '../img/day.png';
import SocialIcons from './SocialIcons';


const Header = () => {
  const darkMode = localStorage.getItem('dark');
  const [dark, setDark] = useState(darkMode || 'light');

  useEffect(() => {
    localStorage.setItem("dark", dark);

    if (dark === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const addDark = () => {
    setDark(dark === 'dark' ? 'light' : 'dark');
  };
  return (
    <div id='uy' className='py-10'>
      <div className='w-full max-w-[1440px] mx-auto px-5'>
        <div className='flex justify-between items-center'>
          <a className='font-bold md:text-3xl text-2xl text-[#42446E] dark:text-white' href='#uy'>
            <b>Yusupov</b>
          </a>
          <nav className='lg:inline-block hidden'>
            <ul className='flex items-center gap-10'>
              <li>
                <a className='font-medium text-xl nav-link-color dark:text-white leading-6  duration-300' href="#uy">Uy</a>
              </li>
              <li>
                <a className='font-medium text-xl nav-link-color dark:text-white leading-6  duration-300' href="#haqida">Haqida</a>
              </li>
              <li>
                <a className='font-medium text-xl nav-link-color dark:text-white leading-6  duration-300' href="#texnologiya">Texnologiya</a>
              </li>
              <li>
                <a className='font-medium text-xl nav-link-color dark:text-white leading-6  duration-300' href="#loyihalar">Loyihalar</a>
              </li>
            </ul>
          </nav>
          <div className='flex items-center justify-center gap-5'>
              <div>
                <SocialIcons/>
              </div>
            <button className='kun w-6 h-6' onClick={addDark}>
              <img src={dark === 'light' ? kun : tun} alt="kun tun" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;