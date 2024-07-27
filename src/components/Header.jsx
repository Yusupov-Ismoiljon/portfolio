import React, { useState } from 'react';
import SocialIcons from './SocialIcons';
import { Divide as Hamburger } from 'hamburger-react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div id='uy' className='py-10'>
      <div className='w-full max-w-[1440px] mx-auto px-5'>
        <div className='flex justify-between items-center'>
          <a className='font-bold md:text-4xl text-[hsl(45,100%,72%)]' href='#uy'>
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
          <div className='text-[hsl(45,100%,72%)] lg:hidden inline-block shaw'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div
            className={`fixed -top-0 right-0 w-full h-screen lg:hidden bg-black transition-transform duration-700 ease-in-out  py-[35px] px-5 ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
              }`}
          >
            <div className='flex justify-between items-center'>
              <a className='font-bold md:text-4xl text-[hsl(45,100%,72%)]' href='#uy'>
                <b>Yusupov.</b>
              </a>
              <div className='flex justify-center items-center mx-auto'>
                <SocialIcons />
              </div>
            </div>
            <nav className='mt-10'>
              <ul className='flex flex-col gap-5 text-[hsl(45,100%,72%)]'>
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
          </div>
          <div className='flex items-center justify-center gap-5 lg:inline-block hidden'>
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
