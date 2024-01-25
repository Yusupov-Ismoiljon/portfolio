import React, { useState, useEffect } from 'react'
const Footer = () => {

  return (
    <div className=' dark:bg-black'>
      <div className='w-full max-w-[1440px] px-5 mx-auto py-20'>
        <div className='flex items-center justify-between mb-20'>
          <div className='flex items-center'>
            <a className='font-bold md:text-3xl text-2xl text-[#42446E] dark:text-white' href='#uy'>
              <b>Ismoiljon</b>
            </a>
          </div>
          <div className='flex items-center md:gap-10 sm:gap-5 gap-2'>
            <a className='text-lg dark:text-white' href="tel:+998932598079">
              <i className="fa-solid fa-phone fa-lg lg:hidden inline-block"></i>
              <span className='lg:block  dark:text-white hidden transition duration-300'>+998 93 259 80 79</span>
            </a>
            <a target='_blank' className='text-lg' href="mailto:yusupovismoiljon1204@gmail">
              <i className="fa-solid fa-envelope fa-lg lg:hidden inline-block"></i>
              <span className='dark:text-white lg:inline-block hidden transition duration-300'>yusupovismoiljon1204@gmail</span>
            </a>
            <div className='flex gap-5'>
              <a target='_blank' href="https://github.com/iyiy2008">
                <i className="fa-brands fa-github fa-xl dark:text-white"></i>
              </a>
              <a href="https://github.com/iyiy2008">
                <i className="fa-brands fa-telegram fa-xl dark:text-white"></i>
              </a>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <nav className='inline-block '>
            <ul className='md:flex items-center gap-5'>
              <li>
                <a className='font-medium text-xl nav-link-color dark:text-white leading-6  transition-all duration-300' href="#uy">Uy</a>
              </li>
              <li>
                <a className='font-medium text-xl nav-link-color dark:text-white leading-6  transition duration-300' href="#ha">Haqida</a>
              </li>
              <li>
                <a className='font-medium text-xl nav-link-color dark:text-white leading-6  transition duration-300' href="#te">Texnologiya</a>
              </li>
              <li>
                <a className='font-medium text-xl nav-link-color dark:text-white leading-6  transition duration-300' href="#lo">Loyihalar</a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </div>
  )
}

export default Footer;