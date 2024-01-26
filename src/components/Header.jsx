import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import tun from '../img/tun-chirogi.png';
import kun from '../img/day.png';
import github from '../img/github.svg';
import githubDark from '../img/github-dark.svg';
import telegram from '../img/telegram.svg';
import telegramDark from '../img/telegram-dark.svg';


const Header = () => {
  const darkMode = localStorage.getItem('dark');
  const [dark, setDark] = useState(darkMode || 'light');
  const [menu, setMenu] = useState(false)

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
                <a className='font-medium text-xl nav-link-color dark:text-white leading-6  duration-300' href="#ha">Haqida</a>
              </li>
              <li>
                <a className='font-medium text-xl nav-link-color dark:text-white leading-6  duration-300' href="#te">Texnologiya</a>
              </li>
              <li>
                <a className='font-medium text-xl nav-link-color dark:text-white leading-6  duration-300' href="#lo">Loyihalar</a>
              </li>
            </ul>
          </nav>
          <div className='flex items-center dark:text-white gap-5'>

            <a target='_blank' href='https://github.com/Yusupov-Ismoiljon' className='text-black dark:text-white'>
              <img src={dark === 'light' ? github : githubDark} alt="github" />
            </a>

            <a target='_blank' href='https://t.me/Ismoiljon_Developer' class='text-black dark:text-white'>
              <i class="fa-brands fa-telegram fa-xl"></i>
            </a>
            <button className='kun w-6 h-6' onClick={addDark}>
              <img src={dark === 'light' ? kun : tun} alt="kun tun" />
            </button>
            <div className='lg:hidden block'>
              {menu &&
                <nav className='fixed w-full h-full top-0 right-0 bg-white dark:bg-black'>
                  <div className='relative'>
                    <button className='absolute top-9  right-5' onClick={() => setMenu(!menu)}>
                      <i className="fa-solid fa-xmark fa-2xl" style={{ 'color': '#ff0000' }}></i>
                    </button>
                    <ul onClick={() => setMenu(!menu)} className='flex flex-col gap-10 absolute left-10 top-14'>
                      <li>
                        <a className='font-medium text-xl nav-link-color dark:text-white leading-6  duration-300' href="#uy">Uy</a>
                      </li>
                      <li>
                        <a className='font-medium text-xl nav-link-color dark:text-white leading-6  duration-300' href="#ha">Haqida</a>
                      </li>
                      <li>
                        <a className='font-medium text-xl nav-link-color dark:text-white leading-6  duration-300' href="#te">Texnologiya</a>
                      </li>
                      <li>
                        <a className='font-medium text-xl nav-link-color dark:text-white leading-6  duration-300' href="#lo">Loyihalar</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;