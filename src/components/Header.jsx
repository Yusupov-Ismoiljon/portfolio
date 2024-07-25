import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialIcons from './SocialIcons';


const Header = () => {

  return (
    <div id='uy' className='py-10'>
      <div className='w-full max-w-[1440px] mx-auto px-5'>
        <div className='flex justify-between items-center'>
          <a className='font-bold md:text-3xl text-2xl text-[hsl(45,100%,72%)]' href='#uy'>
            <b>Yusupov.</b>
          </a>
          <nav className='lg:inline-block hidden'>
            <ul className='flex items-center gap-10 text-[hsl(45,100%,72%)]'>
              <li>
                <a className='font-medium text-xl leading-6 duration-300' href="#uy">Uy</a>
              </li>
              <li>
                <a className='font-medium text-xl leading-6 duration-300' href="#haqida">Haqida</a>
              </li>
              <li>
                <a className='font-medium text-xl leading-6 duration-300' href="#texnologiya">Texnologiya</a>
              </li>
              <li>
                <a className='font-medium text-xl leading-6 duration-300' href="#loyihalar">Loyihalar</a>
              </li>
            </ul>
          </nav>
          <div className='flex items-center justify-center gap-5'>
              <div>
                <SocialIcons/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;