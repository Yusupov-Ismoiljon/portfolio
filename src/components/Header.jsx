import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import tun from '../img/tun.png';
import kun from '../img/day.png';


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
    <div id='uy' className='py-20'>
      <div className='w-full max-w-[1440px] mx-auto px-5'>
        <div className='flex justify-between items-center'>
          <Link className='w-[100px] h-[100px] rounded-full bg-white' to={'/'}>
          </Link>
          <nav className='md:inline-block hidden'>
            <ul className='flex items-center gap-10'>
              <li>
                <a className='font-medium text-xl nav-link-color dark:text-white leading-6 hover dark-hover duration-300' href="#uy">Uy</a>
              </li>
              <li>
                <a className='font-medium text-xl nav-link-color dark:text-white leading-6 hover dark-hover duration-300' href="#ha">Haqida</a>
              </li>
              <li>
                <a className='font-medium text-xl nav-link-color dark:text-white leading-6 hover dark-hover duration-300' href="#te">Texnologa</a>
              </li>
              <li>
                <a className='font-medium text-xl nav-link-color dark:text-white leading-6 hover dark-hover duration-300' href="#lo">Loyihalar</a>
              </li>
            </ul>
          </nav>
          <div className='flex items-center dark:text-white gap-5'>
            <a target='_blank' href='https://github.com/iyiy2008' className='inline-block text-black  dark:text-white'><i className="fa-brands fa-github fa-2xl"></i></a>
            <a target='_blank' href='https://t.me/Ismoiljon_12_04' className='inline-block text-black dark:text-white'><i className="fa-brands fa-telegram fa-2xl"></i></a>
            <button onClick={addDark}>
              <img className='w-8 h-8' src={dark === 'light' ? kun : tun} alt="" />
            </button>
            <button onClick={() => setMenu(!menu)}>
              <i className="fa-solid fa-bars md:hidden inline-block fa-xl"></i>
            </button>
            <div className='md:hidden block'>
              {menu &&
                <nav className='fixed w-full h-full top-0 right-0 bg-white dark:bg-black'>
                  <div className='relative'>
                    <button className='absolute top-9  right-5' onClick={() => setMenu(!menu)}>
                      <i class="fa-solid fa-xmark fa-2xl" style={{ 'color': '#ff0000' }}></i>
                    </button>
                    <ul onClick={()=> setMenu(!menu)} className='flex flex-col gap-10 absolute left-10 top-14'>
                      <li>
                        <a className='font-medium text-xl nav-link-color dark:text-white leading-6 hover dark-hover duration-300' href="#uy">Uy</a>
                      </li>
                      <li>
                        <a className='font-medium text-xl nav-link-color dark:text-white leading-6 hover dark-hover duration-300' href="#ha">Haqida</a>
                      </li>
                      <li>
                        <a className='font-medium text-xl nav-link-color dark:text-white leading-6 hover dark-hover duration-300' href="#te">Texnologa</a>
                      </li>
                      <li>
                        <a className='font-medium text-xl nav-link-color dark:text-white leading-6 hover dark-hover duration-300' href="#lo">Loyihalar</a>
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