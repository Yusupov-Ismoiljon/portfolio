import React, { useState, useEffect } from 'react';
import SocialIcons from '../components/SocialIcons'
const Footer = () => {

  return (
    <div className=' dark:bg-black'>
      <div className='w-full max-w-[1440px] px-5 mx-auto'>
        <div className='flex items-center justify-between mb-20'>
          <div className='flex items-center'>
            <a className='font-bold md:text-3xl text-2xl text-[#42446E] dark:text-white' href='#uy'>
              <b>Yusupov</b>
            </a>
          </div>
          <div>
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;